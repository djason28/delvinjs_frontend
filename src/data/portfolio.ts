import type { PortfolioData } from "../types";

export const portfolioData: PortfolioData = {
  profile: {
    name: "Delvin Jason",
    title: "Golang Backend / Full-Stack (Go + React)",
    location: "Batam, Indonesia",
    summary:
      "I build reliable Go services and calm, fast React interfaces — backed by strong communication skills and bilingual ability (English & Mandarin).",
    highlights: [
      "Go • Gin • REST API • Auth/JWT",
      "React • TypeScript • Tailwind • Motion",
      "English + Mandarin • Teaching mindset",
    ],
    socials: {
      email: "delvinjason28.tio@gmail.com",
      github: "https://github.com/djason28",
      linkedin: "https://linkedin.com/in/delvin-jason-8535612b6",
    },
  },
  skills: {
    technical: [
      {
        title: "AI & Data",
        items: ["Gemini AI", "Python", "AI Training", "Data Analysis"],
      },
      {
        title: "Backend",
        items: ["Go", "REST API"],
      },
      {
        title: "Frontend",
        items: ["React", "TypeScript"],
      },
    ],
    languages: [
      { name: "English", level: "Intermediate", note: "Certified TOEIC" },
      {
        name: "Mandarin (中文)",
        level: "Advanced",
        note: "Certified HSK 5 + Tutor-focused communication",
      },
    ],
    communication: ["English", "Mandarin", "Indonesian"],
  },
  projects: [
    {
      id: "aku-ai",
      title: "AkuAI - Campus AI Assistant",
      shortDescription:
        "Campus-specific AI assistant for students using Gemini.",
      problem:
        "Students struggle to find specific campus information scattered across different sources.",
      solution:
        "Integrated Gemini AI with campus data to provide instant, accurate answers via a chat interface.",
      impact:
        "Simplified access to campus information, enhancing student experience.",
      year: "2025",
      role: "Full-stack",
      stack: ["Go", "React", "Gemini AI"],
      featured: true,
    },
    {
      id: "academy-ai",
      title: "AcademyAI - Statistical Prompt Generator",
      shortDescription:
        "AI Text Prompt generator based on campus statistical data.",
      problem:
        "Raw statistical data is hard to interpret and use for content generation.",
      solution:
        "Trained an AI model to generate meaningful text prompts from complex campus statistics.",
      impact:
        "Enabled automated, data-driven content creation from raw statistical inputs.",
      year: "2025",
      role: "AI Training (Python)",
      stack: ["Python", "AI Training", "Data Analysis"],
      featured: true,
    },
    {
      id: "rent-n-go",
      title: "Rent n Go - Travel Schedule Assistant",
      shortDescription:
        "Indonesia travel schedule assistant with Gemini recommendations.",
      problem:
        "Planning travel schedules in Indonesia is time-consuming with fragmented information.",
      solution:
        "Built a smart assistant using Go and Gemini to recommend optimized travel itineraries.",
      impact:
        "Streamlined trip planning with personalized, AI-driven recommendations.",
      year: "2025",
      role: "Backend & AI Integration",
      stack: ["Go", "Gemini AI", "REST API"],
      featured: true,
    },
    {
      id: "best-travel",
      title: "BEST Travel - Bintan Travel Platform",
      shortDescription:
        "Travel website for Bintan with WhatsApp booking integration.",
      problem:
        "Managing travel packages and bookings manually via WhatsApp is inefficient.",
      solution:
        "Developed a comprehensive platform for package management and WhatsApp integration.",
      impact:
        "Digitalized the booking process and improved operational efficiency.",
      year: "2025",
      role: "Full-stack",
      stack: ["React", "Go"],
      featured: true,
    },
  ],
  experience: [
    {
      org: "Private Tutoring",
      role: "Mandarin Tutor",
      dateRange: "2025 — Present",
      bullets: [
        "Designed lesson plans and speaking drills tailored per student",
        "Improved pronunciation with structured feedback and repetition routines",
        "Created concise learning materials for HSK and conversation practice",
      ],
      type: "tutor",
    },
    {
      org: "Personal/Academic Projects",
      role: "Full-Stack Developer (Go + React)",
      dateRange: "2023 — Present",
      bullets: [
        "Built REST APIs with Go (Gin) and integrated with React frontends",
        "Emphasized clean data models, reliability, and readable UI flow",
        "Documented features and communicated clearly with stakeholders",
      ],
      type: "work",
    },
  ],
  education: [
    {
      school: "International Batam University",
      program: "Information Systems",
      dateRange: "2022 — 2025",
      notes: ["Focus: backend systems, applied research, and web development"],
    },
  ],
};
