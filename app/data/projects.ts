import { StaticImageData } from "next/image";

import sevenedu from "../../assets/sevenedu.png";
import primeprint from "../../assets/primeprint.png";
import seveneduMobile from "../../assets/sevenedu_mobile.png";
import dexfilm from "../../assets/dexfilm.png";
import bayyinaAdmin from "../../assets/bayyina_admin.png";
import bayyinaStudent from "../../assets/bayyina_student.png";
import bayyinaTeacher from "../../assets/bayyina_teacher.png";
import intelaHelp from "../../assets/intela_help.png";
import intelaMain from "../../assets/intela.png";

export type ProjectStatus = "Live" | "In Development" | "Delivered" | "Personal";

export type Project = {
  id: number;
  slug: string;
  img: StaticImageData;
  images: StaticImageData[];
  projectName: string;
  tagline: string;
  /** The problem the product exists to solve. */
  problem: string;
  description: string;
  longDescription: string;
  role: string;
  duration: string;
  year: string;
  status: ProjectStatus;
  /** Featured projects get a full-width editorial row; the rest get a compact one. */
  featured: boolean;
  features: string[];
  challenges: string[];
  results: { label: string; value: string }[];
  usingLanguage: string[];
  type: "project";
  gitHb: string;
  netlify: string;
};

export const projects: Project[] = [
  {
    id: 0,
    slug: "sevenedu",
    img: sevenedu,
    images: [sevenedu],
    projectName: "Sevenedu",
    tagline: "Online education platform — 1.3k+ users, 1bn+ so'm in turnover",
    problem:
      "Course providers in Uzbekistan had no single place to sell courses, deliver video lessons, test students and track their progress.",
    description:
      "An online learning platform I have been building and running for over a year. It now serves 1.3k registered users, around 1k of them active, and has generated more than 1 billion so'm in turnover.",
    longDescription:
      "Sevenedu is an online education platform built for the Uzbek market. Students enrol in courses, watch video lessons, take tests and receive certificates. I built both the frontend and the backend: authentication, payments, course management, video streaming and the admin panel. The platform has been running for over a year and has generated more than 1 billion so'm in turnover.",
    role: "Full-Stack Developer (Lead)",
    duration: "1+ year",
    year: "2025 — Present",
    status: "Live",
    featured: true,
    features: [
      "JWT authentication with refresh tokens",
      "Course and module management through an admin panel",
      "Video streaming and storage",
      "Payments via Click and Payme",
      "Quiz engine with automatic grading",
      "Real-time notifications over Redis pub/sub",
      "Responsive UI across phone, tablet and desktop",
    ],
    challenges: [
      "Delivering large video files efficiently. AWS S3 plus a CDN solved the delivery problem but pushed the monthly bill from $100 to $500. I migrated the video library to a cheaper provider, which brought the monthly server cost for that line to zero and made playback faster for users at the same time.",
      "Carrying a load of 1k+ active users, addressed with Redis caching.",
    ],
    results: [
      { label: "Registered users", value: "1.3k+" },
      { label: "Active users", value: "1k+" },
      { label: "Turnover", value: "1bn+ so'm" },
      { label: "Video hosting cost", value: "$500 → $0 / mo" },
    ],
    usingLanguage: ["nextjs", "nestjs", "tailwind", "redis", "postgres", "aws"],
    type: "project",
    gitHb: "https://github.com/boburov",
    netlify: "https://sevenedu.org",
  },
  {
    id: 4,
    slug: "bayyina-erp",
    img: bayyinaAdmin,
    images: [bayyinaAdmin, bayyinaTeacher, bayyinaStudent],
    projectName: "Bayyina ERP",
    tagline: "Education-centre ERP with admin, teacher and student panels",
    problem:
      "An education centre was tracking finance, attendance, groups and schedules across disconnected tools, with no single view of the business.",
    description:
      "A complete ERP for an education centre covering finance, attendance, teachers, students and groups, with a separate panel for each of the three roles.",
    longDescription:
      "Bayyina ERP is a full management system for education centres. Three roles — admin, teacher and student — each get their own panel. The system covers finance, attendance, groups, class schedules and academic results, all served by a single backend with role-based access control.",
    role: "Full-Stack Developer",
    duration: "1 month",
    year: "2026",
    status: "Delivered",
    featured: true,
    features: [
      "Admin panel — finance, reporting and user management",
      "Teacher panel — groups, attendance and grades",
      "Student panel — schedule, attendance history and payments",
      "Role-based access control (RBAC)",
      "PostgreSQL with Prisma ORM",
      "Containerised deployment with Docker",
    ],
    challenges: [
      "Designing one secure API surface that serves three different roles without leaking data between them.",
      "An attendance system that updates in real time while keeping a queryable archive.",
      "Financial reporting that aggregates large datasets efficiently on the database side.",
    ],
    results: [
      { label: "Roles", value: "3 — admin, teacher, student" },
      { label: "Status", value: "Delivered" },
    ],
    usingLanguage: ["nextjs", "nestjs", "postgres", "tailwind", "docker", "prisma"],
    type: "project",
    gitHb: "https://github.com/boburov",
    netlify: "",
  },
  {
    id: 2,
    slug: "sevenedu-mobile",
    img: seveneduMobile,
    images: [seveneduMobile],
    projectName: "Sevenedu Mobile",
    tagline: "The Sevenedu platform as a cross-platform Flutter app",
    problem:
      "Most Sevenedu students study on their phones, and a mobile browser is a poor place to watch a lesson or study offline.",
    description:
      "The mobile client for Sevenedu, built so students can follow courses and watch lessons from their phone, including offline.",
    longDescription:
      "The Sevenedu mobile app brings the platform to iOS and Android from a single Flutter codebase. Students enrol in courses, watch video lessons on their phone, save lessons for offline viewing and stay in contact with their teachers.",
    role: "Mobile Developer",
    duration: "3 months",
    year: "2025",
    status: "In Development",
    featured: true,
    features: [
      "One Flutter codebase for iOS and Android",
      "Video lessons with streaming and offline storage",
      "Push notifications via FCM",
      "REST API integration with the Sevenedu backend",
      "Fast cold start with a cached splash flow",
    ],
    challenges: [
      "Choosing a DRM and local-storage strategy for offline video.",
      "Keeping iOS and Android UI conventions intact within one codebase.",
    ],
    results: [
      { label: "Platforms", value: "iOS + Android" },
      { label: "Status", value: "In development" },
    ],
    usingLanguage: ["flutter", "dart"],
    type: "project",
    gitHb: "https://github.com/boburov",
    netlify: "",
  },
  {
    id: 3,
    slug: "dexfilm-bot",
    img: dexfilm,
    images: [dexfilm],
    projectName: "DexFilm Bot",
    tagline: "Telegram film bot serving 2k+ users",
    problem:
      "Sharing a film library over Telegram by hand doesn't scale past a few dozen people, and there was no way to control access or see what was being watched.",
    description:
      "A Telegram bot that lets 2k+ users search a film library and watch for free, with subscription-based access control and an admin panel.",
    longDescription:
      "DexFilm delivers films through Telegram. Users search by title or pick a category and the bot sends the video directly. The backend is written in Node.js and stores data in a JSON file acting as a lightweight database. It currently serves more than 2,000 active users.",
    role: "Backend Developer",
    duration: "2 days",
    year: "2024",
    status: "Live",
    featured: false,
    features: [
      "Film search and category filtering",
      "Channel-subscription access control",
      "Admin panel for adding new titles",
      "Usage statistics and user monitoring",
    ],
    challenges: [
      "A race condition on concurrent writes to the JSON store, fixed with file locking.",
      "Telegram's file-size limit on large uploads, handled with a caching strategy.",
    ],
    results: [
      { label: "Users", value: "2k+" },
      { label: "Status", value: "Live" },
    ],
    usingLanguage: ["nodejs", "telegraf", "json-db"],
    type: "project",
    gitHb: "https://github.com/boburov/kino_bot",
    netlify: "https://t.me/DEX_Filmbot",
  },
  {
    id: 1,
    slug: "primeprint",
    img: primeprint,
    images: [primeprint],
    projectName: "PrimePrint",
    tagline: "Book-printing landing page with a live price calculator",
    problem:
      "A book-printing service was quoting every job manually over chat, which slowed down orders and lost customers.",
    description:
      "A landing page and online calculator for a book-printing service. Customers price their own job and the finished order goes straight to the owner through a Telegram bot.",
    longDescription:
      "PrimePrint is a landing page and pricing calculator for a book-printing service. The customer picks page count, format and paper type, the price is calculated instantly, and the completed order is sent to the business owner through a Telegram bot — removing the manual quoting step entirely.",
    role: "Frontend Developer",
    duration: "2 weeks",
    year: "2024",
    status: "Live",
    featured: false,
    features: [
      "Real-time price calculator",
      "Orders delivered through a Telegram bot",
      "Responsive design",
      "Optimised for SEO",
    ],
    challenges: [
      "Translating the owner's pricing rules into a formula that stayed correct across formats.",
      "Making the Telegram handoff reliable, with error handling around delivery.",
    ],
    results: [
      { label: "Build time", value: "2 weeks" },
      { label: "Status", value: "Live" },
    ],
    usingLanguage: ["nextjs", "tailwind", "telegram-bot"],
    type: "project",
    gitHb: "https://github.com/boburov",
    netlify: "https://prime-print.uz",
  },
  {
    id: 5,
    slug: "intela-music",
    img: intelaHelp,
    images: [intelaHelp, intelaMain],
    projectName: "Intela",
    tagline: "A personal music player for saved YouTube tracks",
    problem:
      "Tracks I liked on YouTube were scattered across watch history with no way to keep them as a collection.",
    description:
      "A pet project: save tracks you like from YouTube into one collection and play them back anywhere, any number of times.",
    longDescription:
      "Intela is a personal music player. It collects tracks from YouTube into a single playable library, with playlist management and an offline mode. I built it for myself, but anyone can use it.",
    role: "Frontend Developer (Solo)",
    duration: "1 hour",
    year: "2026",
    status: "Personal",
    featured: false,
    features: [
      "Add YouTube links and build playlists",
      "Clean, transparent player UI",
      "Collection stored in browser storage",
      "Fast search and filtering",
    ],
    challenges: [
      "Working within the constraints of the YouTube embed API.",
      "Keeping the data structure compact enough for localStorage limits.",
    ],
    results: [
      { label: "Status", value: "Personal / open to use" },
      { label: "Build time", value: "1 hour" },
    ],
    usingLanguage: ["nextjs", "tailwind", "youtube-api"],
    type: "project",
    gitHb: "https://github.com/boburov",
    netlify: "https://intela-snowy.vercel.app/",
  },
];

/** Human-readable labels for the short stack keys stored on each project. */
export const techLabels: Record<string, string> = {
  nextjs: "Next.js",
  nestjs: "NestJS",
  nodejs: "Node.js",
  tailwind: "Tailwind CSS",
  redis: "Redis",
  postgres: "PostgreSQL",
  postgresql: "PostgreSQL",
  prisma: "Prisma",
  aws: "AWS S3",
  docker: "Docker",
  flutter: "Flutter",
  dart: "Dart",
  telegraf: "Telegraf",
  "json-db": "JSON store",
  "telegram-bot": "Telegram Bot API",
  "youtube-api": "YouTube API",
};

export const techLabel = (key: string) => techLabels[key] ?? key;

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
