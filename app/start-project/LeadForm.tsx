"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type State = { kind: "idle" | "sending" | "sent" | "error"; message?: string };

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const projectTypes = [
  "Website / landing page",
  "Web app / SaaS",
  "Mobile app (Flutter)",
  "Telegram bot / automation",
  "Backend / API",
  "Something else",
];

const budgets = ["Under $500", "$500 – $2,000", "$2,000 – $5,000", "$5,000+", "Not sure yet"];

const empty = { name: "", contact: "", projectType: "", budget: "", details: "", website: "" };

export function LeadForm() {
  const [form, setForm] = useState(empty);
  const [state, setState] = useState<State>({ kind: "idle" });

  const set = (key: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [key]: e.target.value });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setState({ kind: "sending" });

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: window.location.href }),
      });
      const data = await res.json();

      if (data.ok) {
        setForm(empty);
        setState({ kind: "sent", message: "Thanks! I'll reach out within 24 hours." });
        window.gtag?.("event", "generate_lead");
      } else {
        setState({ kind: "error", message: data.error ?? "Something went wrong." });
      }
    } catch {
      setState({ kind: "error", message: "Couldn't reach the server. Please try Telegram instead." });
    }
  };

  const field =
    "w-full rounded-md border border-line bg-transparent px-3.5 py-3 text-[15px] text-fg placeholder:text-fg-faint transition-colors focus:border-accent";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="lead-name" className="t-meta mb-2 block">
          Name
        </label>
        <input id="lead-name" required maxLength={100} autoComplete="name" value={form.name}
          onChange={set("name")} className={field} placeholder="Your name" />
      </div>

      <div>
        <label htmlFor="lead-contact" className="t-meta mb-2 block">
          Phone, Telegram or email
        </label>
        <input id="lead-contact" required maxLength={200} value={form.contact}
          onChange={set("contact")} className={field} placeholder="+998 … / @username / you@company.com" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-type" className="t-meta mb-2 block">
            What do you need?
          </label>
          <select id="lead-type" value={form.projectType} onChange={set("projectType")} className={field}>
            <option value="">Select…</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="lead-budget" className="t-meta mb-2 block">
            Budget
          </label>
          <select id="lead-budget" value={form.budget} onChange={set("budget")} className={field}>
            <option value="">Select…</option>
            {budgets.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="lead-details" className="t-meta mb-2 block">
          Tell me about the project <span className="text-fg-faint">(optional)</span>
        </label>
        <textarea id="lead-details" rows={5} maxLength={3000} value={form.details}
          onChange={set("details")} className={`${field} resize-y`} placeholder="Goals, deadline, links…" />
      </div>

      {/* Honeypot for bots */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
        value={form.website} onChange={set("website")} className="hidden" />

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={state.kind === "sending"} className="btn btn-accent">
          {state.kind === "sending" ? "Sending…" : "Get a free quote"}
          {state.kind !== "sending" && <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />}
        </button>
        <p role="status" aria-live="polite"
          className={`text-[14px] ${state.kind === "error" ? "text-accent-ink" : "text-fg-muted"}`}>
          {state.message}
        </p>
      </div>
    </form>
  );
}
