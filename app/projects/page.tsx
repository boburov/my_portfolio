import type { Metadata } from "next";

import { projects } from "../data/projects";
import { CompactProject, FeaturedProject } from "../components/ProjectRow";
import { Reveal } from "../components/ui/Reveal";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Web, mobile and backend products built by Boburov Shukurillo — an online education platform, an education-centre ERP, a Flutter mobile app and Telegram automation.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="pb-24">
      <div className="container pt-16 md:pt-24">
        <Reveal>
          <p className="t-meta text-accent-ink">Projects</p>
          <h1 className="t-display mt-4">Everything I&apos;ve shipped</h1>
          <p className="t-lead measure mt-6">
            {projects.length} products, from a platform with 1.3k users to a two-day Telegram
            bot. Each one lists the problem it solves, my role and the stack.
          </p>
        </Reveal>
      </div>

      <div className="container mt-16 space-y-16 md:mt-24 md:space-y-24">
        {featured.map((project, i) => (
          <Reveal key={project.slug}>
            <FeaturedProject project={project} index={i} />
          </Reveal>
        ))}
      </div>

      {rest.length > 0 && (
        <div className="container mt-20 md:mt-28">
          <Reveal>
            <h2 className="t-meta mb-6">Also built</h2>
            <div>
              {rest.map((project) => (
                <CompactProject key={project.slug} project={project} />
              ))}
            </div>
          </Reveal>
        </div>
      )}
    </div>
  );
}
