import Room from '../../../models/roomModel';
//const Room = require('../../../models/roomModel');

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { id } = req.query;
      if (id === 'all') {
        const rooms = await Room.find();
        res.status(200).send(rooms);
        return;
      }
      const room = await Room.findOne({ id: id });
      res.status(200).send(room);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
  if (req.method === 'DELETE') {
    try {
      await Room.deleteOne({ id: req.params.id });
      res.status(200).send('200');
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}
