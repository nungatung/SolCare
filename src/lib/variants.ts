import { Variants } from "framer-motion";

// ─────────────────────────────────────────────────────────────────────────────
// Drop-in replacement for the fadeUp and fadeIn variant definitions
// in page-redesigned.tsx. The fix is typing the ease value as a
// const tuple [number, number, number, number] so TypeScript
// recognises it as a valid Framer Motion Easing type.
// ─────────────────────────────────────────────────────────────────────────────

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: EASE,
    },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.55,
      delay: i * 0.07,
      ease: EASE,
    },
  }),
};