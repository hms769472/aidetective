"use client";

import { useEffect, useRef } from "react";

type Props = {
  /** When true, launch confetti burst */
  active: boolean;
  duration?: number;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rot: number;
  vr: number;
  size: number;
  color: string;
  life: number;
};

const COLORS = ["#C9A227", "#E8EDF2", "#d8b13a", "#8993A1", "#f0e0a0"];

export default function Confetti({ active, duration = 3500 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const particles: Particle[] = [];
    const startTime = performance.now();

    // Initial burst from two corners
    const spawn = (x: number, y: number, count: number) => {
      for (let i = 0; i < count; i++) {
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 12,
          vy: -Math.random() * 12 - 4,
          rot: Math.random() * Math.PI * 2,
          vr: (Math.random() - 0.5) * 0.2,
          size: 6 + Math.random() * 6,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          life: 1,
        });
      }
    };

    spawn(W * 0.15, H * 0.75, 60);
    spawn(W * 0.85, H * 0.75, 60);

    const tick = () => {
      const elapsed = performance.now() - startTime;
      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        p.vy += 0.35; // gravity
        p.vx *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        p.life -= 0.008;

        if (p.life <= 0) continue;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        ctx.restore();
      }

      if (elapsed < duration && particles.some((p) => p.life > 0)) {
        requestAnimationFrame(tick);
      } else {
        ctx.clearRect(0, 0, W, H);
      }
    };

    requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", onResize);
      ctx.clearRect(0, 0, W, H);
    };
  }, [active, duration]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[100]"
      aria-hidden
    />
  );
}