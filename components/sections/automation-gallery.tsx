"use client";

import { motion } from "framer-motion";
import { FileText, Workflow, BarChart3, Sparkles, CheckCircle2, LogIn, Brain, GitBranch, Zap, ShieldCheck, TrendingUp, ScanText, FileSearch, Layers } from "lucide-react";
import { automationGallery, aiAutomationWorkflow, aiDocumentWorkflow, type AutomationProject } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlowCard } from "@/components/effects/glow-card";
import { Badge } from "@/components/ui/badge";
import { WorkflowPipeline } from "@/components/effects/workflow-pipeline";

const icons: Record<AutomationProject["icon"], typeof FileText> = {
  filetext: FileText,
  workflow: Workflow,
  barchart: BarChart3,
  sparkles: Sparkles,
};

const automationWorkflowStages = aiAutomationWorkflow.map((s, i) => ({
  ...s,
  icon: [LogIn, Brain, GitBranch, Zap, ShieldCheck, TrendingUp][i],
}));

const documentWorkflowStages = aiDocumentWorkflow.map((s, i) => ({
  ...s,
  icon: [FileText, ScanText, FileSearch, Layers, ShieldCheck, CheckCircle2][i],
}));

export function AutomationGallery() {
  return (
    <section id="automation" className="relative py-28 lg:py-36 scroll-mt-24">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-96 -translate-y-1/2 bg-primary-500/8 blur-3xl" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="AI Automation Portfolio"
          title="Real-world initiatives, measurable value"
          description="A checkmark means the result maps directly to a resume-verified project; the rest reflect the broader scope of tools and initiatives in active use."
        />

        {/* AI Automation workflow visual */}
        <div className="mb-16">
          <div className="mb-5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
            How an automation actually moves
          </div>
          <WorkflowPipeline stages={automationWorkflowStages} />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {automationGallery.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              >
                <GlowCard className="flex h-full flex-col p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/20 to-accent/15">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    {item.verified && (
                      <CheckCircle2 className="h-4 w-4 text-emerald-soft" aria-label="Resume-verified" />
                    )}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.technology.map((t) => (
                      <Badge key={t} variant="outline">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <p className="mt-4 flex-1 border-t border-white/10 pt-4 text-xs leading-relaxed text-slate-400">
                    {item.businessImpact}
                  </p>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>

        {/* AI Document Automation dashboard visual */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="glass-strong relative mt-16 overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-primary-500 via-accent to-emerald opacity-60" />
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-8 py-6">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wide text-accent">
                AI Document Automation
              </div>
              <h3 className="mt-1 text-lg font-semibold text-white">
                The AI HOA Document Analyzer, step by step
              </h3>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-emerald/25 bg-emerald/5 px-4 py-2.5">
              <span className="font-mono text-sm tabular-nums text-slate-400">40 min</span>
              <span className="text-emerald-soft">→</span>
              <span className="font-mono text-sm font-semibold tabular-nums text-emerald-soft">20 min</span>
              <span className="ml-1 rounded-full bg-emerald/15 px-2.5 py-1 font-mono text-[11px] font-semibold tabular-nums text-emerald-soft">
                50% Faster
              </span>
            </div>
          </div>
          <div className="px-8 py-8">
            <WorkflowPipeline stages={documentWorkflowStages} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
