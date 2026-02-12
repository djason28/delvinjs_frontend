import React from "react";
import { motion } from "motion/react";
import { usePrefersReducedMotion } from "../../lib/usePrefersReducedMotion";

export function Stagger({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduce = usePrefersReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 1 },
        show: { opacity: 1, transition: { staggerChildren: 0.08 } }
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduce = usePrefersReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.2, 0.8, 0.2, 1] } }
      }}
    >
      {children}
    </motion.div>
  );
}
