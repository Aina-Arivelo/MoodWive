function formatTime(sec) {
  if (!sec || isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function ProgressBar({ currentTime, duration, onSeek }) {
  const progress = duration ? (currentTime / duration) * 100 : 0;

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    onSeek(percent * duration);
  };

  return (
    <div className="w-full">
      <div
        className="h-1.5 bg-white/10 rounded-full cursor-pointer group"
        onClick={handleClick}
      >
        <div
          className="h-full rounded-full bg-[var(--accent)] transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-[var(--text-muted)] mt-1.5">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}