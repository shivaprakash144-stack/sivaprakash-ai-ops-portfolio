"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight canvas-based AI network graphic: glowing nodes connected by
 * lines, with a slow data-flow pulse traveling along a subset of edges.
 * Purely decorative — pointer-events disabled, sits behind hero content
 * at low opacity, and respects prefers-reduced-motion.
 */
export function AINetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = canvas.parentElement?.clientWidth ?? window.innerWidth;
    let height = canvas.parentElement?.clientHeight ?? window.innerHeight;
    let rafId = 0;
    let t = 0;

    type Node = { x: number; y: number; r: number };
    let nodes: Node[] = [];
    let edges: [number, number][] = [];

    function resize() {
      width = canvas!.parentElement?.clientWidth ?? window.innerWidth;
      height = canvas!.parentElement?.clientHeight ?? window.innerHeight;
      canvas!.width = width;
      canvas!.height = height;
      buildGraph();
    }

    function buildGraph() {
      const cols = width > 1024 ? 6 : 4;
      const rows = 3;
      nodes = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          nodes.push({
            x: (width / (cols - 1 || 1)) * c + (Math.random() - 0.5) * 40,
            y: (height / (rows - 1 || 1)) * r + (Math.random() - 0.5) * 40,
            r: Math.random() * 1.6 + 1.2,
          });
        }
      }
      edges = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < width / (cols * 0.9)) {
            edges.push([i, j]);
          }
        }
      }
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // edges
      ctx.lineWidth = 1;
      for (const [a, b] of edges) {
        const n1 = nodes[a];
        const n2 = nodes[b];
        ctx.strokeStyle = "rgba(95, 130, 220, 0.10)";
        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        ctx.stroke();
      }

      // traveling data-flow pulses along a subset of edges
      const pulseCount = Math.min(edges.length, 5);
      for (let i = 0; i < pulseCount; i++) {
        const [a, b] = edges[(i * 7) % edges.length];
        const n1 = nodes[a];
        const n2 = nodes[b];
        const progress = (Math.sin(t * 0.4 + i * 1.3) + 1) / 2;
        const px = n1.x + (n2.x - n1.x) * progress;
        const py = n1.y + (n2.y - n1.y) * progress;
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 229, 255, 0.55)";
        ctx.fill();
      }

      // nodes
      for (const n of nodes) {
        const pulse = 0.6 + 0.4 * Math.sin(t * 0.6 + n.x * 0.01);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 70, 229, ${0.06 * pulse})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 163, 210, ${0.35 + 0.25 * pulse})`;
        ctx.fill();
      }

      t += 0.016;
      rafId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);

    if (!prefersReducedMotion) {
      rafId = requestAnimationFrame(draw);
    } else {
      draw();
      cancelAnimationFrame(rafId);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-60"
      aria-hidden="true"
    />
  );
}
