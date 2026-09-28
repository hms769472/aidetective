/**
 * Tiny sound engine using Web Audio API.
 * No external files — all sounds are synthesized on the fly.
 */

let ctx: AudioContext | null = null;
let muted = false;
const STORAGE_KEY = "casezero_muted_v1";

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (muted) return null;
  if (!ctx) {
    try {
      const AC =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      ctx = new AC();
    } catch {
      return null;
    }
  }
  // Some browsers suspend context until user gesture
  if (ctx.state === "suspended") ctx.resume().catch(() => {});
  return ctx;
}

export function initMute() {
  if (typeof window === "undefined") return;
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "1") muted = true;
}

export function isMuted(): boolean {
  return muted;
}

export function toggleMute(): boolean {
  muted = !muted;
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, muted ? "1" : "0");
  }
  return muted;
}

function tone(
  freq: number,
  duration: number,
  type: OscillatorType = "sine",
  gain: number = 0.08,
  startOffset = 0
) {
  const c = getCtx();
  if (!c) return;
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, c.currentTime + startOffset);
  g.gain.setValueAtTime(0, c.currentTime + startOffset);
  g.gain.linearRampToValueAtTime(gain, c.currentTime + startOffset + 0.01);
  g.gain.exponentialRampToValueAtTime(
    0.0001,
    c.currentTime + startOffset + duration
  );
  osc.connect(g).connect(c.destination);
  osc.start(c.currentTime + startOffset);
  osc.stop(c.currentTime + startOffset + duration + 0.05);
}

/** Short click — buttons, cards */
export function playClick() {
  tone(880, 0.05, "triangle", 0.05);
}

/** Softer tick — tabs, nav */
export function playTick() {
  tone(1400, 0.03, "square", 0.03);
}

/** Pop — evidence reveal, contradiction found */
export function playPop() {
  tone(600, 0.08, "sine", 0.07);
  tone(1200, 0.06, "sine", 0.05, 0.05);
}

/** Success — correct verdict, achievement */
export function playSuccess() {
  tone(523.25, 0.12, "sine", 0.09, 0);     // C5
  tone(659.25, 0.12, "sine", 0.09, 0.1);   // E5
  tone(783.99, 0.18, "sine", 0.09, 0.2);   // G5
  tone(1046.5, 0.25, "sine", 0.08, 0.32);  // C6
}

/** Error — wrong verdict */
export function playError() {
  tone(300, 0.15, "sawtooth", 0.06, 0);
  tone(200, 0.25, "sawtooth", 0.06, 0.15);
}

/** Achievement chime — extended */
export function playAchievement() {
  tone(659.25, 0.1, "triangle", 0.09, 0);
  tone(880, 0.1, "triangle", 0.09, 0.08);
  tone(1174.66, 0.12, "triangle", 0.09, 0.16);
  tone(1318.51, 0.25, "triangle", 0.1, 0.26);
  tone(1760, 0.35, "triangle", 0.07, 0.38);
}

/** Message sent (interrogation) */
export function playSend() {
  tone(1000, 0.04, "triangle", 0.05, 0);
  tone(1400, 0.04, "triangle", 0.05, 0.04);
}

/** Message received (interrogation reply) */
export function playReceive() {
  tone(700, 0.07, "sine", 0.06);
  tone(500, 0.09, "sine", 0.05, 0.06);
}

/** Tab change */
export function playTab() {
  tone(1200, 0.04, "triangle", 0.04);
}

/** Ultra-short typewriter tick — very quiet */
export function playTypeKey() {
  tone(1800 + Math.random() * 400, 0.012, "square", 0.012);
}

/** Typewriter done — soft ding */
export function playTypeDone() {
  tone(1600, 0.05, "sine", 0.04);
}
