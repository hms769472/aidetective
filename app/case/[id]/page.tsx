"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getCaseByIdClient } from "@/lib/userCases";
import type { Case } from "@/lib/types";
import { getContradictions } from "@/data/contradictions";
import { getInterrogation } from "@/data/interrogations";
import SuspectCard from "@/components/SuspectCard";
import EvidencePanel from "@/components/EvidencePanel";
import Timeline from "@/components/Timeline";
import VerdictModal from "@/components/VerdictModal";
import ShareResult from "@/components/ShareResult";
import AchievementToast from "@/components/AchievementToast";
import InterrogationChat from "@/components/InterrogationChat";
import HintButton from "@/components/HintButton";
import Confetti from "@/components/Confetti";
import CaseBanner from "@/components/CaseBanner";
import VerdictView from "@/components/VerdictView";
import DetectiveBoard from "@/components/DetectiveBoard";
import { getHints } from "@/lib/hints";
import { getNewlyUnlocked, type Achievement } from "@/lib/achievements";
import { calculateScore, formatTime } from "@/lib/scoring";
import { recordAttempt, getUserStats } from "@/lib/storage";
import {
  playClick,
  playTick,
  playPop,
  playSuccess,
  playError,
  playAchievement,
} from "@/lib/sound";

type MobileTab = "suspects" | "evidence" | "interrogate" | "timeline";

export default function CasePage() {
  const params = useParams<{ id: string }>();
  const [caseData, setCaseData] = useState<Case | null | undefined>(undefined);

  useEffect(() => {
    if (!params?.id) return;
    setCaseData(getCaseByIdClient(params.id) ?? null);
  }, [params?.id]);

  const contradictions = caseData ? getContradictions(caseData.id) : [];
  const allHints = caseData ? getHints(caseData) : [];

  const [startTime] = useState(() => Date.now());
  const [elapsed, setElapsed] = useState(0);
  const [selectedSuspect, setSelectedSuspect] = useState<string | null>(null);
  const [selectedEvidence, setSelectedEvidence] = useState<string | null>(null);
  const [discovered, setDiscovered] = useState<Set<string>>(new Set());
  const [found, setFound] = useState<Set<string>>(new Set());
  const [toast, setToast] = useState<string | null>(null);
  const [showVerdict, setShowVerdict] = useState(false);
  const [streak, setStreak] = useState(0);
  const [usedHints, setUsedHints] = useState<number[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [unlockedAchievements, setUnlockedAchievements] = useState<Achievement[]>([]);
  const [mobileTab, setMobileTab] = useState<MobileTab>("suspects");

  const [result, setResult] = useState<null | {
    correctCulprit: boolean;
    correctMotive: boolean;
    score: number;
    breakdown: { label: string; value: number }[];
    timeTaken: number;
    contradictionsFound: number;
  }>(null);

  useEffect(() => {
    const t = setInterval(
      () => setElapsed(Math.floor((Date.now() - startTime) / 1000)),
      1000
    );
    return () => clearInterval(t);
  }, [startTime]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(t);
  }, [toast]);

  // Keyboard shortcuts
  useEffect(() => {
    if (!caseData) return;
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isInput =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;

      if (e.key === "Escape" && showVerdict) {
        setShowVerdict(false);
        return;
      }
      if (isInput) return;

      if (/^[1-5]$/.test(e.key) && !showVerdict && !result) {
        const idx = parseInt(e.key, 10) - 1;
        const s = caseData.suspects[idx];
        if (s) {
          playTick();
          setSelectedSuspect(s.id);
        }
        return;
      }

      if (e.key.toLowerCase() === "v" && !showVerdict && !result) {
        playClick();
        setShowVerdict(true);
        return;
      }

      if (e.key.toLowerCase() === "h" && !result) {
        const hintBtn = document.querySelector<HTMLButtonElement>(
          "[data-hint-toggle]"
        );
        hintBtn?.click();
        hintBtn?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [caseData, showVerdict, result]);

  const selectedEv = useMemo(
    () => caseData?.evidence.find((e) => e.id === selectedEvidence) ?? null,
    [caseData, selectedEvidence]
  );
  const selectedSusp = useMemo(
    () => caseData?.suspects.find((s) => s.id === selectedSuspect) ?? null,
    [caseData, selectedSuspect]
  );

  if (caseData === undefined) {
    return (
      <main className="min-h-screen bg-[#080B10] text-[#E8EDF2] flex items-center justify-center">
        <div className="text-[#8993A1]">Loading case...</div>
      </main>
    );
  }

  if (!caseData) {
    return (
      <main className="min-h-screen bg-[#080B10] text-[#E8EDF2] flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl">Case not found</div>
          <Link href="/play" className="text-[#C9A227] underline mt-4 inline-block">
            Back to Homepage
          </Link>
        </div>
      </main>
    );
  }

  const contradictionKey = (c: { suspectId: string; evidenceId: string }) =>
    `${c.suspectId}::${c.evidenceId}`;

  const handleSelectEvidence = (id: string) => {
    setSelectedEvidence(id);
    setDiscovered((prev) => new Set(prev).add(id));
  };

  const canMarkContradiction = (() => {
    if (!selectedSuspect || !selectedEvidence) return false;
    const key = `${selectedSuspect}::${selectedEvidence}`;
    const match = contradictions.find((c) => contradictionKey(c) === key);
    return !!match && !found.has(key);
  })();

  const handleMarkContradiction = () => {
    if (!selectedSuspect || !selectedEvidence) return;
    const key = `${selectedSuspect}::${selectedEvidence}`;
    const match = contradictions.find((c) => contradictionKey(c) === key);
    if (!match) return;
    playPop();
    setFound((prev) => new Set(prev).add(key));
    setToast(`Contradiction found: ${match.explanation}`);
  };

  const handleVerdictSubmit = (
    accusedId: string,
    selectedEvidenceIds: string[]
  ) => {
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    const correctCulprit = accusedId === caseData.solution.culpritId;
    const keySelected = selectedEvidenceIds.filter((id) =>
      caseData.solution.keyEvidenceIds.includes(id)
    ).length;
    const isMotiveCorrect = correctCulprit && keySelected >= 3;

    const hintPenalty = usedHints.reduce(
      (sum, lvl) => sum + (allHints.find((h) => h.level === lvl)?.cost ?? 0),
      0
    );

    const { total, breakdown } = calculateScore({
      isCulpritCorrect: correctCulprit,
      isMotiveCorrect,
      selectedEvidenceIds,
      keyEvidenceIds: caseData.solution.keyEvidenceIds,
      discoveredEvidenceCount: discovered.size,
      totalEvidenceCount: caseData.evidence.length,
      contradictionsFound: found.size,
      totalContradictions: contradictions.length,
      hintPenalty,
      secondsTaken: timeTaken,
    });

    if (correctCulprit) {
      playSuccess();
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
    } else {
      playError();
    }

    const beforeStats = getUserStats();
    const updated = recordAttempt({
      caseId: caseData.id,
      correct: correctCulprit,
      score: total,
      seconds: timeTaken,
    });
    setStreak(updated.currentStreak);

    const newlyUnlocked = getNewlyUnlocked(beforeStats, updated);
    if (newlyUnlocked.length > 0) {
      setUnlockedAchievements(newlyUnlocked);
      setTimeout(() => playAchievement(), 800);
    }

    setResult({
      correctCulprit,
      correctMotive: isMotiveCorrect,
      score: total,
      breakdown,
      timeTaken,
      contradictionsFound: found.size,
    });
    setShowVerdict(false);
  };

  // ---------------- VERDICT VIEW (full page) ----------------
  if (showVerdict) {
    return (
      <VerdictView
        caseData={caseData}
        onClose={() => setShowVerdict(false)}
        onSubmit={handleVerdictSubmit}
      />
    );
  }

  // ---------------- RESULT SCREEN ----------------
  if (result) {
    return (
      <main className="min-h-screen bg-[#080B10] text-[#E8EDF2] px-4 sm:px-6 py-8 sm:py-12">
        <Confetti active={showConfetti} />
        <div className="max-w-2xl mx-auto animate-fadeIn">
          <div className="text-center">
            <div className="text-xs tracking-[0.4em] text-[#C9A227]">
              CASE {result.correctCulprit ? "SOLVED" : "FAILED"}
            </div>
            <div className="text-3xl sm:text-4xl font-bold mt-2">
              {result.correctCulprit ? "Correct" : "Wrong Accusation"}
            </div>
            {(() => {
              const culprit = caseData.suspects.find(
                (s) => s.id === caseData.solution.culpritId
              );
              const culpritIdx = caseData.suspects.findIndex(
                (s) => s.id === caseData.solution.culpritId
              );
              const imgSrc = `/cases/case-${caseData.id}-s${culpritIdx + 1}.jpeg`;
              return (
                <div className="mt-8 flex flex-col items-center gap-5">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-px bg-red-500/60" />
                    <div className="text-[11px] uppercase tracking-[0.4em] text-red-500 font-bold">
                      The Culprit
                    </div>
                    <span className="w-8 h-px bg-red-500/60" />
                  </div>
                  <div
                    className="relative w-44 h-52 sm:w-56 sm:h-64 rounded-lg overflow-hidden border-2 border-red-500/60 bg-[#0a0e14] flex items-center justify-center"
                    style={{
                      boxShadow:
                        "0 0 60px rgba(220,38,38,0.35), inset 0 0 40px rgba(220,38,38,0.15), 0 20px 60px rgba(0,0,0,0.8)",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imgSrc}
                      alt={culprit?.name ?? "Culprit"}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement;
                        img.style.display = "none";
                        const parent = img.parentElement;
                        if (parent) {
                          const span = parent.querySelector("[data-fallback]") as HTMLElement;
                          if (span) span.style.display = "flex";
                        }
                      }}
                    />
                    <span
                      data-fallback
                      style={{ display: "none" }}
                      className="absolute inset-0 items-center justify-center text-7xl"
                    >
                      {culprit?.emoji ?? "❓"}
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-[#E8EDF2]">
                      {culprit?.name}
                    </div>
                    <div className="text-xs uppercase tracking-[0.2em] text-[#C9A227] mt-1">
                      {culprit?.role}
                    </div>
                  </div>
                </div>
              );
            })()}
            {result.correctCulprit && streak > 0 && (
              <div className="mt-3 text-sm text-[#C9A227]">
                Streak: {streak} {streak === 1 ? "day" : "days"}
              </div>
            )}
          </div>

          <div className="mt-8 p-5 sm:p-6 rounded-xl bg-[#11161D] border border-white/10">
            <div className="text-xs uppercase tracking-wider text-[#8993A1]">
              Motive
            </div>
            <p className="mt-2 text-[#E8EDF2] leading-relaxed text-sm sm:text-base">
              {caseData.solution.motive}
            </p>
          </div>

          <div className="mt-6 p-5 sm:p-6 rounded-xl bg-[#11161D] border border-white/10">
            <div className="text-xs uppercase tracking-wider text-[#8993A1]">
              Score Breakdown
            </div>
            <div className="mt-3 space-y-2">
              {result.breakdown.map((b, i) => (
                <div key={i} className="flex justify-between text-sm gap-3">
                  <span className="text-[#8993A1] min-w-0">{b.label}</span>
                  <span
                    className={`shrink-0 ${
                      b.value >= 0 ? "text-[#C9A227]" : "text-red-400"
                    }`}
                  >
                    {b.value > 0 ? "+" : ""}
                    {b.value}
                  </span>
                </div>
              ))}
              <div className="border-t border-white/10 pt-3 flex justify-between font-bold">
                <span>Total</span>
                <span className="text-[#C9A227]">{result.score}</span>
              </div>
            </div>
          </div>

          {contradictions.length > 0 && (
            <div className="mt-6 p-5 sm:p-6 rounded-xl bg-[#11161D] border border-white/10">
              <div className="text-xs uppercase tracking-wider text-[#8993A1]">
                Contradictions ({result.contradictionsFound}/
                {contradictions.length})
              </div>
              <div className="mt-3 space-y-2">
                {contradictions.map((c) => {
                  const key = `${c.suspectId}::${c.evidenceId}`;
                  const wasFound = found.has(key);
                  const suspect = caseData.suspects.find(
                    (s) => s.id === c.suspectId
                  );
                  return (
                    <div key={key} className="text-sm">
                      <span
                        className={
                          wasFound ? "text-[#C9A227]" : "text-[#8993A1]"
                        }
                      >
                        {wasFound ? "✓" : "✗"}{" "}
                        <span className="font-semibold">{suspect?.name}</span>
                        {" — "}
                        <span
                          className={
                            wasFound ? "text-[#E8EDF2]" : "text-[#8993A1]"
                          }
                        >
                          {c.explanation}
                        </span>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Case Board Recap */}
          <div className="mt-8">
            <div className="text-xs uppercase tracking-wider text-[#8993A1] mb-3">
              Case Board Recap
            </div>
            <DetectiveBoard caseData={caseData} />
          </div>

          <div className="mt-6">
            <ShareResult
              caseNumber={caseData.number}
              caseTitle={caseData.title}
              correct={result.correctCulprit}
              timeTaken={result.timeTaken}
              score={result.score}
              accuracy={Math.round(
                (discovered.size / Math.max(caseData.evidence.length, 1)) * 100
              )}
              contradictionsFound={result.contradictionsFound}
              totalContradictions={contradictions.length}
              evidenceFound={discovered.size}
              totalEvidence={caseData.evidence.length}
              streak={streak}
            />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/play"
              className="flex-1 text-center py-3 rounded-lg border border-white/10 hover:border-white/30"
            >
              Back to Homepage
            </Link>
            <Link
              href="/profile"
              className="flex-1 text-center py-3 rounded-lg bg-[#C9A227] text-black font-semibold"
            >
              View Profile
            </Link>
          </div>
        </div>

        {unlockedAchievements.length > 0 && (
          <AchievementToast
            achievements={unlockedAchievements}
            onDone={() => setUnlockedAchievements([])}
          />
        )}
      </main>
    );
  }

  const isSuspectContradicted = (suspectId: string) =>
    contradictions.some(
      (c) => c.suspectId === suspectId && found.has(contradictionKey(c))
    );

  // ---------------- INVESTIGATION BOARD ----------------
  return (
    <main className="min-h-screen bg-[#080B10] text-[#E8EDF2] pb-24 lg:pb-0">
      <header className="border-b border-white/10 sticky top-0 bg-[#080B10]/95 backdrop-blur z-30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => {
                if (typeof window !== "undefined" && window.history.length > 1) {
                  window.history.back();
                } else {
                  window.location.href = "/";
                }
              }}
              className="shrink-0 w-9 h-9 rounded-lg border border-white/10 text-[#C9A227] hover:bg-[#C9A227]/10 transition flex items-center justify-center text-lg"
              title="Go back"
            >
              ←
            </button>
            <div className="min-w-0">
              <div className="text-xs text-[#8993A1]">
                CASE #{String(caseData.number).padStart(3, "0")}
              </div>
              <div className="text-base sm:text-lg font-bold truncate">
                {caseData.title}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="text-right">
              <div className="text-[10px] text-[#8993A1]">CONTR.</div>
              <div className="text-sm sm:text-lg font-mono text-[#C9A227]">
                {found.size}/{contradictions.length}
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] text-[#8993A1]">TIME</div>
              <div className="text-sm sm:text-lg font-mono text-[#C9A227]">
                {formatTime(elapsed)}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile tabs */}
      <nav className="lg:hidden border-b border-white/10 sticky top-[57px] bg-[#080B10]/95 backdrop-blur z-20">
        <div className="flex">
          {(["suspects", "evidence", "interrogate", "timeline"] as const).map(
            (tab) => (
              <button
                key={tab}
                onClick={() => {
                  playTick();
                  setMobileTab(tab);
                }}
                className={`flex-1 py-3 text-[10px] sm:text-xs uppercase tracking-wider font-semibold transition border-b-2 ${
                  mobileTab === tab
                    ? "text-[#C9A227] border-[#C9A227]"
                    : "text-[#8993A1] border-transparent"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>
      </nav>

      {/* Case banner */}
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <CaseBanner caseData={caseData} variant="case" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
        {/* Sidebar */}
        <aside
          className={`space-y-2 ${
            mobileTab === "suspects" ? "" : "hidden"
          } lg:block`}
        >
          <div className="text-xs uppercase tracking-wider text-[#8993A1] mb-2">
            Suspects
          </div>
          {caseData.suspects.map((s) => (
            <div key={s.id} className="relative">
              <SuspectCard
                suspect={s}
                selected={selectedSuspect === s.id}
                onClick={() => setSelectedSuspect(s.id)}
              />
              {isSuspectContradicted(s.id) && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#C9A227] text-black text-xs flex items-center justify-center font-bold">
                  !
                </span>
              )}
            </div>
          ))}

          {selectedSusp && (
            <div className="mt-4 p-4 rounded-xl bg-[#11161D] border border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{selectedSusp.emoji}</span>
                <div className="min-w-0">
                  <div className="font-bold text-sm">{selectedSusp.name}</div>
                  <div className="text-xs text-[#8993A1]">
                    {selectedSusp.role}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-xs text-[#8993A1]">
                {selectedSusp.description}
              </p>
              <div className="mt-3 p-3 rounded-lg bg-black/30 border border-white/5">
                <div className="text-[10px] uppercase tracking-wider text-[#C9A227]">
                  Statement
                </div>
                <div className="text-xs mt-1 italic">
                  &ldquo;{selectedSusp.statement}&rdquo;
                </div>
              </div>
            </div>
          )}
        </aside>

        {/* Main content */}
        <section className="space-y-6 min-w-0">
          {mobileTab === "evidence" && selectedSusp && (
            <div className="lg:hidden p-4 rounded-xl bg-[#11161D] border border-white/10">
              <div className="text-[10px] uppercase tracking-wider text-[#C9A227] mb-2">
                Investigating
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">{selectedSusp.emoji}</span>
                <div className="text-sm font-semibold">
                  {selectedSusp.name}
                </div>
              </div>
            </div>
          )}

          {/* Evidence board */}
          <div className={mobileTab === "evidence" ? "" : "hidden lg:block"}>
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs uppercase tracking-wider text-[#8993A1]">
                Evidence Board
              </div>
              <div className="text-xs text-[#C9A227]">
                Discovered: {discovered.size}/{caseData.evidence.length}
              </div>
            </div>
            <EvidencePanel
              evidence={caseData.evidence}
              discoveredIds={discovered}
              selectedId={selectedEvidence}
              onSelect={handleSelectEvidence}
            />
          </div>

          {/* Contradiction button */}
          {selectedEv && selectedSusp && (
            <div
              className={`${
                mobileTab === "evidence" ? "" : "hidden lg:block"
              } p-4 rounded-xl bg-[#11161D] border border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3`}
            >
              <div className="text-sm text-[#8993A1] min-w-0">
                Comparing{" "}
                <span className="text-[#E8EDF2] font-semibold">
                  {selectedSusp.name}
                </span>{" "}
                with{" "}
                <span className="text-[#E8EDF2] font-semibold">
                  {selectedEv.title}
                </span>
              </div>
              <button
                onClick={handleMarkContradiction}
                disabled={!canMarkContradiction}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition active:scale-[0.97] ${
                  canMarkContradiction
                    ? "bg-[#C9A227] text-black hover:bg-[#d8b13a]"
                    : "border border-white/10 text-[#8993A1] cursor-not-allowed"
                }`}
              >
                ⚠ Mark Contradiction
              </button>
            </div>
          )}

          {/* Evidence detail */}
          {selectedEv && (
            <div
              className={`${
                mobileTab === "evidence" ? "" : "hidden lg:block"
              } p-5 rounded-xl bg-[#11161D] border border-[#C9A227]/40`}
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">{selectedEv.icon}</span>
                <div className="font-bold">{selectedEv.title}</div>
              </div>
              <div className="mt-3 space-y-1">
                {selectedEv.content.map((line, i) => (
                  <div
                    key={i}
                    className="text-sm text-[#E8EDF2] font-mono break-words"
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Interrogation */}
          <div
            className={`${
              mobileTab === "interrogate" ? "" : "hidden lg:block"
            }`}
          >
            <div className="text-xs uppercase tracking-wider text-[#8993A1] mb-3">
              Interrogation
            </div>
            {selectedSusp ? (
              <InterrogationChat
                suspect={selectedSusp}
                interrogation={getInterrogation(
                  caseData.id,
                  selectedSusp,
                  caseData
                )}
              />
            ) : (
              <div className="p-6 rounded-xl bg-[#11161D] border border-white/10 text-sm text-[#8993A1] text-center">
                Select a suspect from the{" "}
                <span className="text-[#C9A227]">Suspects</span> tab to begin
                interrogation.
              </div>
            )}
          </div>

          {/* Timeline */}
          <div
            className={`${mobileTab === "timeline" ? "" : "hidden lg:block"}`}
          >
            <div className="text-xs uppercase tracking-wider text-[#8993A1] mb-3">
              Timeline of Events
            </div>
            <div className="p-5 rounded-xl bg-[#11161D] border border-white/10">
              <Timeline events={caseData.timeline} />
            </div>
          </div>

          {/* Hint panel */}
          <div className="hidden lg:block">
            <HintButton
              hints={allHints}
              usedLevels={usedHints}
              onUse={(lvl) => setUsedHints((prev) => [...prev, lvl])}
            />
          </div>

          {/* Desktop verdict */}
          <button
            onClick={() => {
              playClick();
              setShowVerdict(true);
            }}
            className="hidden lg:block w-full py-4 rounded-lg bg-[#C9A227] text-black font-bold hover:bg-[#d8b13a] transition active:scale-[0.99]"
          >
            ⚖️ SUBMIT VERDICT
          </button>
        </section>
      </div>

      {/* Mobile hint */}
      <div className="lg:hidden px-4 pb-24">
        <HintButton
          hints={allHints}
          usedLevels={usedHints}
          onUse={(lvl) => setUsedHints((prev) => [...prev, lvl])}
        />
      </div>

      {/* Sticky mobile verdict */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#080B10]/95 backdrop-blur border-t border-white/10 p-3">
        <button
          onClick={() => {
            playClick();
            setShowVerdict(true);
          }}
          className="w-full py-3.5 rounded-lg bg-[#C9A227] text-black font-bold hover:bg-[#d8b13a] transition active:scale-[0.99]"
        >
          ⚖️ SUBMIT VERDICT
        </button>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-24 lg:bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[92vw] sm:max-w-lg px-4 py-3 rounded-lg bg-[#C9A227] text-black text-sm font-semibold shadow-lg">
          ⚠ {toast}
        </div>
      )}

      {showVerdict && (
        <VerdictModal
          caseData={caseData}
          onClose={() => setShowVerdict(false)}
          onSubmit={handleVerdictSubmit}
        />
      )}
    </main>
  );
}