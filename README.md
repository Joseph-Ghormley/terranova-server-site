# Sunny Horizon Server Hub

The website for the Sunny Horizon Minecraft server (formerly TerraNova). React and Vite.

## Edit the content

All text lives in `src/data/`. The server's name is set once, at the top of `src/data/siteData.js`. See `CLAUDE.md` for what each file holds and the rules for this site.

## Run locally

```bash
npm install
npm run dev
```

`npm run dev` also shows hidden drafts, marked "Hidden draft".

## Build

```bash
npm run build
```

The production files are generated in `dist/`. Hidden drafts are left out.
