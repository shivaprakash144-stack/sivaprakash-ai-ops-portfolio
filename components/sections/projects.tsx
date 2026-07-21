"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  UserCheck,
  ListChecks,
  TrendingUp,
  Wrench,
  Info,
  GitBranch,
  ChevronDown,
} from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { ArchitectureFlow } from "@/components/effects/architecture-flow";

export function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="projects" className="relative py-28 lg:py-36 scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Projects & Impact"
          description="AI automation, process transformation, and operational excellence projects I've led and delivered, with measurable business outcomes."
        />

        <div className="flex flex-col gap-10">
          {projects.map((project, i) => {
            const isOpen = expanded === project.id;
            return (
              <motion.article
                key={project.id}
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
                    <span className="font-mono text-xs text-slate-500">{project.index}</span>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <Badge variant="accent">{project.label}</Badge>
                </div>

                {/* Primary: Problem -> My Role -> Solution/Built -> Results */}
                <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-3">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      <AlertTriangle className="h-4 w-4 text-rose-400" />
                      Business Problem
                    </div>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                      {project.problem}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      <UserCheck className="h-4 w-4 text-primary-400" />
                      My Role
                    </div>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                      {project.myRole}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      <ListChecks className="h-4 w-4 text-primary-400" />
                      What I Built
                    </div>
                    <ul className="mt-2.5 space-y-2">
                      {project.built.map((step, idx) => (
                        <li key={idx} className="flex gap-2 text-sm leading-relaxed text-slate-400">
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
                      {project.impact.map((im) => (
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

                <div className="flex flex-wrap items-center gap-2 border-t border-white/10 px-8 py-5">
                  <Wrench className="h-3.5 w-3.5 text-slate-500" />
                  <span className="mr-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    AI / Tools
                  </span>
                  {project.tools.map((t) => (
                    <Badge key={t} variant="outline">
                      {t}
                    </Badge>
                  ))}
                </div>

                {/* Secondary: Additional Details (Architecture + Lessons Learned + Future Enhancements) */}
                <div className="border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : project.id)}
                    className="flex w-full items-center justify-between px-8 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-400 transition-colors hover:text-white"
                    aria-expanded={isOpen}
                  >
                    Additional Details
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8">
                          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                            <GitBranch className="h-4 w-4 text-accent" />
                            Architecture
                          </div>
                          <ArchitectureFlow steps={project.architecture} />

                          {project.additionalDetails && (
                            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                              <div>
                                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                  Lessons Learned
                                </div>
                                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                                  {project.additionalDetails.lessonsLearned}
                                </p>
                              </div>
                              <div>
                                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                                  Future Enhancements
                                </div>
                                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                                  {project.additionalDetails.futureEnhancements}
                                </p>
                              </div>
                            </div>
                          )}

                          {project.sourceNote && (
                            <div className="mt-6 flex items-center gap-1.5 text-[11px] text-slate-500">
                              <Info className="h-3.5 w-3.5" />
                              {project.sourceNote}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
