"use client";

import { Play, Pause, RotateCcw } from "lucide-react";
import { useVoiceOver } from "@/components/providers/voice-over-provider";

export function VoiceOverControl() {
  const { status, play, pause, resume, replay } = useVoiceOver();

  const config = {
    idle: { label: "Listen to my introduction", icon: Play, onClick: play },
    blocked: { label: "Listen to my introduction", icon: Play, onClick: play },
    playing: { label: "Pause", icon: Pause, onClick: pause },
    paused: { label: "Resume", icon: Play, onClick: resume },
    ended: { label: "Replay", icon: RotateCcw, onClick: replay },
  }[status];

  const Icon = config.icon;

  return (
    <button
      type="button"
      onClick={config.onClick}
      aria-label={config.label}
      className="glass-strong fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-medium text-slate-200 shadow-glow-cyan transition-all duration-300 hover:-translate-y-1 hover:text-white"
    >
      <Icon className={`h-3.5 w-3.5 text-accent ${status === "playing" ? "animate-pulse-glow" : ""}`} aria-hidden="true" />
      {config.label}
    </button>
  );
}
