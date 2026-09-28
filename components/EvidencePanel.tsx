"use client";

import { useEffect, useState } from "react";
import type { Evidence } from "@/lib/types";
import { playPop } from "@/lib/sound";

type Props = {
  evidence: Evidence[];
  discoveredIds: Set<string>;
  selectedId: string | null;
  onSelect: (id: string) => void;
};

const TYPE_META: Record<
  string,
  { label: string; color: string; icon: string }
> = {
  cctv: { label: "CCTV", color: "#6b8eff", icon: "▶" },
  phone: { label: "PHONE", color: "#4ade80", icon: "☎" },
  bank: { label: "FINANCE", color: "#f5c542", icon: "$" },
  document: { label: "DOC", color: "#a78bfa", icon: "◆" },
  witness: { label: "WITNESS", color: "#f472b6", icon: "✦" },
};

export default function EvidencePanel({
  evidence,
  discoveredIds,
  selectedId,
  onSelect,
}: Props) {
  const [justDiscovered, setJustDiscovered] = useState<string | null>(null);

  const handleClick = (id: string) => {
    const wasDiscovered = discoveredIds.has(id);
    onSelect(id);
    if (!wasDiscovered) {
      playPop();
      setJustDiscovered(id);
    }
  };

  useEffect(() => {
    if (!justDiscovered) return;
    const t = setTimeout(() => setJustDiscovered(null), 600);
    return () => clearTimeout(t);
  }, [justDiscovered]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {evidence.map((ev, idx) => {
        const discovered = discoveredIds.has(ev.id);
        const selected = selectedId === ev.id;
        const popping = justDiscovered === ev.id;
        const meta = TYPE_META[ev.type] ?? {
          label: ev.type.toUpperCase(),
          color: "#C9A227",
          icon: "●",
        };

        return (
          <button
            key={ev.id}
            onClick={() => handleClick(ev.id)}
            style={
              popping ? { animation: "cardPop 0.5s ease-out" } : undefined
            }
            className={`group relative text-left rounded-xl transition-all duration-200 active:scale-[0.98] overflow-hidden ${
              selected
                ? "bg-gradient-to-br from-[#1a1f28] to-[#11161D] border border-[#C9A227]/70 shadow-[0_0_24px_rgba(201,162,39,0.25)]"
                : discovered
                ? "bg-gradient-to-br from-[#141a22] to-[#0e1319] border border-white/[0.12] hover:border-white/25 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.5)]"
                : "bg-gradient-to-br from-[#11161D] to-[#0a0e14] border border-white/[0.06] hover:border-white/15 hover:-translate-y-0.5"
            }`}
          >
            {/* Left accent strip — colored by type */}
            <span
              className="absolute left-0 top-0 bottom-0 w-[3px] transition-opacity"
              style={{
                background: `linear-gradient(180deg, ${meta.color} 0%, ${meta.color}80 100%)`,
                opacity: discovered ? 1 : 0.35,
              }}
            />

            {/* Corner fold (top-right) */}
            <span
              className="absolute top-0 right-0 w-6 h-6 pointer-events-none"
              style={{
                background: `linear-gradient(225deg, ${meta.color}22 0%, ${meta.color}08 45%, transparent 50%)`,
              }}
            />

            {/* Paper grain (subtle horizontal lines) */}
            <span
              className="absolute inset-0 pointer-events-none opacity-[0.035]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, #E8EDF2 0px, #E8EDF2 1px, transparent 1px, transparent 4px)",
              }}
            />

            {/* Content */}
            <div className="relative pl-5 pr-4 pt-4 pb-4">
              {/* Type badge + Evidence number row */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div
                  className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[9px] font-bold tracking-[0.15em]"
                  style={{
                    background: `${meta.color}15`,
                    color: meta.color,
                    border: `1px solid ${meta.color}35`,
                  }}
                >
                  <span className="text-[8px]">{meta.icon}</span>
                  {meta.label}
                </div>
                <div className="text-[9px] font-mono tracking-wider text-[#8993A1]/60">
                  #{String(idx + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Icon + Title */}
              <div className="flex items-start gap-3">
                <div
                  className={`shrink-0 w-11 h-11 rounded-lg flex items-center justify-center text-xl transition-all ${
                    discovered
                      ? "bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10"
                      : "bg-black/40 border border-white/5 grayscale opacity-50"
                  }`}
                >
                  {ev.icon}
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <div
                    className={`text-sm font-semibold leading-snug line-clamp-2 ${
                      discovered ? "text-[#E8EDF2]" : "text-[#8993A1]"
                    }`}
                  >
                    {ev.title}
                  </div>
                </div>
              </div>

              {/* Bottom meta row */}
              <div className="mt-3 flex items-center justify-between">
                {discovered ? (
                  <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#C9A227] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
                    Reviewed
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#8993A1]/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8993A1]/50" />
                    Unopened
                  </span>
                )}
                {ev.isKey && discovered && (
                  <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-wider text-[#C9A227] font-bold">
                    <span>★</span> KEY
                  </span>
                )}
                {ev.isKey && !discovered && (
                  <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-wider text-[#8993A1]/40">
                    <span>★</span>
                  </span>
                )}
              </div>
            </div>

            {/* Selected glow overlay */}
            {selected && (
              <span
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{
                  boxShadow:
                    "inset 0 0 24px rgba(201,162,39,0.12), inset 0 0 0 1px rgba(201,162,39,0.3)",
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}