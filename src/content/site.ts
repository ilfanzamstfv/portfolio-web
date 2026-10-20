import type { Tint } from "@/lib/tint";

// Placeholder copy from the design reference. Empty URLs render as plain, non-clickable text.
export const site = {
  name: "[Your Name]",
  city: "[City]",
  role: "Frontend Developer",
  availability: {
    open: true,
    text: "Open to Frontend roles · [City] · Remote OK",
  },
  links: { github: "", linkedin: "", email: "", cv: "" },
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
      stack: ["React", "TypeScript", "Next.js"],
      cares: ["a11y", "performance"],
    },
    stickers: { top: "clean code", bottom: "pixel-perfect" },
  },
  about: {
    title: "I care about the details users never notice.",
    paragraphs: [
      "I'm a frontend developer with [X] years of experience building web apps with React and TypeScript. I like the space between design and engineering: making layouts feel right, interactions feel quick and pages usable for everyone.",
      "Outside work, [a line about a hobby or side project that shows personality].",
    ],
    meta: [
      { label: "Location", value: "[City, Country]" },
      { label: "Focus", value: "React · TypeScript · UI" },
      { label: "Available", value: "[Month, Year]" },
      { label: "Languages", value: "[Indonesian, English]" },
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
        items: ["Tailwind", "Sass", "Figma", "Framer Motion"],
      },
      {
        name: "Quality & Tools",
        tint: "pink" as Tint,
        items: ["Git", "Jest", "Playwright", "WCAG / a11y"],
      },
    ],
    learning:
      "Currently learning: [e.g. Astro, WebGL] — edit this list to match your real stack.",
  },
  projects: {
    title: "Selected work.",
    featured: {
      label: "Featured · [Year]",
      title: "[Project one]",
      description:
        "[One sentence on the problem and what you built.] Built with a focus on performance and accessibility.",
      points: [
        "My role: [e.g. sole frontend developer]",
        "Result: [e.g. LCP from 4.2s to 1.8s]",
      ],
      tags: ["React", "TypeScript", "Tailwind"],
      shot: "[project 01 screenshot]",
      demo: "",
      source: "",
    },
    others: [
      {
        title: "[Project two]",
        description: "[One-line description and your outcome.]",
        tags: ["Next.js", "REST API"],
        shot: "[project 02 screenshot]",
        tint: "yellow" as Tint,
        demo: "",
        source: "",
      },
      {
        title: "[Project three]",
        description: "[One-line description and your outcome.]",
        tags: ["Vue", "Design system"],
        shot: "[project 03 screenshot]",
        tint: "green" as Tint,
        demo: "",
        source: "",
      },
    ],
  },
  experience: {
    title: "Where I've worked.",
    rows: [
      {
        period: "[2024] — Present",
        title: "Frontend Developer · [Company A]",
        points: [
          "[Built X feature used by N users, improving Y by Z%]",
          "[Led migration from A to B, cutting bundle size by N%]",
          "[Collaborated with design and backend on …]",
        ],
      },
      {
        period: "[2022] — [2024]",
        title: "Junior Frontend Developer · [Company B]",
        points: [
          "[Shipped N responsive pages from Figma designs]",
          "[Introduced testing, raising coverage to N%]",
        ],
      },
      {
        period: "[2021] — [2022]",
        title: "[Internship / Freelance / Education]",
        points: ["[Short line on what you did or studied.]"],
      },
    ],
  },
  contact: {
    title: "Let's build something good together.",
    intro:
      "I'm looking for a Frontend Developer role. Email me or send a note and I'll reply within [48 hours].",
    emailLabel: "hello@[yourdomain].com",
  },
  footer: {
    left: "© [Year] [Your Name]",
    right: "Built with HTML, CSS & a lot of coffee",
  },
};
