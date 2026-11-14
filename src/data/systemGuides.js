// Piece 3: guides for the server's own systems (from the JosephsCustomItems docs).
// Added to the wiki in wikiArticles.js. Each one opens at /wiki/<slug>.
//
// body lines and table cells understand **bold** and [link text](/page).
// Never put here: crate odds, admin commands, permissions, config details,
// spawn coordinates, or anything from a doc's "To Review" section.
//
// Rank names follow Bassor's spelling (Form 3): Desert Nomad, Forest Ranger,
// Sea Mariner, Nether Traveler, End Voyager, Ethereal Drifter.

export const systemGuides = [
  {
    title: "Daily and Weekly Rewards",
    slug: "daily-and-weekly-rewards",
    category: "Server Systems",
    summary: "Claim Embers, Star Fragments and Dragon Eggs every day, and Ethereal Drifter keys every week.",
    status: "Active",
    sections: [
      {
        heading: "Daily Rewards",
        commands: ["/daily", "/daily claim"],
        body: [
          "Type **/daily** to open the Daily Rewards menu, or **/daily claim** to claim straight away.",
          "You can claim **once every 24 hours**, counted from your last claim. If you've already claimed, the menu shows a countdown to your next one.",
          "Your reward is **Embers**, **Star Fragments** and sometimes **Dragon Eggs**. How much you get is the total of all your daily **bonuses**, which come from your rank, seasonal perks and Daily Elixirs.",
          "If your inventory is full, the extra items drop at your feet, so make some room first.",
          "A player with no bonuses yet gets nothing from /daily, but the claim still starts the 24-hour timer.",
        ],
      },
      {
        heading: "The Daily Menu",
        table: {
          columns: ["Icon", "What it shows"],
          rows: [
            ["Clock", "\"Ready to claim!\" or the time until your next claim"],
            ["Fire Charge", "Your daily Ember total and where each one comes from"],
            ["Iron Nugget", "Your daily Star Fragment total and where each one comes from"],
            ["Dragon Egg", "Your daily Dragon Egg total and where each one comes from"],
            ["Nether Star", "Your rank and seasonal perk bonuses"],
            ["Honey Bottle", "Click to see your Elixirs and other bonuses"],
            ["Chest", "Click to claim. It turns into a red barrier showing the time left after you claim."],
          ],
        },
        body: [],
      },
      {
        heading: "The Reward Items",
        table: {
          columns: ["Item", "Looks like"],
          rows: [
            ["Ember", "A glowing fire charge. \"Fossilized dragon fire.\""],
            ["Star Fragment", "A glowing iron nugget. \"Nether Star Fragment.\" (It used to be called Star Remnant.)"],
            ["Dragon Egg", "A normal Dragon Egg. Dragon Eggs are the main currency for guilds."],
          ],
        },
        body: [],
      },
      {
        heading: "Daily Bonus by Rank",
        table: {
          columns: ["Rank", "Embers", "Star Fragments", "Dragon Eggs"],
          rows: [
            ["Desert Nomad", "0", "1", "0"],
            ["Forest Ranger", "1", "0", "0"],
            ["Sea Mariner", "1", "0", "0"],
            ["Nether Traveler", "1", "0", "0"],
            ["End Voyager", "1", "0", "1"],
            ["Ethereal Drifter (its own bonus)", "0", "1", "1"],
          ],
        },
        body: [
          "**Ethereal Drifters always get every lower rank's bonus too**, on top of their own. That's **4 Embers, 2 Star Fragments and 2 Dragon Eggs** a day from ranks alone.",
          "If you lose a rank, its bonus is removed. Seasonal perks and elixirs are never removed.",
        ],
      },
      {
        heading: "Other Daily Bonuses",
        table: {
          columns: ["Bonus", "Adds each day"],
          rows: [
            ["Spooky perk", "1 Ember"],
            ["Spooky Star perk", "1 Star Fragment"],
            ["Christmas perk", "1 Ember"],
            ["Christmas Star perk", "1 Star Fragment"],
            ["Guild Ember Elixir (Guild Courier, Glory 10)", "1 Ember"],
            ["Daily Elixir (Ember)", "1 Ember, permanently"],
            ["Daily Elixir (Star Fragment)", "1 Star Fragment, permanently"],
          ],
        },
        body: [
          "**Daily Elixirs** come from events. Drinking one permanently adds its bonus to your dailies. Each elixir has a tag (like \"summer2026\"), and you can only get **one bonus per tag**. A second elixir with the same tag does nothing.",
        ],
      },
      {
        heading: "Weekly Rewards (Ethereal Drifter)",
        commands: ["/weekly"],
        body: [
          "Ethereal Drifters can type **/weekly** once every **7 days**, counted from their own last claim. It's separate from the daily timer.",
          "Each claim gives **1 Epic Key, 1 Legendary Key, 1 Soul Key** and 1 [Experience Elixir](/items/consumables/experience-elixir).",
          "You need **4 empty inventory spaces**. Without them, /weekly asks you to make room, gives nothing, and doesn't start your timer.",
          "If you've already claimed, /weekly tells you how long until the next one.",
        ],
      },
    ],
  },
  {
    title: "Name Colors",
    slug: "name-colors",
    category: "Server Systems",
    summary: "Ethereal Drifters can swap their gradient chat name for another rank's color.",
    status: "Active",
    sections: [
      {
        heading: "Choosing a Name Color",
        commands: ["/namecolor"],
        body: [
          "Ethereal Drifters can change the color of their name **in chat only**. Your rank, prefix, perks and TAB list name stay the same.",
          "Type **/namecolor** to open a menu with a preview of your name in each color, and click one to pick it.",
          "You can also type it, for example **/namecolor sea_mariner** or **/namecolor end voyager**. **/namecolor default** or **/namecolor reset** goes back to the gradient.",
        ],
      },
      {
        heading: "The Colors",
        body: [
          "Desert Nomad, Forest Ranger, Sea Mariner, Nether Traveler, End Voyager, or **Ethereal Drifter** (the default gradient). Each color matches that rank's chat color.",
          "Your choice is saved, so it stays after you log out. You can change it any time, with no cooldown.",
          "Nicknames work too: the color is applied to your nickname.",
          "If you lose the Ethereal Drifter rank, your choice is ignored and you get your normal rank color.",
        ],
      },
      {
        heading: "Chat Text Color",
        commands: ["/namecolor chat"],
        body: [
          "The lever at the bottom middle of the menu (or **/namecolor chat**) switches the color of your chat **message text** between light purple (the Ethereal Drifter default) and white.",
        ],
      },
    ],
  },
  {
    title: "Forgotten Souls",
    slug: "forgotten-souls",
    category: "Guilds, Events, and PvP",
    summary: "Boss mobs that appear on their own a few times a day. Everyone who helps gets a reward.",
    status: "Active",
    sections: [
      {
        heading: "When They Appear",
        body: [
          "Up to **3 Forgotten Souls** appear each day, at random times **5 to 10 hours** apart, somewhere in the overworld. The day resets at midnight Central time.",
          "The souls take turns in a shuffled order, so you'll see every soul once before any repeats.",
          "The whole server gets warnings **1 hour, 30 minutes, 10 minutes, 5 minutes and 1 minute** before one appears. When it emerges, chat shows its **exact coordinates** and you'll hear the Wither spawn sound.",
        ],
      },
      {
        heading: "Fight Rules",
        table: {
          columns: ["Rule", "Details"],
          rows: [
            ["Time limit", "If it isn't killed within **20 minutes**, it disappears. Rewards are still handed out."],
            ["Boss bar", "Everyone sees its health at the top of the screen."],
            ["Damage scoreboard", "A sidebar shows who has dealt the most damage."],
            ["Group armor", "When **2 or more players** are within 15 blocks, it takes **40% less damage** and glows with blue soul flames."],
            ["No sniping", "Arrows shot from more than **15 blocks** away do nothing."],
            ["Water escape", "If it ends up in water, it teleports to the nearest player within 15 blocks."],
            ["Idle", "It only uses its abilities when a player is within 15 blocks."],
            ["No name tags", "It can't be renamed with a name tag."],
          ],
        },
        body: [
          "Many of their abilities **remove Regeneration and Absorption**, which cancels golden apples.",
          "Their attacks hit everyone, even players who aren't red in a Neutral zone. See [Red Name PvP](/wiki/red-name-pvp).",
        ],
      },
      {
        heading: "Rewards",
        table: {
          columns: ["Place (by damage)", "Reward"],
          rows: [
            ["1st", "1 Soul Key and 3 Epic Keys"],
            ["2nd", "33% chance of a Soul Key. Otherwise 2 Epic Keys and a random [Legendary Component](/items/legendary-components)"],
            ["3rd", "2 Epic Keys, plus a 25% chance of a Soul Key"],
            ["Everyone else who helped", "5 Dragon Eggs"],
          ],
        },
        body: [
          "You must be **online** when the fight ends. Anything that doesn't fit in your inventory goes to your [Claim Items](/wiki/claim-items).",
        ],
      },
      {
        heading: "Sulfur Priest",
        body: [
          "**Wither Skeleton** · 500 health · Heavy armor · Can't be knocked back · **Can't heal**. Wears red leather robes and carries [Arkesio](/items/original-items/arkesio).",
          "**Burning Aura:** stops and burns everyone within 10 blocks, applying [Enhanced Burn](/items/combat-effects#enhanced-burn): every fire tick takes 10% of your current health.",
          "**Flame Beam:** a beam at each player within 15 blocks. **80 damage**, an explosion and long-lasting fire.",
          "**Sulfur Circle:** a warning circle. 3 seconds later, everyone within 10 blocks is pinned and takes repeated hits of **30% of their max health**. Get out of the circle.",
        ],
      },
      {
        heading: "Vengeful Nature Spirit",
        body: [
          "**Bogged** · 250 health · Heavy armor · Can't be knocked back.",
          "**Vine Tether:** pulls nearby players in for 15 damage. It heals for each player caught.",
          "**Plant Familiar:** spawns a slime. If the slime reaches the Spirit, it heals the Spirit.",
          "**Earthquake:** a dirt warning circle. 3 seconds later, everyone within 15 blocks takes **20 + half their max health**, is slowed heavily and launched.",
        ],
      },
      {
        heading: "Cursed Arcanist",
        body: [
          "**Vindicator** · 500 health · Heavy armor · 40 attack damage. Carries [Palmyr](/items/original-items/palmyr).",
          "**Cursed Dome:** a 15-block dome for 60 seconds. **All damage inside is doubled**, for players and the boss.",
          "**Summon Vindicators:** 2 fast Cursed Vindicators (100 health each) next to every player within 10 blocks.",
          "**Cursed Arrow:** shoots every player within 15 blocks. A hit gives Nausea and Strength III, and removes Regeneration and Absorption.",
        ],
      },
      {
        heading: "Forgotten Warrior",
        body: [
          "**Zombie** · 300 health · Armor · **60 attack damage** · Can't be knocked back. Wears a dragon head and carries an axe.",
          "**Fireball:** at the closest player. **85 damage** in a 6-block blast.",
          "**Leap Slam:** leaps at the closest player. **85 damage** in a 4-block blast.",
          "**Lunge:** pauses, then charges. Players it touches are slowed for 15 seconds, and **trying to eat while slowed fails and deals 10 damage**.",
        ],
      },
      {
        heading: "Lost Mariner",
        body: [
          "**Drowned** · 400 health · Heavy armor. Wears the [Ebisu Helm](/items/original-items/ebisu-helm), [Seven-League Boots](/items/original-items/seven-league-boots) and an elytra, and carries a Riptide trident.",
          "**Run Away:** it has no attacks. It keeps running from the closest player. The challenge is catching it.",
        ],
      },
      {
        heading: "Mutated Dimensional Explorer",
        body: [
          "**Enderman** · 500 health · Armor · Permanent Resistance II · Can't be knocked back.",
          "**Dimensional Scatter:** blinds everyone within 10 blocks and teleports them to random nearby spots.",
          "**Void Bursts:** three bursts around it. **40 damage** and Weakness II.",
          "**Phase Strike:** teleports to a player and later hits them for **30% of their max health**, healing itself by 20.",
        ],
      },
      {
        heading: "The False Idol",
        body: [
          "**Blaze** · 500 health · Heavy armor.",
          "**Homing Fire:** curving flame beams at players within 15 blocks. **60 damage** and an explosion. Also summons a False Idol's Vex (50 health) whose hits cause Weakness.",
          "**Wither Field:** everyone within 10 blocks is pinned, takes 15 damage and gets Wither III.",
          "**Collapse:** pulls in players within 8 blocks, then explodes for **140 damage** and launches them.",
        ],
      },
      {
        heading: "The Endless Devout",
        body: [
          "**Husk** · 300 health · **50 attack damage** · Takes 30% less damage while casting.",
          "**Soulflame Circle:** a ring of soul fire. **40 damage + 60% of max health** and Blindness to anyone inside.",
          "**Fracture Line:** a long crack along the ground at the closest player, with a smoke warning first. **50 damage**, Weakness and Blindness.",
          "**Chains of Burden:** a 5.5-block field for 8 seconds. Players inside are chained, heavily slowed and get **heavier gravity**.",
          "**Burden:** when an attack hits 2 or more players, it gains a stack (up to 6). Each stack adds **+5% to all its damage**, up to +30%. Hitting only one player removes a stack. Spread out!",
        ],
      },
      {
        heading: "Holiday Souls",
        body: [
          "Three more souls appear only during holiday events. They **can't heal** and summon **guards**. The Heartbound Sovereign and the Sunscorched Zealot also apply the **K'Thun Mark**, which blocks golden apples and potions for a few seconds.",
          "**The Pumpkin King (Halloween):** Wither Skeleton, **1,000 health**. Bone Ring, Soul Spear (65 damage), Royal Judgment and Royal Guards. 1st gets 7 Dragon Eggs and a Spooky Key, 2nd 5 eggs and a 33% key chance, 3rd 3 eggs and a 25% key chance, everyone else 2 eggs. Each guard killed has a 5% chance to drop a Spooky Key.",
          "**The Heartbound Sovereign (Valentine's):** Stray, 400 health. Rose Bloom, Cupid Volley (62 damage), Vow Circle and Heartbound Guards. 1st gets a Valentine's Key, 2nd 8 Dragon Eggs and a 33% key chance, 3rd 5 eggs and a 25% key chance, everyone else 3 eggs. Each guard killed has a 3% chance to drop a Valentine's Key.",
          "**The Sunscorched Zealot (Summer):** Husk, 420 health. Solar Flare, Sundial Beam, Quicksand Trap, Sundering Glare, Skyfall Barrage and Crazed Sunbearers. **Everyone within 20 blocks is forced to Red Name**, and **Totems of Undying don't work** for 6 seconds after a hit from it or its guards. 1st gets a Summer Key, 2nd 8 Dragon Eggs and a 33% key chance, 3rd 5 eggs and a 25% key chance, everyone else 3 eggs. Each guard killed has a 3% chance to drop a Summer Key.",
        ],
      },
    ],
  },
  {
    title: "Auras",
    slug: "auras",
    category: "Server Systems",
    summary: "Cosmetic particle effects that follow you around. Unlock them with Aura Cookies.",
    status: "Active",
    sections: [
      {
        heading: "Using Auras",
        commands: ["/aura", "/aura toggle"],
        body: [
          "Auras are purely for looks. They don't do anything in combat.",
          "Type **/aura** to get an **Aura Stone**. Right-click it to open the aura menu, which shows every aura you've unlocked. Click one to turn it on, or click **Clear Aura** to turn it off.",
          "Only **one aura** can be on at a time, and your choice is remembered after you log out.",
          "Auras are visible to anyone within **20 blocks**. Type **/aura toggle** to hide everyone else's auras (you'll still see your own). Type it again to show them.",
        ],
      },
      {
        heading: "Aura Cookies",
        body: [
          "Each **Aura Cookie** unlocks one aura when eaten, for example the Flame Spiral Aura Cookie unlocks Flame Spiral. Unlocks are permanent.",
          "If you already have that aura, the cookie **isn't eaten**, so it isn't wasted.",
          "The **Guild Courier** sells a random cookie of a set rarity, depending on your guild's Glory. Cookies can also come from events.",
        ],
      },
      {
        heading: "Rarities",
        table: {
          columns: ["Rarity", "Menu color", "Guild Courier price"],
          rows: [
            ["Common", "White", "10 Dragon Eggs (Glory 5)"],
            ["Uncommon", "Green", "32 Dragon Eggs (Glory 6)"],
            ["Rare", "Aqua", "48 Dragon Eggs (Glory 7)"],
            ["Epic", "Purple", "64 Dragon Eggs (Glory 8)"],
            ["Legendary", "Dark red, bold", "128 Dragon Eggs (Glory 10)"],
            ["Unique", "Gold, bold", "Not for sale"],
          ],
        },
        body: [
          "**Unique** auras are personal auras named after specific players. They can't be unlocked with a cookie.",
        ],
      },
      {
        heading: "Common Auras (30)",
        body: [
          "Anger, Bloody, Bubbly, Cloud Puff Steps, Cloudy, Crimson Spore Drift, Crit Spark, Damage Ember, Draconic Eye, Dream, Dusty, Emberfall, Fishy, Flashy, Happy, Holy, Lovely, Nautilus, Nightmare, Obsidian Weep, Omen, Petal Drift, Prickly, Pyro, Rhythmic, Smoky, Soul, Sparkly, Verdigris Flicker, Witchful.",
          "Anger used to be called Ambient. Old Ambient Aura Cookies still unlock it.",
        ],
      },
      {
        heading: "Uncommon Auras (11)",
        body: [
          "Blossom Steps, Cloud Drift Mantle, Copper Cinders, Crimson Mote, Draconic Ribbon, Flame Spiral, Heartbeat, Induction Arcs, Smoldering Ire, Verdant Bloom, Volcanic Footprints.",
        ],
      },
      {
        heading: "Rare Auras (13)",
        body: [
          "Cloud Gyre, Crimson Lanterns, Depression, Eye of Solstice, Facet Shards, Frost Halo, Heartbreak, Honeycomb, Lover's Orbit, Sakura Halo, Storm Orbit, Verdigris Halo, Vitriol Orbit.",
        ],
      },
      {
        heading: "Epic Auras (8)",
        body: [
          "Abyssal Vents, Crimson Bloom, Enchanted Orbitunes, Magma Fissures, Petal Vortex, Soulfire Crown, Triune Flame Gyre, Void Rift.",
        ],
      },
      {
        heading: "Legendary Auras (9)",
        body: [
          "Copper Pong, Crimson Comet Vow, Darkflight, Draconic Domain, Eternal Blossom Wings, Fire Bloom, Hey! Listen!, Queen's Dominion, Volcanic Dominion.",
        ],
      },
      {
        heading: "Unique Auras (6)",
        body: [
          "Bassor's Duck Pond, Diimplez's Firefly Waltz, Jade's Riftbloom, Kierman's Electric Dynamo, Ravyn's Aureate Blossom, Wishflower's Wispy Blossom.",
        ],
      },
    ],
  },
  {
    title: "Ender Tabs",
    slug: "ender-tabs",
    category: "Server Systems",
    summary: "Turn your Ender Chest into multiple pages of bigger storage.",
    status: "Active",
    sections: [
      {
        heading: "How Ender Tabs Work",
        body: [
          "Until you unlock your first tab, your Ender Chest works normally.",
          "Once you have at least one tab, right-clicking any Ender Chest opens **Ender Tabs** instead. Each tab holds **45 slots**, compared to 27 in a normal Ender Chest.",
          "The bottom row has **arrows** to switch tabs and a button showing which tab you're on. The menu remembers the tab you were last on.",
          "**Your old Ender Chest is safe:** when you unlock Ender Tabs, everything in it is moved into Tab 1.",
        ],
      },
      {
        heading: "Unlocking Tabs",
        table: {
          columns: ["Source", "Tabs"],
          rows: [
            ["Ender Tab Elixir (from events)", "+1 each"],
            ["End Voyager rank", "+1, given the next time you open an Ender Chest"],
            ["Ethereal Drifter rank", "+1, given the next time you open an Ender Chest"],
            ["Guild Endertab Elixir (Guild Courier, Glory 10)", "+1"],
          ],
        },
        body: [
          "There's **no limit** on how many tabs you can have, and tabs are never taken away.",
          "Each Ender Tab Elixir has an ID, and you can only use **one per ID**. A second one with the same ID does nothing.",
        ],
      },
    ],
  },
  {
    title: "Eternal Anvil",
    slug: "eternal-anvil",
    category: "Server Systems",
    summary: "The only anvil that can repair custom items with enchantments above the normal maximum.",
    status: "Active",
    sections: [
      {
        heading: "Normal Anvils",
        body: [
          "Many custom items have enchantments **above the normal maximum**, like Sharpness XVI or Unbreaking XV. On a normal anvil, those items **can't be repaired or enchanted further**, but they **can be renamed**. The result slot shows a barrier that says \"Repair Blocked\".",
          "Protection V and Unbreaking V or X are still allowed on normal anvils.",
          "Some items, like the [Día de los Muertos 2026](/items/dia-de-los-muertos-2026) items, are **Eternal Anvil only**: normal anvils can only rename them, whatever their enchantments.",
          "**Grindstones** also refuse these items, so their enchantments can't be stripped off.",
        ],
      },
      {
        heading: "The Eternal Anvil",
        body: [
          "The Eternal Anvil is a special named anvil. It shows particles so you can spot it, and it **never gets damaged** from use.",
          "**It can:** repair items with above-maximum enchantments (using one repair charge), and rename anything for free. Colored item names stay colored.",
          "**It can't:** add more enchantments to an item that already has above-maximum ones, or combine two items that both have them.",
        ],
      },
      {
        heading: "Repair Charges",
        commands: ["/anvilcharges"],
        table: {
          columns: ["Source", "Charges"],
          rows: [
            ["Everyone", "1"],
            ["End Voyager rank", "+1"],
            ["Ethereal Drifter rank", "+1"],
            ["Each Repair Elixir you drink", "+1, permanently"],
          ],
        },
        body: [
          "Each repair uses **one charge**, and each charge comes back **7 days** after it's used. Renaming doesn't use a charge.",
          "**Example:** an End Voyager who has drunk one Repair Elixir has **3 charges**.",
          "Type **/anvilcharges** to see each of your charges and when it will be ready.",
        ],
      },
      {
        heading: "Repair Elixirs",
        body: [
          "A Repair Elixir **permanently** adds one more weekly repair charge. They come from events, and the **Guild Repair Elixir** is sold by the Guild Courier at Glory 7.",
          "Each Repair Elixir has an ID, and you can only use **one per ID**. A second one with the same ID does nothing.",
        ],
      },
    ],
  },
  {
    title: "Auction House Trader",
    slug: "auction-house-trader",
    category: "Server Systems",
    summary: "An NPC shop that sells a rotating selection of special weapons and armor.",
    status: "Active",
    sections: [
      {
        heading: "How It Works",
        body: [
          "Despite the name, the Auction House trader is **not** player-to-player trading. It's an NPC shop: a wandering trader named **Auction House**.",
          "Right-click it to open the shop. It sells **5 items** at a time, and the selection **changes every 3 days**. It tries not to repeat items from the last rotation.",
          "The last trade in the menu is a villager head showing how long until the next shipment.",
          "There's no limit on how many times you can buy an item. Prices show in the trade menu.",
        ],
      },
      {
        heading: "What It Can Sell",
        body: [
          "**Armor:** Crown of Radiance, Spirit of the Elder Lizard, Overlord's Bloodmail, Shadow Mantle, Mercury's Greaves, Penance, Ninja Tabis, Timeless Moonsteed.",
          "**Weapons:** Dolcé, Eschaton, Esylen, K'Thun, Peruun, Quietus, Skyreaver, Yaggagetsu, Yseria.",
          "See what each one does on the [Auction House items](/items/auction-house) page.",
        ],
      },
      {
        heading: "Other NPCs at the Auction House",
        body: [
          "The Auction House also has NPCs who sell some [Original Items](/items/original-items): **Torbjorn**, **Ogren**, **SwordSmith**, **Aldric** and **ToolSmith**. Each item's page says who sells it.",
          "The [Excavator and Lumberjaxe](/items/vein-mining-tools) are also sold by an NPC at the Auction House.",
        ],
      },
    ],
  },
  {
    title: "Red Name PvP",
    slug: "red-name-pvp",
    category: "Guilds, Events, and PvP",
    summary: "Who can fight whom: start a fight and your name turns red, and only red names can be attacked.",
    status: "Active",
    sections: [
      {
        heading: "Zone Types",
        table: {
          columns: ["Zone", "What happens inside"],
          rows: [
            ["Neutral", "You can only hurt **red-named** players. Attacking anyone else is blocked and turns you red."],
            ["Warzone", "**Everyone inside is red** the whole time. Free-for-all PvP."],
            ["Other", "Normal server PvP rules apply. Anywhere outside all zones counts as Other."],
          ],
        },
        body: [
          "**During Plunder**, every Neutral zone becomes a Warzone until the event ends.",
        ],
      },
      {
        heading: "How Red Names Work",
        body: [
          "A red-named player has a **dark red name** above their head and a **red bar** at the top of their screen.",
          "**REDNAME: PERSISTENT** means you're in a Warzone and stay red until you leave. **REDNAME: 12.3s** means you're red for that many more seconds.",
        ],
      },
      {
        heading: "Getting a Red Name in a Neutral Zone",
        table: {
          columns: ["What happens", "Result"],
          rows: [
            ["You attack a player who isn't red", "Your hit is **blocked**, and you're red for **15 seconds**"],
            ["You attack a red player", "Your hit lands. You turn red, or your timer gets **+5 seconds** if you already were"],
            ["A red player you're fighting hits you", "Your own red timer gets **+5 seconds**"],
          ],
        },
        body: [
          "The timer never goes above **15 seconds**.",
          "**Logging out pauses your timer.** The seconds left continue when you log back in, so logging out won't clear a red name.",
          "**In short:** throwing the first punch makes you a target for 15 seconds, and staying in the fight keeps you red.",
          "Attacks include melee hits, arrows, tridents and other projectiles, your tamed pets attacking someone, and harmful splash or lingering potions.",
        ],
      },
      {
        heading: "What Protects You",
        body: [
          "In a Neutral zone, players who aren't red are protected from other players' damage, harmful splash and lingering potions, and harmful effects (Poison, Wither, Instant Damage, Weakness, Blindness, Hunger, Levitation, Bad Luck, Bad Omen and Darkness).",
        ],
      },
      {
        heading: "Exceptions",
        body: [
          "These can always hurt you, even when you're not red in a Neutral zone:",
          "● The **Evil Horse**'s charge during Prowl (its fireballs are still blocked).",
          "● The **Heartbound Sovereign** and its guards (Valentine's).",
          "● The **Sunscorched Zealot** and its guards (Summer). The Zealot also forces everyone within 20 blocks to be red.",
          "● Every [Forgotten Soul](/wiki/forgotten-souls): their attacks, arrows and harmful potions. Near a living Forgotten Soul, harmful effects aren't blocked either.",
        ],
      },
    ],
  },
  {
    title: "Profiles",
    slug: "profiles",
    category: "Server Systems",
    summary: "Every player has a profile with a bio, likes, dislikes and their guild.",
    status: "Active",
    sections: [
      {
        heading: "Viewing a Profile",
        commands: ["/pf <player>"],
        body: [
          "**/pf <player>** shows a floating hologram in front of you, only you can see it. It disappears after **20 seconds** and works for offline players too.",
          "It shows their name, **Likes** and **Dislikes**, when they **last played** (or Online), their **bio** and their **guild** tag and rank.",
        ],
      },
      {
        heading: "Setting Your Bio",
        commands: ["/bio <text>"],
        body: [
          "Your bio can be up to **3 lines** of **36 characters** each. Use | to split the lines.",
          "**Example:** /bio Builder of the east docks | Ask me about redstone | Guild: [SUN]",
        ],
      },
      {
        heading: "Likes and Dislikes",
        commands: ["/like <player>", "/dislike <player>"],
        body: [
          "You can like or dislike other players' profiles, but not your own.",
          "You can like the same player once every **24 hours**. Dislikes have their own 24-hour timer.",
          "If they're online, they get a message saying who liked or disliked them.",
        ],
      },
    ],
  },
  {
    title: "Claim Items",
    slug: "claim-items",
    category: "Server Systems",
    summary: "A mailbox for items you couldn't receive because your inventory was full.",
    status: "Active",
    sections: [
      {
        heading: "Your Item Mailbox",
        commands: ["/claiminfo", "/claimitems"],
        body: [
          "When the server tries to give you something and your inventory is full, it goes into your **claims** instead of being lost.",
          "**/claiminfo** opens a menu of everything waiting for you. Click an item to take it.",
          "**/claimitems** takes everything at once, until your inventory is full. The rest stays for later.",
          "Claims are saved, so they're still there after you log out or the server restarts.",
        ],
      },
      {
        heading: "What Goes Into Claims",
        body: [
          "● [Forgotten Soul](/wiki/forgotten-souls) rewards, regular and holiday.",
          "● Holiday boss guard key drops.",
          "● Items staff send you.",
          "**Plunder and Prowl rewards don't use claims.** If your inventory is full, those drop at your feet, so make room before an event ends.",
        ],
      },
    ],
  },
];
