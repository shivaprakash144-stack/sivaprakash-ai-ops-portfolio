"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Download, ArrowUpRight, Phone } from "lucide-react";
import { profile, contactContent } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const channels = [
  {
    label: "Phone",
    value: "+91 97108 76874",
    href: "tel:+919710876874",
    icon: Phone,
  },
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "sivaprakash-s-b020a6217",
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "View repositories",
    href: profile.github,
    icon: Github,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28 lg:py-36 scroll-mt-24">
      <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-72 max-w-3xl bg-primary-500/20 blur-3xl" />
      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[8%] top-10 -z-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <motion.div
        animate={{ y: [0, 16, 0], x: [0, -10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[10%] bottom-10 -z-10 h-48 w-48 rounded-full bg-emerald/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-[2rem] p-10 text-center sm:p-14"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-6 bg-accent" />
            Contact
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {contactContent.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400">
            Open to AI Operations Leadership, Process Automation, and AI
            Transformation roles. If there&apos;s a workflow worth fixing, I&apos;d
            like to hear about it.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
            <a
              href={profile.resumeUrl}
              download
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass group flex items-center justify-between rounded-xl px-4 py-3 text-left transition-colors hover:border-accent/40"
              >
                <span className="flex items-center gap-3">
                  <c.icon className="h-4 w-4 text-accent" />
                  <span>
                    <span className="block text-[11px] uppercase tracking-wide text-slate-500">
                      {c.label}
                    </span>
                    <span className="block text-sm text-slate-200">{c.value}</span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
