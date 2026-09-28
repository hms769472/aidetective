"use client";

import Link from "next/link";

type Props = {
  /** Fallback URL (unused now — always goes home) */
  fallback?: string;
  /** Label text */
  label?: string;
};

export default function BackButton({ label = "Back to Home" }: Props) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs text-[#C9A227] border border-[#C9A227]/30 hover:bg-[#C9A227]/10 hover:border-[#C9A227]/60 transition"
      >
        ← {label}
      </Link>
    </div>
  );
}