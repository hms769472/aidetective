"use client";

import type { Case } from "@/lib/types";

type Props = {
  caseData: Case;
};

function rand(seed: number, min: number, max: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  const n = x - Math.floor(x);
  return min + n * (max - min);
}

const NOTE_TEXTS = ["WHY?", "WHO?", "WHERE?", "CLUE", "HOW?"];

export default function DetectiveBoard({ caseData }: Props) {
  const suspects = caseData.suspects.slice(0, 6);
  const keyEvidence = caseData.evidence.filter((e) => e.isKey).slice(0, 5);

  const suspectPos = suspects.map((_, i) => ({
    x: 10 + (i % 3) * 32,
    y: 12 + Math.floor(i / 3) * 40,
  }));

  const evidencePos = keyEvidence.map((_, i) => ({
    x: 24 + (i % 3) * 26,
    y: 32 + Math.floor(i / 3) * 30,
  }));

  return (
    <div
      className="relative rounded-lg p-3 sm:p-4"
      style={{
        background:
          "linear-gradient(135deg, #3a2418 0%, #2a1a10 50%, #1e1208 100%)",
        boxShadow:
          "0 20px 60px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(201,162,39,0.15)",
      }}
    >
      <div
        className="relative w-full h-[420px] sm:h-[540px] rounded-md overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 40% 30%, #7a5a3a 0%, #5a3e22 45%, #3a2614 100%)",
          boxShadow: "inset 0 4px 20px rgba(0,0,0,0.6)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,200,120,0.4) 0.5px, transparent 1px)",
            backgroundSize: "9px 9px",
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
          }}
        />

        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          {suspectPos.map((sp, i) => {
            const ep = evidencePos[i % Math.max(evidencePos.length, 1)];
            if (!ep) return null;
            return (
              <line
                key={i}
                x1={sp.x + 8}
                y1={sp.y + 6}
                x2={ep.x + 8}
                y2={ep.y + 6}
                stroke="#8b1a1a"
                strokeWidth="0.3"
                opacity="0.85"
              />
            );
          })}
        </svg>

        {suspects.map((s, i) => {
          const pos = suspectPos[i];
          const rot = rand(i + 1, -8, 8);
          // Find real index in full suspects array for correct image naming
          const realIdx = caseData.suspects.findIndex((x) => x.id === s.id);
          const imgSrc = `/cases/case-${caseData.id}-s${realIdx + 1}.jpeg`;
          return (
            <div
              key={s.id}
              className="absolute w-20 sm:w-24"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                transform: `rotate(${rot}deg)`,
                zIndex: 10 + i,
              }}
            >
              <div
                className="bg-[#e8dcc0] p-1.5 pb-4"
                style={{
                  boxShadow: "0 4px 12px rgba(0,0,0,0.65)",
                }}
              >
                <div className="relative aspect-square bg-[#1a1410] flex items-center justify-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imgSrc}
                    alt={s.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.style.display = "none";
                      const parent = img.parentElement;
                      if (parent) {
                        const span = parent.querySelector("[data-emoji]") as HTMLElement;
                        if (span) span.style.display = "flex";
                      }
                    }}
                  />
                  <span
                    data-emoji
                    style={{ display: "none" }}
                    className="absolute inset-0 items-center justify-center text-3xl"
                  >
                    {s.emoji}
                  </span>
                </div>
                <div
                  className="mt-1 text-[8px] text-center text-[#2a1a10] font-bold truncate px-0.5"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {s.name.split(" ")[0].toUpperCase()}
                </div>
              </div>
              <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-700 shadow-[0_2px_3px_rgba(0,0,0,0.7)]" />
            </div>
          );
        })}

        {keyEvidence.map((e, i) => {
          const pos = evidencePos[i];
          const rot = rand(i + 100, -12, 12);
          const note = NOTE_TEXTS[i % NOTE_TEXTS.length];
          return (
            <div
              key={e.id}
              className="absolute w-14 sm:w-16"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                transform: `rotate(${rot}deg)`,
                zIndex: 5 + i,
              }}
            >
              <div
                className="aspect-square p-1.5 flex flex-col justify-center items-center text-center"
                style={{
                  background:
                    i % 2 === 0
                      ? "linear-gradient(135deg, #f5d76e 0%, #e6c14a 100%)"
                      : "linear-gradient(135deg, #f0e0a0 0%, #d9c07a 100%)",
                  boxShadow: "0 3px 8px rgba(0,0,0,0.55)",
                }}
              >
                <div
                  className="text-[9px] sm:text-[10px] font-bold text-[#3a2a10]"
                  style={{ fontFamily: "'Comic Sans MS', cursive" }}
                >
                  {note}
                </div>
                <div
                  className="text-[6px] text-[#5a4020] mt-0.5 leading-tight"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {e.title.split(" ")[0].toUpperCase()}
                </div>
              </div>
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-yellow-500 shadow-[0_2px_3px_rgba(0,0,0,0.6)]" />
            </div>
          );
        })}

        <div
          className="absolute left-1/2 top-1/2 w-[55%] z-20 pointer-events-none"
          style={{ transform: "translate(-50%, -50%) rotate(-2deg)" }}
        >
          <div
            className="px-3 py-2.5 text-center relative"
            style={{
              background: "linear-gradient(135deg, #e8dcc0 0%, #d4c5a0 100%)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.75)",
            }}
          >
            <span className="absolute -top-2 left-4 w-8 h-3 bg-white/30 rotate-[-8deg]" />
            <span className="absolute -top-2 right-4 w-8 h-3 bg-white/30 rotate-[6deg]" />
            <div
              className="text-[8px] tracking-[0.3em] text-[#7a1a1a] font-bold mb-1"
              style={{ fontFamily: "monospace" }}
            >
              CASE #{String(caseData.number).padStart(3, "0")}
            </div>
            <div
              className="text-xs sm:text-sm font-black text-[#2a1a10] leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {caseData.title.toUpperCase()}
            </div>
          </div>
        </div>

        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-center gap-3 text-[9px] uppercase tracking-widest z-30">
          <span className="flex items-center gap-1 text-[#C9A227]">
            <span className="w-2 h-2 bg-[#C9A227] rounded-sm" />
            Tasks
          </span>
          <span className="flex items-center gap-1 text-[#C9A227]/70">
            <span className="w-2 h-2 bg-[#C9A227]/40 rounded-sm" />
            Clues
          </span>
          <span className="flex items-center gap-1 text-[#C9A227]">
            <span className="w-2 h-2 bg-[#C9A227] rounded-sm" />
            Suspects {suspects.length}
          </span>
        </div>
      </div>
    </div>
  );
}