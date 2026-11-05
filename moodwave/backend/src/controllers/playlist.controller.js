import { getTracksByMood } from '../services/jamendo.service.js';

export async function getPlaylist(req, res) {
  const { mood } = req.params;

  const validMoods = ['joyeux', 'calme', 'sport', 'concentration', 'melancolique'];
  if (!validMoods.includes(mood)) {
    return res.status(400).json({ error: 'Humeur invalide' });
  }

  try {
    const result = await getTracksByMood(mood);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur' });
  }
}