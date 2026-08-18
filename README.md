# boburov.dev — Personal Portfolio

Personal portfolio of **Boburov Shukurillo**, Full-Stack Engineer.
Minimal editorial design in white / charcoal with an orange accent, in both light and dark themes.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 — design tokens as CSS custom properties in `app/style/globals.css`
- **Fonts:** Inter + JetBrains Mono via `next/font`
- **Icons:** lucide-react, plus inlined monochrome brand glyphs
- **Deployment:** Vercel

Four runtime dependencies. No animation library — entrance animations use `IntersectionObserver`
and CSS transitions, and honour `prefers-reduced-motion`.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the Telegram values
npm run dev
```

## Environment variables

The contact form relays messages to Telegram through a **server-side** route
(`app/api/contact/route.ts`), so the bot token never reaches the browser.

| Variable | Description |
| --- | --- |
| `TELEGRAM_BOT_TOKEN` | Bot token from @BotFather |
| `TELEGRAM_CHAT_ID` | Chat that receives form submissions |

Set both in `.env.local` locally and in the hosting provider's environment variables.
Without them the form returns a clear "not configured" message instead of failing silently.

## Editing content

Almost all copy lives in two files — no component edits needed for routine updates:

- `app/data/site.ts` — profile, contact details, nav, stats, about, experience,
  education, languages, core expertise, technology stack, services
- `app/data/projects.ts` — projects. Set `featured: true` to give a project a
  full editorial row; `false` puts it in the compact "Also built" list

`app/data/brand-paths.ts` holds monochrome SVG paths (from simple-icons, CC0) used by
the technology stack. Add a key there and reference it as `icon` in `stackGroups`.

## Structure

```txt
app/
 ├─ layout.tsx              # fonts, metadata, JSON-LD, theme boot, chrome
 ├─ page.tsx                # composes the homepage sections
 ├─ api/contact/route.ts    # Telegram relay (server only)
 ├─ data/                   # all site content
 ├─ components/
 │   ├─ Navbar.tsx  Footer.tsx  ProjectRow.tsx
 │   ├─ sections/           # Hero, Stats, About, Experience, Projects,
 │   │                      # Expertise, TechStack, Services, Contact
 │   ├─ theme/              # ThemeProvider, ThemeScript, ThemeToggle
 │   └─ ui/                 # Section, Reveal, StatusBadge, TechGlyph
 ├─ projects/[slug]/        # per-project case study (statically generated)
 ├─ contact/  blog/
 └─ style/globals.css       # design tokens + typography scale
```

## Theme

Light / dark / system, persisted in `localStorage` under `boburov-theme`.
A tiny blocking script in `<head>` applies the class before first paint, so there is no flash.
On "system" the page follows `prefers-color-scheme` live.

## Scripts

```bash
npm run dev     # dev server
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

`NEXT_DIST_DIR` can point the build at an alternative output directory, which is
useful for running a production build alongside `next dev`.
