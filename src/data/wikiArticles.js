const mainCityGateSections = [
  {
    heading: "Main City Gate Warps",
    type: "group",
    body: ["The Main City gates are the core travel routes out of TerraNova. Each gate leads toward a different type of adventure, from PvP arenas to frontier roads and wilderness settlement paths."],
  },
  {
    heading: "/warp NorthGate",
    commands: ["/warp NorthGate"],
    body: ["The North Gate is home to a dangerous PvP zone known as The Gauntlet. Enter at your own risk. If you fall in battle, your items may be dropped for others to claim. Survive the Gauntlet, and you will reach the North Highway, a long-traveled road leading toward numerous settlements and unexplored lands to the north."],
  },
  {
    heading: "/warp SouthGate",
    commands: ["/warp SouthGate"],
    body: ["The South Gate is home to the imposing South Gate Castle, a dark and mysterious fortress shrouded in secrets. Within its walls lies a PvP-enabled area where warriors can test their skills, hone their combat abilities, and settle rivalries without the risk of losing their items."],
  },
  {
    heading: "/warp WestGate or /warp WestRoad",
    commands: ["/warp WestGate", "/warp WestRoad"],
    body: ["The West Gate marks the beginning of the West Road, a scenic route winding through vast farmlands, cozy homesteads, and the residences of the server's staff. Follow the West Road beyond the settled lands to discover new horizons and claim a place of your own. Along the way, take in the breathtaking sights, including the mystical Giant Wishflowers and the many wonders that await beyond the road."],
  },
  {
    heading: "/warp EastGate",
    commands: ["/warp EastGate"],
    body: ["The East Gate serves as the gateway from the ancient Dwarven city within Mount Gundalar, leading travelers into the frozen wilderness beyond. The eastern plains are cold, harsh, and unforgiving, with endless stretches of snow and ice. Yet those willing to brave the frozen frontier will find rich and fertile lands beyond, perfect for those seeking a new home and a place to build their legacy."],
  },
];

const importantSpawnWarpSections = [
  {
    heading: "Important Spawn Warps",
    type: "group",
    body: ["These Spawn warps lead to key services, shops, crates, guild resources, gathering spots, and higher-risk areas around TerraNova."],
  },
  {
    heading: "/warp AuctionHouse",
    commands: ["/warp AuctionHouse"],
    body: ["The Auction House is one of the most important buildings in Spawn, serving as a bustling hub for trade and rare treasures. Inside, merchants offer an ever-changing selection of custom armor, weapons, and tools for adventurers of all kinds. Venture to the top floor, where the Crates await, filled with valuable rewards, rare items, and treasures waiting to be won."],
  },
  {
    heading: "/warp Bank",
    commands: ["/warp Bank"],
    body: ["The Bank is the heart of Spawn's economy, where adventurers can exchange hard-earned Embers and Star Fragments for valuable Dragon Eggs and Nether Stars. The Kingdom Records can also be found within the Bank, providing information about claiming and managing lands throughout the kingdom. Head to the second floor to discover the Post Office, where you can claim your own postal box and keep correspondence in one convenient place."],
  },
  {
    heading: "/warp Blacksmith",
    commands: ["/warp Blacksmith"],
    body: ["Tucked away on the northern side of Spawn is a quiet little forge where the skilled blacksmith Boros tends to his craft. For those who possess the kingdom's most powerful treasures, Boros offers the Eternal Anvil, a rare and powerful anvil capable of repairing even your most prized God Items."],
  },
  {
    heading: "/warp Crates",
    commands: ["/warp Crates"],
    body: ["Use your Vote Keys, Wild Keys, Legendary Keys, and Epic Crate Keys to unlock powerful rewards, rare items, and valuable surprises. Whether you are looking for fortune or simply feeling lucky, there is always something waiting behind the next crate."],
  },
  {
    heading: "/warp ForgottenSouls",
    commands: ["/warp ForgottenSouls"],
    body: ["The Forgotten Souls await in a place long abandoned by the living. Venture here to battle these mysterious creatures for a chance to claim powerful prizes and the coveted Soul Key. The area is also home to the surface ruins of the Sunken City, where remnants of a forgotten civilization still linger beneath the waves. Nearby, you will find Jam's Camp, a humble outpost where the mysterious Soul Crates can be found."],
  },
  {
    heading: "/warp GuildHall",
    commands: ["/warp GuildHall"],
    body: ["The Guild Hall is the gathering place for adventurers seeking fellowship, fortune, and a place among others. Here, you can learn about creating your own guild or joining an existing one. The Guild Hall is also home to the realm's many Guild Couriers, who carry messages, goods, and important correspondence between guilds and settlements."],
  },
  {
    heading: "/warp Harbor",
    commands: ["/warp Harbor"],
    body: ["The Harbor is the bustling shipyard of TerraNova, where sailors, merchants, and adventurers gather before setting out across the realm. Among the vessels in port, keep an eye out for the Wandering Trader's Ship, captained by Captain Red. His ship is always worth seeking out."],
  },
  {
    heading: "/warp HuntedsInn",
    commands: ["/warp HuntedsInn"],
    body: ["Hunted's Inn sits quietly on the northern edge of the city, an old and welcoming establishment where weary travelers can find a moment of rest. Within the inn, you will find Hunted's loyal hound, a faithful companion who has made the inn his home. He may not have much to say, but he is always on the lookout for a tasty treat."],
  },
  {
    heading: "/warp Inn",
    commands: ["/warp Inn"],
    body: ["The TerraNova Inn is the city's main gathering place for travelers seeking a warm bed, a quiet rest, or perhaps a little luck. Explore the Aura Crate, where you can try to win unique cosmetic auras. The inn is also home to a mysterious Traveling Magician, who offers Invisible Item Frames for displaying prized possessions without distracting from your builds."],
  },
  {
    heading: "/warp MountGundalar",
    commands: ["/warp MountGundalar"],
    body: ["Mount Gundalar is home to an ancient Dwarven mining civilization whose tunnels and halls were carved deep into the mountain long before the Kingdom of TerraNova existed. The forgotten mines run deep beneath the mountain, filled with remnants of a lost age, hidden treasures, and secrets waiting to be uncovered."],
  },
  {
    heading: "/warp PetShop",
    commands: ["/warp PetShop"],
    body: ["The Pet Shop is the perfect place to find a new companion for your adventures across TerraNova. Step inside to browse a selection of spawn eggs and choose a creature to call your own. Whether you want a loyal companion or a little more life around your home, there is always a new friend waiting to be found."],
  },
  {
    heading: "/warp PotionShop",
    commands: ["/warp PotionShop"],
    body: ["The Potion Shop, hidden within the depths of the Dark Forest, is a useful stop for aspiring alchemists and adventurers. Here, you can find essential ingredients and supplies for early-game potions, along with powerful Wild Repair and E-Table Elixirs to aid you on your journey."],
  },
  {
    heading: "/warp Shops",
    commands: ["/warp Shops"],
    body: ["The Shops District is where merchants and entrepreneurs grow their businesses across TerraNova. Public Notice Boards let players advertise their shops and share teleport locations with other adventurers. To open a shop of your own, visit the local Master Shopkeeper to purchase a Player Shop Egg and begin building your merchant empire."],
  },
  {
    heading: "/warp Slums",
    commands: ["/warp Slums"],
    body: ["The Slums are the rougher side of Spawn, where forgotten corners hide valuable loot, hidden treasures, and some of the best shops in the city. The district is also home to the Wuschels, a unique group that has made the Slums their own. Tread carefully: PvP is enabled throughout the district, and if you fall, your items may be left behind for others to claim."],
  },
  {
    heading: "/warp SupplyYard",
    commands: ["/warp SupplyYard"],
    body: ["The Supply Yard is the perfect destination for builders looking to stock up on materials. Here, traders offer building supplies in bulk, making it easier to gather resources for your next great project without collecting everything yourself."],
  },
  {
    heading: "/warp TownSquare",
    commands: ["/warp TownSquare"],
    body: ["The Town Square brings you right to the heart of TerraNova, where the city's many happenings come together. This lively gathering place is where adventurers meet, celebrations unfold, and the community gathers, especially during seasonal events when the square becomes the center of the festivities."],
  },
];

export const wikiArticles = [
  {
    title: "How to Join TerraNova",
    slug: "how-to-join-terranova",
    category: "Getting Started",
    summary: "Java and Bedrock connection details for TerraNova.",
    status: "Active",
    sections: [
      {
        heading: "Java Edition",
        body: ["Server address: sunnyhorizons.mc.gg"],
      },
      {
        heading: "Bedrock Edition",
        body: ["Server address: sunnyhorizons.mc.gg", "Port: 1475"],
      },
      {
        heading: "Console Players",
        body: ["Xbox, PlayStation, and General Bedrock guides are planned. Video URLs are not confirmed yet."],
      },
    ],
  },
  {
    title: "Start Here: First Steps",
    slug: "start-here-first-steps",
    category: "Getting Started",
    summary: "What to do after you have already joined the server.",
    status: "Active",
    sections: [
      {
        heading: "First Commands",
        body: ["Use /spawn, /wild, /rtp, /warp NorthGate, /warp SouthGate, /warp WestGate, /warp WestRoad, and /warp EastGate to get oriented."],
      },
      {
        heading: "North Gate Warning",
        body: ["The North Gate includes The Gauntlet, a dangerous PvP area. If players die there, their items may drop."],
      },
    ],
  },
  {
    title: "Worlds Overview",
    slug: "worlds-overview",
    category: "Worlds",
    summary: "A quick guide to TerraNova's regions, roads, and frontier areas.",
    status: "Needs Verification",
    sections: [
      {
        heading: "World Locations",
        body: ["World and region details will live here as the server map, roads, and named lands are verified."],
      },
    ],
  },
  {
    title: "Warp Overview",
    slug: "warp-overview",
    category: "Warps",
    summary: "Choose a warp group: Main City Gate Warps or Important Spawn Warps.",
    status: "Active",
    hideInCategoryList: true,
    sections: [
      {
        heading: "How Warps Are Organized",
        body: ["Warps are split into Main City Gate Warps for leaving TerraNova through major roads and Important Spawn Warps for shops, services, crates, guild resources, and key city locations."],
      },
      {
        heading: "Main City Gate Warps",
        body: ["Open this guide for NorthGate, SouthGate, WestGate, WestRoad, and EastGate."],
      },
      {
        heading: "Important Spawn Warps",
        body: ["Open this guide for AuctionHouse, Bank, Blacksmith, Crates, ForgottenSouls, GuildHall, Harbor, HuntedsInn, Inn, MountGundalar, PetShop, PotionShop, Shops, Slums, SupplyYard, and TownSquare."],
      },
    ],
  },
  {
    title: "Main City Gate Warps",
    slug: "main-city-gate-warps",
    category: "Warps",
    summary: "Lore, warnings, and copyable commands for the Main City gate routes.",
    status: "Active",
    sections: mainCityGateSections,
  },
  {
    title: "Important Spawn Warps",
    slug: "important-spawn-warps",
    category: "Warps",
    summary: "Copyable Spawn warp commands for shops, services, crates, guilds, and key locations.",
    status: "Active",
    sections: importantSpawnWarpSections,
  },
  {
    title: "Shops Overview",
    slug: "shops-overview",
    category: "Shops",
    summary: "A guide to TerraNova shops, public boards, crates, and service locations.",
    status: "Active",
    sections: [
      {
        heading: "Shop Locations",
        body: ["For now, shop-related warps such as /warp Shops, /warp AuctionHouse, /warp Crates, /warp PetShop, and /warp PotionShop are documented under the Warps category. This page can grow into a full shop guide as more economy details are confirmed."],
      },
    ],
  },
  {
    title: "Items, Souls, and Progression",
    slug: "items-souls-and-progression",
    category: "Items, Souls, and Progression",
    summary: "A holding guide for Souls, relics, custom weapons, armor, potions, and upgrades.",
    status: "Needs Verification",
    sections: [
      {
        heading: "Verification Needed",
        body: ["Specific item names, effects, rarities, and upgrade rules still need confirmed server information."],
      },
    ],
  },
  {
    title: "Guilds, Events, and PvP",
    slug: "guilds-events-and-pvp",
    category: "Guilds, Events, and PvP",
    summary: "Guild competition, Glory, Plunder, Prowl, events, and PvP warnings.",
    status: "Needs Verification",
    sections: [
      {
        heading: "Planned Coverage",
        body: ["Guild Competition includes Glory, Plunder, Prowl, and reward documentation once details are verified."],
      },
    ],
  },
  {
    title: "Updates and Archive",
    slug: "updates-and-archive",
    category: "Updates and Archive",
    summary: "Seasonal and archived TerraNova update notes.",
    status: "Needs Verification",
    sections: [
      {
        heading: "Initial Update Topics",
        body: ["Summer 2026, Glory and Glamour, Guilds Update, and Grinchmas 2025 are planned update cards."],
      },
    ],
  },
];
