"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import { useVoiceOver } from "@/components/providers/voice-over-provider";

export function VoiceOverPrompt() {
  const { status, play } = useVoiceOver();

  return (
    <AnimatePresence>
      {status === "blocked" && (
        <motion.div
          initial={{ opacity: 0, y: -10, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 overflow-hidden"
        >
          <div className="glass flex flex-wrap items-center justify-between gap-4 rounded-2xl px-6 py-4">
            <span className="text-sm text-slate-300">Listen to my introduction</span>
            <button
              type="button"
              onClick={play}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 px-4 py-2 text-xs font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <Play className="h-3.5 w-3.5" />
              Play Introduction
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
