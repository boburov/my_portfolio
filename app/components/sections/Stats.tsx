import { stats } from "../../data/site";
import { Reveal } from "../ui/Reveal";

export function Stats() {
  return (
    <section aria-label="Professional snapshot" className="border-t border-line">
      <div className="container">
        <ul className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              as="li"
              delay={i * 60}
              className={[
                "py-8 md:py-11",
                // Hairline rules between cells only — no boxes.
                i % 2 === 1 ? "border-l border-line pl-5 md:pl-0" : "",
                i >= 2 ? "border-t border-line md:border-t-0" : "",
                i > 0 ? "md:border-l md:border-line md:pl-8" : "",
                i < 3 ? "md:pr-8" : "",
              ].join(" ")}
            >
              <p className="text-[clamp(2rem,1.5rem+1.8vw,2.75rem)] font-semibold leading-none tracking-[-0.03em]">
                {stat.value}
              </p>
              <p className="mt-3 text-[14px] font-medium leading-snug">{stat.label}</p>
              <p className="t-mono mt-1.5 text-fg-faint">{stat.note}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
