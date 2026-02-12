import React from "react";
import { Container } from "../layout/Container";
import { Card, CardContent, CardHeader } from "../ui/Card";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "../motion/Reveal";

export function About() {
  return (
    <section id="about" className="py-14 sm:py-16 bg-[color:color-mix(in_srgb,var(--bg)_65%,white)]">
      <Container>
        <SectionHeader
          title="About"
          subtitle="A short, clear introduction that blends engineering and communication."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <Reveal>
              <Card>
                <CardHeader>
                  <div className="text-sm text-muted">Introduction</div>
                  <div className="font-semibold">How I work</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted leading-relaxed">
                    I build dependable backend services in Go and pair them with calm, high-clarity React UIs.
                    My workflow focuses on strong data contracts, predictable behavior, and UX that helps users finish tasks fast.
                  </p>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-[var(--radius-lg)] border border-border p-4 bg-surface">
                      <div className="text-xs text-muted">Engineering</div>
                      <div className="mt-1 text-sm text-muted">API design, auth, caching, database modeling</div>
                    </div>
                    <div className="rounded-[var(--radius-lg)] border border-border p-4 bg-surface">
                      <div className="text-xs text-muted">Communication</div>
                      <div className="mt-1 text-sm text-muted">Teaching mindset, clear writing, bilingual support</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.06}>
              <Card>
                <CardHeader>
                  <div className="text-sm text-muted">Now</div>
                  <div className="font-semibold">What I’m focused on</div>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted space-y-2">
                    <li>• Building projects with real user feedback loops</li>
                    <li>• Improving Mandarin teaching content and pronunciation coaching</li>
                    <li>• Making UI more accessible (contrast, reduced motion support)</li>
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
