"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect } from "react";

import { useLoad } from "@/components/motion";
import { site } from "@/content/site";

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

// Full-screen cover from first paint until fonts and images are ready: at least 700ms (no flash), at most 2.5s (never stuck).
export function Loader() {
  const { loaded, setLoaded } = useLoad();
  const reduce = useReducedMotion();

  useEffect(() => {
    const images = [...document.images].map((i) => i.decode().catch(() => {}));
    Promise.race([
      Promise.all([document.fonts.ready, ...images, wait(700)]),
      wait(2500),
    ]).then(() => setLoaded(true));
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
            <motion.div
              initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              <Image
                src={site.loading.logo}
                alt=""
                width={512}
                height={512}
                priority
                className="mx-auto size-32 sm:size-40"
              />
            </motion.div>
            <p className="mt-6 font-mono text-xl text-ink-mute">
              {site.loading.subtitle}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
