"use client";

type Props = {
  text: string;
  variant: "success" | "fail";
};

export default function ResultStamp({ text, variant }: Props) {
  const color = variant === "success" ? "#22c55e" : "#ef4444";
  const glow = variant === "success" ? "rgba(34,197,94,0.4)" : "rgba(239,68,68,0.4)";

  return (
    <div className="relative inline-block mb-2 select-none" style={{ transform: "rotate(-6deg)" }}>
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-lg blur-xl opacity-60"
        style={{ background: glow }}
      />
      <div
        className="relative px-6 py-2.5 rounded-lg border-[3px] font-black uppercase tracking-[0.25em] text-xl sm:text-2xl"
        style={{
          color,
          borderColor: color,
          background: "rgba(8,11,16,0.6)",
          boxShadow: `0 0 0 2px ${color}22, inset 0 0 20px ${color}15`,
          animation: "stampIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both",
        }}
      >
        {text}
      </div>
    </div>
  );
}