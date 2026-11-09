# CLAUDE.md

Guidance for Claude when working on the **Sunny Horizon** website (this repo).

## Project

The website for the Minecraft server **Sunny Horizon** (it started as TerraNova). Lead developer: **Joseph Ghormley**. Server admin: **Bassor**, who decides what goes on the site.

- Hosted on **Netlify**. Pushing to GitHub publishes the site, so **every push is a release**.
- Only Joseph and Bassor have the link. Nobody else gets it until Bassor says so.
- **No Josoph credit on the site** (Bassor said no, Nov 9, 2026). Josoph is credited on GitHub, in the plugin repos. The website is Joseph's. When Bassor answers a question, follow his answer exactly; if he leaves it blank, use the default.

## Stack and commands

- React 19, Vite 8, react-router-dom 7.
- `npm install`, `npm run dev` (shows hidden drafts), `npm run build` (output in `dist/`, never shows drafts).
- `public/_redirects` makes Netlify open the site for any address (`/items/...`, `/wiki/...`), so links and refreshes don't 404. Keep it.
- `vite.config.js` fills `%SERVER_NAME%` in `index.html` from the name setting.

## Where things live

- **All text is in `src/data/`:**
  - `siteData.js`: **the name settings** (top of the file), links, IP, version, features, roadmap, rules, staff.
  - `itemSets.js` + `items.js`: the Items pages. Field meanings are written at the top of each file.
  - `updates.js`: update notes (`/events`).
  - `wikiArticles.js` + `wikiCategories.js`: the wiki.
  - `commands.js`, `homeContent.js`, `warps.js`, `videoGuides.js`.
  - `visibility.js`: the hidden-draft switch.
- Pages: `src/App.jsx` (home, vote, join, wiki, events), `src/pages/ItemPages.jsx` (items), `src/pages/InfoPages.jsx` (rules, staff).
- Components: `src/components/` (`McText` shows Minecraft color codes, `RichText` does **bold** and links in plain-word text, `PageShell` is the page frame).

## The name

Never type the server's name into text. Use the settings at the top of `src/data/siteData.js`:

- `serverName`: what the site calls the server (header, footer, titles).
- `networkName`: the network name in guides ("Sunny Horizons Network").
- `homeWorldName`: the main world and spawn city, a **place** (TerraNova City, the TerraNova Inn, "the waters of TerraNova").
- `fullName`: both names, shown once if they're the same.

Bassor's answer (Nov 9, 2026): the server is **Sunny Horizons** (with an s). **TerraNova stays only as the spawn city / main world** (the city, the TerraNova Inn, "the waters of TerraNova").

## Hidden drafts

`hidden: true` on an item or a set keeps it off the published site. Drafts show with a "Hidden draft" badge in `npm run dev`, or in a build with `VITE_SHOW_DRAFTS=true`. Admin-only items and anything waiting on Bassor stay hidden until he approves them.

## Bassor's decisions

All of Bassor's answers (two PDF forms, Nov 9, 2026) are in the claude.ai project doc `Website-Decisions.md`. Follow his answers exactly; where he left a question blank, use the default. Highlights:

- Item pages: full detail with exact numbers, and "How to get it" on every item. All item groups are shown. No pictures for now.
- No Josoph credit on the website.
- A Ranks page lists all ranks together (Ethereal Drifter is one of them, not its own page).
- Every update note has a changelog section and a date.
- Roadmap: hidden for now. Rules page: shown. Staff page: shown (more names coming).

## Planned

- **Site-wide search** (Joseph, Nov 9): one search box in the header for items, wiki guides and update notes. Add it right after the first few item sets of Piece 2, so it's tested with real items.
- **Package updates:** `npm audit` warns about build tools (Vite, PostCSS, React Router). They don't affect the published pages. Do a small separate piece to update them and test the build. Never `npm audit fix --force`.

## Checking item lore

Before delivering an item set, compare every name and lore line with the plugin's Java code (`getLore()` and `setDisplayName` in the item's file), colors included, with a script, not by eye. Test the script once by breaking a line on purpose. Explanations use the plugin docs' "What it actually does" sections, never "To Review".

## Source of truth

The private repo `Joseph-Ghormley/JosephsCustomItems` (read only for website work):

- `docs/items/*.md`: exact in-game lore, what each item really does. Lore colors come from the item's code (`getLore()`).
- Systems: `docs/DailyRewards.md`, `EtherealDrifter.md`, `LostSouls.md`, `Auras.md`, `EnderTabs.md`, `EternalAnvil.md`, `AuctionHouse.md`, `Events.md`, `RedNamePvP.md`, `Profiles.md`, `ClaimItems.md`, `Guilds.md`.
- Release history: the "Current state" section of its `CLAUDE.md`.

Never change the plugin repos from website work. If the site and a plugin doc disagree, tell Joseph.

**Names players see vs. names in code:**

- **Forgotten Souls** (code: Lost Souls)
- **Star Fragment** (code: `star_remnant`)
- Ranks: **Desert Nomad, Forest Ranger, End Voyager**
- The Valentines 2025 items say "Valentines 2026" in their lore (copy the lore as it is).
- The **Plunder** event (code: Bait)

## Never on the site

- Crate odds (players see tier names only; Bassor's rule).
- Admin commands or `/jcustom` IDs.
- Console commands, permission nodes or config details.
- Anything from a doc's "To Review" section.

## Not yet

- **Crates:** no crate page until SunnyCrates is live. The features list keeps saying ExcellentCrates until then.
- **SunnyGhosts:** no page until it's live.
- **Unreleased:** the Huntsman Knife, plugin versions 1.7, 1.8 and 1.9, and Bassor's new concepts.
- **The Roadmap:** hidden until Bassor updates it.

## How we work (strict)

- **Ask Joseph before ANY git write** (branch, commit, push, merge, delete). He pushes from his PC.
- Deliver a zip with a **new, unique name** each time (for example `SunnyHorizon-Website-piece0.zip`). Remind him to delete old zips from Downloads first (Windows renames re-downloads to `name (1).zip`).
- Give **plain PowerShell lines, one block at a time**, each with a **"Check:"** line saying what he should see.
- His copy: `C:\Users\ekenw\OneDrive\Desktop\terranova-server-site`. It's in OneDrive: run `attrib +P -U "C:\Users\ekenw\OneDrive\Desktop\terranova-server-site\*" /S /D` before building. Never tell him to stop OneDrive.
- One branch per piece. Merge into `main` only after Bassor has seen it.
- Questions or checklists for Bassor: **fillable PDF** when there are more than 3 or 4 (navy header, teal/purple bar, pink answer boxes and checkboxes with "(default)" marked, red star on must-answer questions, a large ~300 pt comments box at the end).
- Write for players: plain words, no code talk.
- Never claim something was checked or built unless it actually ran.
- Check every page at phone and desktop width (Playwright screenshots) and every lore line against the plugin docs before delivering.
