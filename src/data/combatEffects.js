// Combat effects that many custom items share (/items/combat-effects).
// Source: JosephsCustomItems docs/items/CombatEffects.md (never its "To Review" notes).
// Item pages link to one effect with [Bleed](/items/combat-effects#bleed).
export const combatEffects = [
  {
    slug: "vulnerable",
    name: "Vulnerable",
    summary: "The target **takes 25% more damage** from every hit.",
    facts: [
      ["Lasts", "Usually 5 to 7 seconds, depending on the item"],
      ["Max", "7 seconds"],
      ["Stacking", "More hits add time, up to the max"],
    ],
    notes: [],
  },
  {
    slug: "bleed",
    name: "Bleed",
    summary: "The target **loses health every second**, with red blood particles.",
    facts: [
      ["Damage", "3% of max health per second, per stack"],
      ["Stacks", "Up to 5 (15% of max health per second)"],
      ["Lasts", "Up to 5 seconds, refreshed by each new hit"],
    ],
    notes: [],
  },
  {
    slug: "wounded",
    name: "Wounded",
    summary: "The target **can't gain Absorption or Resistance**.",
    facts: [
      ["Lasts", "3 seconds per application, up to 10"],
      ["Blocks", "Golden apple Absorption, and Resistance from potions or items"],
    ],
    notes: [
      "If a Wounded player tries to gain Absorption or Resistance, for example by eating a golden apple, it's blocked **and** their Wounded time gets longer.",
    ],
  },
  {
    slug: "enhanced-burn",
    name: "Enhanced Burn",
    summary: "Fire hurts much more.",
    facts: [
      ["Effect", "Every fire or lava damage tick deals bonus damage equal to 10% of current health"],
      ["Lasts", "5 seconds per application, up to 15"],
    ],
    notes: ["The Sulfur Priest boss uses its own, stronger version."],
  },
  {
    slug: "kthun-mark",
    name: "K'Thun Mark",
    summary: "The target **can't use golden apples or potions**.",
    facts: [
      ["Lasts", "5 seconds per application, up to 15"],
      ["Blocks", "Eating golden apples, drinking potions, throwing potions"],
      ["Penalty", "Trying anyway costs ½ heart and adds 5 seconds"],
    ],
    notes: ["Applied by the K'Thun weapon and by some holiday bosses."],
  },
];

export const combatEffectsNote =
  "**Mercury's Greaves** (sold by the Auction House) cut how long Vulnerable, Wounded, Enhanced Burn and the K'Thun Mark last on the wearer by **40%**.";
