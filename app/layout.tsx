import type { Metadata } from "next";
import "./style/globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "B.Shukurullo • Fullstack JavaScript Developer",
  description:
    "Portfolio of Shukurullo Boburov – Fullstack JavaScript developer specializing in Next.js, NestJS, React, and modern web technologies.",
  other: {
    "google-site-verification": "MaugEz5g-WDQQUU6ft4Q4Lf5dFcTSjwdDyJA1UKPo64",
  },
  icons: {
    icon: "./boburov.png",
    apple: "./boburov.png",
  },
  openGraph: {
    title: "B.Shukurullo • Fullstack JavaScript Developer",
    description:
      "Portfolio of Shukurullo Boburov – Fullstack JavaScript developer specializing in Next.js, NestJS, React, and modern web technologies.",
    url: "https://www.boburov.uz",
    siteName: "boburov.uz",
    type: "website",
    images: [
      {
        url: "./boburov.png",
        width: 600,
        height: 130,
        alt: "Shukurullo Boburov Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B.Shukurullo • Fullstack JavaScript Developer",
    description:
      "Portfolio of Shukurullo Boburov – Fullstack JavaScript developer specializing in Next.js, NestJS, React, and modern web technologies.",
    images: ["./boburov.png"], // png qilib to‘g‘riladim
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
