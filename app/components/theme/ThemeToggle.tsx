"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { Theme, useTheme } from "./ThemeProvider";

const options: { value: Theme; label: string; Icon: typeof Sun }[] = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "system", label: "System", Icon: Monitor },
  { value: "dark", label: "Dark", Icon: Moon },
];

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme, mounted } = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Colour theme"
      className={`inline-flex items-center gap-0.5 rounded-md border border-line p-0.5 ${className}`}
    >
      {options.map(({ value, label, Icon }) => {
        // Before hydration we don't know the stored value; render everything
        // unselected rather than guessing wrong.
        const active = mounted && theme === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={`${label} theme`}
            title={`${label} theme`}
            onClick={() => setTheme(value)}
            className={`inline-flex h-7 w-7 items-center justify-center rounded transition-colors ${
              active
                ? "bg-accent-soft text-accent-ink"
                : "text-fg-faint hover:text-fg"
            }`}
          >
            <Icon size={14} strokeWidth={1.75} aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}
