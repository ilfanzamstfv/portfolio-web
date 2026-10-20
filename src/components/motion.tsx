"use client";

import { MotionConfig, motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

// Fade-up once as the block enters the viewport (design.md §7).
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  );
}

// Static tilt that wiggles two degrees on hover: stickers and polaroid.
export function Tilt({
  rotate,
  className,
  children,
}: {
  rotate: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      className={className}
      style={{ rotate }}
      whileHover={{ rotate: rotate + 2 }}
    >
      {children}
    </motion.div>
  );
}

// Yellow marker sweep, once on load. Reduced motion skips the sweep.
export function Highlight({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.mark
      className="bg-no-repeat px-1 text-inherit [box-decoration-break:clone]"
      style={{
        backgroundImage:
          "linear-gradient(var(--color-yellow), var(--color-yellow))",
      }}
      initial={reduce ? false : { backgroundSize: "0% 100%" }}
      animate={{ backgroundSize: "100% 100%" }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.mark>
  );
}
