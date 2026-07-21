"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export function GlowCard({ children, className }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={cn(
        "group relative overflow-hidden rounded-xl2 glass transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:shadow-card",
        className
      )}
      style={{
        backgroundImage: active
          ? `radial-gradient(320px circle at ${pos.x}% ${pos.y}%, rgba(0,229,255,0.14), transparent 60%), linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)`
          : undefined,
      }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-xl2 opacity-0 ring-1 ring-inset ring-accent/30 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </div>
  );
}
