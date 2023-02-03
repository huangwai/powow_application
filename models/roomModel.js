import mongoose from 'mongoose';
import { messageSchema } from './messageModel';

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

module.exports = mongoose.models.Room || mongoose.model('Room', roomSchema);
