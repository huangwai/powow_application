const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');
const { Server } = require('socket.io');
const { Message } = require('./models/messageModel');
const Room = require('./models/roomModel');
const roomRouter = require('./routes/room');

const app = express();

require('dotenv').config();
require('./models/roomModel');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/room', roomRouter);

const server = http.createServer(app);

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log(`Connected to MongoDB at ${process.env.MONGO_DB}`))
  .catch(error => console.log(error));

const io = new Server(server, {
  cors: {
    // react front end must run on port 3000
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    methods: ['GET', 'POST']
  }
});

//listening to connection
io.on('connection', socket => {
  console.log(`Connected: ${socket.id}`);

  //join room based on id
  socket.on('joinRoom', roomId => {
    socket.join(roomId);
    console.log(`User ${socket.id} joined room ${roomId}`);
  });

  //send message
  socket.on('sendMessage', async msgData => {
    //sendMessage(msgData, socket);
    try {
      const msg = new Message({
        user: msgData.user,
        roomId: msgData.room,
        message: msgData.message,
        time: msgData.time
      });
      // creates new message object
      await Message.create(msg);

      const room = await Room.findOne({ id: msgData.room });
      // creates room if does not exist
      if (room === null) {
        console.log('creating room', msgData.room);
        const newRoom = new Room({
          id: msgData.room,
          messages: [msg]
        });
        await Room.create(newRoom);
      }
      // adds new message to list and updates message list
      else {
        console.log('room exists', msgData.room);
        room.messages.push(msg);
        await Room.updateOne({ id: msgData.room }, { $set: { messages: room.messages } });
      }
      //emit message to everyone listening in same room
      socket.to(msgData.room).emit('receivedMessage', msgData);
      console.log(`sent message ${JSON.stringify(msgData)}`);
    } catch (e) {
      console.log(e);
    }
  });
  //disconnect socket
  socket.on('disconnect', () => {
    console.log(`Disconnected: ${socket.id}`);
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
