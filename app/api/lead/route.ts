import { NextResponse } from "next/server";

/**
 * Relays lead-form submissions (from /start-project) to Telegram.
 *
 * The bot token is intentionally inlined here (server-only, never sent to the
 * browser). Set LEAD_CHAT_ID to your Telegram chat id; while it is empty the
 * route falls back to the chat that most recently messaged the bot.
 */
const BOT_TOKEN = "7595720619:AAHZhscftej0RLr0bE7P59n6POp6JS9eeK8";
const LEAD_CHAT_ID = "";

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

async function resolveChatId(): Promise<string | null> {
  if (LEAD_CHAT_ID) return LEAD_CHAT_ID;
  const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`, {
    cache: "no-store",
  });
  const data = await res.json();
  const updates: { message?: { chat?: { id?: number } } }[] = data.result ?? [];
  for (let i = updates.length - 1; i >= 0; i--) {
    const id = updates[i].message?.chat?.id;
    if (id) return String(id);
  }
  return null;
}

export async function POST(request: Request) {
  let body: Record<string, string | undefined>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const clean = (key: string, max: number) => (body[key] ?? "").toString().trim().slice(0, max);
  const name = clean("name", 100);
  const contactValue = clean("contact", 200);
  const projectType = clean("projectType", 100);
  const budget = clean("budget", 100);
  const details = clean("details", 3000);
  const source = clean("source", 200);

  // Honeypot: real users never fill this in.
  if (clean("website", 200)) return NextResponse.json({ ok: true });

  if (!name || !contactValue) {
    return NextResponse.json(
      { ok: false, error: "Name and a way to reach you are required." },
      { status: 400 },
    );
  }

  const text = [
    "<b>🔥 New lead — boburov.uz</b>",
    "",
    `<b>Name:</b> ${escapeHtml(name)}`,
    `<b>Contact:</b> ${escapeHtml(contactValue)}`,
    projectType && `<b>Project:</b> ${escapeHtml(projectType)}`,
    budget && `<b>Budget:</b> ${escapeHtml(budget)}`,
    details && `\n<b>Details:</b>\n${escapeHtml(details)}`,
    source && `\n<i>Source: ${escapeHtml(source)}</i>`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const chatId = await resolveChatId();
    if (!chatId) {
      console.error("Lead form: no chat id. Send /start to the bot or set LEAD_CHAT_ID.");
      return NextResponse.json(
        { ok: false, error: "Couldn't deliver your request. Please message me on Telegram." },
        { status: 502 },
      );
    }

    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
    });
    const data = await res.json();
    if (!data.ok) {
      console.error("Telegram rejected the lead:", data.description);
      return NextResponse.json(
        { ok: false, error: "Couldn't deliver your request. Please message me on Telegram." },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead form failed:", error);
    return NextResponse.json(
      { ok: false, error: "Couldn't deliver your request. Please message me on Telegram." },
      { status: 502 },
    );
  }
}
