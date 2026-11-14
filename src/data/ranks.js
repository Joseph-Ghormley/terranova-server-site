// The Ranks page (/ranks). Prices from Bassor (Form 3, Nov 13, 2026); perks from each
// rank's description on the Tebex store (copied Nov 14, 2026). All ranks are lifetime.
// Shown in price order. Each rank also has every lower rank's perks; "perks" lists the
// full set, as the store does.
//
// The store calls the top rank "Ethereal Dweller"; Bassor, the plugin and the game say
// "Ethereal Drifter", so the site uses that (storeName shows the store's name).
// Never put here: permission nodes, admin commands or config details.

export const ranksStoreUrl = "https://sunnyhorizonsmc-store.tebex.io/category/2787118";

export const ranks = [
  {
    name: "Desert Nomad",
    slug: "desert-nomad",
    price: "$5",
    color: "#E8B04A",
    homes: "6 homes",
    daily: "1 Star Fragment",
    kit: "/kit desert: desert armor and tools",
    perks: [
      "Unlimited nickname changes",
      "**/craft**: open a personal crafting table",
      "**/sit**: click a block to sit on it",
    ],
  },
  {
    name: "Forest Ranger",
    slug: "forest-ranger",
    price: "$25",
    color: "#7BD33F",
    homes: "15 homes",
    daily: "1 Ember, 1 Star Fragment",
    kit: "/kit forest: forest armor and tools",
    perks: [
      "Unlimited nickname changes",
      "**/craft**: open a personal crafting table",
      "Wear any item on your head",
      "**/sit**: click a block to sit on it",
      "**/lay**: lie down",
    ],
  },
  {
    name: "Sea Mariner",
    slug: "sea-mariner",
    price: "$50",
    color: "#4FC3F7",
    homes: "50 homes",
    daily: "2 Embers, 1 Star Fragment",
    kit: "/kit sea: sea armor and tools",
    perks: [
      "Unlimited nickname changes",
      "**/craft**: open a personal crafting table",
      "Wear any item on your head",
      "**/sit**, **/lay** and **/bellyflop** (BIG SPLASH!)",
      "**/backpack**: a small backpack",
    ],
  },
  {
    name: "Nether Traveler",
    slug: "nether-traveler",
    price: "$75",
    color: "#FF6B4A",
    homes: "100 homes",
    daily: "3 Embers, 1 Star Fragment",
    kit: "/kit nether: nether armor and tools",
    perks: [
      "Unlimited nickname changes",
      "**/craft**: open a personal crafting table",
      "Wear any item on your head",
      "**/sit**, **/lay**, **/bellyflop** and **/spin**",
      "**/backpack**: a medium backpack, kept when you die",
      "**XP kept when you die**",
    ],
  },
  {
    name: "End Voyager",
    slug: "end-voyager",
    price: "$100",
    color: "#C38BFF",
    homes: "500 homes",
    daily: "4 Embers, 1 Star Fragment, 1 Dragon Egg",
    kit: "/kit end: end armor and tools",
    perks: [
      "Unlimited nickname changes",
      "**/craft**: open a personal crafting table",
      "Wear any item on your head",
      "**/sit**, **/lay**, **/bellyflop**, **/spin** and **/crawl**",
      "**/backpack**: a large backpack, kept when you die",
      "**XP kept when you die**",
      "**/etab**: open your Ender Chest anywhere, with an extra [Ender Tab](/wiki/ender-tabs)",
      "**/back**: teleport back to where you died or your last location",
      "See players' real names",
      "+1 weekly [Eternal Anvil](/wiki/eternal-anvil) repair charge",
    ],
  },
  {
    name: "Ethereal Drifter",
    storeName: "Ethereal Dweller",
    slug: "ethereal-drifter",
    price: "$175",
    color: "#9863E7",
    gradient: ["#5FE2C5", "#9863E7"],
    homes: "Unlimited homes",
    daily: "4 Embers, 2 Star Fragments, 2 Dragon Eggs",
    kit: "/kit ethereal: armor and tools",
    perks: [
      "Unlimited nickname changes",
      "Personal **/craft**, **/anvil** (not the Eternal Anvil), **/stonecutter**, **/smithingtable**, **/grindstone** and **/cartographytable**",
      "**/disposal**: a trash can",
      "Wear any item on your head",
      "**/sit**, **/lay**, **/bellyflop**, **/spin** and **/crawl**",
      "**/backpack**: a large backpack, kept when you die",
      "**XP kept when you die**",
      "**/etab**, **/back** and see real names",
      "+2 weekly [Eternal Anvil](/wiki/eternal-anvil) repair charges",
      "+1 more [Ender Tab](/wiki/ender-tabs)",
      "**/weekly**: 1 Epic Key, 1 Legendary Key, 1 Soul Key and 1 Experience Elixir every week. See [Daily and Weekly Rewards](/wiki/daily-and-weekly-rewards)",
      "**/namecolor**: show your chat name in any other rank's color. See [Name Colors](/wiki/name-colors)",
    ],
  },
];
