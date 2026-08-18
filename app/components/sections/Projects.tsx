import { projects } from "../../data/projects";
import { CompactProject, FeaturedProject } from "../ProjectRow";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      index="03"
      label="Projects"
      title="Selected projects"
      intro="Six products shipped. The three below carry the most architecture and the most real users — the rest are smaller but complete."
    >
      <div className="space-y-16 md:space-y-24">
        {featured.map((project, i) => (
          <Reveal key={project.slug}>
            <FeaturedProject project={project} index={i} />
          </Reveal>
        ))}
      </div>

      {rest.length > 0 && (
        <Reveal className="mt-20 md:mt-28">
          <h3 className="t-meta mb-6">Also built</h3>
          <div>
            {rest.map((project) => (
              <CompactProject key={project.slug} project={project} />
            ))}
          </div>
        </Reveal>
      )}
    </Section>
  );
}
