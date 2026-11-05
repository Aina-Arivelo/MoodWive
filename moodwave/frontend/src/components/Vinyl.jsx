import note from '../assets/icons8-music-note-48.png'

export default function Vinyl({ image, isPlaying, title }) {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
      {/* Disque */}
      <div
        className={`
          absolute inset-0 rounded-full
          bg-gradient-to-br from-zinc-800 to-zinc-950
          shadow-2xl border-4 border-zinc-700
          ${isPlaying ? 'animate-spin-slow' : ''}
        `}
      >
        {/* Rainures */}
        <div className="absolute inset-4 rounded-full border border-zinc-600/40" />
        <div className="absolute inset-8 rounded-full border border-zinc-600/30" />
        <div className="absolute inset-12 rounded-full border border-zinc-600/20" />

        {/* Centre (pochette) */}
        <div className="absolute inset-[28%] rounded-full overflow-hidden bg-zinc-900 border-2 border-zinc-600">
          {image ? (
            <img
              src={image}
              alt={title || 'Pochette'}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl opacity-40">
              <img src={note} alt="" className="w-10 h-10" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}