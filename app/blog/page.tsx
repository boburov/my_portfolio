import type { Metadata } from "next";

import posts from "./posts.json";
import { Reveal } from "../components/ui/Reveal";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on building and shipping software — Next.js, NestJS, TypeScript and the day-to-day of full-stack work.",
  alternates: { canonical: "/blog" },
};

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="pb-24">
      <div className="container pt-16 md:pt-24">
        <Reveal>
          <p className="t-meta text-accent-ink">Writing</p>
          <h1 className="t-display mt-4">Notes</h1>
          <p className="t-lead measure mt-6">
            Short pieces on building, debugging and shipping. Less noise, more signal.
          </p>
        </Reveal>
      </div>

      <div className="container mt-16 md:mt-20">
        <ul>
          {sorted.map((post, i) => (
            <Reveal key={post.id} as="li" delay={(i % 4) * 50} className="border-t border-line">
              <article className="grid gap-3 py-8 md:grid-cols-[8rem_minmax(0,1fr)] md:gap-10">
                <p className="t-mono text-fg-faint md:pt-1.5">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </p>

                <div>
                  <h2 className="t-h3">{post.title}</h2>
                  <p className="measure mt-3 text-[15px] leading-relaxed text-fg-muted">
                    {post.excerpt}
                  </p>
                  <p className="t-mono mt-4 text-fg-faint">
                    {post.tags.join(" · ")} · {post.readTime} min read
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  );
}
