"use client";

import { useState } from "react";
import type { Case, Evidence, Suspect } from "@/lib/types";

type Props = {
  caseData: Case;
  onClose: () => void;
  onSubmit: (accusedId: string, selectedEvidenceIds: string[]) => void;
};

/**
 * Full-page verdict submission view.
 * Left: selection (suspects + evidence)
 * Right: case banner image (sticky)
 */
export default function VerdictView({ caseData, onClose, onSubmit }: Props) {
  const [accused, setAccused] = useState<string | null>(null);
  const [selected, setSelected] = useState<string[]>([]);

  const src = caseData.image || "/aidetect.jpeg";
  const fallback = "/aidetect.jpeg";

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
    <main className="min-h-screen bg-[#080B10] text-[#E8EDF2] flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#080B10]/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={onClose}
              className="shrink-0 w-9 h-9 rounded-lg border border-white/10 text-[#C9A227] hover:bg-[#C9A227]/10 transition flex items-center justify-center"
              title="Back"
            >
              ←
            </button>
            <div className="min-w-0">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#C9A227]">
                Submit Verdict
              </div>
              <div className="text-sm sm:text-base font-bold truncate">
                Case #{String(caseData.number).padStart(3, "0")} · {caseData.title}
              </div>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-xs text-[#8993A1]">
            <span className={accused ? "text-[#C9A227]" : ""}>
              {accused ? "1" : "0"}/1 culprit
            </span>
            <span>·</span>
            <span className={selected.length > 0 ? "text-[#C9A227]" : ""}>
              {selected.length} evidence
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT — Selection */}
        <div className="space-y-8 min-w-0">
          {/* Suspects */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-[#C9A227] text-black text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A227] font-bold">
                  Select Culprit
                </span>
              </div>
              <span className="text-[10px] text-[#8993A1]">
                {accused ? "1 selected" : "Choose one"}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {caseData.suspects.map((s: Suspect) => {
                const isSel = accused === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setAccused(s.id)}
                    className={`flex items-center gap-3 p-3 rounded-lg border text-left transition-all active:scale-[0.99] ${
                      isSel
                        ? "border-[#C9A227] bg-[#C9A227]/10 shadow-[0_0_0_1px_rgba(201,162,39,0.4)]"
                        : "border-white/10 bg-[#11161D] hover:border-white/30"
                    }`}
                  >
                    <span
                      className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                        isSel ? "border-[#C9A227] bg-[#C9A227]" : "border-white/20"
                      }`}
                    >
                      {isSel && (
                        <span className="w-2 h-2 rounded-full bg-[#080B10]" />
                      )}
                    </span>
                    <span className="text-2xl shrink-0">{s.emoji}</span>
                    <div className="min-w-0 flex-1">
                      <div
                        className={`text-sm font-semibold truncate ${
                          isSel ? "text-[#C9A227]" : "text-[#E8EDF2]"
                        }`}
                      >
                        {s.name}
                      </div>
                      <div className="text-[11px] text-[#8993A1] truncate">
                        {s.role}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Evidence */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-[#C9A227] text-black text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C9A227] font-bold">
                  Select Key Evidence
                </span>
              </div>
              <span className="text-[10px] text-[#8993A1]">
                {selected.length} selected
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {caseData.evidence.map((e: Evidence) => {
                const isSel = selected.includes(e.id);
                return (
                  <button
                    key={e.id}
                    onClick={() => toggleEvidence(e.id)}
                    className={`flex items-center gap-2 p-3 rounded-lg border text-left text-xs transition-all active:scale-[0.99] ${
                      isSel
                        ? "border-[#C9A227] bg-[#C9A227]/10"
                        : "border-white/10 bg-[#11161D] hover:border-white/30"
                    }`}
                  >
                    <span
                      className={`shrink-0 w-4 h-4 rounded border-2 flex items-center justify-center text-[9px] font-bold transition ${
                        isSel
                          ? "border-[#C9A227] bg-[#C9A227] text-black"
                          : "border-white/20"
                      }`}
                    >
                      {isSel && "✓"}
                    </span>
                    <span className="shrink-0">{e.icon}</span>
                    <span
                      className={`truncate ${
                        isSel ? "text-[#C9A227]" : "text-[#E8EDF2]"
                      }`}
                    >
                      {e.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        </div>

        {/* RIGHT — Case image (sticky) */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl overflow-hidden border border-[#C9A227]/20 bg-[#0a0e14]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={caseData.title}
              className="w-full h-auto block"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                if (!img.src.endsWith(fallback)) {
                  img.src = fallback;
                }
              }}
            />
          </div>

          {/* Case info overlay */}
          <div className="mt-4 p-4 rounded-xl bg-[#11161D] border border-white/10">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#C9A227] mb-1">
              Case #{String(caseData.number).padStart(3, "0")}
            </div>
            <div className="text-lg font-bold">{caseData.title}</div>
            <div className="text-[11px] text-[#8993A1] mt-2 leading-relaxed line-clamp-3">
              {caseData.briefing}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom action bar */}
      <div className="sticky bottom-0 z-30 border-t border-white/10 bg-[#080B10]/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div className="text-xs text-[#8993A1] text-center sm:text-left">
            {!accused
              ? "⚠ Select a culprit"
              : selected.length === 0
              ? "⚠ Select key evidence"
              : `✓ Ready — ${selected.length} evidence selected`}
          </div>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg border border-white/10 text-[#8993A1] hover:text-[#E8EDF2] hover:border-white/30 transition text-sm"
            >
              Cancel
            </button>
            <button
              onClick={submit}
              disabled={!accused || selected.length === 0}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg bg-[#C9A227] text-black font-bold disabled:opacity-40 active:scale-[0.99] transition text-sm"
            >
              Submit Verdict
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}