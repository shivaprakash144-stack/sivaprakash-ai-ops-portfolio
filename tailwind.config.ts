import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        surface: "#0A0F20",
        primary: {
          DEFAULT: "#4F46E5",
          foreground: "#FFFFFF",
          50: "#EEF0FF",
          100: "#E0E1FF",
          400: "#7C74F0",
          500: "#4F46E5",
          600: "#3F35CE",
          700: "#332BA8",
        },
        accent: {
          DEFAULT: "#00E5FF",
          foreground: "#04121A",
        },
        emerald: {
          DEFAULT: "#10B981",
          soft: "#34D399",
        },
        muted: {
          DEFAULT: "#8B96AD",
          foreground: "#C7CEDB",
        },
        border: "rgba(148, 163, 210, 0.10)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 18% 15%, rgba(79,70,229,0.14), transparent 40%), radial-gradient(circle at 82% 0%, rgba(0,229,255,0.09), transparent 42%), radial-gradient(circle at 50% 100%, rgba(16,185,129,0.08), transparent 45%)",
        "card-glass":
          "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 100%)",
      },
      boxShadow: {
        glow: "0 0 36px -10px rgba(79,70,229,0.4)",
        "glow-cyan": "0 0 36px -10px rgba(0,229,255,0.32)",
        "glow-emerald": "0 0 36px -10px rgba(16,185,129,0.32)",
        card: "0 8px 30px -14px rgba(0,0,0,0.55)",
      },
      animation: {
        "float-slow": "float 7s ease-in-out infinite",
        "float-slower": "float 11s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3.5s ease-in-out infinite",
        marquee: "marquee 26s linear infinite",
        "spin-slow": "spin 18s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
