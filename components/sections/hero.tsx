"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Activity, Bot, Gauge, ChevronDown } from "lucide-react";
import { profile, heroMetrics } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/effects/animated-counter";
import { ArchitectureFlow } from "@/components/effects/architecture-flow";
import { AINetworkBackground } from "@/components/effects/ai-network-background";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-40 pb-28 scroll-mt-24"
    >
      <div className="absolute inset-0 -z-10 bg-grid-glow" />
      <AINetworkBackground />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left column */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-slate-300"
          >
            <span className="h-2 w-2 animate-pulse-glow rounded-full bg-accent" />
            Available for AI Operations &amp; Automation roles
          </motion.span>

          {/* Mobile / tablet photo, shown above headline below the lg breakpoint */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 flex lg:hidden"
          >
            <ProfilePhoto className="h-40 w-40 sm:h-48 sm:w-48 md:h-52 md:w-52" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6"
          >
            <span className="block text-[26px] font-bold uppercase tracking-[0.18em] text-white drop-shadow-[0_0_18px_rgba(0,229,255,0.5)] sm:text-[30px] md:text-[36px] lg:text-[42px]">
              {profile.name}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
          >
            <span className="text-gradient">{profile.headline}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-xl space-y-3.5"
          >
            <p className="text-lg leading-relaxed text-slate-300">{profile.subheading}</p>
            <p className="text-[15px] leading-relaxed text-slate-500">{profile.subheadingSecondary}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#case-studies" className={cn(buttonVariants({ variant: "primary", size: "lg" }))}>
              View Case Studies
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Download Resume
              <Download className="h-4 w-4" />
            </a>
            <a href="#contact" className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}>
              Contact Me
              <Mail className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Metrics grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3"
          >
            {heroMetrics.map((m) => (
              <div
                key={m.label}
                className="glass rounded-2xl px-4 py-5 text-center transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-accent/25"
              >
                <div className="font-mono text-2xl font-semibold tabular-nums text-white sm:text-[1.75rem]">
                  <AnimatedCounter value={m.value} suffix={m.suffix} display={m.display} />
                </div>
                <div className="mt-1.5 text-[10.5px] font-medium uppercase tracking-wider text-slate-500">
                  {m.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Interactive process flow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8"
          >
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              How the work actually moves
            </div>
            <ArchitectureFlow steps={["Raw Ops Data", "AI Processing", "Human Review", "Optimized Outcome"]} />
          </motion.div>
        </div>

        {/* Right column — profile photo as focal point, cards arranged around it with generous, non-overlapping spacing */}
        <div className="relative hidden w-full lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-20 xl:gap-24 2xl:gap-28">
          <div className="absolute inset-0 -z-10 rounded-full bg-primary-500/10 blur-3xl" aria-hidden="true" />

          {/* Top card */}
          <FloatCard
            className="self-start lg:ml-2 xl:ml-6 w-64 xl:w-72"
            floatRange={14}
            duration={7}
            glowClass="hover:shadow-glow"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Live Ops Pulse
              </span>
              <Activity className="h-4 w-4 text-accent" />
            </div>
            <div className="mt-4 flex items-end gap-1.5">
              {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: i * 0.08 }}
                  className="w-full rounded-full bg-gradient-to-t from-primary-500 to-accent"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="mt-4 text-xs text-slate-400">
              AI automations running <span className="font-semibold text-accent">in real time</span>
            </div>
          </FloatCard>

          {/* Profile — the focal point */}
          <div className="relative z-20">
            <ProfilePhoto className="h-[260px] w-[260px] xl:h-[280px] xl:w-[280px] 2xl:h-[300px] 2xl:w-[300px]" pulse />
          </div>

          {/* Bottom row — staggered depth via offset margin on the second card */}
          <div className="flex w-full items-start justify-between gap-6">
            <FloatCard
              className="w-56 xl:w-64"
              floatRange={10}
              duration={8.5}
              glowClass="hover:shadow-glow-cyan"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  AI Automations
                </span>
                <Bot className="h-4 w-4 text-primary-400" />
              </div>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center justify-between">
                  <span>Doc Review Bot</span>
                  <span className="text-accent">Active</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Auto Reporting</span>
                  <span className="text-accent">Active</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Workflow Automation</span>
                  <span className="text-accent">Active</span>
                </li>
              </ul>
            </FloatCard>

            <FloatCard
              className="w-52 xl:w-60 lg:mt-10 xl:mt-12"
              floatRange={12}
              duration={6}
              glowClass="hover:shadow-glow"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Automation Initiatives
                </span>
                <Gauge className="h-4 w-4 text-accent" />
              </div>
              <div className="mt-3 flex items-center gap-3">
                <div className="relative h-14 w-14 flex-shrink-0">
                  <svg viewBox="0 0 36 36" className="h-14 w-14 -rotate-90">
                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                    <circle
                      cx="18"
                      cy="18"
                      r="15.5"
                      fill="none"
                      stroke="#00E5FF"
                      strokeWidth="3"
                      strokeDasharray="85 100"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                    15+
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Delivered across AI, automation, and process design.
                </p>
              </div>
            </FloatCard>
          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors hover:text-accent"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}

function ProfilePhoto({ className, pulse = false }: { className?: string; pulse?: boolean }) {
  return (
    <motion.div
      animate={
        pulse
          ? { y: [0, -10, 0], scale: [1, 1.015, 1] }
          : { y: [0, -10, 0] }
      }
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className={cn("relative flex-shrink-0", className)}
    >
      <div className="absolute -inset-5 rounded-full bg-gradient-to-br from-primary-500/45 via-accent/25 to-emerald/10 blur-2xl" />
      <div className="glass-strong relative h-full w-full rounded-full p-[6px] shadow-glow">
        <div
          className="h-full w-full rounded-full p-[2px]"
          style={{
            background: "linear-gradient(135deg, #4F46E5, #00E5FF, #10B981)",
          }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-full bg-background">
            <Image
              src={profile.photoUrl}
              alt={`${profile.name} — ${profile.headline}`}
              fill
              sizes="(min-width: 1536px) 300px, (min-width: 1280px) 280px, (min-width: 1024px) 260px, 200px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FloatCard({
  children,
  className,
  floatRange = 12,
  duration = 7,
  glowClass = "hover:shadow-glow",
}: {
  children: React.ReactNode;
  className?: string;
  floatRange?: number;
  duration?: number;
  glowClass?: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -floatRange, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ y: -6, scale: 1.03 }}
      className={cn(
        "glass-strong max-w-full rounded-2xl p-5 shadow-card transition-shadow duration-300",
        glowClass,
        className
      )}
    >
      {children}
    </motion.div>
  );
}
