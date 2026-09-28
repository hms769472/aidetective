"use client";

import { useEffect, useState } from "react";
import type { Achievement } from "@/lib/achievements";

type Props = {
  achievements: Achievement[];
  onDone: () => void;
};

export default function AchievementToast({ achievements, onDone }: Props) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (achievements.length === 0) return;
    // Slide in
    const t1 = setTimeout(() => setVisible(true), 50);
    // Slide out after 3s
    const t2 = setTimeout(() => setVisible(false), 3200);
    // Next or done after 3.5s
    const t3 = setTimeout(() => {
      if (index + 1 < achievements.length) {
        setIndex((i) => i + 1);
      } else {
        onDone();
      }
    }, 3600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [index, achievements.length, onDone]);

  if (achievements.length === 0) return null;
  const current = achievements[index];
  if (!current) return null;

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-[60] transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-gradient-to-r from-[#C9A227] to-[#d8b13a] text-black shadow-2xl border-2 border-[#C9A227]/60 min-w-[280px] max-w-[92vw]">
        <span className="text-3xl shrink-0 animate-bounce">{current.icon}</span>
        <div className="min-w-0">
          <div className="text-[10px] uppercase tracking-widest font-bold opacity-80">
            Achievement Unlocked
          </div>
          <div className="font-bold text-base truncate">{current.label}</div>
          <div className="text-xs opacity-80 truncate">{current.description}</div>
        </div>
      </div>

      {achievements.length > 1 && (
        <div className="text-center text-[10px] text-[#8993A1] mt-2">
          {index + 1} / {achievements.length}
        </div>
      )}
    </div>
  );
}