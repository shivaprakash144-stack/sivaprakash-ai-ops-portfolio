"use client";

import { motion } from "framer-motion";
import { Bot, Users, Target } from "lucide-react";
import { whyRecruiters } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlowCard } from "@/components/effects/glow-card";

const icons = [Bot, Users, Target];

export function WhyRecruiters() {
  return (
    <section id="why-hire-me" className="relative py-28 lg:py-36 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={whyRecruiters.title}
          title={whyRecruiters.subheading}
          align="center"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {whyRecruiters.pillars.map((pillar, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlowCard className="h-full p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/25 to-accent/20">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {pillar.description}
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
