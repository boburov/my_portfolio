"use client";


import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { ExternalLink, Github, Sparkles, X } from "lucide-react";
import { loyihalar } from "../data";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  const [preview, setPreview] = useState<{ url: string; title: string } | null>(null);
  const [iframeError, setIframeError] = useState(false);

  const skills = [
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "Tailwind", icon: "tailwind" },
    { name: "JavaScript", icon: "js" },
    { name: "TypeScript", icon: "ts" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Node.js", icon: "nodejs" },
    { name: "NestJS", icon: "nestjs" },
    { name: "Git", icon: "git" },
    { name: "NPM", icon: "npm" },
    { name: "MUI", icon: "mui" },
    { name: "Figma", icon: "figma" },
    { name: "Docker", icon: "docker" },
  ];
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreview(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="projects" className="container py-12">
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-6 sm:p-8">
          <p className="text-xs uppercase tracking-widest text-white/50">
            Projects
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold montbold tracking-tight">
            Crafting Code, Designing Ideas
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/65 leading-relaxed">
            Here are some projects I’ve built — focused on clean UI, solid logic,
            and real-world usefulness.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              {loyihalar.length}+ projects
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              UI/UX + Fullstack
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              Next.js / NestJS
            </span>
          </div>
        </div>

        {/* Blog / CTA */}
        <div className="lg:col-span-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/50">
                Writing
              </p>
              <h3 className="mt-2 text-lg font-semibold">
                Visit my blog
              </h3>
              <p className="mt-2 text-sm text-white/65">
                Short posts about building, debugging, and shipping.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <Sparkles className="w-5 h-5 text-indigo-400" />
            </div>
          </div>

          <a
            href="/blog"
            className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-600 active:scale-[0.98] transition"
          >
            Open Blog
          </a>
        </div>
      </div>

      {/* Tech stack */}
      <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base sm:text-lg font-semibold text-white/90">
            ⚙️ Tech Stack & Tools
          </h3>
          <span className="text-xs text-white/50">Scroll →</span>
        </div>

        <div className="mt-4 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="shrink-0 rounded-2xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
              title={skill.name}
            >
              <Image
                src={`https://skillicons.dev/icons?i=${skill.icon}`}
                alt={skill.name}
                width={40}
                height={40}
                className="w-10 h-10"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>


      {preview && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <button
            aria-label="Close preview"
            onClick={() => setPreview(null)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            type="button"
          />

          {/* Modal */}
          <div className="relative w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/5 px-4 py-3">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white truncate">
                  {preview.title}
                </p>
                <p className="text-xs text-white/50 truncate">{preview.url}</p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={preview.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10 transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open new tab
                </a>

                <button
                  type="button"
                  onClick={() => setPreview(null)}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2 text-white hover:bg-white/10 transition"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="relative h-[75vh] bg-black">
              {!iframeError ? (
                <iframe
                  src={preview.url}
                  className="w-full h-full"
                  onError={() => setIframeError(true)}
                // sandbox’ni qattiq qo‘ysang ba’zi UI buziladi, shu default ok
                />
              ) : (
                <div className="h-full w-full flex flex-col items-center justify-center text-center p-8">
                  <p className="text-lg font-bold text-white">
                    Iframe’da ochilmadi 😅
                  </p>
                  <p className="mt-2 text-sm text-white/60 max-w-xl">
                    Bu sayt iframe’ni bloklagan bo‘lishi mumkin (X-Frame-Options / CSP).
                    Pastdagi tugma orqali yangi oynada oching.
                  </p>

                  <a
                    href={preview.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-purple-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-purple-600 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open new tab
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}



      {/* Projects grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loyihalar.map((project, i) => (
          <article
            key={project.id}
            data-aos={i % 2 === 0 ? "fade-up-right" : "fade-up-left"}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
          >
            {/* Image */}
            <div className="relative h-[260px]">
              <Image
                src={project.img}
                alt={project.projectName}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Hover buttons */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition">
                <a
                  href={project.gitHb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-3 py-2 text-xs"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setIframeError(false);
                    setPreview({ url: project.netlify, title: project.projectName });
                  }}
                  className="btn-secondary px-3 py-2 text-xs"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live
                </button>

              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-white/95">
                {project.projectName}
              </h3>

              <p className="mt-2 text-sm text-white/65 line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.usingLanguage.map((tech: string, idx: number) => (
                  <span
                    key={idx}
                    className="text-[11px] px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/75 hover:bg-white/10 transition"
                  >
                    #{tech}
                  </span>
                ))}
              </div>

              {/* Mobile buttons (always visible on small screens) */}
              <div className="mt-5 flex gap-3 md:hidden">
                <a
                  href={project.gitHb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-secondary justify-center"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.netlify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 btn-secondary justify-center"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
