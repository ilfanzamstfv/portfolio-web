"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect } from "react";

import { Highlight, useLoad } from "@/components/motion";
import { site } from "@/content/site";

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

// Full-screen cover from first paint until fonts and images are ready: at least 700ms (no flash), at most 2.5s (never stuck).
export function Loader() {
  const { loaded, setLoaded } = useLoad();
  const reduce = useReducedMotion();

  useEffect(() => {
    const html = document.documentElement;
    html.style.overflow = "hidden";
    const images = [...document.images].map((i) => i.decode().catch(() => {}));
    Promise.race([
      Promise.all([document.fonts.ready, ...images, wait(700)]),
      wait(2500),
    ]).then(() => {
      html.style.overflow = "";
      setLoaded(true);
    });
    return () => {
      html.style.overflow = "";
    };
  }, [setLoaded]);

  return (
    <AnimatePresence>
      {!loaded && (
        <motion.div
          id="loader"
          role="status"
          aria-label="Loading"
          className="fixed inset-0 z-100 grid place-items-center bg-paper"
          exit={
            reduce
              ? { opacity: 0, transition: { duration: 0.2 } }
              : {
                  y: "-100%",
                  transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
                }
          }
        >
          <div className="text-center">
            <p className="text-[clamp(2.25rem,6vw,4rem)] leading-none font-bold tracking-tight">
              <Highlight immediate>{site.name}</Highlight>
            </p>
            <p className="mt-6 font-mono text-xl text-ink-mute">Cooking…</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
