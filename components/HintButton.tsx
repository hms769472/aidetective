"use client";

import { useState } from "react";
import type { Hint } from "@/lib/hints";

type Props = {
  hints: Hint[];
  /** Which hint levels have been used (1, 2, or 3) */
  usedLevels: number[];
  onUse: (level: number) => void;
};

export default function HintButton({ hints, usedLevels, onUse }: Props) {
  const [open, setOpen] = useState(false);
  const [confirming, setConfirming] = useState<Hint | null>(null);

  const totalPenalty = usedLevels.reduce(
    (sum, lvl) => sum + (hints.find((h) => h.level === lvl)?.cost ?? 0),
    0
  );

  const handleRequest = (hint: Hint) => {
    if (usedLevels.includes(hint.level)) return;
    setConfirming(hint);
  };

  const confirmUse = () => {
    if (!confirming) return;
    onUse(confirming.level);
    setConfirming(null);
  };

  return (
    <>
      {/* Hint toggle button */}
      <button
        data-hint-toggle
        onClick={() => setOpen((v) => !v)}
        className="w-full py-3 rounded-lg border border-[#C9A227]/40 text-[#C9A227] hover:bg-[#C9A227]/10 transition font-semibold text-sm flex items-center justify-center gap-2"
      >
        <span>💡</span>
        {open ? "Close Hints" : "Need a Hint?"}
        {totalPenalty > 0 && (
          <span className="text-[10px] text-[#8993A1]">(-{totalPenalty})</span>
        )}
      </button>

      {/* Hint panel */}
      {open && (
        <div className="mt-3 p-4 rounded-xl bg-[#11161D] border border-[#C9A227]/30 space-y-2">
          <div className="text-[10px] uppercase tracking-wider text-[#8993A1] mb-2">
            Hints (cost is deducted from final score)
          </div>

          {hints.map((h) => {
            const used = usedLevels.includes(h.level);
            return (
              <div
                key={h.level}
                className={`p-3 rounded-lg border transition ${
                  used
                    ? "bg-[#C9A227]/5 border-[#C9A227]/40"
                    : "bg-black/30 border-white/10"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold text-[#E8EDF2]">
                      Level {h.level} ·{" "}
                      <span className={used ? "text-[#C9A227]" : "text-[#8993A1]"}>
                        {used ? "Used" : `−${h.cost} pts`}
                      </span>
                    </div>
                    {used ? (
                      <div className="mt-2 text-sm text-[#E8EDF2] whitespace-pre-line leading-relaxed">
                        {h.text}
                      </div>
                    ) : (
                      <div className="mt-1 text-xs text-[#8993A1]">
                        {h.level === 1 && "General direction"}
                        {h.level === 2 && "Suspect narrowing"}
                        {h.level === 3 && "Direct reveal"}
                      </div>
                    )}
                  </div>
                  {!used && (
                    <button
                      onClick={() => handleRequest(h)}
                      className="shrink-0 px-3 py-1.5 rounded-lg bg-[#C9A227] text-black text-xs font-semibold hover:bg-[#d8b13a] transition"
                    >
                      Use
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Confirmation modal */}
      {confirming && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[70] p-4">
          <div className="bg-[#11161D] border border-[#C9A227]/40 rounded-xl max-w-md w-full p-5">
            <div className="text-xs uppercase tracking-wider text-[#C9A227] mb-2">
              Confirm Hint
            </div>
            <div className="text-sm text-[#E8EDF2] leading-relaxed">
              Use <span className="font-bold">Level {confirming.level} hint</span>?
              This will deduct{" "}
              <span className="text-[#C9A227] font-bold">−{confirming.cost} points</span>{" "}
              from your final score.
            </div>
            <div className="mt-5 flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => setConfirming(null)}
                className="order-2 sm:order-1 flex-1 py-2.5 rounded-lg border border-white/10 text-[#8993A1] hover:text-[#E8EDF2]"
              >
                Cancel
              </button>
              <button
                onClick={confirmUse}
                className="order-1 sm:order-2 flex-1 py-2.5 rounded-lg bg-[#C9A227] text-black font-semibold"
              >
                Use Hint (−{confirming.cost})
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}