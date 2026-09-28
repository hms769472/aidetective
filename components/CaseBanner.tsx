"use client";

import type { Case } from "@/lib/types";

type Props = {
  caseData: Case;
  variant?: "play" | "case" | "result";
};

export default function CaseBanner({ caseData, variant = "case" }: Props) {
  const src = caseData.image || "/aidetect.jpeg";
  const fallback = "/aidetect.jpeg";

  const maxHeight = {
    play: "max-h-[80vh]",
    case: "max-h-[75vh]",
    result: "max-h-[60vh]",
  }[variant];

  return (
    <div className="w-full bg-[#0a0e14] flex justify-center overflow-hidden pt-1 pb-3 sm:pt-1 sm:pb-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={caseData.title}
        className={`w-auto h-auto max-w-full ${maxHeight} object-contain block rounded-lg border border-[#C9A227]/20`}
        onError={(e) => {
          const img = e.currentTarget as HTMLImageElement;
          if (!img.src.endsWith(fallback)) {
            img.src = fallback;
          }
        }}
      />
    </div>
  );
}