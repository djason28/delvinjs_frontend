import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useShowOnScroll } from "../lib/useShowOnScroll";
import { usePrefersReducedMotion } from "../lib/usePrefersReducedMotion";

export function BackToTop() {
  const show = useShowOnScroll(700);
  const reduce = usePrefersReducedMotion();
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("footer-sentinel");
    if (!sentinel) return;

    const io = new IntersectionObserver(
      ([entry]) => setFooterInView(entry.isIntersecting),
      { threshold: 0 }
    );

    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {show && !footerInView && (
        <motion.a
          href="#top"
          aria-label="Back to top"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={reduce ? {} : { opacity: 1, y: 0 }}
          exit={reduce ? {} : { opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center h-11 w-11 rounded-full border border-border bg-surface shadow-[var(--shadow)] hover:translate-y-[-2px] transition"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
