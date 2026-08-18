# Loutris

Loutris is a premium, Arabic-first competitive word duel. The application shell is RTL while the English word board and keyboard remain explicitly LTR.

## Stack

- Next.js App Router + TypeScript
- Custom Loutris design tokens and responsive CSS
- NestJS + Socket.IO realtime API scaffold
- PostgreSQL + Prisma schema
- Turborepo monorepo

## Current build

The web app includes the responsive lobby, ranked/daily/classic flows, playable local word board, keyboard feedback, Arabic RTL shell, LTR game subtree, rank card, stats/settings sheets, PWA manifest, and the first realtime duel gateway.

## Run

```bash
npm install
npm run dev
```

Web: `apps/web` · API: `apps/api`

The production multiplayer layer should keep all secret-word validation, clocks, turn ownership and ELO calculations server-authoritative.
