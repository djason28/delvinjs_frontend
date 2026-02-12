import React, { useMemo, useState } from "react";
import { Container } from "../layout/Container";
import { Card, CardContent, CardHeader } from "../ui/Card";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "../motion/Reveal";
import type { Profile } from "../../types";

export function Contact({ profile }: { profile: Profile }) {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const email = profile.socials.email ?? "you@example.com";

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(
      `Portfolio inquiry — ${name || "Someone"}`,
    );
    const body = encodeURIComponent(`${msg}\n\n— ${name}`);
    return `mailto:${email}?subject=${subject}&body=${body}`;
  }, [email, name, msg]);

  return (
    <section id="contact" className="py-14 sm:py-16">
      <Container>
        <SectionHeader title="Contact" subtitle="Send a quick message." />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Temporary commented out: Collaborate form to be integrated with backend later
          <div className="lg:col-span-7">
            <Reveal>
              <Card>
                <CardHeader>
                  <div className="text-sm text-muted">Message</div>
                  <div className="font-semibold">Let’s collaborate</div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
                  <Textarea value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="What do you want to build?" />
                  <a href={mailto}>
                    <Button className="w-full">Open Email Client</Button>
                  </a>
                </CardContent>
              </Card>
            </Reveal>
          </div>
  */}

          <div className="lg:col-span-12">
            <Reveal delay={0.06}>
              <Card>
                <CardHeader>
                  <div className="text-sm text-muted">Direct</div>
                  <div className="font-semibold">Reach Me</div>
                </CardHeader>
                <CardContent className="space-y-2 text-muted">
                  <div>
                    Email:{" "}
                    <a
                      className="text-primary hover:underline"
                      href={`mailto:${email}`}
                    >
                      {email}
                    </a>
                  </div>
                  {profile.socials.github && (
                    <div>
                      GitHub:{" "}
                      <a
                        className="text-primary hover:underline"
                        href={profile.socials.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        djason28
                      </a>
                    </div>
                  )}
                  {profile.socials.linkedin && (
                    <div>
                      LinkedIn:{" "}
                      <a
                        className="text-primary hover:underline"
                        href={profile.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Delvin Jason
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
