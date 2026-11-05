import Vinyl from './Vinyl';
import ProgressBar from './ProgressBar';
import VolumeControl from './VolumeControl';
import pauseIcon from '../assets/icons8-pause-48.png'
import playIcon from '../assets/icons8-play-48.png'
import back from '../assets/icons8-rewind-48.png'
import next from '../assets/icons8-fast-forward-48.png'


export default function Player({
  currentTrack,
  isPlaying,
  currentTime,
  duration,
  volume,
  onTogglePlay,
  onNext,
  onPrev,
  onSeek,
  onVolumeChange,
}) {
  return (
    <div className="glass rounded-3xl p-6 md:p-8 flex flex-col items-center">
      <Vinyl
        image={currentTrack?.image}
        isPlaying={isPlaying}
        title={currentTrack?.name}
      />

      <div className="mt-6 text-center w-full">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-[var(--text)] truncate">
          {currentTrack?.name || 'Aucun titre'}
        </h2>
        <p className="text-[var(--text-muted)] text-sm mt-1 truncate">
          {currentTrack?.artist_name || 'Sélectionne une humeur'}
        </p>
      </div>

      <div className="w-full mt-6">
        <ProgressBar
          currentTime={currentTime}
          duration={duration}
          onSeek={onSeek}
        />
      </div>

      {/* Contrôles */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          onClick={onPrev}
          className="w-12 h-12 rounded-full glass flex items-center justify-center text-xl hover:scale-110 transition"
          aria-label="Titre précédent"
        >
          <img src={back} alt="" className="w-6 h-6" />
        </button>

        <button
          onClick={onTogglePlay}
          className="w-16 h-16 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-2xl shadow-lg hover:scale-105 transition"
          aria-label={isPlaying ? 'Pause' : 'Lecture'}
        >
          <img
            src={isPlaying ? pauseIcon : playIcon}
            alt=""
            className="w-6 h-6"
          />
        </button>

        <button
          onClick={onNext}
          className="w-12 h-12 rounded-full glass flex items-center justify-center text-xl hover:scale-110 transition"
          aria-label="Titre suivant"
        >
          <img src={next} alt="" className="w-6 h-6" />
        </button>
      </div>

      <div className="mt-6">
        <VolumeControl volume={volume} onChange={onVolumeChange} />
      </div>
    </div>
  );
}