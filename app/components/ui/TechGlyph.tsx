import { brandPaths } from "../../data/brand-paths";

/**
 * Monochrome brand glyph. Inlined SVG rather than a remote logo service:
 * no network request, no layout shift, and it inherits `currentColor` so the
 * icon wall stays subtle in both themes instead of turning into confetti.
 *
 * Technologies without a brand mark fall back to a small square, which keeps
 * the list rhythm intact.
 */
export function TechGlyph({
  icon,
  size = 16,
  className = "",
}: {
  icon?: string;
  size?: number;
  className?: string;
}) {
  const path = icon ? brandPaths[icon] : undefined;

  if (!path) {
    return (
      <span
        aria-hidden="true"
        className={`inline-block shrink-0 rounded-[2px] border border-current opacity-45 ${className}`}
        style={{ width: size - 5, height: size - 5 }}
      />
    );
  }

  return (
    <svg
      role="presentation"
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={`shrink-0 ${className}`}
    >
      <path d={path} />
    </svg>
  );
}
