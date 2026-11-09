// Every custom item. Each item belongs to a set in itemSets.js.
//
// Fields:
//   slug         web address part: /items/<set>/<slug>
//   set          the slug of its set in itemSets.js
//   name         the in-game name, with Minecraft color codes (&a = green, etc.)
//   nameGradient optional ["#from", "#to"]: colors the name as a smooth gradient
//                (the Ethereal Drifter items use this instead of a code)
//   base         the normal Minecraft item it's made from, e.g. "Netherite sword"
//   picture      optional picture: put the file in public/items/ and write
//                "/items/<file>.png". Leave "" for none.
//   lore         the lore EXACTLY as in game, one line per string, with color codes.
//                "" is an empty line. Copy it from docs/items/*.md and the item's code.
//   summary      one short line for the item's card on its set page
//   explanation  what it really does, in plain words. One string per point.
//                **bold** and [link text](/items/...) work here.
//   howToGet     how players can get it. Leave "" until Bassor confirms it.
//   archived     true = an old holiday item
//   hidden       true = a draft; left off the published site (see visibility.js)
//
// Never put here: crate odds, /jcustom IDs or other admin commands, permission
// nodes, config details, or anything from a doc's "To Review" section.
//
// Lore colors used by the plugin: &7 gray = enchantments, &5 dark purple = story,
// &a green = abilities, &4 dark red = drawbacks, &6 gold = event tag.
export const items = [
  {
    slug: "la-ultima-promesa",
    set: "dia-de-los-muertos-2026",
    name: "&aLa Última Promesa",
    base: "Netherite sword",
    picture: "",
    lore: [
      "&7Sharpness XII",
      "&7Fire Aspect III",
      "&7Looting V",
      "&7Unbreaking X",
      "&5(The Final Promise)",
      "&5Not even death can sever",
      "&5a promise made in life.",
      "&a-Fully charged attack marks target",
      "&a-follow-up hit deals 15% extra damage",
      "",
      "&6Día de los Muertos 2026",
    ],
    summary: "A sword that marks a target so your next hit on it deals extra damage.",
    explanation: [
      "A **fully charged** hit (for example a jumping critical hit) **marks** the player or mob you hit for **15 seconds**. You'll hear a bell and see \"Target marked\" above your hotbar.",
      "A marked target has a **glowing blue soul ring** at its feet, so everyone can see it.",
      "Your **next hit** on that target deals **15% extra damage** and uses up the mark. Only the player who placed the mark can use it.",
      "Can only be repaired on the **Eternal Anvil**.",
    ],
    howToGet: "",
    archived: false,
    hidden: true,
  },
];
