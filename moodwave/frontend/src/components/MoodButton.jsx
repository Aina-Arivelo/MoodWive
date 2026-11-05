export default function MoodButton({ mood, isSelected, onSelect }) {
  return (
    <button
      onClick={() => onSelect(mood)}
      className={`
        group relative flex flex-col items-center justify-center
        w-full min-h-[72px] md:min-h-[88px] rounded-2xl
        glass transition-all duration-300
        hover:scale-[1.03] active:scale-[0.98]
        focus-visible:ring-2 focus-visible:ring-[var(--accent)]
        ${isSelected ? 'ring-2 ring-[var(--accent)] scale-[1.02]' : ''}
      `}
      style={{
        background: isSelected ? mood.colors.panel : undefined,
        borderColor: isSelected ? mood.colors.border : undefined,
      }}
      aria-pressed={isSelected}
    >
      <img src={mood.emoji} alt="" className="w-30 h-30" />
      <span className="text-xs md:text-sm font-medium text-[var(--text)]">
        {mood.label}
      </span>
    </button>
  );
}