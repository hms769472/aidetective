"use client";

import { useState, useRef, useEffect } from "react";
import { useAudio, AUDIO_TRACKS } from "./AudioProvider";

export default function AudioToggle() {
  const { enabled, isPlaying, currentTrackId, toggle, selectTrack } = useAudio();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const currentTrack =
    AUDIO_TRACKS.find((t) => t.id === currentTrackId) || AUDIO_TRACKS[0];

  return (
    <div ref={wrapRef} className="relative shrink-0">
      <div className="flex items-center">
        <button
          onClick={toggle}
          title={enabled ? "Mute music" : "Play music"}
          className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-l-md text-xs transition border ${
            enabled
              ? "bg-[#C9A227]/15 text-[#C9A227] border-[#C9A227]/40"
              : "text-[#8993A1] hover:text-[#E8EDF2] border-white/10 hover:border-white/20"
          }`}
        >
          <span className="text-sm">
            {!enabled ? "🔇" : isPlaying ? "🔊" : "⏸"}
          </span>
          <span className="hidden sm:inline font-medium">
            {enabled ? (isPlaying ? "Sound On" : "Paused") : "Sound Off"}
          </span>
        </button>

        <button
          onClick={() => setOpen((v) => !v)}
          title="Select music"
          className={`px-1.5 py-1.5 rounded-r-md text-xs transition border border-l-0 ${
            enabled
              ? "bg-[#C9A227]/15 text-[#C9A227] border-[#C9A227]/40 hover:bg-[#C9A227]/25"
              : "text-[#8993A1] hover:text-[#E8EDF2] border-white/10 hover:border-white/20"
          }`}
        >
          ▾
        </button>
      </div>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-64 rounded-md border border-white/10 bg-[#11161D] shadow-[0_10px_30px_rgba(0,0,0,0.7)] z-[100] overflow-hidden">
          <div className="px-3 py-2 border-b border-white/10 text-[10px] uppercase tracking-wider text-[#8993A1]">
            Select Music ({AUDIO_TRACKS.length})
          </div>
          <div className="max-h-64 overflow-y-auto">
            {AUDIO_TRACKS.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  selectTrack(t.id);
                  setOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-xs transition flex items-center gap-2 ${
                  t.id === currentTrackId
                    ? "bg-[#C9A227]/15 text-[#C9A227]"
                    : "text-[#E8EDF2] hover:bg-white/5"
                }`}
              >
                <span className="w-3 shrink-0">
                  {t.id === currentTrackId ? "✓" : ""}
                </span>
                <span className="truncate">{t.name}</span>
              </button>
            ))}
          </div>

          {enabled && isPlaying && (
            <div className="px-3 py-2 border-t border-white/10 text-[10px] text-[#C9A227] bg-black/30">
              ♪ {currentTrack.name}
            </div>
          )}
        </div>
      )}
    </div>
  );
}