import { ArrowUpRight, Download } from "lucide-react";

import { contact, profile, socials } from "../../data/site";
import { Reveal } from "../ui/Reveal";

export function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-[7rem_minmax(0,1fr)] md:gap-12 lg:grid-cols-[10rem_minmax(0,1fr)]">
          <Reveal>
            <p className="t-meta flex items-center gap-2 md:flex-col md:items-start md:gap-3">
              <span className="text-accent-ink">07</span>
              <span className="hidden h-px w-8 bg-line-strong md:block" aria-hidden="true" />
              <span>Contact</span>
            </p>
          </Reveal>

          <div>
            <Reveal>
              <h2 id="contact-heading" className="t-h2 max-w-[16ch]">
                Have a project in mind?
              </h2>
              <p className="t-lead measure mt-6">
                I&apos;m available for selected freelance and development opportunities, and
                open to remote full-time roles. The fastest way to reach me is email or
                Telegram.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <a
                href={`mailto:${contact.email}`}
                className="link-underline mt-10 inline-flex items-baseline gap-3 text-[clamp(1.5rem,1.1rem+1.8vw,2.5rem)] font-semibold tracking-[-0.025em] transition-colors hover:text-accent-ink"
              >
                {contact.email}
                <ArrowUpRight
                  size={22}
                  strokeWidth={1.75}
                  aria-hidden="true"
                  className="shrink-0 self-center text-accent"
                />
              </a>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href={contact.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent"
                >
                  Message on Telegram
                </a>
                <a href="/contact" className="btn btn-outline">
                  Send a message
                </a>
                <a href={profile.cv} download className="btn btn-outline">
                  <Download size={15} strokeWidth={1.75} aria-hidden="true" />
                  Download CV
                </a>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <ul className="mt-14 grid gap-x-8 gap-y-0 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
                {socials.map((s) => (
                  <li key={s.label} className="border-b border-line py-4 sm:border-b-0 sm:py-5">
                    <p className="t-meta">{s.label}</p>
                    <a
                      href={s.href}
                      target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="link-underline mt-1.5 inline-block text-[15px] transition-colors hover:text-accent-ink"
                    >
                      {s.handle}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
