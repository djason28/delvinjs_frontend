import React, { useMemo, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "./Container";
import { Button } from "../ui/Button";
import { cn } from "../../lib/cn";
import { useActiveSection } from "../../lib/useActiveSection";
import { useScrollProgress } from "../../lib/useScrollProgress";
import { usePrefersReducedMotion } from "../../lib/usePrefersReducedMotion";

type NavItem = { id: string; label: string; };

export function Navbar({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(items.map(i => i.id));
  const progress = useScrollProgress();
  const reduce = usePrefersReducedMotion();

  const links = useMemo(() => items, [items]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* background */}
      <div className="backdrop-blur supports-[backdrop-filter]:bg-[color:color-mix(in_srgb,var(--bg)_85%,white)] border-b border-border">
        <Container className="h-[72px] flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary" aria-hidden />
            <span>Delvin Jason</span>
          </a>

          {/* desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={cn(
                  "px-3 py-2 text-sm rounded-full transition",
                  active === l.id
                    ? "bg-[color:color-mix(in_srgb,var(--secondary)_22%,white)]"
                    : "text-[color:color-mix(in_srgb,var(--text)_68%,transparent)] hover:bg-[color:color-mix(in_srgb,var(--secondary)_16%,white)]"
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="/assets/CV Delvin Jason.pdf" target="_blank" rel="noreferrer" className="hidden sm:block">
              <Button>
                <Download className="h-4 w-4" />
                Download CV
              </Button>
            </a>

            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface"
              onClick={() => setOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>

        {/* scroll progress bar */}
        <div className="h-[2px] bg-[color:color-mix(in_srgb,var(--secondary)_18%,white)]">
          <div className="h-full bg-[var(--primary)]" style={{ width: `${Math.round(progress * 100)}%` }} />
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -6 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            exit={reduce ? {} : { opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
            className="md:hidden border-b border-border bg-[color:color-mix(in_srgb,var(--bg)_92%,white)]"
          >
            <Container className="py-3 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-3 py-2 rounded-[var(--radius-lg)] text-sm transition",
                    active === l.id
                      ? "bg-[color:color-mix(in_srgb,var(--secondary)_22%,white)]"
                      : "hover:bg-[color:color-mix(in_srgb,var(--secondary)_16%,white)]"
                  )}
                >
                  {l.label}
                </a>
              ))}
              <a href="/assets/CV Delvin Jason.pdf" target="_blank" rel="noreferrer" className="mt-2">
                <Button className="w-full">
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
