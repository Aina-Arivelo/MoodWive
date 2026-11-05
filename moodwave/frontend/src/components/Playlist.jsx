import TrackItem from './TrackItem';

export default function Playlist({ tracks, currentIndex, onSelectTrack, onNewSelection }) {
  return (
    <div className="glass rounded-3xl p-5 md:p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-serif text-lg font-semibold text-[var(--text)]">
          Playlist
        </h3>
        <button
          onClick={onNewSelection}
          className="text-xs px-3 py-1.5 rounded-full glass hover:bg-white/10 transition"
        >
          Nouvelle sélection
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
        {tracks.length === 0 ? (
          <p className="text-sm text-[var(--text-muted)] text-center py-8">
            Choisis une humeur pour générer une playlist
          </p>
        ) : (
          tracks.map((track, index) => (
            <TrackItem
              key={track.id}
              track={track}
              isActive={index === currentIndex}
              onClick={() => onSelectTrack(index)}
            />
          ))
        )}
      </div>
    </div>
  );
}