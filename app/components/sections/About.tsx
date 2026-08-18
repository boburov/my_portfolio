import { about, education, languages } from "../../data/site";
import { Reveal } from "../ui/Reveal";
import { Section } from "../ui/Section";

export function About() {
  return (
    <Section id="about" index="01" label="About" title={about.intro}>
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16">
        <Reveal className="measure space-y-6">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i} className="t-body">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={100} className="space-y-10 lg:pt-1">
          <div>
            <h3 className="t-meta mb-4">Education</h3>
            <ul className="space-y-4">
              {education.map((item) => (
                <li key={item.title}>
                  <p className="text-[14px] font-medium">{item.title}</p>
                  <p className="t-mono mt-0.5 text-fg-faint">{item.org}</p>
                  {item.note && <p className="t-small mt-1">{item.note}</p>}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="t-meta mb-4">Languages</h3>
            <ul className="space-y-3">
              {languages.map((lang) => (
                <li key={lang.name}>
                  <p className="text-[14px] font-medium">{lang.name}</p>
                  <p className="t-mono mt-0.5 text-fg-faint">{lang.level}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
