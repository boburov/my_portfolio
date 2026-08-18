import { services } from "../../data/site";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";

export function Services() {
  return (
    <Section
      id="build"
      index="06"
      label="Services"
      title="What I build"
      intro="The kinds of work I take on, whether as part of a team or end to end on my own."
    >
      <ul>
        {services.map((service, i) => (
          <Reveal
            key={service.title}
            as="li"
            delay={i * 50}
            className="grid gap-2 border-t border-line py-7 md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:gap-10"
          >
            <h3 className="text-[17px] font-semibold tracking-[-0.01em]">{service.title}</h3>
            <p className="max-w-[62ch] text-[15px] leading-relaxed text-fg-muted">
              {service.description}
            </p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
