"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Download } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 transition-all duration-300 sm:px-6",
          scrolled ? "glass-strong py-2.5 shadow-card" : "bg-transparent"
        )}
      >
        <a href="#home" className="flex items-center gap-2 font-semibold text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent">
            <Sparkles className="h-4 w-4 text-white" />
          </span>
          <span className="hidden text-sm tracking-wide sm:inline">
            {profile.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white",
                active === link.href && "bg-white/8 text-white"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={profile.resumeUrl}
            download
            className="flex h-9 items-center gap-1.5 rounded-full border border-white/10 px-3.5 text-xs font-medium text-slate-300 transition-colors hover:border-accent/50 hover:text-accent"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
          <a href="#contact" className={cn(buttonVariants({ variant: "primary", size: "sm" }))}>
            Contact Me
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-slate-200 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="glass-strong mx-4 mt-3 rounded-2xl p-4 lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/8 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-3 flex gap-2 border-t border-white/10 pt-3">
              <a
                href={profile.resumeUrl}
                download
                className={cn(buttonVariants({ variant: "outline", size: "sm" }), "flex-1")}
              >
                Resume
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className={cn(buttonVariants({ variant: "primary", size: "sm" }), "flex-1")}
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
