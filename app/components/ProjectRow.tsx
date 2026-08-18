import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

import { Project, techLabel } from "../data/projects";
import { StatusBadge } from "./ui/StatusBadge";

/**
 * A featured project: large image, the problem it solves, role, stack and the
 * measurable outcome. Deliberately given more vertical space than the rest.
 */
export function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const headline = project.results[0];

  return (
    <article className="border-t border-line pt-10 md:pt-14">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
        <Link
          href={`/projects/${project.slug}`}
          tabIndex={-1}
          aria-hidden="true"
          className="group relative block aspect-[16/10] overflow-hidden rounded-md border border-line bg-bg-subtle"
        >
          <Image
            src={project.img}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            placeholder="blur"
            loading={index === 0 ? "eager" : "lazy"}
            className="object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          />
        </Link>

        <div className="lg:py-2">
          <div className="flex items-center gap-3">
            <span className="t-meta text-accent-ink">
              {String(index + 1).padStart(2, "0")}
            </span>
            <StatusBadge status={project.status} />
            <span className="t-mono text-fg-faint">{project.year}</span>
          </div>

          <h3 className="t-h2 mt-4 text-[clamp(1.5rem,1.2rem+1.2vw,2.125rem)]">
            <Link href={`/projects/${project.slug}`} className="link-underline">
              {project.projectName}
            </Link>
          </h3>

          <p className="mt-3 text-[17px] leading-relaxed text-fg-muted">{project.tagline}</p>

          <dl className="mt-7 space-y-4 border-t border-line pt-6">
            <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4">
              <dt className="t-meta pt-0.5">Problem</dt>
              <dd className="text-[15px] leading-relaxed text-fg-muted">{project.problem}</dd>
            </div>
            <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4">
              <dt className="t-meta pt-0.5">Role</dt>
              <dd className="text-[15px] leading-relaxed">{project.role}</dd>
            </div>
            <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4">
              <dt className="t-meta pt-0.5">Stack</dt>
              <dd className="flex flex-wrap gap-x-2 gap-y-1.5">
                {project.usingLanguage.map((tech) => (
                  <span key={tech} className="t-mono text-fg-muted">
                    {techLabel(tech)}
                  </span>
                ))}
              </dd>
            </div>
            {headline && (
              <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4">
                <dt className="t-meta pt-0.5">Result</dt>
                <dd className="text-[15px] leading-relaxed">
                  <span className="font-semibold text-accent-ink">{headline.value}</span>
                  <span className="text-fg-muted"> · {headline.label.toLowerCase()}</span>
                </dd>
              </div>
            )}
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href={`/projects/${project.slug}`} className="btn btn-outline h-10 text-[13px]">
              Case study
              <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden="true" />
            </Link>
            {project.netlify && (
              <a
                href={project.netlify}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline t-mono text-fg-muted transition-colors hover:text-accent-ink"
              >
                View live
              </a>
            )}
            <a
              href={project.gitHb}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline t-mono inline-flex items-center gap-1.5 text-fg-muted transition-colors hover:text-accent-ink"
            >
              <Github size={13} strokeWidth={1.75} aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

/** A secondary project: one compact row, still complete enough to judge. */
export function CompactProject({ project }: { project: Project }) {
  return (
    <article className="border-t border-line">
      <Link
        href={`/projects/${project.slug}`}
        className="group grid gap-3 py-7 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)_auto] md:items-baseline md:gap-8"
      >
        <div className="flex items-center gap-3">
          <h3 className="text-[17px] font-semibold tracking-[-0.01em] transition-colors group-hover:text-accent-ink">
            {project.projectName}
          </h3>
          <StatusBadge status={project.status} />
        </div>

        <div>
          <p className="text-[15px] leading-relaxed text-fg-muted">{project.tagline}</p>
          <p className="t-mono mt-2 text-fg-faint">
            {project.role} · {project.usingLanguage.map(techLabel).join(" · ")}
          </p>
        </div>

        <span className="t-mono flex items-center gap-1.5 text-fg-faint transition-colors group-hover:text-accent-ink">
          {project.year}
          <ArrowUpRight
            size={14}
            strokeWidth={1.75}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </Link>
    </article>
  );
}
