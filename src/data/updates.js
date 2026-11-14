// Update notes, newest first. Each one opens at /updates/<slug> (and /events/<slug>).
//
// Fields:
//   title     named by holiday or theme (Bassor, Nov 9, 2026)
//   version   plugin version, or "" for older updates
//   date      shown on the card and the page
//   summary   one or two lines for the card
//   status    "Live"
//   sections  [{ heading, body: [lines] }]. Every update has a "Changelog" section.
//             Lines understand **bold** and [link text](/page).
//
// Dates for 1.1 to 1.6 and the Guild Storage update come from the plugin's history
// (Bassor left them blank). The plugin's history starts on Oct 25, 2026, so it has no
// dates for the four older updates.
// Never put here: crate odds, admin commands, permissions or config details.

export const updates = [
  {
    title: "Autumn 2026",
    slug: "autumn-2026",
    version: "1.6",
    date: "Nov 7, 2026",
    summary: "The Harvestkeeper Set and the Ethereal Drifter Set arrive.",
    status: "Live",
    sections: [
      {
        heading: "What's New",
        body: [
          "Two new sets join the server: the farming-focused [Harvestkeeper Set](/items/harvestkeeper-autumn-2026) and the explorer's [Ethereal Drifter Set](/items/ethereal-drifter-set).",
        ],
      },
      {
        heading: "Changelog",
        body: [
          "**Harvestkeeper Set:** [Harvestkeeper's Hat](/items/harvestkeeper-autumn-2026/harvestkeepers-hat), [Vest](/items/harvestkeeper-autumn-2026/harvestkeepers-vest), [Leggings](/items/harvestkeeper-autumn-2026/harvestkeepers-leggings), [Boots](/items/harvestkeeper-autumn-2026/harvestkeepers-boots) and the [Scythe](/items/harvestkeeper-autumn-2026/harvestkeepers-scythe), which reaps and replants crops in a 3×3 area.",
          "**Ethereal Drifter Set:** [Wings of Eternity](/items/ethereal-drifter-set/wings-of-eternity), [Ethereal Heartguard](/items/ethereal-drifter-set/ethereal-heartguard), [Crown of the Beyond](/items/ethereal-drifter-set/crown-of-the-beyond), [Astral Wanderer's Leggings](/items/ethereal-drifter-set/astral-wanderers-leggings), [Footsteps of Eternity](/items/ethereal-drifter-set/footsteps-of-eternity), the [Astral Hook](/items/ethereal-drifter-set/astral-hook) grapple (3 uses, then a 20 second cooldown) and the [Veilpiercer](/items/ethereal-drifter-set/veilpiercer).",
          "Both sets can only be repaired on the [Eternal Anvil](/wiki/eternal-anvil).",
          "The new items respect land claims, and some of their abilities pause for 30 seconds after you're in a fight with another player.",
          "**Fix:** the Sulfur Priest, Vengeful Nature Spirit and Pumpkin King no longer cause lag when a player is in another world during their area attacks.",
        ],
      },
    ],
  },
  {
    title: "Fixes and Balance",
    slug: "fixes-and-balance-1-5",
    version: "1.5",
    date: "Nov 2, 2026",
    summary: "A big round of fixes for items, Forgotten Souls, Red Name PvP, guilds and auras.",
    status: "Live",
    sections: [
      {
        heading: "What's New",
        body: [
          "Version 1.5 bundles three batches of fixes chosen by the team, plus everything from the Ethereal Drifter update.",
        ],
      },
      {
        heading: "Changelog",
        body: [
          "**Guild event rewards wait for you:** if nobody from your guild is online when Plunder or Prowl ends, the rewards are saved and given to your Guild Master or an Elder when they log in. They never expire.",
          "**Red Name timers** now pause when you log out and continue when you come back, instead of being cleared. See [Red Name PvP](/wiki/red-name-pvp).",
          "**Forgotten Souls** now hit players who aren't red in Neutral zones, and their effects work near them. When a fight ends, only the soul's own sidebar is removed.",
          "**The Endless Devout** gains **Burden**: each attack that hits 2 or more players adds +5% damage, up to +30%.",
          "**Auras:** everyone can use **/aura** now. The Ambient aura is renamed **Anger** (you keep it if you had it).",
          "**Guild Storage:** when an upgrade adds a second page, the page titles update right away.",
          "**Eternal Anvil:** a falling Eternal Anvil stays an Eternal Anvil, and an explosion drops it as one item.",
          "[Palmyr](/items/original-items/palmyr): full swings ignore 15% of the target's armor.",
          "[Atlas](/items/original-items/atlas), [Exodus Greaves](/items/original-items/exodus-greaves), [Ebisu Helm](/items/original-items/ebisu-helm), [Opanak](/items/original-items/opanak) and [Greenhide Mantle](/items/christmas-2025/greenhide-mantle) now only remove effects that armor gave you, not potions you drank. The [Spooky Helmet](/items/spooky/spooky-helmet) only removes its own Haste II.",
          "[Syzygy](/items/summer-2026/syzygy)'s eruption and the [Murky Vial](/items/consumables/murky-vial) no longer hit the thrower. The [Mask of Devotion](/items/valentines-2025/mask-of-devotion) skips your guildmates and allied guilds.",
          "[Boom-Burrower](/items/easter-2025/boom-burrower) mines a 3×3 of any pickaxe block, and it and the [Eggsplosive Grenade](/items/easter-2025/eggsplosive-grenade) now respect land claims.",
          "[Carrotspade](/items/easter-2025/carrotspade) marks one spot at a time, cleared when it's harvested.",
          "If a crate key can't be given, you now get a chat message instead of it silently failing.",
        ],
      },
    ],
  },
  {
    title: "Ethereal Drifter Update",
    slug: "ethereal-drifter-update",
    version: "1.4",
    date: "Nov 2, 2026",
    summary: "A new Daily Rewards menu, a 24-hour timer, and new Ethereal Drifter perks: /weekly and /namecolor.",
    status: "Live",
    sections: [
      {
        heading: "What's New",
        body: [
          "Daily Rewards get a full menu, and Ethereal Drifters get weekly rewards and name colors. See [Daily and Weekly Rewards](/wiki/daily-and-weekly-rewards) and [Name Colors](/wiki/name-colors).",
        ],
      },
      {
        heading: "Changelog",
        body: [
          "**/daily** now opens a menu showing your Ember, Star Fragment and Dragon Egg totals, where each bonus comes from, and your elixirs. **/daily claim** still claims straight away.",
          "**24-hour timer:** you can claim once every 24 hours from your last claim, instead of once per calendar day.",
          "**/weekly** for Ethereal Drifters: 1 Epic Key, 1 Legendary Key, 1 Soul Key and an Experience Elixir every 7 days.",
          "**/namecolor** for Ethereal Drifters: show your chat name in an earlier rank's color, and switch your chat text between light purple and white.",
          "Ethereal Drifters always get every lower rank's daily bonus, and their gradient name now uses your nickname.",
          "Rank names updated: **Desert Nomad**, **Forest Ranger** and **End Voyager**.",
          "The **Guild Ember Elixir** now adds +1 Ember to your dailies.",
          "Losing a rank now removes that rank's daily bonus. Seasonal perks and elixirs stay.",
          "Items that only look like Embers or Star Fragments are no longer turned into them.",
        ],
      },
    ],
  },
  {
    title: "Vein Mining Tools",
    slug: "vein-mining-tools",
    version: "1.3",
    date: "Oct 31, 2026",
    summary: "The Excavator and Lumberjaxe are rebuilt.",
    status: "Live",
    sections: [
      {
        heading: "What's New",
        body: [
          "The [Excavator and Lumberjaxe](/items/vein-mining-tools) are rebuilt from scratch, replacing the old broken versions.",
        ],
      },
      {
        heading: "Changelog",
        body: [
          "[Excavator](/items/vein-mining-tools/excavator): always vein mines, up to **64 ores**, including ancient debris and glowstone.",
          "[Lumberjaxe](/items/vein-mining-tools/lumberjaxe): crouch to fell up to **128 logs** of the same type.",
          "Both respect land claims.",
          "Old copies are converted to the new versions automatically.",
        ],
      },
    ],
  },
  {
    title: "Día de los Muertos 2026",
    slug: "dia-de-los-muertos-2026",
    version: "1.2",
    date: "Oct 31, 2026",
    summary: "Seven new Día de los Muertos items, plus Moving Box and La Última Promesa fixes.",
    status: "Live",
    sections: [
      {
        heading: "What's New",
        body: [
          "The [Día de los Muertos 2026](/items/dia-de-los-muertos-2026) set arrives with seven new items.",
        ],
      },
      {
        heading: "Changelog",
        body: [
          "**New items:** [Crown of the Remembered](/items/dia-de-los-muertos-2026/crown-of-the-remembered), [Heart of the Ofrenda](/items/dia-de-los-muertos-2026/heart-of-the-ofrenda), [Leggings of the Eternal Dance](/items/dia-de-los-muertos-2026/leggings-of-the-eternal-dance), [Steps of the Marigold](/items/dia-de-los-muertos-2026/steps-of-the-marigold), [La Última Promesa](/items/dia-de-los-muertos-2026/la-ultima-promesa), [El Beso de la Muerte](/items/dia-de-los-muertos-2026/el-beso-de-la-muerte) and [Alas del Recuerdo](/items/dia-de-los-muertos-2026/alas-del-recuerdo).",
          "These items are **Eternal Anvil only**: normal anvils and grindstones can only rename them. See [Eternal Anvil](/wiki/eternal-anvil).",
          "**Fix:** the [Moving Box](/items/original-items/moving-box) no longer opens where a claim blocks it.",
          "**Fix:** La Última Promesa now judges a fully charged hit correctly.",
        ],
      },
    ],
  },
  {
    title: "Moving Box Fix",
    slug: "moving-box-fix",
    version: "1.1",
    date: "Oct 31, 2026",
    summary: "Breaking a Moving Box inside someone's claim no longer makes a copy.",
    status: "Live",
    sections: [
      {
        heading: "Changelog",
        body: [
          "**Fix:** breaking a [Moving Box](/items/original-items/moving-box) where a land claim blocks it no longer drops a linked copy. The box stays put.",
        ],
      },
    ],
  },
  {
    title: "Guild Storage Update",
    slug: "guild-storage-update",
    version: "",
    date: "Oct 29, 2026",
    summary: "Guild Storage is rebuilt so it saves at every guild level, on Java and Bedrock.",
    status: "Live",
    sections: [
      {
        heading: "What's New",
        body: [
          "Guild Storage has been rebuilt. See [Guilds, Events, and PvP](/wiki/guilds-events-and-pvp) for how it works.",
        ],
      },
      {
        heading: "Changelog",
        body: [
          "**Storage saves at every guild level.** Before, it only saved at levels 2, 6 and 10, so most guilds lost changes on restart. This also fixes storage emptying itself for Bedrock players.",
          "Slots past your guild's limit show as black **Locked** panes, and the bottom corners are **page arrows**.",
          "If an item ends up in a locked slot, it's moved into a free open slot so it's saved, never deleted.",
          "**Star Remnant** is now called **Star Fragment**. Your existing items and daily totals are unchanged.",
        ],
      },
    ],
  },
  {
    title: "Summer 2026",
    slug: "summer-2026",
    version: "",
    date: "Summer 2026",
    summary: "Fifteen summer items and the Sunscorched Zealot.",
    status: "Live",
    sections: [
      {
        heading: "What's New",
        body: [
          "The [Summer 2026](/items/summer-2026) set brought fifteen items, and the **Sunscorched Zealot** joined the holiday [Forgotten Souls](/wiki/forgotten-souls).",
        ],
      },
      {
        heading: "Changelog",
        body: [
          "**Armor:** [Crown of Solstice](/items/summer-2026/crown-of-solstice), [Summer's Crown](/items/summer-2026/summers-crown), [Summer's Chestplate](/items/summer-2026/summers-chestplate), [Summer's Leggings](/items/summer-2026/summers-leggings) and [Summer's Boots](/items/summer-2026/summers-boots).",
          "**Weapons:** [Summer's Sword](/items/summer-2026/summers-sword), [Blitzar](/items/summer-2026/blitzar) and [Syzygy](/items/summer-2026/syzygy).",
          "**Tools:** [Emberglass Pickaxe](/items/summer-2026/emberglass-pickaxe), [Emberglass Shovel](/items/summer-2026/emberglass-shovel) and [Emberglass Rod](/items/summer-2026/emberglass-rod).",
          "**Other items:** [Tome of the Stars](/items/summer-2026/tome-of-the-stars), [Condensed Stardust](/items/summer-2026/condensed-stardust), [Solar Flare](/items/summer-2026/solar-flare) and [Betel-juice](/items/summer-2026/betel-juice).",
          "**The Sunscorched Zealot:** a holiday boss that forces everyone nearby to Red Name and stops Totems of Undying for a few seconds after its hits. Its guards can drop Summer Keys.",
        ],
      },
    ],
  },
  {
    title: "Glory and Glamour",
    slug: "glory-and-glamour",
    version: "",
    date: "Before Oct 2026",
    summary: "Guild Glory, the Guild Courier, and auras to show off.",
    status: "Live",
    sections: [
      {
        heading: "What's New",
        body: [
          "Guilds that do well in events earn **Glory**, and Glory unlocks the **Guild Courier**, a guild-only shop. Among its trades are **Aura Cookies**, which unlock cosmetic auras.",
        ],
      },
      {
        heading: "Changelog",
        body: [
          "**Guild Glory:** placing top 3 in Plunder or Prowl gives +1 Glory. Missing 3 events in a row starts costing Glory.",
          "**Guild Courier:** unlocks at Glory 3, with one more trade for each Glory level up to 10. Trades rotate every 7 days.",
          "**Auras:** cosmetic particle effects that follow you. Unlock them with Aura Cookies and pick one with your Aura Stone. See [Auras](/wiki/auras).",
          "Aura Cookies come in Common, Uncommon, Rare, Epic and Legendary, sold by the Courier from Glory 5 to Glory 10.",
        ],
      },
    ],
  },
  {
    title: "Guilds Update",
    slug: "guilds-update",
    version: "",
    date: "Before Oct 2026",
    summary: "Guilds, guild storage, alliances, and the Plunder and Prowl events.",
    status: "Live",
    sections: [
      {
        heading: "What's New",
        body: [
          "Players can team up in **Guilds** and compete in Guild Events. See [Guilds, Events, and PvP](/wiki/guilds-events-and-pvp).",
        ],
      },
      {
        heading: "Changelog",
        body: [
          "**Guilds:** create one for 5 Dragon Eggs, with a tag shown next to your name. Upgrade up to level 10 for more members and storage.",
          "**Guild ranks:** Guild Master, up to 3 Elders, and Members.",
          "**Guild Storage, Guild Home and Guild chat** for every member.",
          "**Alliances:** allied guilds share guild chat.",
          "**Plunder:** a guild fishing competition where you can steal fish from rival guilds.",
          "**Prowl:** a guild hunting competition. Watch out for the Evil Horse.",
        ],
      },
    ],
  },
  {
    title: "Grinchmas 2025",
    slug: "grinchmas-2025",
    version: "",
    date: "Christmas 2025",
    summary: "The Christmas 2025 items and the Christmas daily perks.",
    status: "Live",
    sections: [
      {
        heading: "What's New",
        body: [
          "The [Christmas 2025](/items/christmas-2025) set brought five festive items.",
        ],
      },
      {
        heading: "Changelog",
        body: [
          "**New items:** [Santa's Jolly Cap](/items/christmas-2025/santas-jolly-cap), [Greenhide Mantle](/items/christmas-2025/greenhide-mantle), [Yuletide Pajamas](/items/christmas-2025/yuletide-pajamas), [Lost Merry Stockings](/items/christmas-2025/lost-merry-stockings) and [Mistericorde](/items/christmas-2025/mistericorde).",
          "**Christmas perks:** +1 Ember or +1 Star Fragment added to your [daily rewards](/wiki/daily-and-weekly-rewards).",
        ],
      },
    ],
  },
];
