const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const http = require('http');
const { Server } = require('socket.io');
const app = express();

require('dotenv').config();
require('./models');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);
/** 
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log(`Connected to MongoDB at ${process.env.MONGO_URL}`);
  });
*/
const io = new Server(server, {
  cors: {
    // react front end must run on port 3000
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

//listening to connection
io.on('connection', (socket) => {
  console.log(`Connected: ${socket.id}`);

  //join room based on id
  socket.on('joinRoom', (roomId) => {
    socket.join(roomId);
    console.log(`User ${socket.id} joined room ${roomId}`);
  });
  //send message
  socket.on('sendMessage', (msgData) => {
    //emit message to everyone listening in same room
    socket.to(msgData.room).emit('receivedMessage', msgData);
    console.log(`sent message ${JSON.stringify(msgData)}`);
  });
  //disconnect socket
  socket.on('disconnect', () => {
    console.log(`Disconnected: ${socket.id}`);
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
