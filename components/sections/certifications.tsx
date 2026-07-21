"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Languages, GraduationCap } from "lucide-react";
import { certifications, languages, education } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlowCard } from "@/components/effects/glow-card";
import { Badge } from "@/components/ui/badge";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28 lg:py-36 scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Certifications & Education"
          title="Formal credentials, kept current"
          description="Certifications that back the AI-automation and process-excellence work, plus the academic foundation underneath it."
        />

        <div className="mb-10 flex flex-wrap gap-8 border-b border-white/10 pb-8">
          <div>
            <div className="font-mono text-2xl font-semibold tabular-nums text-white">
              {certifications.length}
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-wide text-slate-500">
              Active Certifications
            </div>
          </div>
          <div>
            <div className="font-mono text-2xl font-semibold tabular-nums text-white">1</div>
            <div className="mt-1 text-[11px] uppercase tracking-wide text-slate-500">
              Engineering Degree
            </div>
          </div>
          <div>
            <div className="font-mono text-2xl font-semibold tabular-nums text-white">
              {languages.length}
            </div>
            <div className="mt-1 text-[11px] uppercase tracking-wide text-slate-500">
              Languages Spoken
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <GlowCard className="h-full p-6">
                <div className="flex items-center justify-between">
                  <BadgeCheck className="h-5 w-5 text-accent" />
                  <Badge variant="accent">Completed</Badge>
                </div>
                <h3 className="mt-4 text-sm font-semibold leading-snug text-white">
                  {cert.title}
                </h3>
                <p className="mt-2 text-xs text-slate-400">
                  {cert.issuer} · {cert.year}
                </p>
              </GlowCard>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            <GlowCard className="h-full p-6">
              <div className="flex items-center justify-between">
                <GraduationCap className="h-5 w-5 text-primary-400" />
                <Badge variant="primary">Education</Badge>
              </div>
              <h3 className="mt-4 text-sm font-semibold leading-snug text-white">
                {education.degree}
              </h3>
              <p className="mt-2 text-xs text-slate-400">
                {education.school} · {education.year}
              </p>
            </GlowCard>
          </motion.div>
        </div>

        <div className="mt-14">
          <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            <Languages className="h-4 w-4 text-accent" />
            Languages
          </div>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang) => (
              <span
                key={lang.name}
                className="glass rounded-full px-4 py-2 text-sm text-slate-200"
              >
                {lang.name}{" "}
                <span className="text-slate-500">— {lang.level}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
