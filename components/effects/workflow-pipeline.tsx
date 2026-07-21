"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export type PipelineStage = {
  label: string;
  description: string;
  icon: LucideIcon;
};

interface WorkflowPipelineProps {
  stages: PipelineStage[];
}

export function WorkflowPipeline({ stages }: WorkflowPipelineProps) {
  return (
    <div className="relative">
      {/* connecting line with traveling signal (desktop) */}
      <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-white/10 lg:block">
        <motion.div
          className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-accent shadow-glow-cyan"
          animate={{ left: ["0%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
        {stages.map((stage, i) => (
          <motion.div
            key={stage.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="glass relative flex flex-col items-center rounded-2xl p-5 text-center transition-shadow duration-300 hover:shadow-glow-cyan"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary-500/25 to-accent/20">
              <stage.icon className="h-5 w-5 text-accent" />
            </div>
            <h4 className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-white">
              {stage.label}
            </h4>
            <p className="mt-1.5 text-[11.5px] leading-snug text-slate-500">
              {stage.description}
            </p>

            {i < stages.length - 1 && (
              <span className="mt-3 text-slate-600 lg:hidden" aria-hidden="true">
                ↓
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
