function formatDuration(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function TrackItem({ track, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left
        transition-all duration-200
        ${isActive
          ? 'bg-[var(--accent)]/20 border border-[var(--accent)]/40'
          : 'hover:bg-white/5 border border-transparent'}
      `}
    >
      <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/10 flex-shrink-0">
        {track.image ? (
          <img src={track.image} alt="" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-sm">🎵</div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium truncate ${isActive ? 'text-[var(--accent)]' : 'text-[var(--text)]'}`}>
          {track.name}
        </p>
        <p className="text-xs text-[var(--text-muted)] truncate">{track.artist_name}</p>
      </div>

      <span className="text-xs text-[var(--text-muted)] flex-shrink-0">
        {formatDuration(track.duration)}
      </span>
    </button>
  );
}