"use client";

import React, { useEffect, useRef } from "react";

export default function FantasticBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 1. Mouse Spotlight tracking
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        containerRef.current.style.setProperty("--mouse-x", `${x}px`);
        containerRef.current.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 2. High-performance attractive colored canvas particles
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const particleColors = [
      "rgba(56, 189, 248, ",  // Cyan / Sky
      "rgba(129, 140, 248, ", // Indigo
      "rgba(192, 132, 252, ", // Purple / Violet
      "rgba(52, 211, 153, ",  // Emerald
      "rgba(248, 250, 252, ", // Bright white
    ];

    const particleCount = Math.min(Math.floor(window.innerWidth / 24), 60);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      colorPrefix: string;
      alpha: number;
      baseAlpha: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = Math.random() * 0.45 + 0.15;
      const colorPrefix = particleColors[i % particleColors.length];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.8 + 0.8,
        colorPrefix,
        alpha: baseAlpha,
        baseAlpha,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const trackCanvasMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", trackCanvasMouse, { passive: true });

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw glowing connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 135) {
            const lineAlpha = (1 - dist / 135) * 0.14;
            // Attractive cyan-indigo gradient line
            const grad = ctx.createLinearGradient(
              particles[i].x,
              particles[i].y,
              particles[j].x,
              particles[j].y
            );
            grad.addColorStop(0, `${particles[i].colorPrefix}${lineAlpha})`);
            grad.addColorStop(1, `${particles[j].colorPrefix}${lineAlpha})`);

            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw glowing particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen boundaries
        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        // Mouse proximity reaction (gentle glow)
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        if (distToMouse < 180) {
          p.alpha = Math.min(p.baseAlpha + (1 - distToMouse / 180) * 0.6, 0.95);
        } else {
          p.alpha += (p.baseAlpha - p.alpha) * 0.05;
        }

        ctx.fillStyle = `${p.colorPrefix}${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", trackCanvasMouse);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#040711]"
      style={
        {
          "--mouse-x": "50vw",
          "--mouse-y": "30vh",
        } as React.CSSProperties
      }
    >
      {/* 1. Vibrant Aurora Halo / Conic Light Beam (Cyan & Violet) */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] sm:w-[1300px] h-[650px] bg-[radial-gradient(ellipse_65%_55%_at_50%_0%,rgba(56,189,248,0.22),rgba(99,102,241,0.18)_38%,rgba(168,85,247,0.08)_65%,transparent_80%)] opacity-95 blur-2xl animate-pulse-glow" />

      {/* 2. Interactive Cursor Spotlight with Cyan / Violet Hue */}
      <div
        className="absolute inset-0 transition-opacity duration-300 opacity-70 hidden md:block"
        style={{
          background:
            "radial-gradient(750px circle at var(--mouse-x) var(--mouse-y), rgba(56, 189, 248, 0.075), rgba(99, 102, 241, 0.035) 45%, transparent 70%)",
        }}
      />

      {/* 3. Floating Vibrant Nebula Glow Orbs */}
      {/* Cyan nebula (top left) */}
      <div className="absolute top-1/4 -left-32 w-[34rem] h-[34rem] rounded-full bg-cyan-500/[0.12] blur-[150px] animate-float" />
      {/* Indigo / Violet nebula (mid right) */}
      <div className="absolute top-1/2 -right-32 w-[36rem] h-[36rem] rounded-full bg-violet-600/[0.12] blur-[160px] animate-float-delayed" />
      {/* Emerald nebula (bottom left) */}
      <div className="absolute bottom-20 left-1/4 w-[28rem] h-[28rem] rounded-full bg-emerald-500/[0.07] blur-[130px] animate-float" />
      {/* Sky blue nebula (center) */}
      <div className="absolute top-3/4 right-1/3 w-[30rem] h-[30rem] rounded-full bg-sky-400/[0.08] blur-[140px] animate-float-delayed" />

      {/* 4. High-Tech Grid with Subtle Cyan Accents & Vignette Mask */}
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 90% 75% at 50% 35%, black 45%, rgba(0, 0, 0, 0.25) 85%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 75% at 50% 35%, black 45%, rgba(0, 0, 0, 0.25) 85%, transparent 100%)",
        }}
      />

      {/* 5. Glowing Dot Matrix Overlay */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(rgba(56, 189, 248, 0.22) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 25%, black 25%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 25%, black 25%, transparent 85%)",
        }}
      />

      {/* 6. Colorful Floating Constellation Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-85"
      />

      {/* 7. Subtle Cinematic Grain */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 8. Bottom Fade Horizon into Midnight Base */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#040711] via-[#040711]/80 to-transparent" />
    </div>
  );
}
