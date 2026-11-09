// Item sets, newest first. The Items page shows them in this order.
//
// Fields:
//   slug         web address part: /items/<slug>
//   name         what players call the set
//   season       short label shown on the card, e.g. "November 2026"
//   description  one or two plain sentences about the set
//   notes        optional points that apply to every item in the set, shown on the set page.
//                **bold** and [link text](/items/...) work here.
//   archived     true = an old holiday set; shown under "Archive" at the bottom
//   hidden       true = a draft; left off the published site (see visibility.js).
//                Hiding a set also hides every item in it.
//
// Source of truth: the JosephsCustomItems repo, docs/items/*.md.
export const itemSets = [
  {
    slug: "dia-de-los-muertos-2026",
    name: "Día de los Muertos 2026",
    season: "November 2026",
    description:
      "The Regalia of Remembrance: a four-piece gold armor set, plus a sword, a bow and a legendary elytra, made for Día de los Muertos (November 1–2).",
    notes: [
      "The armor's effects work only while you wear each piece, and stop when you take it off.",
      "All 7 items can only be repaired on the **Eternal Anvil**. Normal anvils can still rename them, and grindstones won't take them.",
    ],
    archived: false,
    hidden: false,
  },
  {
    slug: "harvestkeeper-autumn-2026",
    name: "Harvestkeeper Set (Autumn 2026)",
    season: "Autumn 2026",
    description:
      "A four-piece leather farming outfit and a scythe that harvests a 3x3 patch at once. Made for farmers.",
    notes: [
      "The armor's effects work only while you wear each piece.",
      "All 5 items can only be repaired on the **Eternal Anvil**. **Mending** still works on the four armor pieces.",
      "**PvP combat** switches off the Vest and the Boots for **30 seconds** after you hit, or are hit by, another player (arrows, tridents, TNT and harmful potions count too). A red name alone doesn't count, and dying ends it.",
    ],
    archived: false,
    hidden: false,
  },
  {
    slug: "ethereal-drifter-set",
    name: "Ethereal Drifter Set",
    season: "Ethereal Drifter",
    description:
      "Star-touched gear for explorers: an elytra, four netherite armor pieces, a grappling hook and a spear.",
    notes: [
      "Anyone holding these items can use them.",
      "The **Wings of Eternity** and the **Ethereal Heartguard** both go in the chest slot, so you wear one or the other.",
      "All 7 items can only be repaired on the **Eternal Anvil**.",
      "**PvP combat** lasts **30 seconds** after you hit, or are hit by, another player (arrows, tridents, TNT and harmful potions count too). A red name alone doesn't count, and dying ends it.",
    ],
    archived: false,
    hidden: false,
  },
  {
    slug: "vein-mining-tools",
    name: "Vein Mining Tools",
    season: "Tools",
    description: "The Excavator and the Lumberjaxe: tools that break a whole ore vein or a whole tree at once.",
    notes: [
      "Unlike most custom items, these can be enchanted and repaired on a **normal anvil**.",
    ],
    archived: false,
    hidden: false,
  },
  {
    slug: "summer-2026",
    name: "Summer 2026",
    season: "Summer 2026",
    description: "Sun-themed gear built around being on fire, plus emberglass tools and three summer potions.",
    notes: [
      "Many items have an **Aflame bonus**: it turns on while you're **on fire** from any source, or always while you wear the **Crown of Solstice**.",
      "To survive the fire: **Summer's Crown** gives permanent Fire Resistance, the **Crown of Solstice** blocks fire and burning damage (not lava), and the Valentine's Leggings also make you fire-proof.",
      "The bold names (Crown of Solstice, Blitzar, Syzygy, Emberglass Rod, Tome of the Stars) are the set's legendary items.",
    ],
    archived: false,
    hidden: false,
  },
];
