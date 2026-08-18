"use client";

import { useCallback, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

/**
 * Main screenshot plus thumbnails, with a keyboard-navigable lightbox.
 * Single-image projects skip the thumbnail strip entirely.
 */
export function Gallery({ images, name }: { images: StaticImageData[]; name: string }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const step = useCallback(
    (delta: number) => setActive((i) => (i + delta + images.length) % images.length),
    [images.length],
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, step]);

  return (
    <>
      <figure className="m-0">
        <button
          type="button"
          onClick={() => setLightbox(true)}
          aria-label={`Enlarge ${name} screenshot ${active + 1} of ${images.length}`}
          className="group relative block aspect-[16/9] w-full cursor-zoom-in overflow-hidden rounded-md border border-line bg-bg-subtle"
        >
          <Image
            src={images[active]}
            alt={`${name} interface`}
            fill
            priority
            sizes="(max-width: 1160px) 100vw, 1080px"
            placeholder="blur"
            className="object-cover object-top"
          />
        </button>

        {images.length > 1 && (
          <figcaption className="mt-3 flex flex-wrap items-center gap-3">
            {images.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show screenshot ${i + 1}`}
                aria-current={active === i}
                className={`relative h-14 w-24 shrink-0 overflow-hidden rounded border transition-colors ${
                  active === i ? "border-accent" : "border-line hover:border-line-strong"
                }`}
              >
                <Image
                  src={img}
                  alt=""
                  fill
                  sizes="96px"
                  className={`object-cover object-top transition-opacity ${
                    active === i ? "opacity-100" : "opacity-60"
                  }`}
                />
              </button>
            ))}
          </figcaption>
        )}
      </figure>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${name} screenshots`}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightbox(false)}
            className="absolute inset-0 bg-bg/95 backdrop-blur-sm"
          />

          <div className="relative z-10 w-full max-w-5xl">
            <div className="relative aspect-video w-full overflow-hidden rounded-md border border-line bg-bg-subtle">
              <Image
                src={images[active]}
                alt={`${name} interface, screenshot ${active + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="t-mono text-fg-faint">
                {active + 1} / {images.length}
              </span>

              <div className="flex items-center gap-2">
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => step(-1)}
                      aria-label="Previous screenshot"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-fg transition-colors hover:bg-bg-subtle"
                    >
                      <ChevronLeft size={16} aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() => step(1)}
                      aria-label="Next screenshot"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-fg transition-colors hover:bg-bg-subtle"
                    >
                      <ChevronRight size={16} aria-hidden="true" />
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => setLightbox(false)}
                  aria-label="Close"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-fg transition-colors hover:bg-bg-subtle"
                >
                  <X size={16} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
