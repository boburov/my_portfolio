"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — the value is selectable on the page anyway */
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-line text-fg-faint transition-colors hover:text-fg"
    >
      {copied ? (
        <Check size={14} strokeWidth={2} aria-hidden="true" className="text-positive" />
      ) : (
        <Copy size={14} strokeWidth={1.75} aria-hidden="true" />
      )}
    </button>
  );
}
