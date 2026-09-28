"use client";

import { useEffect, useRef } from "react";

type Props = {
  /** Intensity: 1 = subtle, 2 = normal, 3 = strong */
  intensity?: 1 | 2 | 3;
};

export default function AnimatedBackground({ intensity = 2 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    let raf = 0;

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const density = intensity === 1 ? 30 : intensity === 2 ? 55 : 90;
    const alpha = intensity === 1 ? 0.25 : intensity === 2 ? 0.4 : 0.6;

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
    };

    const particles: Particle[] = [];
    for (let i = 0; i < density; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: 0.6 + Math.random() * 1.4,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      

      // Connecting lines between nearby particles
      ctx.strokeStyle = `rgba(201, 162, 39, ${0.04 * alpha})`;
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.globalAlpha = 1 - dist / 140;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      // Draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx.fillStyle = `rgba(232, 237, 242, ${0.35 * alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [intensity]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden
      />

    </>
  );
}