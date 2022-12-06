const mongoose = require('mongoose');
const { messageSchema } = require('./messageModel');

const roomSchema = new mongoose.Schema({
  id: {
    type: String,
    required: 'Room Id is required!'
  },
  userCount: {
    type: Number,
    required: 'User count is required!'
  },
  messages: {
    type: [messageSchema]
  }
});

module.exports = mongoose.model('Room', roomSchema);
