"use client";

import type { TimelineEvent } from "@/lib/types";

type Props = { events: TimelineEvent[] };

export default function Timeline({ events }: Props) {
  return (
    <div className="relative pl-6">
      {/* Vertical line with gradient */}
      <div
        className="absolute left-[7px] top-2 bottom-2 w-[2px]"
        style={{
          background:
            "linear-gradient(180deg, #C9A227 0%, #C9A227 40%, rgba(201,162,39,0.2) 100%)",
        }}
      />

      <ol className="space-y-4">
        {events.map((e, i) => (
          <li key={i} className="relative group">
            {/* Node marker */}
            <span className="absolute -left-[22px] top-1 w-3 h-3 rounded-full bg-[#080B10] border-2 border-[#C9A227] z-10 flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-[#C9A227] animate-pulse" />
            </span>

            {/* Outer glow ring */}
            <span
              className="absolute -left-[26px] top-[-3px] w-7 h-7 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(201,162,39,0.2) 0%, transparent 70%)",
              }}
            />

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
              <div className="text-xs font-mono text-[#C9A227] shrink-0 tracking-wider">
                {e.time}
              </div>
              <div className="text-sm text-[#E8EDF2] leading-relaxed">
                {e.event}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}