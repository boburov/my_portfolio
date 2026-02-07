import type { Metadata } from "next";
import "@/app/style/globals.css";

export const metadata: Metadata = {
  title: "Shukurullo Boburov | Fullstack JavaScript Developer",
  description:
    "🚀 Official portfolio of Shukurullo Boburov – Fullstack JavaScript developer from Uzbekistan. Specialized in Next.js, NestJS, React.js, Prisma, PostgreSQL, TailwindCSS, and Telegram bot development.",
  keywords: [
    "Shukurullo Boburov",
    "Boburov developer",
    "Fullstack JavaScript developer",
    "Next.js developer",
    "NestJS developer",
    "React.js portfolio",
    "PostgreSQL Prisma",
    "Telegram bot developer",
    "Uzbekistan programmer",
    "Frontend developer Uzbekistan",
    "Backend developer Uzbekistan",
    "Docker developer",
    "AWS S3 migration",
    "TailwindCSS UI",
    "Node.js developer",
  ],
  authors: [{ name: "Shukurullo Boburov", url: "https://www.boburov.uz" }],
  creator: "Shukurullo Boburov",
  publisher: "boburov.uz",
  metadataBase: new URL("https://www.boburov.uz"),
  alternates: {
    canonical: "https://www.boburov.uz",
  },
  openGraph: {
    title: "👨‍💻 Shukurullo Boburov – Fullstack JavaScript Developer",
    description:
      "Portfolio of Shukurullo Boburov, Fullstack JavaScript developer specializing in Next.js, NestJS, React, TailwindCSS, PostgreSQL, and modern web apps.",
    url: "https://www.boburov.uz",
    siteName: "boburov.uz",
    type: "profile",
    images: [
      {
        url: "/icons/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Shukurullo Boburov Portfolio – Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@boburov_sh",
    title: "Shukurullo Boburov – Fullstack Developer 🧠",
    description:
      "Explore the creative journey of Fullstack JavaScript Developer Shukurullo Boburov – building scalable modern apps with Next.js & NestJS.",
    images: ["/icons/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
