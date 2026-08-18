import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./style/globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import { ThemeScript } from "./components/theme/ThemeScript";
import { contact, profile } from "./data/site";

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans-src",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-mono-src",
});

const title = `${profile.name} — ${profile.role}`;
const description =
  "Full-stack engineer from Uzbekistan building web, mobile and backend systems with Next.js, NestJS, PostgreSQL and Flutter. Available for remote and freelance work.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description,
  applicationName: profile.brand,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  keywords: [
    "Boburov Shukurillo",
    "Full-stack developer",
    "Software engineer Uzbekistan",
    "Next.js developer",
    "NestJS developer",
    "React developer",
    "Flutter developer",
    "PostgreSQL Prisma",
    "Remote full-stack developer",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  other: {
    "google-site-verification": "MaugEz5g-WDQQUU6ft4Q4Lf5dFcTSjwdDyJA1UKPo64",
  },
  icons: { icon: "/boburov.png", apple: "/boburov.png" },
  openGraph: {
    type: "profile",
    title,
    description,
    url: profile.siteUrl,
    siteName: profile.brand,
    locale: "en_US",
    images: [
      { url: "/boburov.png", width: 1200, height: 630, alt: `${profile.name} — ${profile.role}` },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@boburov_sh",
    title,
    description,
    images: ["/boburov.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfbfa" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0f" },
  ],
};

/** Person schema so search engines read this as an engineer's profile. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: "Shukurillo Boburov",
  url: profile.siteUrl,
  image: profile.avatar,
  jobTitle: profile.role,
  description,
  email: `mailto:${contact.email}`,
  telephone: contact.phone,
  address: { "@type": "PostalAddress", addressCountry: "UZ" },
  sameAs: [contact.github, contact.linkedin, contact.telegramUrl, contact.instagram],
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "Prisma",
    "Flutter",
    "Dart",
    "Docker",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body>
        <ThemeProvider>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
