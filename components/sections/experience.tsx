"use client";

import { motion } from "framer-motion";
import { Building2, MapPin } from "lucide-react";
import { experience, growthPath, teamLeadershipEcosystem } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { EcosystemHub } from "@/components/effects/ecosystem-hub";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 lg:py-36 scroll-mt-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Two companies, nine years, one throughline"
          description="Own the queue. Find what's broken underneath it. Fix the system, not just the symptom."
          align="center"
        />

        {/* Growth path — a visual summary of capability growth, not separate jobs */}
        <div className="mb-14 flex flex-wrap items-center justify-center gap-2">
          {growthPath.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass rounded-full px-4 py-1.5 text-xs font-medium text-slate-300"
              >
                {step}
              </motion.span>
              {i < growthPath.length - 1 && (
                <span className="text-slate-600">→</span>
              )}
            </div>
          ))}
        </div>

        <div className="relative pl-8">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary-500 via-accent to-transparent" />

          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pb-12 last:pb-0"
            >
              <span className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent bg-background">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>

              <div className="glass rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-primary-400" />
                    <span className="text-sm font-semibold text-white">
                      {item.role}
                    </span>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-medium text-slate-400">
                    {item.period}
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-3">
                  <span className="text-sm font-medium text-accent">
                    {item.company}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="h-3 w-3" />
                    {item.location}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {item.summary}
                </p>

                <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                  {item.bullets.map((b, idx) => (
                    <li key={idx} className="flex gap-2 text-sm leading-relaxed text-slate-400">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Leadership ecosystem visual */}
        <div className="mt-20">
          <div className="mb-10 text-center">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Team Leadership, as an ecosystem — not an org chart
            </span>
          </div>
          <EcosystemHub
            hub={teamLeadershipEcosystem[0]}
            satellites={teamLeadershipEcosystem.slice(1)}
          />
        </div>
      </div>
    </section>
  );
}
