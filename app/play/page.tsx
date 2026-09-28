"use client";

import Link from "next/link";
import { getDailyCase } from "@/data/cases";
import BackButton from "@/components/BackButton";

export default function PlayPage() {
  const c = getDailyCase();
  return (
    <main className="min-h-screen bg-[#080B10] text-[#E8EDF2] px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-2xl mx-auto">
        <BackButton fallback="/daily" label="Back to Home" />

        <div className="text-xs tracking-[0.3em] text-[#C9A227]">
          TODAY&apos;S CASE
        </div>
        <div className="mt-2 text-2xl sm:text-3xl font-bold">
          CASE #{String(c.number).padStart(3, "0")}
        </div>
        <div className="text-lg sm:text-xl text-[#8993A1] mt-1">{c.title}</div>
        <div className="mt-1 text-sm text-[#C9A227]">
          Difficulty: {"⭐".repeat(c.difficulty)}
        </div>

        <div className="mt-8 p-5 sm:p-6 rounded-xl bg-[#11161D] border border-white/10">
          <p className="text-[#E8EDF2] leading-relaxed text-sm sm:text-base">
            {c.briefing}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3 text-center">
          <Stat label="Suspects" value={c.suspects.length} />
          <Stat label="Evidence" value={c.evidence.length} />
          <Stat label="Timeline" value={c.timeline.length} />
        </div>

        <Link
          href={`/case/${c.id}`}
          className="mt-8 block text-center px-6 py-4 rounded-lg bg-[#C9A227] text-black font-bold hover:bg-[#d8b13a] transition active:scale-[0.99]"
        >
          START INVESTIGATION →
        </Link>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <Link
            href="/daily"
            className="text-center py-3 rounded-lg border border-white/10 text-sm hover:border-white/30 transition"
          >
            📅 Daily Hub
          </Link>
          <Link
            href="/archive"
            className="text-center py-3 rounded-lg border border-white/10 text-sm hover:border-white/30 transition"
          >
            📂 Archive
          </Link>
        </div>
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="p-3 sm:p-4 rounded-lg bg-[#11161D] border border-white/10">
      <div className="text-xl sm:text-2xl font-bold text-[#C9A227]">{value}</div>
      <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8993A1]">
        {label}
      </div>
    </div>
  );
}