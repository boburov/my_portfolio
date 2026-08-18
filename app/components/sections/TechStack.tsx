import { stackGroups } from "../../data/site";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";
import { TechGlyph } from "../ui/TechGlyph";

export function TechStack() {
  return (
    <Section
      id="skills"
      index="05"
      label="Stack"
      title="Technology stack"
      intro="Grouped by what they're for. Everything here is something I've used on a shipped project."
    >
      <div className="grid gap-x-12 gap-y-0 md:grid-cols-2 lg:grid-cols-3">
        {stackGroups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={(i % 3) * 60}
            className="border-t border-line py-8"
          >
            <h3 className="t-meta mb-5">{group.title}</h3>
            <ul className="space-y-3">
              {group.items.map((tech) => (
                <li key={tech.name} className="flex items-baseline gap-3">
                  <span className="relative top-[0.15em] text-fg-faint">
                    <TechGlyph icon={tech.icon} size={15} />
                  </span>
                  <span className="min-w-0">
                    <span className="text-[15px] font-medium">{tech.name}</span>
                    {tech.note && (
                      <span className="t-mono ml-2 text-fg-faint">{tech.note}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
