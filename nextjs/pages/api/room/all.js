import Room from '../../../models/roomModel';

export default async function handler(req, res) {
  try {
    const rooms = await Room.find();
    res.status(200).send(rooms);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
