"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { scrollPage } from "../functions/scrollUp";

const navItems = [
  { label: "Home", pos: 0, link: "/" },
  { label: "About", pos: 0, link: "about" },
  { label: "Projects", pos: 0, link: "projects" },
  { label: "Blog", pos: 0, link: "blog" },
  { label: "Contact", pos: 0, link: "contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const handleNav = (item: (typeof navItems)[number]) => {
    if (item.link.startsWith("#")) {
      scrollPage(item.pos);
      setOpen(false);
      return;
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-3 z-50">
      <div className="container">
        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
          {/* top subtle gradient */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-purple-500/10 via-transparent to-transparent" />

          <div className="relative flex items-center justify-between px-5 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <h1
                data-aos="fade-right"
                className="text-xl md:text-2xl font-extrabold tracking-tight text-white"
              >
                <span className="text-purple-400">BOBUROV</span>.DEV
              </h1>
              <span className="hidden sm:inline-flex rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-widest text-white/60">
                Portfolio
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.link}
                  onClick={() => handleNav(item)}
                  className="px-3 py-2"
                >
                  <NavItem label={item.label} />
                </Link>
              ))}

              <TalkButton />
            </nav>

            {/* Mobile button */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white hover:bg-white/10 transition"
              aria-label="Open menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile dropdown */}
          <div
            className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <div className="border-t border-white/10 px-5 py-4">
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.link}
                      onClick={() => handleNav(item)}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 hover:bg-white/10 transition"
                    >
                      <span className="uppercase tracking-wide">{item.label}</span>
                      <span className="text-xs text-white/40">↗</span>
                    </Link>
                  </li>
                ))}

                <li className="pt-2">
                  <TalkButton fullWidth />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavItem({ label }: { label: string }) {
  return (
    <span className="relative group uppercase tracking-wide text-xs font-semibold text-white/75 hover:text-purple-300 transition">
      {label}
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-400 group-hover:w-full transition-all duration-300 rounded-full" />
    </span>
  );
}

function TalkButton({ fullWidth = false }: { fullWidth?: boolean }) {
  return (
    <Link
      href="https://t.me/boburov_sh?text=Salom%20Boburov!%20Men%20siz%20bilan%20hamkorlik%20qilmoqchiman.%20%F0%9F%94%A5"
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-primary ${fullWidth ? "w-full justify-center" : "ml-2"}`}
    >
      Work with Me
    </Link>
  );
}
