"use client";

import type { Suspect } from "@/lib/types";
import { playTick } from "@/lib/sound";
import SuspectAvatar from "./SuspectAvatar";

type Props = {
  suspect: Suspect;
  selected: boolean;
  contradicted?: boolean;
  onClick: () => void;
};

export default function SuspectCard({
  suspect,
  selected,
  contradicted = false,
  onClick,
}: Props) {
  return (
    <button
      onClick={() => {
        playTick();
        onClick();
      }}
      className={`group relative w-full text-left rounded-xl border p-3 transition-all duration-200 active:scale-[0.98] overflow-hidden ${
        selected
          ? "border-[#C9A227] bg-gradient-to-br from-[#C9A227]/15 to-[#C9A227]/5 shadow-[0_0_20px_rgba(201,162,39,0.25)]"
          : "border-white/10 bg-gradient-to-br from-[#11161D] to-[#0d1219] hover:border-white/30 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
      }`}
    >
      {/* Selected left accent bar */}
      {selected && (
        <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#C9A227] to-[#d8b13a]" />
      )}

      {/* Subtle diagonal shine on hover */}
      <span className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="flex items-center gap-3 relative">
        <SuspectAvatar
          suspect={suspect}
          size="md"
          selected={selected}
          contradicted={contradicted}
        />
        <div className="min-w-0 flex-1">
          <div
            className={`text-sm font-semibold truncate ${
              selected ? "text-[#C9A227]" : "text-[#E8EDF2]"
            }`}
          >
            {suspect.name}
          </div>
          <div className="text-[11px] text-[#8993A1] truncate tracking-wide">
            {suspect.role}
          </div>
        </div>
      </div>
    </button>
  );
}