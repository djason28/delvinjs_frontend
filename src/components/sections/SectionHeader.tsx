import React from "react";
import { Reveal } from "../motion/Reveal";

export function SectionHeader({
  title,
  subtitle
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.05}>
          <p className="mt-2 text-muted max-w-2xl">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
