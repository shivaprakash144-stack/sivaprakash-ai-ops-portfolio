"use client";

import { motion } from "framer-motion";
import { Brain, Bot, Workflow, Sparkles, Database, Zap, Target, Users } from "lucide-react";
import { skillPills, type SkillPill } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";

const icons: Record<SkillPill["icon"], typeof Brain> = {
  brain: Brain,
  bot: Bot,
  workflow: Workflow,
  sparkles: Sparkles,
  database: Database,
  zap: Zap,
  target: Target,
  users: Users,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-28 lg:py-36 scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="The executive toolkit"
          description="AI platforms, automation tools, and the operating discipline that turns them into business results."
          align="center"
        />

        <div className="flex flex-wrap items-center justify-center gap-3">
          {skillPills.map((skill, i) => {
            const Icon = icons[skill.icon];
            return (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, y: 14, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{
                  y: -5,
                  scale: 1.04,
                  boxShadow: "0 0 28px -4px rgba(0,229,255,0.4)",
                }}
                className="glass flex cursor-default items-center gap-2.5 rounded-full px-5 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-accent/40 hover:text-white"
              >
                <Icon className="h-4 w-4 text-accent" />
                {skill.name}
              </motion.span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
