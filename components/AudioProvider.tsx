"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";

export const AUDIO_TRACKS = [
  {
    id: "cinematic",
    name: "Cinematic Suspense",
    url: "https://cdn.pixabay.com/audio/2022/03/15/audio_086ee04aaf.mp3",
  },
  {
    id: "mystery",
    name: "Mystery Investigation",
    url: "https://cdn.pixabay.com/audio/2022/04/27/audio_67bcf729cf.mp3",
  },
  {
    id: "dark",
    name: "Dark Tension",
    url: "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3",
  },

  {
    id: "ambient1",
    name: "Ambient Atmospheric",
    url: "https://cdn.pixabay.com/download/audio/2021/06/07/audio_cdfb955189.mp3",
  },
  {
    id: "dramatic",
    name: "Dramatic Nostalgic",
    url: "https://cdn.pixabay.com/audio/2023/03/03/audio_aa1cb48174.mp3",
  },
  {
    id: "meditation",
    name: "Gentle Meditation",
    url: "https://cdn.pixabay.com/download/audio/2021/10/21/audio_8b8b6deb1f.mp3",
  },
  {
    id: "soft",
    name: "Soft Background",
    url: "https://cdn.pixabay.com/audio/2020/08/17/audio_613575b827.mp3",
  },
];

const DEFAULT_TRACK_ID = "cinematic";
const STORAGE_ENABLED = "aidetective_audio_enabled";
const STORAGE_TRACK = "aidetective_audio_track";

type AudioContextType = {
  enabled: boolean;
  isPlaying: boolean;
  currentTrackId: string;
  error: string | null;
  toggle: () => void;
  selectTrack: (id: string) => void;
};

const AudioCtx = createContext<AudioContextType>({
  enabled: false,
  isPlaying: false,
  currentTrackId: DEFAULT_TRACK_ID,
  error: null,
  toggle: () => {},
  selectTrack: () => {},
});

export function AudioProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackId, setTrackId] = useState(DEFAULT_TRACK_ID);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const errorHandlerRef = useRef<(() => void) | null>(null);
  const playHandlerRef = useRef<(() => void) | null>(null);
  const pauseHandlerRef = useRef<(() => void) | null>(null);

  // Load preferences
  useEffect(() => {
    setMounted(true);
    const savedEnabled = localStorage.getItem(STORAGE_ENABLED);
    const savedTrack = localStorage.getItem(STORAGE_TRACK) || DEFAULT_TRACK_ID;
    setEnabled(savedEnabled === "true");
    setTrackId(savedTrack);
  }, []);

  // Create audio element ONCE (never recreate)
  useEffect(() => {
    if (!mounted) return;
    if (!audioRef.current) {
      const audio = new Audio();
      audio.loop = true;
      audio.volume = 0.3;
      audio.preload = "auto";
      audio.crossOrigin = "anonymous";
      audioRef.current = audio;
    }

    return () => {
      const audio = audioRef.current;
      if (audio) {
        // Remove all listeners we added
        if (errorHandlerRef.current) audio.removeEventListener("error", errorHandlerRef.current);
        if (playHandlerRef.current) audio.removeEventListener("playing", playHandlerRef.current);
        if (pauseHandlerRef.current) audio.removeEventListener("pause", pauseHandlerRef.current);
        audio.pause();
        audio.src = "";
        audioRef.current = null;
      }
    };
  }, [mounted]);

  // Attach listeners ONCE
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !mounted) return;

    // Error handler — with false-positive guard
    const handleError = () => {
      // 🛡️ GUARD: Ignore error if audio is actually playable or currently playing
      if (audio.error) {
        // Real error code present
        const codes: Record<number, string> = {
          1: "Aborted",
          2: "Network error",
          3: "Decode error",
          4: "Format not supported",
        };
        const code = audio.error.code;
        // Only show real errors (not code 1 - aborted, which happens on src change)
        if (code !== 1) {
          console.error("[Audio] Real error:", codes[code] || "Unknown");
          setError(codes[code] || "Failed to load");
          setIsPlaying(false);
          return;
        }
      }
      // Ignore — likely from src change during load
      console.log("[Audio] Ignored transient error (src change)");
    };

    const handlePlaying = () => {
      console.log("[Audio] Playing");
      setIsPlaying(true);
      setError(null);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    errorHandlerRef.current = handleError;
    playHandlerRef.current = handlePlaying;
    pauseHandlerRef.current = handlePause;

    audio.addEventListener("error", handleError);
    audio.addEventListener("playing", handlePlaying);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("error", handleError);
      audio.removeEventListener("playing", handlePlaying);
      audio.removeEventListener("pause", handlePause);
    };
  }, [mounted]);

  // Handle track change (just change src on the same element)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !mounted) return;

    const track = AUDIO_TRACKS.find((t) => t.id === trackId) || AUDIO_TRACKS[0];
    const wasPlaying = !audio.paused;

    // Change src — this may fire a transient error event that we ignore
    audio.src = track.url;
    audio.load();

    if (enabled && (wasPlaying || isPlaying)) {
      audio.play().catch(() => {
        // Autoplay may be blocked — handled by unlock effect below
      });
    }

    console.log("[Audio] Track loaded:", track.name);
  }, [mounted, trackId, enabled, isPlaying]);

  // Handle enabled toggle
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !mounted) return;

    if (enabled) {
      const p = audio.play();
      if (p !== undefined) {
        p.then(() => {
          setIsPlaying(true);
          setError(null);
          localStorage.setItem(STORAGE_ENABLED, "true");
        }).catch((err) => {
          console.log("[Audio] Play blocked:", err.message);
          setError("Click anywhere to start");
          setIsPlaying(false);
        });
      }
    } else {
      audio.pause();
      setIsPlaying(false);
      setError(null);
      localStorage.setItem(STORAGE_ENABLED, "false");
    }
  }, [enabled, mounted]);

  // Unlock on first user interaction
  useEffect(() => {
    if (!mounted || !enabled || isPlaying) return;

    const unlock = () => {
      const audio = audioRef.current;
      if (audio) {
        audio.play().then(() => {
          setIsPlaying(true);
          setError(null);
        }).catch(() => {});
      }
      document.removeEventListener("click", unlock);
      document.removeEventListener("touchstart", unlock);
      document.removeEventListener("keydown", unlock);
    };

    document.addEventListener("click", unlock, { once: true });
    document.addEventListener("touchstart", unlock, { once: true });
    document.addEventListener("keydown", unlock, { once: true });

    return () => {
      document.removeEventListener("click", unlock);
      document.removeEventListener("touchstart", unlock);
      document.removeEventListener("keydown", unlock);
    };
  }, [mounted, enabled, isPlaying]);

  const toggle = () => setEnabled((prev) => !prev);

  const selectTrack = (id: string) => {
    setTrackId(id);
    localStorage.setItem(STORAGE_TRACK, id);
  };

  return (
    <AudioCtx.Provider
      value={{ enabled, isPlaying, currentTrackId: trackId, error, toggle, selectTrack }}
    >
      {children}
    </AudioCtx.Provider>
  );
}

export function useAudio() {
  return useContext(AudioCtx);
}