import { NextResponse } from "next/server";

/**
 * Relays the contact form to Telegram.
 *
 * This runs on the server so the bot token is never shipped to the browser.
 * Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env.local (and in the
 * hosting provider's environment variables) — see .env.example.
 */

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("Contact form: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set.");
    return NextResponse.json(
      { ok: false, error: "The contact form isn't configured yet." },
      { status: 503 },
    );
  }

  let body: { name?: string; email?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email and message are all required." },
      { status: 400 },
    );
  }

  if (name.length > 100 || email.length > 200 || message.length > 4000) {
    return NextResponse.json({ ok: false, error: "That message is too long." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "That email address doesn't look right." },
      { status: 400 },
    );
  }

  const text = [
    "<b>New message from boburov.uz</b>",
    "",
    `<b>Name:</b> ${escapeHtml(name)}`,
    `<b>Email:</b> ${escapeHtml(email)}`,
    "",
    `<b>Message:</b>`,
    escapeHtml(message),
  ].join("\n");

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
    });

    const data = await res.json();
    if (!data.ok) {
      console.error("Telegram rejected the message:", data.description);
      return NextResponse.json(
        { ok: false, error: "Couldn't deliver the message. Please email me instead." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form failed:", error);
    return NextResponse.json(
      { ok: false, error: "Couldn't deliver the message. Please email me instead." },
      { status: 502 },
    );
  }
}
