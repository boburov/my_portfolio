import { Reveal } from "./Reveal";

/**
 * The editorial section shell used across the page: a numbered monospace label
 * pinned in a narrow left rail on desktop, content in the wide right column.
 * Every section shares this rhythm, which is what makes the page read as one
 * document rather than a stack of cards.
 */
export function Section({
  id,
  index,
  label,
  title,
  intro,
  children,
  aside,
}: {
  id: string;
  index: string;
  label: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-heading`}>
      <div className="container">
        <div className="grid gap-10 md:grid-cols-[7rem_minmax(0,1fr)] md:gap-12 lg:grid-cols-[10rem_minmax(0,1fr)]">
          <Reveal className="md:sticky md:top-28 md:self-start">
            <p className="t-meta flex items-center gap-2 md:flex-col md:items-start md:gap-3">
              <span className="text-accent-ink">{index}</span>
              <span className="hidden h-px w-8 bg-line-strong md:block" aria-hidden="true" />
              <span>{label}</span>
            </p>
          </Reveal>

          <div>
            <Reveal className="mb-10 md:mb-14">
              <h2 id={`${id}-heading`} className="t-h2">
                {title}
              </h2>
              {intro && <p className="t-lead measure mt-5">{intro}</p>}
              {aside && <div className="mt-8">{aside}</div>}
            </Reveal>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
