"use client";

import { motion } from "framer-motion";
import { measurableImpact } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlowCard } from "@/components/effects/glow-card";
import { BarCompare } from "@/components/effects/bar-compare";
import { AnimatedCounter } from "@/components/effects/animated-counter";

function parseStandalone(value: string): { num: number; suffix: string } {
  const match = value.match(/(\d+(?:\.\d+)?)(.*)/);
  if (!match) return { num: 0, suffix: "" };
  return { num: parseFloat(match[1]), suffix: match[2] };
}

export function MeasurableImpact() {
  return (
    <section id="impact" className="relative py-28 lg:py-36 scroll-mt-24">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-96 -translate-y-1/2 bg-primary-500/8 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Measurable Business Impact"
          title="The consolidated results"
          description="One place to see the outcomes that matter — each number links back to a specific project below."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {measurableImpact.map((card, i) => {
            const { num, suffix } = card.standalone
              ? parseStandalone(card.standalone)
              : { num: 0, suffix: "" };

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              >
                <GlowCard className="relative flex h-full flex-col overflow-hidden p-7">
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-primary-500 via-accent to-emerald opacity-60" />
                  <h3 className="text-sm font-semibold tracking-tight text-white">{card.label}</h3>

                  <div className="mt-6 flex flex-1 items-center justify-center">
                    {card.chart === "bar" && card.before !== undefined && card.after !== undefined ? (
                      <BarCompare before={card.before} after={card.after} unit={card.unit ?? "%"} />
                    ) : (
                      <div className="font-mono text-4xl font-semibold tabular-nums text-accent">
                        <AnimatedCounter value={num} suffix={suffix} />
                      </div>
                    )}
                  </div>

                  <p className="mt-6 border-t border-white/10 pt-4 text-xs leading-relaxed text-slate-500">
                    {card.detail}
                  </p>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
