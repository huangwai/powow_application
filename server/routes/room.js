const express = require('express');
const router = express.Router();

const Room = require('../models/roomModel');

router.get('/', (req, res) => {
  res.send('hi');
});

//gets all rooms
router.get('/all', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).send(rooms);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

//gets room messages by id
router.get('/:id', async (req, res) => {
  try {
    const room = await Room.findOne({ id: req.params.id });
    res.status(200).send(room);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Room.deleteOne({ id: req.params.id });
    res.status(200).send('200');
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.post('/:id/disconnect', async (req, res) => {
  try {
    const room = await Room.findOne({ id: req.params.id });
    if (room !== null) {
      await Room.updateOne({ id: req.params.id }, { $set: { userCount: room.userCount - 1 } });
      res.status(200).send('200');
    } else {
      res.status(500).json({ message: e.message });
    }
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
