import React from "react";
import { Container } from "../layout/Container";
import { Card, CardContent, CardHeader } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "../motion/Reveal";
import type { Skills as SkillsType } from "../../types";

export function Skills({ skills }: { skills: SkillsType }) {
  return (
    <section id="skills" className="py-14 sm:py-16">
      <Container>
        <SectionHeader
          title="Skills"
          subtitle="A compact view of technical skills, languages, and communication strengths."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <Reveal>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="text-sm text-muted">Technical</div>
                <div className="font-semibold">Go + Web stack</div>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.technical.map((g) => (
                  <div key={g.title}>
                    <div className="text-sm font-medium">{g.title}</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {g.items.map((it) => <Badge key={it}>{it}</Badge>)}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.06}>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="text-sm text-muted">Languages</div>
                <div className="font-semibold">English & Mandarin</div>
              </CardHeader>
              <CardContent className="space-y-3">
                {skills.languages.map((l) => (
                  <div key={l.name} className="rounded-[var(--radius-lg)] border border-border p-4 bg-[color:color-mix(in_srgb,var(--accent)_30%,white)]">
                    <div className="flex items-center justify-between gap-2">
                      <div className="font-medium">{l.name}</div>
                      <Badge className="bg-[color:color-mix(in_srgb,var(--secondary)_24%,white)]">{l.level}</Badge>
                    </div>
                    {l.note && <div className="mt-1 text-sm text-muted">{l.note}</div>}
                  </div>
                ))}
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.12}>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="text-sm text-muted">Communication</div>
                <div className="font-semibold">Teaching & marketing language</div>
              </CardHeader>
              <CardContent className="space-y-2">
                {skills.communication.map((c) => (
                  <div key={c} className="flex items-center gap-2 text-muted">
                    <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                    <span>{c}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
