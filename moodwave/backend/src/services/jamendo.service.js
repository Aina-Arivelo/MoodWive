import axios from 'axios';
import { JAMENDO_BASE, CLIENT_ID } from '../config/jamendo.js';
import { getDemoTracks } from '../data/demoTracks.js';
import { moods } from '../../../frontend/src/data/moods.js'; // ou copie les tags ici

// On mappe les ids vers les tags (évite d’importer le frontend)
const moodTags = {
  joyeux: 'happy+upbeat+fun',
  calme: 'calm+relaxing+ambient',
  sport: 'energetic+sport+upbeat',
  concentration: 'focus+study+instrumental',
  melancolique: 'melancholic+sad+emotional',
};

export async function getTracksByMood(moodId) {
  if (!CLIENT_ID) {
    return { tracks: getDemoTracks(moodId), isDemo: true };
  }

  const fuzzytags = moodTags[moodId] || 'happy';

  try {
    const params = {
      client_id: CLIENT_ID,
      format: 'json',
      limit: 12,
      fuzzytags,
      include: 'musicinfo',
      audioformat: 'mp32',
    };

    const { data } = await axios.get(`${JAMENDO_BASE}/tracks/`, { params });

    if (!data.results || data.results.length === 0) {
      return { tracks: getDemoTracks(moodId), isDemo: true };
    }

    const tracks = data.results.map((t) => ({
      id: t.id,
      name: t.name,
      artist_name: t.artist_name,
      duration: t.duration,
      image: t.image || t.album_image,
      audio: t.audio,
    }));

    return { tracks, isDemo: false };
  } catch (error) {
    console.error('Jamendo error:', error.message);
    return { tracks: getDemoTracks(moodId), isDemo: true };
  }
}