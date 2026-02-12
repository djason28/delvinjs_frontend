import React from "react";
import { Container } from "../layout/Container";
import { Card, CardContent, CardHeader } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "../motion/Reveal";
import type { ExperienceItem } from "../../types";

export function Experience({ items }: { items: ExperienceItem[] }) {
  return (
    <section id="experience" className="py-14 sm:py-16">
      <Container>
        <SectionHeader
          title="Experience"
          subtitle="A timeline of teaching + development work, focused on outcomes."
        />

        <div className="space-y-4">
          {items.map((it, idx) => (
            <Reveal key={`${it.org}-${idx}`} delay={0.03}>
              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <div className="font-semibold">{it.role}</div>
                      <div className="text-sm text-muted">{it.org}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      {it.type && <Badge className="bg-[color:color-mix(in_srgb,var(--accent)_50%,white)]">{it.type}</Badge>}
                      <div className="text-sm text-muted">{it.dateRange}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-muted space-y-2">
                    {it.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
