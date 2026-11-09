// Every custom item. Each item belongs to a set in itemSets.js.
//
// Fields:
//   slug         web address part: /items/<set>/<slug>
//   set          the slug of its set in itemSets.js
//   name         the in-game name, with Minecraft color codes (&a = green, etc.)
//   nameGradient optional ["#from", "#to"]: colors the name as a smooth gradient
//                (the Ethereal Drifter items use this instead of a code)
//   group        optional heading on the set page, e.g. "Armor", "Weapons", "Legendary"
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
    slug: "crown-of-the-remembered",
    set: "dia-de-los-muertos-2026",
    group: "Armor",
    name: "&aCrown of the Remembered",
    base: "Golden helmet",
    picture: "",
    lore: [
      "&7Protection VI",
      "&7Respiration V",
      "&7Unbreaking XXX",
      "&5Though their voices fade,",
      "&5their wisdom guides the living.",
      "&a-Permanent Luck I",
      "&a-Slightly more XP drops",
      "&a-Ultra Durable",
      "",
      "&6Día de los Muertos 2026",
    ],
    summary: "A gold helmet that gives Luck I and extra XP from mobs.",
    explanation: [
      "**Luck I** while you wear it.",
      "**+7% XP** from mobs you kill (not from players). On small XP drops the bonus comes as a chance, so it averages out to 7%.",
      "**Ultra Durable:** Unbreaking XXX.",
      "Can only be repaired on the **Eternal Anvil**.",
    ],
    howToGet: "Comes from **crates** and **holiday events**.",
    archived: false,
    hidden: false,
  },
  {
    slug: "heart-of-the-ofrenda",
    set: "dia-de-los-muertos-2026",
    group: "Armor",
    name: "&aHeart of the Ofrenda",
    base: "Golden chestplate",
    picture: "",
    lore: [
      "&7Protection VII",
      "&7Fire Protection V",
      "&7Unbreaking XXX",
      "&5An offering of love,",
      "&5Carried beyond the veil.",
      "&a-Adds a slight health boost",
      "&a-Slight regeneration boost",
      "&a-Ultra Durable",
      "",
      "&6Día de los Muertos 2026",
    ],
    summary: "A gold chestplate with extra hearts and healing when you're hit.",
    explanation: [
      "**+3 hearts** of max health while you wear it, on top of its normal 5 armor.",
      "When you **take damage**, you get **Regeneration II for 5 seconds**. This can happen once every **60 seconds**.",
      "**Ultra Durable:** Unbreaking XXX.",
      "Can only be repaired on the **Eternal Anvil**.",
    ],
    howToGet: "Comes from **crates** and **holiday events**.",
    archived: false,
    hidden: false,
  },
  {
    slug: "leggings-of-the-eternal-dance",
    set: "dia-de-los-muertos-2026",
    group: "Armor",
    name: "&aLeggings of the Eternal Dance",
    base: "Golden leggings",
    picture: "",
    lore: [
      "&7Protection VI",
      "&7Swift Sneak IV",
      "&7Unbreaking XXX",
      "&5For those who are remembered,",
      "&5the celebration never ends.",
      "&a-Adds a slight jump boost",
      "&a-Reduced incoming knockback",
      "&a-Ultra Durable",
      "",
      "&6Día de los Muertos 2026",
    ],
    summary: "Gold leggings that boost your jumps and cut knockback in half.",
    explanation: [
      "**Jump Boost II** while you wear them.",
      "**50% knockback resistance**, on top of their normal 3 armor.",
      "**Ultra Durable:** Unbreaking XXX.",
      "Can only be repaired on the **Eternal Anvil**.",
    ],
    howToGet: "Comes from **crates** and **holiday events**.",
    archived: false,
    hidden: false,
  },
  {
    slug: "steps-of-the-marigold",
    set: "dia-de-los-muertos-2026",
    group: "Armor",
    name: "&aSteps of the Marigold",
    base: "Golden boots",
    picture: "",
    lore: [
      "&7Protection VI",
      "&7Feather Falling VIII",
      "&7Soul Speed V",
      "&7Unbreaking XXX",
      "&5Follow the petals, and you",
      "&5shall always find your way home.",
      "&a-Slightly increases speed",
      "&a-Ultra Durable",
      "",
      "&6Día de los Muertos 2026",
    ],
    summary: "Gold boots that make you faster and leave a trail of marigold petals.",
    explanation: [
      "**Speed I** while you wear them.",
      "**Hidden extra:** orange and yellow marigold petals sometimes appear as you walk on the ground.",
      "**Ultra Durable:** Unbreaking XXX.",
      "Can only be repaired on the **Eternal Anvil**.",
    ],
    howToGet: "Comes from **crates** and **holiday events**.",
    archived: false,
    hidden: false,
  },
  {
    slug: "la-ultima-promesa",
    set: "dia-de-los-muertos-2026",
    group: "Weapons",
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
      "Your **next hit** on that target deals **15% extra damage** and uses up the mark, with a burst of soul particles. Only the player who placed the mark can use it.",
      "Can only be repaired on the **Eternal Anvil**.",
    ],
    howToGet: "Comes from **crates** and **holiday events**.",
    archived: false,
    hidden: false,
  },
  {
    slug: "el-beso-de-la-muerte",
    set: "dia-de-los-muertos-2026",
    group: "Weapons",
    name: "&aEl Beso de la Muerte",
    base: "Bow",
    picture: "",
    lore: [
      "&7Power X",
      "&7Punch II",
      "&7Flame I",
      "&7Unbreaking X",
      "&7Infinity",
      "&5(Death’s Kiss)",
      "&5A final kiss carried beyond the veil.",
      "&a-Arrows apply Weakness II for 5 seconds.",
      "&a-Killing an enemy grants Absorption II for 10 seconds.",
      "",
      "&6Día de los Muertos 2026",
    ],
    summary: "A bow whose arrows weaken targets and shield you after a kill.",
    explanation: [
      "Arrow hits give the target **Weakness II for 5 seconds**, with pink heart and blue soul particles.",
      "Killing a player or mob **with this bow's arrows** gives you **Absorption II for 10 seconds**, at most once every **60 seconds**.",
      "Can only be repaired on the **Eternal Anvil**.",
    ],
    howToGet: "Comes from **crates** and **holiday events**.",
    archived: false,
    hidden: false,
  },
  {
    slug: "alas-del-recuerdo",
    set: "dia-de-los-muertos-2026",
    group: "Legendary",
    name: "&a&lAlas del Recuerdo",
    base: "Elytra",
    picture: "",
    lore: [
      "&7Protection III",
      "&7Unbreaking X",
      "&7Mending",
      "&5(Wings of Remembrance)",
      "&5Memories carry us farther than wings.",
      "&a-Brief Resistance after landing from flight",
      "",
      "&6Día de los Muertos 2026",
    ],
    summary: "The set's legendary elytra, which protects you when you land.",
    explanation: [
      "After you **land** from gliding, you get **Resistance I for 3 seconds**, at most once every **20 seconds**.",
      "Its name is **bold**, the mark of the set's legendary item.",
      "**Mending** works on it, so XP repairs it too.",
      "Can only be repaired on the **Eternal Anvil**.",
    ],
    howToGet: "Comes from **crates** and **holiday events**.",
    archived: false,
    hidden: false,
  },
  {"slug": "harvestkeepers-hat", "set": "harvestkeeper-autumn-2026", "group": "Armor", "name": "&aHarvestkeeper's Hat", "base": "Leather helmet, straw yellow", "picture": "", "lore": ["&7Protection IX", "&7Unbreaking VIII", "&7Mending", "&5Beneath its weathered brim,", "&5the fields whisper promises", "&5of a bountiful harvest.", "&a-15% chance to receive additional crops during harvest", "", "&6Autumn 2026"], "summary": "A farming hat that sometimes gives an extra crop when you harvest.", "explanation": ["**Golden Harvest:** every fully grown crop you harvest has its own **15% chance** to drop **one extra crop** (wheat, carrot, potato, beetroot or nether wart, never seeds).", "Works by hand, with any tool, with the **Harvestkeeper's Scythe** (each of its 9 crops rolls separately) and with the Harvestburrow Hoe. Young crops never trigger it.", "**Mending** works on it.", "Can only be repaired on the **Eternal Anvil**."], "howToGet": "Comes from **crates** and **holiday events**.", "archived": false, "hidden": false},
  {"slug": "harvestkeepers-vest", "set": "harvestkeeper-autumn-2026", "group": "Armor", "name": "&aHarvestkeeper's Vest", "base": "Leather chestplate, weathered brown", "picture": "", "lore": ["&7Protection X", "&7Unbreaking IX", "&7Mending", "&5The fields reward those who tend them,", "&5and the sun remembers their labor.", "&a-Slowly restores hunger while outdoors during daylight.", "", "&6Autumn 2026"], "summary": "A vest that slowly fills your hunger while you work outdoors in daylight.", "explanation": ["**Sun-Kissed:** **+1 hunger point** (half a drumstick) for every **45 seconds** outdoors in daylight, with gold sparkles and a soft chime.", "The 45 seconds only count while **all** of these are true: you're in the Overworld during the day, it isn't raining or storming, nothing solid or leafy is above your head (a glass roof counts as indoors), your hunger isn't full, and you're **not in PvP combat**.", "**Mending** works on it.", "Can only be repaired on the **Eternal Anvil**."], "howToGet": "Comes from **crates** and **holiday events**.", "archived": false, "hidden": false},
  {"slug": "harvestkeepers-leggings", "set": "harvestkeeper-autumn-2026", "group": "Armor", "name": "&aHarvestkeeper's Leggings", "base": "Leather leggings, burnt orange", "picture": "", "lore": ["&7Protection VIII", "&7Unbreaking VII", "&7Mending", "&5Worn through countless seasons,", "&5these threads carry the blessings of every harvest.", "&a-Nearby crops occasionally grow faster", "", "&6Autumn 2026"], "summary": "Leggings that make nearby crops grow faster while you farm.", "explanation": ["**Fertile Presence:** every **10 seconds**, if you've **farmed in the last 60 seconds**, **1 to 3** growing crops within **5 blocks** (2 up or down) grow one stage, with green sparkles.", "**Farming** means harvesting a grown crop, planting one, or tilling dirt or grass with a hoe. Just standing near crops doesn't count.", "Each crop can be boosted at most once every 10 seconds, however many players nearby wear these. It never makes a crop fully grown in one jump.", "Only works where the land claim lets you break blocks.", "**Mending** works on them.", "Can only be repaired on the **Eternal Anvil**."], "howToGet": "Comes from **crates** and **holiday events**.", "archived": false, "hidden": false},
  {"slug": "harvestkeepers-boots", "set": "harvestkeeper-autumn-2026", "group": "Armor", "name": "&aHarvestkeeper's Boots", "base": "Leather boots, dark brown", "picture": "", "lore": ["&7Protection VII", "&7Unbreaking VI", "&7Mending", "&5Countless miles walked,", "&5countless fields tended,", "&5yet not a single harvest disturbed.", "&a-Prevents the wearer from trampling farmland.", "&a-Slight Speed boost while walking on farmland or dirt paths.", "", "&6Autumn 2026"], "summary": "Boots that never trample farmland and speed you up on farm paths.", "explanation": ["**Gentle Tread:** you never trample farmland, whether you jump or fall on it.", "**Field Strider:** **Speed I** while standing on **farmland or dirt paths** (walking, sprinting or sneaking). It ends about a second after you step off, and switches off during **PvP combat**. It never replaces a stronger Speed effect.", "**Mending** works on them.", "Can only be repaired on the **Eternal Anvil**."], "howToGet": "Comes from **crates** and **holiday events**.", "archived": false, "hidden": false},
  {"slug": "harvestkeepers-scythe", "set": "harvestkeeper-autumn-2026", "group": "Tool", "name": "&a&lHarvestkeeper's Scythe", "base": "Netherite hoe", "picture": "", "lore": ["&7Efficiency VII", "&7Fortune V", "&7Unbreaking X", "&5Once wielded by the keepers of the west road", "&5fields, this ancient tool brings abundance", "&5wherever the harvest grows.", "&a-Harvests fully grown crops in a 3×3 area.", "&a-Automatically replants harvested crops from inventory", "&a-Slight chance for replanted crops to advance one growth stage", "", "&6Autumn 2026"], "summary": "A scythe that harvests and replants a 3x3 patch of crops at once.", "explanation": ["**Bountiful Reaping:** right-click a fully grown crop to harvest **every fully grown crop in the 3x3** around it (same height). Young crops are left alone.", "Drops land on the ground, and **Fortune V** adds to them the normal Minecraft way.", "Every harvested spot is **replanted**: with a seed from your inventory first, or else with one from that crop's own drops.", "**Harvest's Blessing:** each crop it replants has a **15% chance** to start one growth stage ahead.", "Left-click breaks one crop normally. Each crop counts as you breaking it, so land claims decide crop by crop.", "Can only be repaired on the **Eternal Anvil**."], "howToGet": "Comes from **crates** and **holiday events**.", "archived": false, "hidden": false},
];
