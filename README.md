# Nathaniel Varga-Chauvin Portfolio

A professional personal portfolio website I use to support my LinkedIn profile and present work in business operations, sales operations, quoting workflows, dashboard development, project support, and practical analytics.

Live site: `https://nathanielvc.com/`

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static content
- Hosted on Vercel
- Vercel Cron for market quote refresh
- Package manager: Bun

This project is a Next.js app. The `.next` directory is local build output and should not be committed.

## Contact Details

- Email: `vcath@hotmail.com`
- LinkedIn: `https://www.linkedin.com/in/nathaniel-varga-chauvin-16240a139`

## Running Locally

Install dependencies:

```bash
bun install
```

Run the development server:

```bash
bun run dev
```

Open the local URL printed by Next.js in your terminal.

## Building Locally

Create a production build:

```bash
bun run build
```

Preview the production build locally:

```bash
bun run start
```

## Deploying to Vercel

The live site is hosted on Vercel at `https://nathanielvc.com/`. Vercel should auto-detect this as a Next.js App Router project.

Use these settings:

- Framework preset: `Next.js`
- Install command: `bun install`
- Build command: `bun run build`
- Output directory: leave blank on Vercel
- Local build output: `.next`

The site includes `vercel.json` for the market-data refresh cron:

```json
{
  "crons": [
    {
      "path": "/api/market-refresh",
      "schedule": "*/15 * * * 1-5"
    }
  ]
}
```

Set these Vercel environment variables before enabling the live quote layer:

```text
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
CRON_SECRET
MARKET_REFRESH_SECRET
```

`/api/market-refresh` accepts Vercel Cron requests with `Authorization: Bearer CRON_SECRET` and manual requests with `Authorization: Bearer MARKET_REFRESH_SECRET`.
`/api/market-latest` serves latest quote data to the static dashboard demo.

## Domain

- Custom domain: `nathanielvc.com`
- Managed through Vercel project settings
- Future DNS or domain changes should be handled in Vercel settings

## Deploying to Netlify

Vercel is the preferred deployment target for this Next.js app. Netlify can still deploy it if you choose the Next.js framework support.

Use these settings:

- Build command: `bun run build`
- Publish directory: `.next`
- Framework: `Next.js`

Do not use Vite settings such as `dist` for this project.

## Custom Domain

After deploying, add your domain in the hosting provider dashboard.

For Vercel:

1. Open the project dashboard.
2. Go to Settings, then Domains.
3. Add the custom domain.
4. Follow Vercel's DNS instructions at your domain registrar.

## Updating the Resume PDF

The resume download links point to:

```text
public/resume.pdf
```

Replace that file with the latest CV whenever you want to update the public resume.

The resume should be accessible at:

```text
https://nathanielvc.com/resume.pdf
```

## Updating Links

To update the LinkedIn or email links, edit:

- `app/page.tsx`
- `app/contact/page.tsx`
- `app/resume/page.tsx`
- `components/Footer.tsx`
