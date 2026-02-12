import React from "react";
import { usePortfolioData } from "./lib/usePortfolioData";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Education } from "./components/sections/Education";
import { Contact } from "./components/sections/Contact";
import { Separator } from "./components/ui/Separator";
import { BackToTop } from "./components/BackToTop";

export default function App() {
  const { data, loading, error } = usePortfolioData();

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar items={navItems} />

      {error && (
        <div className="pt-[74px]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mt-3 rounded-[var(--radius-lg)] border border-border bg-[color:color-mix(in_srgb,var(--secondary)_22%,white)] p-3 text-sm">
              <span className="font-semibold">Notice:</span> {error}
            </div>
          </div>
        </div>
      )}

      {/* Hero already includes its own top padding for fixed nav */}
      <Hero profile={data.profile} />

      <main id="content">
        <About />
        <Separator />
        <Skills skills={data.skills} />
        <Separator />
        <Projects projects={data.projects} />
        <Separator />
        <Experience items={data.experience} />
        <Separator />
        <Education items={data.education} />
        <Separator />
        <Contact profile={data.profile} />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
