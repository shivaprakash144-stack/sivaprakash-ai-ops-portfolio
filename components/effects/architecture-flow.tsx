"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ArchitectureFlowProps {
  steps: string[];
}

export function ArchitectureFlow({ steps }: ArchitectureFlowProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className="rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-slate-300"
          >
            {step}
          </motion.div>
          {i < steps.length - 1 && (
            <span className="relative flex-shrink-0">
              <ArrowRight className="h-3.5 w-3.5 text-accent/70" />
              <motion.span
                className="absolute left-0 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-accent"
                animate={{ left: ["0%", "85%"], opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  delay: i * 0.25,
                  ease: "easeInOut",
                }}
                aria-hidden="true"
              />
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
