"use client";
"use client";

import type { Suspect } from "@/lib/types";

type Props = {
  suspect: Suspect;
  size?: "sm" | "md" | "lg";
  selected?: boolean;
  contradicted?: boolean;
};

const SIZES = {
  sm: { box: "w-10 h-10", text: "text-lg", ring: "p-[2px]" },
  md: { box: "w-12 h-12", text: "text-2xl", ring: "p-[2px]" },
  lg: { box: "w-16 h-16", text: "text-3xl", ring: "p-[3px]" },
};

export default function SuspectAvatar({
  suspect,
  size = "md",
  selected = false,
  contradicted = false,
}: Props) {
  const s = SIZES[size];

  const ringClass = contradicted
    ? "bg-gradient-to-br from-red-500 via-[#C9A227] to-red-500 animate-pulse"
    : selected
    ? "bg-gradient-to-br from-[#C9A227] via-[#d8b13a] to-[#C9A227] animate-pulse"
    : "bg-gradient-to-br from-white/20 to-white/5";

  return (
    <div className={`relative shrink-0 ${s.ring} rounded-full ${ringClass}`}>
      <div
        className={`${s.box} rounded-full bg-[#080B10] flex items-center justify-center ${s.text} select-none`}
      >
        {suspect.emoji}
      </div>
      {contradicted && (
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center font-bold shadow-lg">
          !
        </span>
      )}
    </div>
  );
}