"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Star, Crown, Medal, Flame, CheckCircle2 } from "lucide-react";
import { achievements, additionalHighlights } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlowCard } from "@/components/effects/glow-card";

const icons = [Trophy, Award, Crown, Star, Medal, Flame];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28 lg:py-36 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition, exactly as awarded"
          description="Six awards from nine years on the floor and leading teams — no embellishment, just what's on record."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <GlowCard className="relative flex h-full items-center gap-4 overflow-hidden p-6">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-primary-500/20 to-accent/10 blur-2xl" />
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent shadow-glow">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-tight text-white">{a.title}</h3>
                    <p className="mt-1 text-xs text-slate-400">{a.detail}</p>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 glass rounded-2xl p-6"
        >
          <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Also on record
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {additionalHighlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                {h}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
