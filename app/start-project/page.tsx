import type { Metadata } from "next";
import { Check } from "lucide-react";

import { Reveal } from "../components/ui/Reveal";
import { LeadForm } from "./LeadForm";

export const metadata: Metadata = {
  title: "Start a project",
  description:
    "Tell me about your website, web app, mobile app or Telegram bot and get a free quote from a full-stack engineer within 24 hours.",
  alternates: { canonical: "/start-project" },
};

const points = [
  "Free quote and plan within 24 hours",
  "Web, mobile (Flutter), backend and Telegram bots",
  "Clear scope, fixed milestones, regular updates",
  "Direct communication — no agency middlemen",
];

export default function StartProjectPage() {
  return (
    <div className="pb-24">
      <div className="container pt-16 md:pt-24">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_28rem] lg:gap-20">
          <Reveal>
            <p className="t-meta text-accent-ink">Start a project</p>
            <h1 className="t-display mt-4 max-w-[14ch]">Need something built?</h1>
            <p className="t-lead measure mt-6">
              Share a few details and I&apos;ll send you a free quote and a plan within 24 hours.
            </p>
            <ul className="mt-8 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[15px] text-fg-muted">
                  <Check size={16} strokeWidth={2} className="mt-1 shrink-0 text-accent-ink" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="t-meta mb-6">Your details</h2>
            <LeadForm />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
