import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { contact, profile } from "../data/site";
import { CopyButton } from "./CopyButton";
import { ContactForm } from "./ContactForm";
import { Reveal } from "../components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Boburov Shukurillo — full-stack engineer available for remote roles, contract and freelance work.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}`, copy: contact.email },
  { label: "Telegram", value: contact.telegram, href: contact.telegramUrl, copy: contact.telegram },
  { label: "Phone", value: contact.phone, href: contact.phoneHref, copy: contact.phone },
  { label: "GitHub", value: "github.com/boburov", href: contact.github },
  { label: "LinkedIn", value: "linkedin.com/in/boburovdev", href: contact.linkedin },
  { label: "Instagram", value: "@boburov_sh", href: contact.instagram },
];

export default function ContactPage() {
  return (
    <div className="pb-24">
      <div className="container pt-16 md:pt-24">
        <Reveal>
          <p className="t-meta text-accent-ink">Contact</p>
          <h1 className="t-display mt-4 max-w-[14ch]">Let&apos;s work together.</h1>
          <p className="t-lead measure mt-6">
            {profile.availabilityDetail}. Send a message below, or reach me directly on any
            of these channels — email and Telegram are fastest.
          </p>
        </Reveal>
      </div>

      <div className="container mt-16 md:mt-20">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-20">
          <Reveal>
            <h2 className="t-meta mb-6">Send a message</h2>
            <ContactForm />
          </Reveal>

          <Reveal delay={80}>
            <h2 className="t-meta mb-2">Direct channels</h2>
            <ul>
              {channels.map((channel) => (
                <li
                  key={channel.label}
                  className="flex items-center justify-between gap-4 border-b border-line py-4"
                >
                  <div className="min-w-0">
                    <p className="t-mono text-fg-faint">{channel.label}</p>
                    <a
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="link-underline mt-1 inline-flex items-center gap-1.5 truncate text-[15px] transition-colors hover:text-accent-ink"
                    >
                      {channel.value}
                      {channel.href.startsWith("http") && (
                        <ArrowUpRight size={13} strokeWidth={1.75} aria-hidden="true" />
                      )}
                    </a>
                  </div>
                  {channel.copy && <CopyButton value={channel.copy} label={channel.label} />}
                </li>
              ))}
            </ul>

            <a href={profile.cv} download className="btn btn-outline mt-8 w-full">
              Download CV
            </a>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
