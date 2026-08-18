import { expertise } from "../../data/site";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";

export function Expertise() {
  return (
    <Section
      id="expertise"
      index="04"
      label="Expertise"
      title="Core expertise"
      intro="What I'm actually responsible for on a project, rather than a list of logos."
    >
      <div className="grid gap-x-12 gap-y-0 sm:grid-cols-2">
        {expertise.map((item, i) => (
          <Reveal
            key={item.title}
            delay={(i % 2) * 60}
            className="border-t border-line py-8"
          >
            <h3 className="text-[17px] font-semibold tracking-[-0.01em]">{item.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">{item.description}</p>
            <p className="t-mono mt-4 text-fg-faint">{item.keywords.join(" · ")}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
