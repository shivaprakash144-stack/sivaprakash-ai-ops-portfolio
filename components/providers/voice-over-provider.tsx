"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const AUDIO_SRC = "/audio/about-introduction.mp3";
const SESSION_KEY = "vo_played_v1";

export type VoiceOverStatus = "idle" | "playing" | "paused" | "ended" | "blocked";

interface VoiceOverContextValue {
  status: VoiceOverStatus;
  play: () => void;
  pause: () => void;
  resume: () => void;
  replay: () => void;
}

const VoiceOverContext = createContext<VoiceOverContextValue | null>(null);

export function useVoiceOver() {
  const ctx = useContext(VoiceOverContext);
  if (!ctx) {
    throw new Error("useVoiceOver must be used within a VoiceOverProvider");
  }
  return ctx;
}

export function VoiceOverProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [status, setStatus] = useState<VoiceOverStatus>("idle");
  const unlockedRef = useRef(false);
  const triggeredRef = useRef(false);

  // One-time "unlock": the first gesture anywhere on the page silently
  // play()+pause()s the audio element, which Safari/iOS (and some Chrome
  // builds) require before a later, non-gesture play() call can succeed.
  useEffect(() => {
    const unlock = () => {
      if (unlockedRef.current) return;
      const audio = audioRef.current;
      if (!audio) return;
      unlockedRef.current = true;
      audio
        .play()
        .then(() => {
          audio.pause();
          audio.currentTime = 0;
        })
        .catch(() => {
          /* ignore — a later attempt may still succeed */
        });
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("touchstart", unlock);
    };

    window.addEventListener("pointerdown", unlock, { once: true });
    window.addEventListener("keydown", unlock, { once: true });
    window.addEventListener("touchstart", unlock, { once: true });

    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
      window.removeEventListener("touchstart", unlock);
    };
  }, []);

  // Scroll-triggered narration — never on page load. Fires once About is
  // ~35% visible, plays automatically at most once per browser session.
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const target = document.getElementById("about");
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
            attemptAutoplay();
            observer.unobserve(target);
          }
        }
      },
      { threshold: [0, 0.1, 0.2, 0.35, 0.5, 1] }
    );

    observer.observe(target);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function attemptAutoplay() {
    if (triggeredRef.current) return;

    let alreadyPlayed = false;
    try {
      alreadyPlayed = sessionStorage.getItem(SESSION_KEY) === "true";
    } catch {
      alreadyPlayed = false;
    }
    if (alreadyPlayed) return;

    try {
      sessionStorage.setItem(SESSION_KEY, "true");
    } catch {
      /* ignore */
    }

    triggeredRef.current = true;
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio
      .play()
      .then(() => setStatus("playing"))
      .catch(() => {
        // Autoplay with sound was blocked — surface the inline fallback
        // prompt inside the About section instead.
        setStatus("blocked");
      });
  }

  const play = useCallback(() => {
    unlockedRef.current = true;
    triggeredRef.current = true;
    try {
      sessionStorage.setItem(SESSION_KEY, "true");
    } catch {
      /* ignore */
    }
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio
      .play()
      .then(() => setStatus("playing"))
      .catch(() => setStatus("blocked"));
  }, []);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setStatus("paused");
  }, []);

  const resume = useCallback(() => {
    audioRef.current
      ?.play()
      .then(() => setStatus("playing"))
      .catch(() => setStatus("blocked"));
  }, []);

  const replay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio
      .play()
      .then(() => setStatus("playing"))
      .catch(() => setStatus("blocked"));
  }, []);

  return (
    <VoiceOverContext.Provider value={{ status, play, pause, resume, replay }}>
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        preload="auto"
        onEnded={() => setStatus("ended")}
      />
      {children}
    </VoiceOverContext.Provider>
  );
}
