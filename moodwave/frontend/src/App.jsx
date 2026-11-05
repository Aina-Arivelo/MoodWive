import { useState, useEffect } from 'react';
import { moods } from './data/moods';
import { fetchPlaylist } from './services/api';
import { useAudioPlayer } from './hooks/useAudioPlayer';

import Header from './components/Header';
import MoodSelector from './components/MoodSelector';
import Player from './components/Player';
import Playlist from './components/Playlist';
import StatusMessage from './components/StatusMessage';
import Footer from './components/Footer';

export default function App() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  const player = useAudioPlayer();

  // Applique les couleurs de l’humeur sur :root
  useEffect(() => {
    const root = document.documentElement;
    if (selectedMood) {
      const c = selectedMood.colors;
      root.style.setProperty('--bg', c.bg);
      root.style.setProperty('--panel', c.panel);
      root.style.setProperty('--panel-border', c.border);
      root.style.setProperty('--accent', c.accent);
      root.style.setProperty('--text', c.text);
    } else {
      root.style.setProperty('--bg', '#0f172a');
      root.style.setProperty('--panel', 'rgba(255,255,255,0.08)');
      root.style.setProperty('--panel-border', 'rgba(255,255,255,0.15)');
      root.style.setProperty('--accent', '#f59e0b');
      root.style.setProperty('--text', '#f8fafc');
    }
  }, [selectedMood]);

  const handleSelectMood = async (mood) => {
    setSelectedMood(mood);
    setStatus('loading');
    setStatusMessage('Génération de ta playlist…');

    try {
      const data = await fetchPlaylist(mood.id);
      player.loadPlaylist(data.tracks);

      if (data.isDemo) {
        setStatus('demo');
        setStatusMessage('Mode démo (pas de clé Jamendo ou erreur API). Musique de démonstration.');
      } else {
        setStatus(null);
      }
    } catch (err) {
      setStatus('error');
      setStatusMessage('Impossible de charger la playlist. Réessaie.');
      console.error(err);
    }
  };

  const handleNewSelection = () => {
    if (selectedMood) handleSelectMood(selectedMood);
  };

  return (
    <div
      className="min-h-screen transition-colors duration-700"
      style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}
    >
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <Header />

        <MoodSelector
          selectedMood={selectedMood}
          onSelect={handleSelectMood}
        />

        <StatusMessage status={status} message={statusMessage} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Lecteur (gauche) */}
          <Player
            currentTrack={player.currentTrack}
            isPlaying={player.isPlaying}
            currentTime={player.currentTime}
            duration={player.duration}
            volume={player.volume}
            onTogglePlay={player.togglePlay}
            onNext={player.playNext}
            onPrev={player.playPrev}
            onSeek={player.seek}
            onVolumeChange={player.changeVolume}
          />

          {/* Playlist (droite) */}
          <Playlist
            tracks={player.playlist}
            currentIndex={player.currentTrackIndex}
            onSelectTrack={(index) => {
              player.setCurrentTrackIndex(index);
              player.play();
            }}
            onNewSelection={handleNewSelection}
          />
        </div>

        <Footer />
      </div>
    </div>
  );
}