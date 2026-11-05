import volume_i from '../assets/icons8-audio-48.png'

export default function VolumeControl({ volume, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm opacity-70">
        <img src={volume_i} alt="" className="w-10 h-10" />
      </span>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-24 h-1 accent-[var(--accent)] cursor-pointer"
        aria-label="Volume"
      />
    </div>
  );
}