import Image from "next/image";
import { ArrowRight, Download, MapPin } from "lucide-react";

import { contact, profile, socials } from "../../data/site";
import { Reveal } from "../ui/Reveal";

export function Hero() {
  return (
    <section className="pt-16 pb-20 sm:pt-24 md:pt-28 md:pb-28" aria-labelledby="hero-heading">
      <div className="container">
        <Reveal>
          <div className="flex items-center gap-4">
            <Image
              src={profile.avatar}
              alt={`Portrait of ${profile.name}`}
              width={56}
              height={56}
              priority
              unoptimized
              className="h-14 w-14 rounded-full border border-line object-cover"
            />
            <div>
              <p className="t-meta text-accent-ink">{profile.role}</p>
              <p className="t-mono mt-1 text-fg-faint">{profile.handle}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <h1 id="hero-heading" className="t-display mt-9 max-w-[19ch]">
            Hi, I&apos;m Boburov Shukurillo.
          </h1>
        </Reveal>

        <Reveal delay={110}>
          <p className="mt-7 max-w-[24ch] text-[clamp(1.35rem,1rem+1.4vw,2rem)] font-medium leading-[1.28] tracking-[-0.02em] text-balance sm:max-w-[26ch]">
            {profile.headline}
          </p>
        </Reveal>

        <Reveal delay={150}>
          <p className="t-body measure mt-7">{profile.summary}</p>
        </Reveal>

        {/* Availability strip */}
        <Reveal delay={190}>
          <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-fg-muted">
            <li className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-positive opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-positive" />
              </span>
              <span className="font-medium text-fg">{profile.availability}</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={13} strokeWidth={1.75} aria-hidden="true" className="text-fg-faint" />
              Based in {profile.location}
            </li>
            <li className="hidden sm:block" aria-hidden="true">
              <span className="h-3 w-px bg-line-strong" />
            </li>
            <li>{profile.availabilityDetail}</li>
          </ul>
        </Reveal>

        <Reveal delay={230}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn btn-accent">
              Let&apos;s work together
              <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
            </a>
            <a href={profile.cv} download className="btn btn-outline">
              <Download size={15} strokeWidth={1.75} aria-hidden="true" />
              Download CV
            </a>
          </div>
        </Reveal>

        <Reveal delay={270}>
          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2">
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
            <li>
              <a
                href={contact.phoneHref}
                className="link-underline t-mono text-fg-muted transition-colors hover:text-accent-ink"
              >
                {contact.phone}
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
