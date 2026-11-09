// Item sets, newest first. The Items page shows them in this order.
//
// Fields:
//   slug         web address part: /items/<slug>
//   name         what players call the set
//   season       short label shown on the card, e.g. "November 2026"
//   description  one or two plain sentences about the set
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
      "The Regalia of Remembrance: a four-piece gold armor set, plus a sword, a bow and a legendary elytra, made for Día de los Muertos.",
    archived: false,
    hidden: true,
  },
];
