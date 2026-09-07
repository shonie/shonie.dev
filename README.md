# shonie.dev

Personal site of **Oleksandr Starnikov** — solution architect. A single-page portfolio with a printable, A4-formatted CV and a contact form.

Live at **[shonie.dev](https://shonie.dev)**.

## Tech stack

- **[Next.js 16](https://nextjs.org/)** (App Router) + **React 19**
- **TypeScript**
- Plain CSS (see `app/globals.css` and `app/cv/cv.css`)
- **[Web3Forms](https://web3forms.com)** for the contact form (no backend)
- **[Vercel Analytics](https://vercel.com/docs/analytics)**
- Deployed on **[Vercel](https://vercel.com/)**

## Getting started

Requires Node.js 20.9+ (as required by Next.js 16) and npm.

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# then fill in NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY (see below)

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable                           | Required             | Description                                                                                                                                                                                                  |
| ---------------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | For the contact form | Web3Forms access key. Public by design (inlined into the client bundle); the recipient address is configured in the Web3Forms dashboard, not here. Get a free key at [web3forms.com](https://web3forms.com). |

The site runs fine without it — only the contact form is disabled.

## Scripts

| Command          | Description                      |
| ---------------- | -------------------------------- |
| `npm run dev`    | Start the dev server (Turbopack) |
| `npm run build`  | Production build                 |
| `npm run start`  | Serve the production build       |
| `npm run lint`   | Run ESLint                       |
| `npm run format` | Format with Prettier             |

> **Note:** the build is pinned to Webpack (`next build --webpack`) to work around a Next.js 16 Turbopack bug that fails to collect metadata routes (`/robots.txt`, `/sitemap.xml`). Dev still uses Turbopack.

## Project structure

```
app/            App Router routes, layout, and metadata
  cv/           Printable A4 CV page
components/     UI components (Hero, WorkList, ContactForm, …)
  cv/           CV-specific components
lib/            Site constants and CV/content data
  cv-data.ts    Single source of truth for CV content
  site.ts       Canonical site URL, name, and metadata
public/         Static assets (favicons, portrait, icons)
```

## License

Source code is released under the [MIT License](LICENSE). Personal content — CV/biographical data, branding, logos, icons, and photographs — is © 2026 Oleksandr Starnikov, all rights reserved, and excluded from the MIT grant. See [LICENSE](LICENSE) for details.
