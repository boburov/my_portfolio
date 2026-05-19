"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Sparkles,
  Target,
  User,
  X,
  Zap,
} from "lucide-react";

import { getLoyihaBySlug, loyihalar } from "../../data";

const statusColor: Record<string, string> = {
  Live: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
  "In Development": "bg-amber-500/20 text-amber-300 border-amber-400/30",
  Completed: "bg-indigo-500/20 text-indigo-300 border-indigo-400/30",
  Personal: "bg-purple-500/20 text-purple-300 border-purple-400/30",
};

export default function ProjectDetailPage() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();
  const project = getLoyihaBySlug(params.slug);

  const [activeImage, setActiveImage] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight" && project)
        setLightbox((i) => (i === null ? null : (i + 1) % project.images.length));
      if (e.key === "ArrowLeft" && project)
        setLightbox((i) =>
          i === null ? null : (i - 1 + project.images.length) % project.images.length
        );
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, project]);

  if (!project) {
    return (
      <section className="container mt-16 text-white">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center">
          <h1 className="text-2xl font-bold montbold">Loyiha topilmadi</h1>
          <p className="mt-2 text-white/60">
            Bunday slug bilan loyiha mavjud emas.
          </p>
          <Link href="/projects" className="btn-primary mt-6 inline-flex">
            <ArrowLeft size={16} />
            Loyihalarga qaytish
          </Link>
        </div>
      </section>
    );
  }

  const related = loyihalar.filter((l) => l.slug !== project.slug).slice(0, 3);

  return (
    <section className="container mt-8 mb-16 text-white">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-3 mb-6">
        <button
          type="button"
          onClick={() => router.back()}
          className="btn-secondary"
        >
          <ArrowLeft size={16} />
          Orqaga
        </button>

        <div className="flex items-center gap-2">
          {project.netlify && (
            <a
              href={project.netlify}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <ExternalLink size={16} />
              Live
            </a>
          )}
          <a
            href={project.gitHb}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github size={16} />
            Code
          </a>
        </div>
      </div>

      {/* Hero */}
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 lg:grid-cols-12 gap-6"
      >
        {/* Main */}
        <div className="lg:col-span-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="relative h-[320px] sm:h-[420px]">
            <Image
              src={project.images[activeImage] ?? project.img}
              alt={project.projectName}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover cursor-zoom-in"
              priority
              onClick={() => setLightbox(activeImage)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

            <div className="absolute top-4 left-4">
              <span
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${statusColor[project.status]}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {project.status}
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <p className="text-xs uppercase tracking-widest text-white/50">
              {project.role}
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold montbold tracking-tight">
              {project.projectName}
            </h1>
            <p className="mt-3 text-base text-white/70 leading-relaxed">
              {project.tagline}
            </p>

            <p className="mt-5 text-sm sm:text-base text-white/75 leading-relaxed whitespace-pre-line">
              {project.longDescription}
            </p>

            {/* Stack pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.usingLanguage.map((t, i) => (
                <span
                  key={i}
                  className="text-[11px] px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/75"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Side info */}
        <div className="lg:col-span-4 space-y-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-6">
            <p className="uppercase text-white/60 text-xs tracking-widest mb-3">
              Loyiha haqida
            </p>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <User className="w-4 h-4 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-white/50 text-xs">Rolim</p>
                  <p className="font-semibold">{project.role}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-white/50 text-xs">Yil</p>
                  <p className="font-semibold">{project.year}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-4 h-4 text-indigo-400 mt-0.5" />
                <div>
                  <p className="text-white/50 text-xs">Davomiyligi</p>
                  <p className="font-semibold">{project.duration}</p>
                </div>
              </li>
            </ul>
          </div>

          {project.results.length > 0 && (
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-6">
              <p className="uppercase text-white/60 text-xs tracking-widest mb-3">
                Natijalar
              </p>
              <div className="grid grid-cols-2 gap-3">
                {project.results.map((r, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/5 p-3"
                  >
                    <p className="text-[11px] text-white/60">{r.label}</p>
                    <p className="mt-1 text-base font-bold text-indigo-300 montbold">
                      {r.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Gallery */}
      {project.images.length > 1 && (
        <div
          data-aos="fade-up"
          className="mt-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-6"
        >
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg sm:text-xl font-bold montbold">
              Gallery
            </h2>
            <span className="text-xs text-white/50">
              {project.images.length} rasm
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {project.images.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setActiveImage(i);
                  setLightbox(i);
                }}
                className={`relative aspect-[4/3] overflow-hidden rounded-2xl border transition ${
                  activeImage === i
                    ? "border-indigo-400/60 ring-2 ring-indigo-400/30"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <Image
                  src={img}
                  alt={`${project.projectName} ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Features & Challenges */}
      <div
        data-aos="fade-up"
        className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {project.features.length > 0 && (
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <h2 className="text-lg sm:text-xl font-bold montbold">
                Asosiy funksiyalar
              </h2>
            </div>
            <ul className="space-y-3">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.challenges.length > 0 && (
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-indigo-400" />
              <h2 className="text-lg sm:text-xl font-bold montbold">
                Qiyinchiliklar va yechimlar
              </h2>
            </div>
            <ul className="space-y-3">
              {project.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div data-aos="fade-up" className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold montbold">Boshqa loyihalarim</h2>
            <Link href="/projects" className="text-sm text-white/60 hover:text-white">
              Hammasini ko'rish →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link
                key={r.id}
                href={`/projects/${r.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:bg-white/10 transition"
              >
                <div className="relative h-40">
                  <Image
                    src={r.img}
                    alt={r.projectName}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white">{r.projectName}</h3>
                  <p className="mt-1 text-xs text-white/60 line-clamp-2">
                    {r.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <button
            aria-label="Close"
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <div className="relative w-full max-w-5xl">
            <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 shadow-2xl">
              <Image
                src={project.images[lightbox]}
                alt={`${project.projectName} ${lightbox + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="absolute top-3 right-3 flex items-center gap-2">
              <span className="rounded-full bg-black/60 px-3 py-1 text-xs text-white/80">
                {lightbox + 1} / {project.images.length}
              </span>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/60 p-2 text-white hover:bg-black/80 transition"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {project.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setLightbox((i) =>
                      i === null
                        ? null
                        : (i - 1 + project.images.length) % project.images.length
                    )
                  }
                  className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full border border-white/15 bg-black/60 p-2 text-white hover:bg-black/80 transition"
                  aria-label="Prev"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setLightbox((i) =>
                      i === null ? null : (i + 1) % project.images.length
                    )
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full border border-white/15 bg-black/60 p-2 text-white hover:bg-black/80 transition"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
