"use client";

import { useState } from "react";

type Props = {
  caseNumber: number;
  caseTitle: string;
  correct: boolean;
  timeTaken: number;
  score: number;
  accuracy: number;
  contradictionsFound: number;
  totalContradictions: number;
  evidenceFound: number;
  totalEvidence: number;
  streak: number;
};

export default function ShareResult({
  caseNumber,
  caseTitle,
  correct,
  timeTaken,
  score,
  accuracy,
  contradictionsFound,
  totalContradictions,
  evidenceFound,
  totalEvidence,
  streak,
}: Props) {
  const [copied, setCopied] = useState(false);

  const formatTimeStr = (s: number) => {
    const m = Math.floor(s / 60).toString().padStart(2, "0");
    const sec = Math.floor(s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  const buildText = () => {
    const lines = [
      "🕵️ AI DETECTIVE",
      "",
      `CASE #${String(caseNumber).padStart(3, "0")} — ${caseTitle}`,
      "",
      correct ? "✅ SOLVED" : "❌ FAILED",
      `⏱  Time: ${formatTimeStr(timeTaken)}`,
      `🎯 Score: ${score}`,
      `📊 Accuracy: ${accuracy}%`,
      `🔍 Evidence: ${evidenceFound}/${totalEvidence}`,
      totalContradictions > 0
        ? `⚠ Contradictions: ${contradictionsFound}/${totalContradictions}`
        : "",
      streak > 0 ? `🔥 Streak: ${streak} ${streak === 1 ? "day" : "days"}` : "",
      "",
      "Can you solve it faster?",
      "http://localhost:3000/play",
    ].filter(Boolean);

    return lines.join("\n");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buildText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const handleShare = async () => {
    const text = buildText();
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: `CASE #${String(caseNumber).padStart(3, "0")} — ${caseTitle}`,
          text,
        });
        return;
      } catch {}
    }
    handleCopy();
  };

  return (
    <div className="p-6 rounded-xl bg-[#11161D] border border-[#C9A227]/40">
      <div className="text-xs uppercase tracking-wider text-[#C9A227] mb-3">
        Share your result
      </div>

      <pre className="p-4 rounded-lg bg-black/40 border border-white/5 text-xs font-mono text-[#E8EDF2] whitespace-pre-wrap break-words leading-relaxed">
        {buildText()}
      </pre>

      <div className="mt-4 flex gap-3">
        <button
          onClick={handleCopy}
          className="flex-1 py-3 rounded-lg border border-white/10 text-[#E8EDF2] hover:border-[#C9A227]/50 transition text-sm font-semibold"
        >
          {copied ? "✓ Copied!" : "📋 Copy"}
        </button>
        <button
          onClick={handleShare}
          className="flex-1 py-3 rounded-lg bg-[#C9A227] text-black font-semibold hover:bg-[#d8b13a] transition text-sm"
        >
          🔗 Share
        </button>
      </div>
    </div>
  );
}