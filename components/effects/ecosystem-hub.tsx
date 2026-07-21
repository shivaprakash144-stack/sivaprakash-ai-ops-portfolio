"use client";

import { motion } from "framer-motion";

interface EcosystemNode {
  label: string;
  description: string;
}

interface EcosystemHubProps {
  hub: EcosystemNode;
  satellites: EcosystemNode[];
}

export function EcosystemHub({ hub, satellites }: EcosystemHubProps) {
  const radius = 190;
  const center = 220;

  return (
    <div className="relative">
      {/* Desktop: radial hub-and-spoke */}
      <div className="relative mx-auto hidden h-[440px] w-[440px] lg:block">
        <svg viewBox="0 0 440 440" className="absolute inset-0 h-full w-full">
          {satellites.map((_, i) => {
            const angle = (i / satellites.length) * Math.PI * 2 - Math.PI / 2;
            const x = center + radius * Math.cos(angle);
            const y = center + radius * Math.sin(angle);
            return (
              <motion.line
                key={i}
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke="rgba(0,229,255,0.18)"
                strokeWidth="1.5"
                strokeDasharray="5 5"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1 }}
              />
            );
          })}
        </svg>

        {/* Hub */}
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="glass-strong absolute flex flex-col items-center justify-center rounded-full p-6 text-center shadow-glow"
          style={{
            width: 152,
            height: 152,
            left: center - 76,
            top: center - 76,
          }}
        >
          <span className="text-xs font-semibold uppercase leading-tight tracking-wide text-white">
            {hub.label}
          </span>
          <span className="mt-1.5 text-[10.5px] leading-snug text-slate-400">
            {hub.description}
          </span>
        </motion.div>

        {/* Satellites */}
        {satellites.map((s, i) => {
          const angle = (i / satellites.length) * Math.PI * 2 - Math.PI / 2;
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              whileHover={{ scale: 1.06 }}
              className="glass absolute flex w-32 flex-col items-center rounded-2xl p-3 text-center transition-shadow hover:shadow-glow-cyan"
              style={{ left: x - 64, top: y - 40 }}
            >
              <span className="text-[10.5px] font-semibold uppercase leading-tight tracking-wide text-white">
                {s.label}
              </span>
              <span className="mt-1 text-[10px] leading-snug text-slate-500">
                {s.description}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile / tablet fallback: simple stacked ecosystem list */}
      <div className="flex flex-col items-center gap-3 lg:hidden">
        <div className="glass-strong flex w-full max-w-xs flex-col items-center rounded-2xl p-5 text-center shadow-glow">
          <span className="text-xs font-semibold uppercase tracking-wide text-white">{hub.label}</span>
          <span className="mt-1 text-[11px] text-slate-400">{hub.description}</span>
        </div>
        <div className="grid w-full max-w-md grid-cols-2 gap-3">
          {satellites.map((s) => (
            <div key={s.label} className="glass flex flex-col items-center rounded-xl p-3 text-center">
              <span className="text-[10.5px] font-semibold uppercase tracking-wide text-white">{s.label}</span>
              <span className="mt-1 text-[10px] text-slate-500">{s.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
