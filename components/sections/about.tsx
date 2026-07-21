import { MapPin, Briefcase, GraduationCap, Users } from "lucide-react";
import { profile, recruiterSnapshot, education } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { GlowCard } from "@/components/effects/glow-card";
import { VoiceOverPrompt } from "@/components/effects/voice-over-prompt";

const facts = [
  { icon: Briefcase, label: "Experience", value: recruiterSnapshot.totalExperience },
  { icon: Users, label: "Leadership", value: recruiterSnapshot.teamLeadership },
  { icon: GraduationCap, label: "Education", value: `${education.degree}, ${education.year}` },
  { icon: MapPin, label: "Based in", value: profile.location },
];

export function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="I fix the system underneath the queue."
          description="Ten years of running operations teams taught me that the biggest wins rarely come from working harder — they come from redesigning the workflow itself, then handing the team a system that runs without you."
        />

        <VoiceOverPrompt />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ScrollReveal>
            <GlowCard className="h-full p-8 sm:p-9">
              <p className="text-[1.05rem] leading-[1.75] text-slate-300">
                {profile.summary}
              </p>
              <p className="mt-5 text-[15px] leading-[1.75] text-slate-500">
                My work sits at the intersection of AI Operations, Workflow Automation,
                and Team Leadership — combining Lean Six Sigma discipline with modern AI
                platforms to turn manual, repetitive work into documented, scalable
                systems the team can run on its own.
              </p>
            </GlowCard>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {facts.map((fact, i) => (
              <ScrollReveal key={fact.label} delay={i * 0.08}>
                <GlowCard className="h-full p-6">
                  <fact.icon className="h-5 w-5 text-accent" />
                  <div className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {fact.label}
                  </div>
                  <div className="mt-1 text-sm font-medium text-white">
                    {fact.value}
                  </div>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
