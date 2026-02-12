import React, { useMemo, useState } from "react";
import { ExternalLink, Github, Search } from "lucide-react";
import { Container } from "../layout/Container";
import { Card, CardContent, CardHeader } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Modal } from "../ui/Modal";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "../motion/Reveal";
import { Stagger, StaggerItem } from "../motion/Stagger";
import type { Project } from "../../types";

export function Projects({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const tags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.stack.forEach((s) => set.add(s)));
    return ["All", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, [projects]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects
      .filter((p) => (tag === "All" ? true : p.stack.includes(tag)))
      .filter((p) => {
        if (!q) return true;
        return (
          p.title.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.stack.join(" ").toLowerCase().includes(q)
        );
      });
  }, [projects, query, tag]);

  const active = useMemo(
    () => projects.find((p) => p.id === openId) ?? null,
    [projects, openId],
  );

  return (
    <section
      id="projects"
      className="py-14 sm:py-16 bg-[color:color-mix(in_srgb,var(--bg)_70%,white)]"
    >
      <Container>
        <SectionHeader title="Projects" />

        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-6">
          <div className="w-full md:max-w-md relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted">
              <Search className="h-4 w-4" />
            </span>
            <Input
              className="pl-9"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects (title, stack, keywords)…"
              aria-label="Search projects"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 12).map((t) => (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={
                  "px-3 py-1.5 text-xs rounded-full border transition " +
                  (tag === t
                    ? "bg-[color:color-mix(in_srgb,var(--secondary)_22%,white)] border-border"
                    : "bg-surface border-border hover:bg-[color:color-mix(in_srgb,var(--secondary)_16%,white)]")
                }
              >
                {t}
              </button>
            ))}
            {tags.length > 12 && (
              <span className="text-xs text-muted self-center">
                (+{tags.length - 12} more)
              </span>
            )}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <Reveal key={p.id} delay={0.02}>
              <ProjectCard project={p} onOpen={() => setOpenId(p.id)} />
            </Reveal>
          ))}
        </div>

        <Modal
          open={!!active}
          onClose={() => setOpenId(null)}
          title={active?.title}
        >
          {active && (
            <div className="space-y-4">
              <div className="text-muted">{active.shortDescription}</div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <InfoBox label="Problem" value={active.problem} />
                <InfoBox label="Solution" value={active.solution} />
                <InfoBox label="Impact" value={active.impact} />
              </div>

              <div>
                <div className="text-sm font-medium mb-2">Stack</div>
                <div className="flex flex-wrap gap-2">
                  {active.stack.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {active.links?.github && (
                  <a
                    href={active.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="ghost">
                      <Github className="h-4 w-4" /> GitHub
                    </Button>
                  </a>
                )}
                {active.links?.demo && (
                  <a href={active.links.demo} target="_blank" rel="noreferrer">
                    <Button variant="ghost">
                      <ExternalLink className="h-4 w-4" /> Demo
                    </Button>
                  </a>
                )}
                {active.links?.caseStudy && (
                  <a
                    href={active.links.caseStudy}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="secondary">
                      <ExternalLink className="h-4 w-4" /> Case Study
                    </Button>
                  </a>
                )}
              </div>
            </div>
          )}
        </Modal>
      </Container>
    </section>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <Card className="h-full hover:translate-y-[-2px] transition">
      <CardHeader>
        <div className="text-sm text-muted">
          {project.year ?? "—"} {project.role ? `• ${project.role}` : ""}
        </div>
        <div className="font-semibold">{project.title}</div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted leading-relaxed">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 6).map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>

        <div className="mt-5">
          <Button onClick={onOpen} className="w-full">
            View details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function InfoBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-border p-4 bg-[color:color-mix(in_srgb,var(--accent)_35%,white)]">
      <div className="text-xs text-muted">{label}</div>
      <div className="mt-1 text-sm text-foreground leading-relaxed">
        {value}
      </div>
    </div>
  );
}
