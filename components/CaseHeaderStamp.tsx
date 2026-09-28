"use client";

type Props = {
  caseNumber: number;
  title: string;
  difficulty: number;
  contradictions: number;
  found: number;
};

export default function CaseHeaderStamp({
  caseNumber,
  title,
  difficulty,
  contradictions,
  found,
}: Props) {
  return (
    <div className="relative">
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Case number badge — circular stamp */}
        <div className="relative shrink-0">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#C9A227]/60 flex items-center justify-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background:
                  "repeating-conic-gradient(#C9A227 0deg 6deg, transparent 6deg 12deg)",
              }}
            />
            <div className="relative text-center">
              <div className="text-[8px] uppercase tracking-wider text-[#C9A227]/80">
                CASE
              </div>
              <div className="text-base sm:text-lg font-bold text-[#C9A227] font-mono leading-none">
                {String(caseNumber).padStart(3, "0")}
              </div>
            </div>
          </div>
        </div>

        {/* Title + meta */}
        <div className="min-w-0 flex-1">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#C9A227]/80">
            Active Investigation
          </div>
          <div className="text-base sm:text-lg font-bold text-[#E8EDF2] truncate leading-tight">
            {title}
          </div>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-[10px] text-[#C9A227]">
              {"★".repeat(difficulty)}
              <span className="text-[#8993A1]/40">
                {"★".repeat(5 - difficulty)}
              </span>
            </span>
            {contradictions > 0 && (
              <span className="text-[10px] text-[#8993A1] tracking-wider">
                ⚠ {found}/{contradictions}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}