"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  ListChecks,
  TrendingUp,
  Wrench,
  Info,
  GitBranch,
  Lightbulb,
  Rocket,
} from "lucide-react";
import { caseStudies } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { ArchitectureFlow } from "@/components/effects/architecture-flow";

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-28 lg:py-36 scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Case Studies"
          title="Consulting-grade breakdowns, not GitHub cards"
          description="Every initiative below is documented the way a transformation consultancy would present it to a client: problem, architecture, impact, and what I'd do differently next time."
        />

        <div className="flex flex-col gap-14">
          {caseStudies.map((cs, i) => (
            <motion.article
              key={cs.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
              className="glass-strong relative overflow-hidden rounded-2xl"
            >
              <div
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{
                  background:
                    i % 3 === 0
                      ? "linear-gradient(90deg, #4F46E5, #7C74F0)"
                      : i % 3 === 1
                      ? "linear-gradient(90deg, #00E5FF, #4F46E5)"
                      : "linear-gradient(90deg, #10B981, #00E5FF)",
                }}
              />
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-8 py-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-slate-500">{cs.index}</span>
                  <h3 className="text-xl font-semibold text-white">{cs.title}</h3>
                </div>
                <Badge variant="accent">{cs.category}</Badge>
              </div>

              <div className="px-8 pt-6 text-[15px] leading-relaxed text-slate-400">
                {cs.overview}
              </div>

              <div className="grid grid-cols-1 gap-8 p-8 pt-6 md:grid-cols-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <AlertTriangle className="h-4 w-4 text-rose-400" />
                    Business Problem
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                    {cs.problem}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <ListChecks className="h-4 w-4 text-primary-400" />
                    Solution
                  </div>
                  <ul className="mt-2.5 space-y-2">
                    {cs.approach.map((step, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 text-sm leading-relaxed text-slate-400"
                      >
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <TrendingUp className="h-4 w-4 text-emerald" />
                    Business Impact &amp; Key Outcomes
                  </div>
                  <div className="mt-2.5 flex flex-col gap-2">
                    {cs.impact.map((im) => (
                      <div
                        key={im.label}
                        className="rounded-lg border border-emerald/25 bg-emerald/5 px-3 py-2"
                      >
                        <div className="text-[11px] uppercase tracking-wide text-slate-500">
                          {im.label}
                        </div>
                        <div className="font-mono text-sm font-semibold tabular-nums text-emerald-soft">
                          {im.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 px-8 py-6">
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <GitBranch className="h-4 w-4 text-accent" />
                  Architecture
                </div>
                <ArchitectureFlow steps={cs.architecture} />
              </div>

              <div className="grid grid-cols-1 gap-6 border-t border-white/10 px-8 py-6 md:grid-cols-2">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <Lightbulb className="h-4 w-4 text-amber-400" />
                    Lessons Learned
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                    {cs.lessonsLearned}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <Rocket className="h-4 w-4 text-accent" />
                    Future Enhancements
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                    {cs.futureEnhancements}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-8 py-5">
                <div className="flex flex-wrap items-center gap-2">
                  <Wrench className="h-3.5 w-3.5 text-slate-500" />
                  {cs.tools.map((t) => (
                    <Badge key={t} variant="outline">
                      {t}
                    </Badge>
                  ))}
                </div>
                {cs.sourceNote && (
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <Info className="h-3.5 w-3.5" />
                    {cs.sourceNote}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
