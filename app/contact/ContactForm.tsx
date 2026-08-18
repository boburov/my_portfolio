"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type State = { kind: "idle" | "sending" | "sent" | "error"; message?: string };

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [state, setState] = useState<State>({ kind: "idle" });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setState({ kind: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.ok) {
        setForm({ name: "", email: "", message: "" });
        setState({ kind: "sent", message: "Message sent — I'll get back to you soon." });
      } else {
        setState({ kind: "error", message: data.error ?? "Something went wrong." });
      }
    } catch {
      setState({
        kind: "error",
        message: "Couldn't reach the server. Please email me instead.",
      });
    }
  };

  const field =
    "w-full rounded-md border border-line bg-transparent px-3.5 py-3 text-[15px] text-fg placeholder:text-fg-faint transition-colors focus:border-accent";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="t-meta mb-2 block">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          maxLength={100}
          autoComplete="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={field}
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="t-meta mb-2 block">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={200}
          autoComplete="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={field}
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="t-meta mb-2 block">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={4000}
          rows={6}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${field} resize-y`}
          placeholder="What are you building?"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={state.kind === "sending"} className="btn btn-accent">
          {state.kind === "sending" ? "Sending…" : "Send message"}
          {state.kind !== "sending" && (
            <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
          )}
        </button>

        <p
          role="status"
          aria-live="polite"
          className={`text-[14px] ${
            state.kind === "error" ? "text-accent-ink" : "text-fg-muted"
          }`}
        >
          {state.message}
        </p>
      </div>
    </form>
  );
}
