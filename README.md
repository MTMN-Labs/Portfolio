# MTMN Labs portfolio

Portfolio site for MTMN Labs, a software and AI development studio.

Built with Next.js 15 (App Router), React 19, Tailwind CSS 4 and Framer Motion 12.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Edit the content

All copy, links and placeholders live in `src/data/site.ts`:

- `site` holds the studio name, contact email, nav links, stats and the tech ticker.
- `team` holds each member in display order. The orbit on the home page and the team swapper both follow this order.
- `projects` holds the work cards. Entries marked `placeholder: true` show a muted status dot until real text replaces them.
- `services` and `process` hold the services list and the how we work steps.

Team photos sit in `public/team`. Update the `photo` and `focus` fields in `site.ts` when a photo changes.

## Theme

Colours and fonts are Tailwind theme tokens in `src/app/globals.css`. Changing `--color-accent` restyles every highlight on the site.

## Structure

```
src/app/            layout, global styles and the home page
src/components/     one file per section plus shared ui pieces
src/data/site.ts    all content
public/team/        portraits
```
