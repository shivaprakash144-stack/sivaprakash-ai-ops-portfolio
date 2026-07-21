"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface BarCompareProps {
  before: number;
  after: number;
  unit?: string;
  max?: number;
}

export function BarCompare({ before, after, unit = "%", max = 100 }: BarCompareProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const beforePct = Math.min((before / max) * 100, 100);
  const afterPct = Math.min((after / max) * 100, 100);

  return (
    <div ref={ref} className="w-full space-y-3">
      <div>
        <div className="mb-1.5 flex justify-between text-xs text-slate-500">
          <span>Before</span>
          <span className="font-mono font-medium tabular-nums text-slate-300">
            {before}
            {unit}
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-white/8">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${beforePct}%` } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full rounded-full bg-slate-500"
          />
        </div>
      </div>
      <div>
        <div className="mb-1.5 flex justify-between text-xs text-slate-500">
          <span>After</span>
          <span className="font-mono font-semibold tabular-nums text-accent">
            {after}
            {unit}
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-white/8">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${afterPct}%` } : {}}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
            className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent"
          />
        </div>
      </div>
    </div>
  );
}
