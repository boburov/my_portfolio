"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Instagram,
  Twitter,
  Copy,
  ExternalLink,
  MapPin,
} from "lucide-react";

export default function ContactPage() {
  const [copied, setCopied] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleCopy = async (value: string, key: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(() => setCopied(""), 1800);
    } catch (e) {
      console.error("Copy failed", e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const token = "8454113560:AAHdo31TghOYIwzGBdtM4oyNXRy0wjtV7x0";
    const chatId = 6846125638;

    const text = `
<b>📩 Yangi xabar keldi!</b>

👤 <b>Ism:</b> ${form.name}
📧 <b>Email:</b> ${form.email}

📝 <b>Xabar:</b>
${form.message}

──────────────
🌐 <a href="https://boburov.uz">boburov.uz</a>
`;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: "HTML",
          }),
        }
      );

      const data = await res.json();

      if (data.ok) {
        setStatus("✅ Xabar yuborildi!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Xatolik: " + data.description);
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Server xatosi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        fontFamily: '"Cera CY", sans-serif',
        color: "#fff",
      }}
    >
      <div className="w-full max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Chap taraf: Contact info */}
          <section className="p-8 rounded-2xl backdrop-blur-md bg-white/6 border border-white/6 shadow-2xl">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">Contact</h1>
            <p className="text-sm text-white/80 mb-6">
              Simple. Clear. Fast. Aloqa uchun quyidagi manzillar orqali yoz.
            </p>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-white/4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-white/80">Email</div>
                    <a href="mailto:info@boburov.uz" className="font-medium">
                      info@boburov.uz
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("info@boburov.uz", "email")}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/6 hover:bg-white/8 transition text-sm"
                >
                  <Copy size={16} />
                  <span>{copied === "email" ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Telefon */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-white/4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-white/80">Telefon</div>
                    <a href="tel:+998200020446" className="font-medium">
                      +998 200 020 446
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("+998200020446", "phone")}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/6 hover:bg-white/8 transition text-sm"
                >
                  <Copy size={16} />
                  <span>{copied === "phone" ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Instagram */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-white/4">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-white/80">Instagram</div>
                    <a
                      href="https://instagram.com/boburov.dev"
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium underline"
                    >
                      @boburov.dev
                    </a>
                  </div>
                </div>
                <a
                  href="https://instagram.com/boburov.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/6 hover:bg-white/8 transition text-sm"
                >
                  <ExternalLink size={16} />
                  Open
                </a>
              </div>

              {/* Telegram */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-white/4">
                    <Twitter size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-white/80">Telegram</div>
                    <a
                      href="https://t.me/boburov_sh"
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium"
                    >
                      @boburov_sh
                    </a>
                  </div>
                </div>
                <a
                  href="https://t.me/boburov_sh"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/6 hover:bg-white/8 transition text-sm"
                >
                  <ExternalLink size={16} />
                  Open
                </a>
              </div>

              {/* Portfolio */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/6">
                <MapPin size={18} />
                <div className="text-sm text-white/70">Website / Portfolio</div>
                <a
                  href="https://boburov.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto underline font-medium"
                >
                  boburov.dev
                </a>
              </div>
            </div>
          </section>

          {/* O‘ng taraf: Form */}
          <section className="p-8 rounded-2xl backdrop-blur-md bg-white/4 border border-white/6 shadow-2xl">
            <h2 className="text-2xl font-semibold mb-3">Leave a message</h2>
            <p className="text-sm text-white/80 mb-6">
              Oddiy savol bo‘lsa shu yerga yoz — men tez orada javob beraman.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl p-3 bg-white/5 border border-white/6 placeholder:text-white/50 outline-none"
                placeholder="Isming"
              />

              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl p-3 bg-white/5 border border-white/6 placeholder:text-white/50 outline-none"
                placeholder="Email"
              />

              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-xl p-3 min-h-[120px] bg-white/5 border border-white/6 placeholder:text-white/50 outline-none"
                placeholder="Xabarni yozing..."
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="px-5 py-3 rounded-lg bg-gradient-to-r from-white/12 to-white/8 border border-white/6 text-sm font-medium hover:scale-[1.01] transition"
              >
                {loading ? "Yuborilmoqda..." : "Send"}
              </button>
            </form>

            {status && (
              <div className="mt-4 text-sm text-white/80">{status}</div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
