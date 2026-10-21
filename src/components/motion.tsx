"use client";

import { MotionConfig, motion, useReducedMotion } from "motion/react";
import { createContext, useContext, useState, type ReactNode } from "react";

const LoadContext = createContext<{
  loaded: boolean;
  setLoaded: (v: boolean) => void;
}>({ loaded: true, setLoaded: () => {} });

export const useLoad = () => useContext(LoadContext);

export function MotionProvider({ children }: { children: ReactNode }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <LoadContext value={{ loaded, setLoaded }}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LoadContext>
  );
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

// Yellow marker sweep. Waits for the loading screen; reduced motion skips the sweep.
export function Highlight({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const { loaded } = useLoad();
  const full = reduce || loaded;
  return (
    <motion.mark
      className="bg-no-repeat px-1 text-inherit [box-decoration-break:clone]"
      style={{
        backgroundImage:
          "linear-gradient(var(--color-yellow), var(--color-yellow))",
      }}
      initial={reduce ? false : { backgroundSize: "0% 100%" }}
      animate={{ backgroundSize: full ? "100% 100%" : "0% 100%" }}
      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
    >
      {children}
    </motion.mark>
  );
}
