const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({
  user: {
    type: String
  },
  roomId: {
    type: String
  },
  message: {
    type: String
  },
  time: {
    type: String
  }
});

const Message = mongoose.model('Message', messageSchema);
module.exports = { Message, messageSchema };
