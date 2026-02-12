import React from "react";
import { Container } from "../layout/Container";
import { Card, CardContent, CardHeader } from "../ui/Card";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "../motion/Reveal";
import type { EducationItem } from "../../types";

export function Education({ items }: { items: EducationItem[] }) {
  return (
    <section id="education" className="py-14 sm:py-16 bg-[color:color-mix(in_srgb,var(--bg)_70%,white)]">
      <Container>
        <SectionHeader
          title="Education"
          subtitle="Academic background and relevant notes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((e, idx) => (
            <Reveal key={`${e.school}-${idx}`} delay={0.03}>
              <Card>
                <CardHeader>
                  <div className="font-semibold">{e.school}</div>
                  <div className="text-sm text-muted">{e.program}</div>
                  <div className="text-sm text-muted">{e.dateRange}</div>
                </CardHeader>
                <CardContent>
                  {e.notes?.length ? (
                    <ul className="list-disc pl-5 text-muted space-y-2">
                      {e.notes.map((n) => <li key={n}>{n}</li>)}
                    </ul>
                  ) : (
                    <div className="text-muted">—</div>
                  )}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
