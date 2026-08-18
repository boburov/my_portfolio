import { ArrowUpRight } from "lucide-react";

import { experience } from "../../data/site";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";

export function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      label="Experience"
      title="Where I've built things"
      intro="Engagements listed by impact rather than by job title — what the system does, and what changed because it exists."
    >
      <ol className="space-y-0">
        {experience.map((item, i) => (
          <Reveal
            key={item.org}
            as="li"
            delay={i * 60}
            className="border-t border-line py-10 first:border-t-0 first:pt-0 md:py-12 md:first:pt-0"
          >
            <div className="grid gap-6 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-10">
              <div className="md:pt-1">
                <p className="t-mono text-accent-ink">{item.period}</p>
                <p className="t-mono mt-1.5 text-fg-faint">{item.location}</p>
              </div>

              <div>
                <h3 className="t-h3">{item.role}</h3>
                <p className="mt-1.5 flex flex-wrap items-center gap-2 text-[15px] text-fg-muted">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline inline-flex items-center gap-1 font-medium text-fg transition-colors hover:text-accent-ink"
                    >
                      {item.org}
                      <ArrowUpRight size={13} strokeWidth={1.75} aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="font-medium text-fg">{item.org}</span>
                  )}
                </p>

                <p className="t-body measure mt-4">{item.summary}</p>

                <ul className="mt-5 space-y-2.5">
                  {item.highlights.map((highlight, j) => (
                    <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-fg-muted">
                      <span
                        aria-hidden="true"
                        className="mt-[0.6em] h-px w-3 shrink-0 bg-accent"
                      />
                      <span className="max-w-[68ch]">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2">
                  {item.stack.map((tech) => (
                    <li
                      key={tech}
                      className="t-mono rounded border border-line px-2 py-1 text-fg-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
