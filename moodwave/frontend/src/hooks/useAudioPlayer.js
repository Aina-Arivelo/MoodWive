import { useState, useRef, useEffect, useCallback } from 'react';

export function useAudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [playlist, setPlaylist] = useState([]);

  // Crée l’élément audio une seule fois
  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = volume;

    const audio = audioRef.current;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration || 0);
    const onEnded = () => playNext();

    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('ended', onEnded);
    };
  }, []);

  // Change de piste
  useEffect(() => {
    if (!playlist.length || !audioRef.current) return;

    const track = playlist[currentTrackIndex];
    if (!track) return;

    audioRef.current.src = track.audio;
    audioRef.current.load();

    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [currentTrackIndex, playlist]);

  const play = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, []);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) pause();
    else play();
  }, [isPlaying, play, pause]);

  const playNext = useCallback(() => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  }, [playlist.length]);

  const playPrev = useCallback(() => {
    setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  }, [playlist.length]);

  const seek = useCallback((time) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  }, []);

  const changeVolume = useCallback((v) => {
    const vol = Math.max(0, Math.min(1, v));
    setVolume(vol);
    if (audioRef.current) audioRef.current.volume = vol;
  }, []);

  const loadPlaylist = useCallback((tracks) => {
    setPlaylist(tracks);
    setCurrentTrackIndex(0);
    setIsPlaying(false);
    setCurrentTime(0);
  }, []);

  return {
    isPlaying,
    currentTime,
    duration,
    volume,
    currentTrackIndex,
    playlist,
    currentTrack: playlist[currentTrackIndex] || null,
    play,
    pause,
    togglePlay,
    playNext,
    playPrev,
    seek,
    changeVolume,
    loadPlaylist,
    setCurrentTrackIndex,
  };
}