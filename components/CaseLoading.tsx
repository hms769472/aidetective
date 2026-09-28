"use client";

export default function CaseLoading() {
  return (
    <div className="min-h-screen bg-[#080B10] text-[#E8EDF2] p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header skeleton */}
        <div className="flex items-center gap-4 animate-pulse">
          <div className="w-16 h-16 rounded-full bg-white/5" />
          <div className="flex-1 space-y-2">
            <div className="h-2 w-24 rounded bg-white/5" />
            <div className="h-5 w-2/3 rounded bg-white/5" />
          </div>
        </div>

        {/* Loading text */}
        <div className="text-center py-4">
          <div className="inline-flex items-center gap-2 text-[#C9A227] text-xs tracking-[0.3em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-pulse" />
            Loading Case File
          </div>
        </div>

        {/* Cards skeleton grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-28 rounded-lg bg-gradient-to-br from-[#11161D] to-[#0d1219] border border-white/5 animate-pulse"
              style={{ animationDelay: `${i * 80}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}