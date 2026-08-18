/**
 * Single source of truth for every factual claim on the site.
 *
 * Everything here is taken from material that already existed in this repo:
 *   - public/Boburov_Shukurillo_CV.pdf  (role, location, years, skills, level)
 *   - app/data/projects.ts              (products, stacks, outcomes)
 *   - the previous About / Contact / Footer components (education, links)
 *
 * Nothing is invented. Edit values here and the whole page follows.
 */

export const profile = {
  name: "Boburov Shukurillo",
  shortName: "Boburov",
  brand: "Boburov Shukurillo",
  handle: "@boburov",
  role: "Full-Stack Engineer",
  // CV: "Full-stack developer with around 2 years of hands-on experience"
  yearsExperience: "2+",
  // CV: "Strong Junior / Mid-Level Developer"
  level: "Strong Junior / Mid-Level",
  location: "Uzbekistan",
  // CV: "Location: Uzbekistan (Open to Remote)" / "Looking for remote opportunities"
  availability: "Available for work",
  availabilityDetail: "Open to remote roles, contract and freelance work",
  avatar: "https://avatars.githubusercontent.com/u/137058543?v=4",
  siteUrl: "https://www.boburov.uz",
  cv: "/Boburov_Shukurillo_CV.pdf",

  headline: "I build web, mobile and backend systems that real businesses run on.",

  // Derived from the CV's professional summary — same claims, tightened wording.
  summary:
    "Full-stack developer working across the whole product: interfaces in React and Next.js, APIs and business logic in Node.js and NestJS, relational data in PostgreSQL and Prisma, and cross-platform mobile in Flutter. Most of my work has been production software with paying users — an online course platform, an education-centre ERP, and automation bots.",
} as const;

export const contact = {
  email: "info@boburov.uz",
  phone: "+998 20 002 04 46",
  phoneHref: "tel:+998200020446",
  telegram: "@boburov_sh",
  telegramUrl: "https://t.me/boburov_sh",
  github: "https://github.com/boburov",
  linkedin: "https://linkedin.com/in/boburovdev",
  instagram: "https://instagram.com/boburov_sh",
} as const;

export type SocialLink = { label: string; href: string; handle: string };

export const socials: SocialLink[] = [
  { label: "GitHub", href: contact.github, handle: "boburov" },
  { label: "LinkedIn", href: contact.linkedin, handle: "boburovdev" },
  { label: "Telegram", href: contact.telegramUrl, handle: contact.telegram },
  { label: "Email", href: `mailto:${contact.email}`, handle: contact.email },
];

export const nav = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

/* -------------------------------------------------------------------------
   PROFESSIONAL SNAPSHOT
   Every number below is countable from projects.ts or stated in the CV.
   ---------------------------------------------------------------------- */

export type Stat = { value: string; label: string; note: string };

export const stats: Stat[] = [
  {
    value: "2+",
    label: "Years building software",
    note: "Web, mobile and backend",
  },
  {
    value: "6",
    label: "Products shipped",
    note: "4 live, 1 delivered, 1 in development",
  },
  {
    value: "3.3k+",
    label: "Users reached",
    note: "1.3k on Sevenedu, 2k on DexFilm",
  },
  {
    value: "3",
    label: "Roles covered",
    note: "Frontend, backend, mobile",
  },
];

/* -------------------------------------------------------------------------
   ABOUT
   ---------------------------------------------------------------------- */

export const about = {
  intro:
    "I'm a full-stack developer from Uzbekistan who builds production software end to end.",
  paragraphs: [
    "That means the whole stack: the database schema, the API and business logic on top of it, and the interface people actually use. Most of my experience comes from shipping and then maintaining real systems rather than from tutorials. Sevenedu, an online course platform, has been my main engagement for over a year: authentication, payments, video delivery, the quiz engine, the admin panel and the Flutter mobile client. Bayyina ERP put me in charge of a three-role system — admin, teacher, student — covering finance, attendance and reporting for an education centre.",
    "On the frontend I work in React, Next.js and TypeScript, with Tailwind CSS for styling. On the backend it's Node.js and NestJS, PostgreSQL modelled through Prisma, JWT-based authentication and REST APIs. For mobile I use Flutter and Dart, which lets one codebase serve iOS and Android. I deploy on Linux servers and Vercel, with Docker where it earns its place.",
    "The problems I enjoy most are the ones with a measurable answer. On Sevenedu, video delivery through AWS S3 and a CDN pushed the monthly bill from $100 to $500; moving the library to a cheaper provider brought that line to zero and made playback faster for users at the same time. That kind of constraint — cost, latency, a load the current design won't survive — is where I do my best work.",
    "My approach to architecture is deliberately unexciting: model the data first, keep boundaries between modules explicit, put authorisation at the API layer rather than the UI, and don't reach for infrastructure a project hasn't grown into yet. I'd rather write plain, readable code that the next person can change than something clever I have to explain.",
    "I'm currently looking for remote work where I can keep moving toward senior-level system design, and I take on selected freelance projects alongside it.",
  ],
} as const;

/* -------------------------------------------------------------------------
   EXPERIENCE
   Derived strictly from the engagements recorded in projects.ts.
   Add formal employment entries here as they happen.
   ---------------------------------------------------------------------- */

export type Experience = {
  role: string;
  org: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
  href?: string;
};

export const experience: Experience[] = [
  {
    role: "Full-Stack Developer (Lead)",
    org: "Sevenedu",
    period: "2025 — Present",
    location: "Uzbekistan · Remote",
    summary:
      "Lead developer on an online education platform, responsible for the web client, the backend and the Flutter mobile app.",
    highlights: [
      "Built the platform end to end: JWT authentication with refresh tokens, course and module management, an admin panel, a quiz engine with automatic grading, and Redis pub/sub notifications.",
      "Integrated Click and Payme so students can pay for courses directly in the product.",
      "Cut monthly video-hosting spend from $500 to zero by migrating the library off AWS S3 to a cheaper provider — and improved delivery speed for users in the process.",
      "Added Redis caching to carry a load of 1k+ concurrent active users.",
      "Extended the platform to iOS and Android with a single Flutter codebase, including offline lesson storage and FCM push notifications.",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Redis", "AWS S3", "Flutter", "Tailwind CSS"],
    href: "https://sevenedu.org",
  },
  {
    role: "Full-Stack Developer",
    org: "Bayyina Education Centre — ERP",
    period: "2026",
    location: "Uzbekistan · Remote",
    summary:
      "Designed and delivered a complete ERP for an education centre, covering finance, attendance, groups and scheduling.",
    highlights: [
      "Designed one secure backend serving three distinct roles — admin, teacher and student — with role-based access control.",
      "Built an attendance system with real-time updates and a queryable archive.",
      "Implemented financial reporting that aggregates large datasets efficiently rather than in the client.",
      "Modelled the domain in PostgreSQL through Prisma and containerised deployment with Docker.",
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Docker", "Tailwind CSS"],
  },
  {
    role: "Freelance Developer",
    org: "Independent",
    period: "2024 — Present",
    location: "Remote",
    summary:
      "Client and personal products: landing pages with business logic, Telegram automation, and small web apps.",
    highlights: [
      "PrimePrint — a book-printing landing page with a live price calculator that routes finished orders straight to the owner via a Telegram bot.",
      "DexFilm — a Telegram film bot serving 2k+ users, with channel-subscription access control, an admin panel and usage statistics.",
      "Built automation and management bots in Node.js and Python: scheduled posting, admin panels, statistics and user management.",
    ],
    stack: ["Next.js", "Node.js", "Telegraf", "Python", "Tailwind CSS"],
  },
];

export type Education = { title: string; org: string; note?: string };

export const education: Education[] = [
  { title: "Frontend Development", org: "WebKing Academy" },
  {
    title: "Backend Engineering",
    org: "Self-directed",
    note: "NestJS, PostgreSQL, system architecture",
  },
  { title: "Design & UX", org: "Self-directed" },
];

export type Language = { name: string; level: string };

export const languages: Language[] = [
  { name: "Uzbek", level: "Native" },
  // CV: "English — Technical working proficiency"
  { name: "English", level: "Technical working proficiency" },
];

/* -------------------------------------------------------------------------
   CORE EXPERTISE
   ---------------------------------------------------------------------- */

export type Expertise = { title: string; description: string; keywords: string[] };

export const expertise: Expertise[] = [
  {
    title: "Frontend Architecture",
    description:
      "Responsive, accessible interfaces in React, Next.js and TypeScript — App Router, server components and a styling system that stays consistent as a product grows.",
    keywords: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend Engineering",
    description:
      "REST APIs, authentication and business logic in Node.js and NestJS. JWT with refresh tokens, role-based access control, and caching where load demands it.",
    keywords: ["NestJS", "Node.js", "REST", "JWT", "Redis"],
  },
  {
    title: "Database Architecture",
    description:
      "Relational data models in PostgreSQL through Prisma — schema design, migrations and aggregation queries that stay fast as tables grow.",
    keywords: ["PostgreSQL", "Prisma", "MongoDB", "Supabase"],
  },
  {
    title: "Mobile Development",
    description:
      "Cross-platform iOS and Android apps from one Flutter codebase, talking to the same API as the web client, with offline storage and push notifications.",
    keywords: ["Flutter", "Dart", "FCM"],
  },
  {
    title: "Automation & Bots",
    description:
      "Telegram bots and automation scripts that sit inside real business workflows: order intake, scheduled posting, admin tooling and usage statistics.",
    keywords: ["Telegraf", "Node.js", "Python"],
  },
  {
    title: "Product Engineering",
    description:
      "Taking a product from idea through architecture and implementation to deployment on Linux servers and Vercel — then owning it once it's live.",
    keywords: ["Docker", "Linux", "Vercel", "CI basics"],
  },
];

/* -------------------------------------------------------------------------
   TECHNOLOGY STACK
   `icon` maps to a key in ./brand-paths.ts; omit it for a plain text entry.
   ---------------------------------------------------------------------- */

export type Tech = { name: string; icon?: string; note?: string };
export type StackGroup = { title: string; items: Tech[] };

export const stackGroups: StackGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: "react", note: "Hooks, composition" },
      { name: "Next.js", icon: "nextjs", note: "App Router" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript", note: "ES6+" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "Vite", icon: "vite" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "NestJS", icon: "nestjs" },
      { name: "Express", icon: "express" },
      { name: "REST APIs", note: "Design and integration" },
      { name: "JWT Auth", icon: "jwt", note: "Access + refresh tokens" },
      { name: "Python", icon: "python", note: "Automation scripts" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "PostgreSQL", icon: "postgres" },
      { name: "Prisma", icon: "prisma", note: "ORM and migrations" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Supabase", icon: "supabase" },
      { name: "Redis", icon: "redis", note: "Caching, pub/sub" },
    ],
  },
  {
    title: "Mobile",
    items: [
      { name: "Flutter", icon: "flutter", note: "iOS + Android" },
      { name: "Dart", icon: "dart" },
    ],
  },
  {
    title: "Infrastructure",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "Linux", icon: "linux", note: "VPS deployment" },
      { name: "Nginx", icon: "nginx" },
      { name: "AWS", note: "S3, storage migration" },
      { name: "Vercel", icon: "vercel" },
      { name: "CI basics" },
    ],
  },
  {
    title: "Tools & Integrations",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Figma", icon: "figma" },
      { name: "Telegram Bot API", icon: "telegram", note: "Telegraf" },
      { name: "Playwright", note: "End-to-end testing" },
      { name: "AI chat integration", note: "LLM-backed bot replies" },
    ],
  },
];

/* -------------------------------------------------------------------------
   WHAT I BUILD
   ---------------------------------------------------------------------- */

export type Service = { title: string; description: string };

export const services: Service[] = [
  {
    title: "Web Applications",
    description:
      "Production-ready applications in React and Next.js — dashboards, client portals and marketing sites with real logic behind them.",
  },
  {
    title: "Backend Systems",
    description:
      "REST APIs, authentication, permissions and database architecture built to be extended rather than rewritten.",
  },
  {
    title: "Business Management Systems",
    description:
      "ERP and CRM systems for education, finance and administration — multi-role access, reporting and day-to-day operations.",
  },
  {
    title: "Mobile Applications",
    description:
      "Cross-platform iOS and Android apps in Flutter, sharing one API with the web product.",
  },
  {
    title: "Automation & Bots",
    description:
      "Telegram bots and scripts that remove manual steps from a workflow: order intake, scheduling, reporting and admin tooling.",
  },
];
