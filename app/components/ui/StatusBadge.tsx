import { ProjectStatus } from "../../data/projects";

/**
 * Status is communicated by a small coloured dot plus the word itself — never
 * by colour alone, so it still reads for colour-blind visitors.
 */
const dotClass: Record<ProjectStatus, string> = {
  Live: "bg-positive",
  "In Development": "bg-accent",
  Delivered: "bg-fg-muted",
  Personal: "bg-fg-faint",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className="t-mono inline-flex items-center gap-1.5 whitespace-nowrap text-fg-faint">
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotClass[status]}`}
      />
      {status}
    </span>
  );
}
