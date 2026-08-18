"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";

import { nav, profile } from "../data/site";
import { ThemeToggle } from "./theme/ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile sheet on Escape, and stop the page scrolling behind it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-bg/85 backdrop-blur-sm transition-[border-color] ${
        scrolled || open ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="container">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="min-w-0 truncate text-base font-semibold tracking-[0.02em] whitespace-nowrap sm:text-lg"
            onClick={() => setOpen(false)}
          >
            Boburov Shukurillo
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="link-underline text-[13px] text-fg-muted transition-colors hover:text-fg"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <a
              href={profile.cv}
              download
              className="btn btn-outline h-9 px-3.5 text-[13px]"
            >
              <Download size={14} strokeWidth={1.75} aria-hidden="true" />
              Download CV
            </a>
          </div>

          {/* The theme toggle lives inside the sheet on small screens — three
              controls don't fit alongside the name at 320px. */}
          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <span className="hidden sm:block">
              <ThemeToggle />
            </span>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-fg"
            >
              {open ? <X size={16} aria-hidden="true" /> : <Menu size={16} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-bg lg:hidden"
      >
        <nav aria-label="Primary mobile" className="container py-2">
          <ul>
            {nav.map((item) => (
              <li key={item.label} className="border-b border-line last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-[15px] font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={profile.cv}
            download
            onClick={() => setOpen(false)}
            className="btn btn-accent my-5 w-full"
          >
            <Download size={15} strokeWidth={1.75} aria-hidden="true" />
            Download CV
          </a>

          <div className="flex items-center justify-between border-t border-line py-4 sm:hidden">
            <span className="t-meta">Theme</span>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
