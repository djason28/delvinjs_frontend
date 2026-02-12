import React from "react";
import { Github, Linkedin, Mail, ArrowDownRight } from "lucide-react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Reveal } from "../motion/Reveal";
import { Stagger, StaggerItem } from "../motion/Stagger";
import type { Profile } from "../../types";

export function Hero({ profile }: { profile: Profile }) {
  const quickBadges = ["Go", "Gin", "REST API", "React", "TypeScript", "MySQL", "English", "Mandarin"];

  return (
    <section id="top" className="hero-gradient">
      <Container className="pt-[96px] pb-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <h1 className="text-3xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                {profile.name}
              </h1>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="mt-3 text-lg sm:text-xl xl:text-2xl text-[color:color-mix(in_srgb,var(--text)_78%,transparent)]">
                {profile.title}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-5 text-muted leading-relaxed max-w-2xl">
                {profile.summary}
              </p>
            </Reveal>

            <div className="mt-6">
              <Stagger className="flex flex-wrap gap-2">
                {quickBadges.map((b) => (
                  <StaggerItem key={b}>
                    <Badge>{b}</Badge>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects">
                  <Button>
                    View Projects <ArrowDownRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="secondary">Contact</Button>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-muted">
                {profile.socials.email && (
                  <a className="inline-flex items-center gap-2 hover:underline" href={`mailto:${profile.socials.email}`}>
                    <Mail className="h-4 w-4" /> {profile.socials.email}
                  </a>
                )}
                {profile.socials.github && (
                  <a className="inline-flex items-center gap-2 hover:underline" href={profile.socials.github} target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                )}
                {profile.socials.linkedin && (
                  <a className="inline-flex items-center gap-2 hover:underline" href={profile.socials.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                )}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.12}>
              <div className="rounded-[var(--radius-xl)] border border-border bg-[color:color-mix(in_srgb,var(--surface)_92%,transparent)] shadow-[var(--shadow)] p-6">
                <div className="text-sm text-muted">Location</div>
                <div className="font-semibold">{profile.location ?? "—"}</div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-[var(--radius-lg)] border border-border p-4 bg-[color:color-mix(in_srgb,var(--accent)_55%,white)]">
                    <div className="text-xs text-muted">Focus</div>
                    <div className="font-semibold">Go + React</div>
                  </div>
                  <div className="rounded-[var(--radius-lg)] border border-border p-4 bg-[color:color-mix(in_srgb,var(--secondary)_30%,white)]">
                    <div className="text-xs text-muted">Languages</div>
                    <div className="font-semibold">EN + 中文</div>
                  </div>
                </div>

                <div className="mt-5 rounded-[var(--radius-lg)] border border-border p-4 bg-surface">
                  <div className="text-xs text-muted">What you can expect</div>
                  <ul className="mt-2 text-sm text-muted space-y-2">
                    <li>• Calm UI that’s easy to scan</li>
                    <li>• API-first thinking and clean data model</li>
                    <li>• Clear communication and documentation</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
