import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";

import { getProjectBySlug, projects, techLabel } from "../../data/projects";
import { Reveal } from "../../components/ui/Reveal";
import { StatusBadge } from "../../components/ui/StatusBadge";
import { Gallery } from "./Gallery";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.projectName,
    description: project.tagline,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${project.projectName} — ${project.role}`,
      description: project.tagline,
      images: [{ url: project.img.src, alt: `${project.projectName} interface` }],
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <article className="pb-8">
      {/* Header */}
      <div className="container pt-12 md:pt-16">
        <Link
          href="/#projects"
          className="link-underline t-mono inline-flex items-center gap-2 text-fg-muted transition-colors hover:text-accent-ink"
        >
          <ArrowLeft size={14} strokeWidth={1.75} aria-hidden="true" />
          All projects
        </Link>

        <div className="mt-10 grid gap-10 md:grid-cols-[7rem_minmax(0,1fr)] md:gap-12 lg:grid-cols-[10rem_minmax(0,1fr)]">
          <div className="md:pt-2">
            <StatusBadge status={project.status} />
          </div>

          <div>
            <p className="t-meta text-accent-ink">{project.role}</p>
            <h1 className="t-display mt-4">{project.projectName}</h1>
            <p className="t-lead measure mt-6">{project.tagline}</p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              {project.netlify && (
                <a
                  href={project.netlify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent h-10 text-[13px]"
                >
                  View live
                  <ArrowUpRight size={14} strokeWidth={1.75} aria-hidden="true" />
                </a>
              )}
              <a
                href={project.gitHb}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline h-10 text-[13px]"
              >
                <Github size={14} strokeWidth={1.75} aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="container mt-14 md:mt-20">
        <Gallery images={project.images} name={project.projectName} />
      </div>

      {/* Facts */}
      <div className="container mt-14 md:mt-20">
        <dl className="grid grid-cols-2 gap-y-8 border-y border-line py-8 md:grid-cols-4">
          <div>
            <dt className="t-meta">Role</dt>
            <dd className="mt-2 text-[15px] font-medium">{project.role}</dd>
          </div>
          <div>
            <dt className="t-meta">Year</dt>
            <dd className="mt-2 text-[15px] font-medium">{project.year}</dd>
          </div>
          <div>
            <dt className="t-meta">Duration</dt>
            <dd className="mt-2 text-[15px] font-medium">{project.duration}</dd>
          </div>
          <div>
            <dt className="t-meta">Stack</dt>
            <dd className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-[15px]">
              {project.usingLanguage.map((tech) => (
                <span key={tech} className="t-mono text-fg-muted">
                  {techLabel(tech)}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </div>

      {/* Body */}
      <div className="container mt-14 md:mt-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="t-meta">The problem</h2>
              <p className="measure mt-4 text-[17px] leading-relaxed">{project.problem}</p>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="t-meta">Overview</h2>
              <p className="t-body measure mt-4">{project.longDescription}</p>
            </Reveal>

            {project.features.length > 0 && (
              <Reveal className="mt-12">
                <h2 className="t-meta">What it does</h2>
                <ul className="mt-5 space-y-3">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-[15px] leading-relaxed text-fg-muted"
                    >
                      <span aria-hidden="true" className="mt-[0.6em] h-px w-3 shrink-0 bg-accent" />
                      <span className="max-w-[65ch]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {project.challenges.length > 0 && (
              <Reveal className="mt-12">
                <h2 className="t-meta">Challenges and solutions</h2>
                <ul className="mt-5 space-y-5">
                  {project.challenges.map((challenge, i) => (
                    <li
                      key={i}
                      className="measure border-l-2 border-line pl-5 text-[15px] leading-relaxed text-fg-muted"
                    >
                      {challenge}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>

          {project.results.length > 0 && (
            <Reveal delay={80} className="lg:pt-1">
              <h2 className="t-meta">Results</h2>
              <dl className="mt-5">
                {project.results.map((result) => (
                  <div
                    key={result.label}
                    className="flex flex-col-reverse border-t border-line py-4"
                  >
                    <dt className="t-mono mt-1 text-fg-faint">{result.label}</dt>
                    <dd className="text-[20px] font-semibold tracking-[-0.02em] text-accent-ink">
                      {result.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          )}
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="container mt-24 md:mt-32">
          <div className="border-t border-line pt-10">
            <h2 className="t-meta mb-6">Other projects</h2>
            <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug} className="border-t border-line">
                  <Link href={`/projects/${item.slug}`} className="group block py-5">
                    <div className="flex items-center gap-3">
                      <h3 className="text-[16px] font-semibold transition-colors group-hover:text-accent-ink">
                        {item.projectName}
                      </h3>
                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.75}
                        aria-hidden="true"
                        className="text-fg-faint transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                    <p className="mt-2 text-[14px] leading-relaxed text-fg-muted">
                      {item.tagline}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  );
}
