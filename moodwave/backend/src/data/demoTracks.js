// Pistes de démonstration (Creative Commons / libres) – utilisées si pas de clé ou erreur
export const demoTracksByMood = {
  joyeux: [
    { id: 'd1', name: 'Sunny Days', artist_name: 'Demo Artist', duration: 185, image: 'https://picsum.photos/seed/joy1/300', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
    { id: 'd2', name: 'Happy Vibes', artist_name: 'Demo Artist', duration: 210, image: 'https://picsum.photos/seed/joy2/300', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
    // ... ajoute jusqu’à 12 si tu veux
  ],
  calme: [
    { id: 'c1', name: 'Ocean Breeze', artist_name: 'Demo Artist', duration: 240, image: 'https://picsum.photos/seed/calm1/300', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
  ],
  sport: [
    { id: 's1', name: 'Power Up', artist_name: 'Demo Artist', duration: 195, image: 'https://picsum.photos/seed/sport1/300', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },
  ],
  concentration: [
    { id: 'f1', name: 'Deep Focus', artist_name: 'Demo Artist', duration: 300, image: 'https://picsum.photos/seed/focus1/300', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' },
  ],
  melancolique: [
    { id: 'm1', name: 'Rainy Thoughts', artist_name: 'Demo Artist', duration: 220, image: 'https://picsum.photos/seed/sad1/300', audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3' },
  ],
};

// Génère 12 pistes de démo pour n’importe quelle humeur
export function getDemoTracks(moodId) {
  const base = demoTracksByMood[moodId] || demoTracksByMood.joyeux;
  const tracks = [];
  for (let i = 0; i < 12; i++) {
    const t = base[i % base.length];
    tracks.push({
      ...t,
      id: `${moodId}-${i}`,
      name: `${t.name} ${i + 1}`,
    });
  }
  return tracks;
}