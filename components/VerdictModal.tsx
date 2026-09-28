"use client";

import { useState } from "react";
import type { Case, Evidence, Suspect } from "@/lib/types";

type Props = {
  caseData: Case;
  onClose: () => void;
  onSubmit: (accusedId: string, selectedEvidenceIds: string[]) => void;
};

export default function VerdictModal({ caseData, onClose, onSubmit }: Props) {
  const [accused, setAccused] = useState<string | null>(null);
  const [selected, setSelected] = useState<string[]>([]);

  const toggleEvidence = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const submit = () => {
    if (!accused || selected.length === 0) return;
    onSubmit(accused, selected);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-start sm:items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto">
      <div className="bg-[#11161D] border border-white/10 rounded-xl max-w-2xl w-full my-4 sm:my-8 p-4 sm:p-6">
        <div className="text-center mb-4 sm:mb-6">
          <div className="text-[10px] sm:text-xs tracking-[0.3em] text-[#C9A227]">
            FINAL VERDICT
          </div>
          <div className="text-xl sm:text-2xl font-bold text-[#E8EDF2] mt-1">
            Who is responsible?
          </div>
          <div className="text-xs text-[#8993A1] mt-2">
            Select the culprit and the key evidence that proves it.
          </div>
        </div>

        <div className="space-y-2 mb-4 sm:mb-6">
          <div className="text-[10px] uppercase tracking-[0.2em] text-[#C9A227] mb-1">
            1. Culprit
          </div>
          {caseData.suspects.map((s: Suspect) => (
            <label
              key={s.id}
              className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition active:scale-[0.99] ${
                accused === s.id
                  ? "border-[#C9A227] bg-[#C9A227]/10"
                  : "border-white/10 hover:border-white/30"
              }`}
            >
              <input
                type="radio"
                name="accused"
                checked={accused === s.id}
                onChange={() => setAccused(s.id)}
                className="accent-[#C9A227] w-4 h-4"
              />
              <span className="text-xl shrink-0">{s.emoji}</span>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-[#E8EDF2] truncate">{s.name}</div>
                <div className="text-xs text-[#8993A1] truncate">{s.role}</div>
              </div>
            </label>
          ))}
        </div>

        <div className="mb-4 sm:mb-6">
          <div className="text-[10px] uppercase tracking-[0.2em] text-[#C9A227] mb-2">
            2. Key Evidence ({selected.length} selected)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {caseData.evidence.map((e: Evidence) => (
              <label
                key={e.id}
                className={`flex items-center gap-2 p-2.5 rounded border cursor-pointer text-xs transition active:scale-[0.99] ${
                  selected.includes(e.id)
                    ? "border-[#C9A227] bg-[#C9A227]/10"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <input
                  type="checkbox"
                  checked={selected.includes(e.id)}
                  onChange={() => toggleEvidence(e.id)}
                  className="accent-[#C9A227] w-4 h-4 shrink-0"
                />
                <span className="shrink-0">{e.icon}</span>
                <span className="text-[#E8EDF2] truncate">{e.title}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 sticky bottom-0 sm:static bg-[#11161D] pt-3 -mx-4 sm:mx-0 px-4 sm:px-0 -mb-4 sm:mb-0 pb-4 sm:pb-0 border-t border-white/10 sm:border-0">
          <button
            onClick={onClose}
            className="order-2 sm:order-1 flex-1 py-3 rounded-lg border border-white/10 text-[#8993A1] hover:text-[#E8EDF2]"
          >
            Cancel
          </button>
          <button
            onClick={submit}
            disabled={!accused || selected.length === 0}
            className="order-1 sm:order-2 flex-1 py-3 rounded-lg bg-[#C9A227] text-black font-semibold disabled:opacity-40 active:scale-[0.99] transition"
          >
            Submit Verdict
          </button>
        </div>
      </div>
    </div>
  );
}