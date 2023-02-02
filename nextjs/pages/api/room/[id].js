import Room from '../../../models/roomModel';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { id } = req.query;
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
