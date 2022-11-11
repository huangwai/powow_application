const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: 'Name is required!'
    }
  },
  {
    timestamps: true
  }
);

const chatroomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name is required!'
  }
});

const messageSchema = new mongoose.Schema({
  chatroom: {
    type: mongoose.Types.ObjectId,
    required: 'Chatroom is required!'
  },
  user: {
    type: mongoose.Types.ObjectId,
    required: 'User is required!',
    ref: 'User'
  },
  message: {
    type: String,
    required: 'Message is required!'
  }
});
module.exports = mongoose.model('User', userSchema);
module.exports = mongoose.model('Chatroom', chatroomSchema);
module.exports = mongoose.model('Message', messageSchema);
