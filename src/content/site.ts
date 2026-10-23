import type { Tint } from "@/lib/tint";

// Placeholder copy from the design reference. Empty URLs render as plain, non-clickable text.
export const site = {
  name: "Ilfanza",
  city: "[South Tangerang]",
  role: "[Frontend Developer, UI/UX Designer]",
  availability: {
    open: true,
    text: "Open to Work · Onsite · Remote OK",
  },
  links: {
    github: "https://github.com/ilfanzamstfv",
    linkedin: "https://www.linkedin.com/in/ilfanza",
    email: "ilfanzamustafavi@gmail.com",
    cv: "https://drive.google.com/file/d/16w9aeO-lN8ge6leO8YUdr7KBe0EwWrcW/view?usp=sharing",
  },
  nav: [
    { label: "about", href: "#about" },
    { label: "skills", href: "#skills" },
    { label: "projects", href: "#projects" },
    { label: "experience", href: "#experience" },
  ],
  hero: {
    headline: [
      "Frontend developer who ships ",
      { mark: "fast," },
      " ",
      { mark: "accessible" },
      " interfaces.",
    ] as (string | { mark: string })[],
    intro:
      "I turn designs into polished React and TypeScript products that load quickly, work for everyone and are easy for a team to maintain.",
    code: {
      stack: ["React", "TypeScript", "Next.js", "JavaScript"],
      cares: ["Limit Usage"],
    },
    stickers: { top: "clean code", bottom: "pixel-perfect" },
  },
  about: {
    photo: "/profile.jpg",
    title: "I care about the details users never notice.",
    paragraphs: [
      "I'm a frontend developer with 2 years of experience building web apps with React and TypeScript. I like the space between design and engineering: making layouts feel right, interactions feel quick and pages usable for everyone.",
      "Outside work, I enjoy running and playing badminton, while reading is part of my daily routine to broaden my vocabulary and knowledge. I also continuously improve my coding skills by working on a variety of projects.",
    ],
    meta: [
      { label: "Location", value: "South Tangerang, Indonesia" },
      { label: "Focus", value: "React · TypeScript · UI" },
      { label: "Available", value: "Full time, Freelance, Remote" },
      { label: "Languages", value: "Indonesian, English" },
    ],
  },
  skills: {
    title: "The toolkit I reach for.",
    groups: [
      {
        name: "Core",
        tint: "blue" as Tint,
        items: ["HTML", "CSS", "JavaScript", "TypeScript"],
      },
      {
        name: "Frameworks",
        tint: "yellow" as Tint,
        items: ["React", "Next.js", "Vue", "Node.js"],
      },
      {
        name: "UI & Styling",
        tint: "green" as Tint,
        items: ["Tailwind", "Canva", "Figma", "Framer Motion", "Motion Dev"],
      },
      {
        name: "Quality & Tools",
        tint: "pink" as Tint,
        items: ["Git", "Claude", "Codex", "Notion"],
      },
    ],
    learning: "Currently learning: Express JS, Golang, and Flask.",
  },
  projects: {
    title: "Selected work.",
    featured: {
      label: "Featured · 2026",
      title: "Authora Assets Management",
      description:
        "Authora is a React-based asset management dashboard for handling authentication, inventory data, stock monitoring, purchase records, master data, users, roles, and permission-based access.",
      points: ["My role: Fullstack developer", "Status : Under Development"],
      tags: ["React", "TypeScript", "Tailwind", "Express", "Node"],
      shot: "/authora.png",
      demo: "",
      source: "https://github.com/ilfanzamstfv/assets-management-project",
    },
    others: [
      {
        title: "DinePos",
        description:
          "DinePos is a Point of Sale (POS) app for the food and beverage industry built with Next.js. The app features a menu catalog, category selection, an order cart, checkout via Midtrans Snap, as well as a login page and dashboard for administrative purposes.",
        tags: ["Next.js", "Midtrans"],
        shot: "/dinepos.png",
        tint: "yellow" as Tint,
        demo: "",
        source: "https://github.com/ilfanzamstfv/DinePos-web",
      },
      {
        title: "Cafinity",
        description:
          "Cafinity is a website to help coffee lovers find cafes near you, based on your preferences and recommendations.",
        tags: ["Next.js", "Supabase"],
        shot: "/cafinity.png",
        tint: "green" as Tint,
        demo: "",
        source: "https://github.com/ilfanzamstfv/cafe-recommendation",
      },
    ],
  },
  experience: {
    title: "Where I've worked.",
    rows: [
      {
        period: "2026 — Present",
        title: "Frontend Developer Contract · Asa Kreasi Interasia",
        points: [
          "Contributed to the development of an Enterprise Resource Planning (ERP) website, serving as a UI/UX Designer, Front-End Developer and Back-End Developer.",
        ],
      },
      {
        period: "2025 — 2026",
        title: "Frontend Developer Internship · Asa Kreasi Interasia",
        points: [
          "Contributed to the development of an Enterprise Resource Planning (ERP) website, serving as a UI/UX Designer and Front-End Developer.",
        ],
      },
      {
        period: "2024",
        title:
          "Full Stack Developer Internship · PT.Brainlens Rekayasa Konsultan",
        points: [
          "Working as a full stack website application developer, created a logistics data management website application using Next.JS and Supabase.",
        ],
      },
      {
        period: "2023",
        title:
          "Information Technology System Support Internship · Global Jaya School",
        points: [
          "Re-installation of Windows and macOS operating systems",
          "installation of CCTV systems integrated with software",
          "building a private server using IBM systems.",
        ],
      },
    ],
  },
  contact: {
    title: "Let's build something good together.",
    intro:
      "I'm looking for a Frontend Developer role or anything. Email me or send a note and I'll reply immediately.",
    emailLabel: "ilfanzamustafavi@gmail.com",
    timezone: "WIB (UTC+7)",
  },
  footer: {
    left: `© ${new Date().getFullYear()} Ilfanza`,
    right: "Built with React, Next JS, Tailwind & a lot of coffee",
  },
  loading: {
    logo: "/logo-symbol.svg",
    subtitle: "Cooking...",
  },
};
