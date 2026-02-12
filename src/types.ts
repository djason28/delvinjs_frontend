export type Socials = {
  email?: string;
  github?: string;
  linkedin?: string;
  whatsapp?: string;
};

export type Profile = {
  name: string;
  title: string;
  location?: string;
  summary: string;
  highlights: string[];
  socials: Socials;
};

export type SkillGroup = { title: string; items: string[]; };

export type LanguageSkill = { name: string; level: string; note?: string; };

export type Skills = {
  technical: SkillGroup[];
  languages: LanguageSkill[];
  communication: string[];
};

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  problem: string;
  solution: string;
  impact: string;
  year?: string;
  role?: string;
  stack: string[];
  links?: { github?: string; demo?: string; caseStudy?: string };
  featured?: boolean;
};

export type ExperienceItem = {
  org: string;
  role: string;
  dateRange: string;
  bullets: string[];
  type?: "work" | "tutor" | "freelance" | "volunteer";
};

export type EducationItem = {
  school: string;
  program: string;
  dateRange: string;
  notes?: string[];
};

export type PortfolioData = {
  profile: Profile;
  skills: Skills;
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
};
