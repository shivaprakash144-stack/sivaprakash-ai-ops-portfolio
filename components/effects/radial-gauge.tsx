"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RadialGaugeProps {
  value: number; // 0-100
  label: string;
  displayValue: string;
  size?: number;
  colorFrom?: string;
  colorTo?: string;
}

export function RadialGauge({
  value,
  label,
  displayValue,
  size = 96,
  colorFrom = "#4F46E5",
  colorTo = "#00E5FF",
}: RadialGaugeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const radius = (size - 12) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.min(Math.abs(value), 100);
  const gradientId = `gauge-gradient-${label.replace(/\s+/g, "-")}`;

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colorFrom} />
              <stop offset="100%" stopColor={colorTo} />
            </linearGradient>
          </defs>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={7}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth={7}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={
              isInView
                ? { strokeDashoffset: circumference * (1 - clamped / 100) }
                : {}
            }
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-sm font-semibold tabular-nums text-white">{displayValue}</span>
        </div>
      </div>
      <span className="mt-3.5 text-center text-xs font-medium text-slate-400">
        {label}
      </span>
    </div>
  );
}
