import React from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "../ui/Button";
import { Container } from "./Container";
import { usePrefersReducedMotion } from "../../lib/usePrefersReducedMotion";

export function Footer() {
  const reduce = usePrefersReducedMotion();

  return (
    <footer id="footer" className="py-10">
      <div id="footer-sentinel" className="h-px w-full" />
      <Container>
        <div className="section-divider mb-6" />
        <div className="text-sm text-muted flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Delvin Jason</div>

          <div className="flex gap-3">
            <Button
              id="footer-top-btn"
              variant="secondary"
              onClick={() => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })}
            >
              <ArrowUp className="h-4 w-4" />
              Back to top
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
