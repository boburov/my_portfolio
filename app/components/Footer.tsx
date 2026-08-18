import Link from "next/link";

import { profile, socials } from "../data/site";
import { ThemeToggle } from "./theme/ThemeToggle";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container">
        <div className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between md:gap-6">
          <div>
            <Link href="/" className="text-sm font-semibold tracking-[0.02em]">
              BOBUROV<span className="text-accent-ink">.DEV</span>
            </Link>
            <p className="t-mono mt-1.5 text-fg-faint">{profile.role}</p>
          </div>

          <nav aria-label="Social links">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="link-underline t-mono text-fg-muted transition-colors hover:text-accent-ink"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />
        </div>

        <div className="flex flex-col gap-2 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-mono text-fg-faint">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="t-mono text-fg-faint">Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
