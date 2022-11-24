const express = require('express');
const router = express.Router();

const Room = require('../models/roomModel');

router.get('/', (req, res) => {
  res.send('hi');
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

module.exports = router;
