"use client";

import { useEffect, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../public/animations/solarpal.json";

// ─────────────────────────────────────────────────────────────
// SolarPal animation states — expand these as you build out
// the app logic. For now it loops the idle state on the hero.
// ─────────────────────────────────────────────────────────────
export type SolarPalState = "idle" | "thinking" | "happy" | "alert";

interface SolarPalProps {
  state?: SolarPalState;
  size?: number; // px — defaults to 180
  className?: string;
}

// Frame ranges — update these once you have multi-state animations.
// For a single-animation JSON, the whole thing plays as idle.
const STATE_FRAMES: Record<SolarPalState, { start: number; end: number; loop: boolean }> = {
  idle:     { start: 0,   end: 120, loop: true  },
  thinking: { start: 121, end: 200, loop: true  },
  happy:    { start: 201, end: 260, loop: false },
  alert:    { start: 261, end: 320, loop: true  },
};

export default function SolarPal({
  state = "idle",
  size = 250,
  className = "",
}: SolarPalProps) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    const anim = lottieRef.current;
    if (!anim) return;

    const { start, end, loop } = STATE_FRAMES[state];
    
    anim.playSegments([start, end], true);
  }, [state]);

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-label="SolarPal, your AI solar companion"
      role="img"
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: size, height: size }}
      />
    </div>
  );
}