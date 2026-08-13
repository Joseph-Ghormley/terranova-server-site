const mainCityGateSections = [
  {
    heading: "Main City Gate Warps",
    type: "group",
    body: ["The Main City gates are the core travel routes out of TerraNova. Each gate leads toward a different type of adventure, from PvP arenas to frontier roads and wilderness settlement paths."],
  },
  {
    heading: "/warp NorthGate",
    commands: ["/warp NorthGate"],
    body: ["The North Gate is home to a dangerous PvP zone known as The Gauntlet. Enter at your own risk—if you fall in battle, your items may be dropped for others to claim. Survive the Gauntlet, and you’ll reach the North Highway, a long-traveled road leading toward numerous settlements and unexplored lands to the north."],
  },
  {
    heading: "/warp SouthGate",
    commands: ["/warp SouthGate"],
    body: ["The South Gate is home to the imposing South Gate Castle, a dark and mysterious fortress shrouded in secrets. Within its walls lies a PvP-enabled area where warriors can test their skills, hone their combat abilities, and settle rivalries—without the risk of losing their items."],
  },
  {
    heading: "/warp WestGate or /warp WestRoad",
    commands: ["/warp WestGate", "/warp WestRoad"],
    body: ["The West Gate, accessible via /warp WestGate or /warp WestRoad, marks the beginning of the West Road—a scenic route winding through vast farmlands, cozy homesteads, and the residences of the server’s staff. Follow the West Road beyond the settled lands to discover new horizons and claim a place of your own. Along the way, take in the breathtaking sights, including the mystical Giant Wishflowers and the many wonders that await beyond the road."],
  },
  {
    heading: "/warp EastGate",
    commands: ["/warp EastGate"],
    body: ["The East Gate serves as the gateway from the ancient Dwarven city within Mount Gündalar, leading travelers into the frozen wilderness beyond. The eastern plains are cold, harsh, and unforgiving, with endless stretches of snow and ice. Yet those willing to brave the frozen frontier will find that rich and fertile lands await beyond—perfect for those seeking a new home and a place to build their legacy."],
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
    body: ["The Auction House is one of the most important buildings in Spawn, serving as a bustling hub for trade and rare treasures. Inside, you’ll find merchants offering an ever-changing selection of custom armor, weapons, and tools for adventurers of all kinds. Venture to the top floor, where the Crates await—filled with valuable rewards, rare items, and treasures waiting to be won!"],
  },
  {
    heading: "/warp Bank",
    commands: ["/warp Bank"],
    body: ["The Bank is the heart of Spawn’s economy, where adventurers can exchange their hard-earned Embers and Star Fragments for valuable Dragon Eggs and Nether Stars. The Kingdom Records can also be found within the Bank, providing everything you need to know about claiming and managing your own lands throughout the kingdom. Head to the second floor to discover the Post Office, where you can claim your very own postal box and keep your correspondence in one convenient place."],
  },
  {
    heading: "/warp Blacksmith",
    commands: ["/warp Blacksmith"],
    body: ["Tucked away on the northern side of Spawn, is home to a quiet little forge where the skilled blacksmith Boros tends to his craft. For those who possess the kingdom’s most powerful treasures, Boros offers the Eternal Anvil—a rare and powerful anvil capable of repairing even your most prized God Items."],
  },
  {
    heading: "/warp Crates",
    commands: ["/warp Crates"],
    body: ["Use your Vote Keys, Wild Keys, Legendary Keys, and Epic Crate Keys to unlock powerful rewards, rare items, and valuable surprises. Whether you’re looking for fortune or simply feeling lucky, there’s always something waiting behind the next crate."],
  },
  {
    heading: "/warp ForgottenSouls",
    commands: ["/warp ForgottenSouls"],
    body: ["The Forgotten Souls await in a place long abandoned by the living. Venture here to battle these mysterious creatures for a chance to claim powerful prizes and the coveted Soul Key. The area is also home to the surface ruins of the Sunken City, where remnants of a forgotten civilization still linger beneath the waves. Nearby, you’ll find Jam’s Camp, a humble outpost where the mysterious Soul Crates can be found."],
  },
  {
    heading: "/warp GuildHall",
    commands: ["/warp GuildHall"],
    body: ["The Guild Hall is the gathering place for adventurers seeking fellowship, fortune, and a place among others. Here, you can learn everything you need to know about creating your own guild or joining an existing one. The Guild Hall is also home to the realm’s many Guild Couriers, who travel far and wide carrying messages, goods, and important correspondence between guilds and settlements. Whether you’re looking to lead a mighty order, join a fellowship, or send word across the realm, the Guild Hall is the perfect place to begin."],
  },
  {
    heading: "/warp Harbor",
    commands: ["/warp Harbor"],
    body: ["The Harbor is the bustling shipyard of TerraNova, where sailors, merchants, and adventurers gather before setting out across the realm. Among the vessels in port, keep an eye out for the Wandering Trader’s Ship, captained by none other than Captain Red. His ship is always worth seeking out"],
  },
  {
    heading: "/warp HuntedsInn",
    commands: ["/warp HuntedsInn"],
    body: ["The Hunted’s Inn sits quietly on the northern edge of the city, an old and welcoming establishment where weary travelers can find a moment of rest. Within the inn, you’ll find Hunted’s loyal hound, a faithful companion who has made the inn his home. He may not have much to say,but he is always on the lookout for a tasty treat.."],
  },
  {
    heading: "/warp Inn",
    commands: ["/warp Inn"],
    body: ["The TerraNova Inn is the city’s main gathering place for travelers seeking a warm bed, a quiet rest, or perhaps a little bit of luck. Take a moment to rest your feet and explore the Aura Crate, where you can try your luck at winning unique cosmetic auras to make your adventurer stand out from the crowd. The inn is also home to a mysterious Traveling Magician, who has brought with him a collection of Invisible Item Frames—perfect for displaying your prized possessions without distracting from your builds."],
  },
  {
    heading: "/warp MountGundalar",
    commands: ["/warp MountGundalar"],
    body: ["The Mount Gündelar is home to an ancient Dwarven mining civilization whose tunnels and halls were carved deep into the mountain long before the Kingdom of TerraNova ever existed. The forgotten mines run deep beneath the mountain, filled with remnants of a lost age, hidden treasures, and secrets waiting to be uncovered. It is a perfect destination for those seeking adventure, valuable loot, and the thrill of exploring the unknown."],
  },
  {
    heading: "/warp PetShop",
    commands: ["/warp PetShop"],
    body: ["The Pet Shop is the perfect place to find a new companion for your adventures across TerraNova. Step inside to browse a selection of spawn eggs and choose a creature to call your own. Whether you’re looking for a loyal companion or simply want to add a little more life to your home, there’s always a new friend waiting to be found."],
  },
  {
    heading: "/warp PotionShop",
    commands: ["/warp PotionShop"],
    body: ["The Potion Shop, hidden within the depths of the Dark Forest, is the perfect stop for aspiring alchemists and adventurers. Here, you can find the essential ingredients and supplies needed to begin brewing early-game potions, along with powerful Wild Repair and E-Table Elixirs to aid you on your journey."],
  },
  {
    heading: "/warp Shops",
    commands: ["/warp Shops"],
    body: ["The Shops District is where merchants and entrepreneurs come together to grow their businesses across TerraNova. Here, you’ll find Public Notice Boards where you can advertise your player shop and share its teleport location with other adventurers. Looking to open a shop of your own? Visit the local Master Shopkeeper to purchase your very own Player Shop Egg and begin building your merchant empire."],
  },
  {
    heading: "/warp Slums",
    commands: ["/warp Slums"],
    body: ["The Slums are the rougher side of Spawn, where forgotten corners hide valuable loot, hidden treasures, and some of the best shops in the city. The district is also home to the Wuschels, a unique group that has made the Slums their own. But tread carefully—PvP is enabled throughout the district, and death comes at a cost. If you fall, your items may be left behind for others to claim. The Slums can be dangerous, but for those willing to take the risk, great rewards await."],
  },
  {
    heading: "/SupplyYard",
    commands: ["/SupplyYard"],
    body: ["The Supply Yard is the perfect destination for builders looking to stock up on materials.Here, you’ll find a selection of traders offering building supplies in bulk, making it easy to gather the resources you need for your next great project without the hassle of collecting them all yourself."],
  },
  {
    heading: "/warp TownSquare",
    commands: ["/warp TownSquare"],
    body: ["The Town Square brings you right to the heart of TerraNova, where the city’s many happenings come together. This lively gathering place is where adventurers meet, celebrations unfold, and the community comes together—especially during seasonal events, when the square transforms into the center of the festivities."],
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
    title: "Bedrock Edition Players",
    slug: "bedrock-edition-players",
    category: "Getting Started",
    summary: "Geyser support, known Bedrock limitations, and general compatibility notes.",
    status: "Active",
    sections: [
      {
        heading: "Bedrock Edition Players (Geyser Support)",
        body: [
          "Sunny Horizons Network primarily runs on Minecraft Java Edition, but Bedrock Edition players can join using Geyser.",
          "Most features work normally, but because the server is designed for Java Edition, Bedrock players may encounter some limitations depending on their device or platform.",
        ],
      },
      {
        heading: "Known Bedrock Limitations",
        body: [],
      },
      {
        heading: "Nether Roof Access",
        body: [
          "Bedrock Edition does not officially support gameplay above the Nether ceiling.",
          "Because of this, Bedrock players may experience issues interacting with areas built on the Nether roof.",
        ],
      },
      {
        heading: "Large World Distance Limitations",
        body: [
          "Due to technical limitations within the Bedrock client:",
          "● Movement may become jittery past ±131,072 blocks from world center.",
          "● Beyond ±2,097,152 blocks, movement may become impossible.",
          "This is caused by rounding errors in the Bedrock client and currently cannot be fixed server-side.",
        ],
      },
      {
        heading: "Guild Storage Warning",
        body: [
          "There is a known compatibility issue with Guild Storage when used by Bedrock players.",
          "In some cases, items placed into guild storage from a Bedrock client may disappear or be deleted.",
          "Until this issue is resolved, Bedrock players should avoid storing valuable items in Guild Storage.",
        ],
      },
      {
        heading: "General Compatibility",
        body: [
          "Because Sunny Horizons is built for Java Edition, some mechanics or interfaces may behave slightly differently for Bedrock players depending on:",
          "● Console vs mobile vs PC",
          "● Bedrock client version",
          "● Geyser compatibility",
          "Most gameplay features still work normally, and Bedrock players are welcome to enjoy the server.",
        ],
      },
    ],
  },
  {
    title: "Sunny Horizons Network Guide",
    slug: "sunny-horizons-network-guide",
    category: "Getting Started",
    summary: "From the Heart of TerraNova to the Heights of GreenCliff | One Network – Endless Horizons",
    status: "Active",
    hideInCategoryList: true,
    sections: [
      {
        heading: "Welcome to Sunny Horizons Network!",
        body: ["This guide will help you understand the basics of the server so you can begin your adventure quickly and confidently."],
      },
      {
        heading: "Starting Out in TerraNova",
        body: [
          "When you first join the server, you will spawn in TerraNova City, the central hub of the network.",
          "TerraNova is the heart of the community and the main gathering place where:",
          "● Community events take place",
          "● Players meet and trade",
          "● Shops and services are located",
          "● Hidden loot can be discovered throughout the city",
        ],
      },
      {
        heading: "Loot Around the City",
        body: [
          "As a new player, exploring TerraNova can be very rewarding. Many containers around the city regenerate loot, which can provide useful starter items early in your journey.",
          "Take some time to explore — you may find helpful gear or server currency to get started.",
        ],
      },
      {
        heading: "Server Currency",
        body: [
          "Sunny Horizons uses a custom item based currency system that players can earn entirely in game.",
          "Most shops in TerraNova use two types of currency:",
        ],
      },
      {
        heading: "Dragon Egg (Degg)",
        commands: ["/warp bank"],
        body: [
          "The primary currency used across the server.",
          "● Crafted from 4 Embers",
          "● Can also be broken down into 4 Embers",
          "● /warp bank to exchange currency",
          "Dragon Eggs are commonly used to purchase items from shops or trade with other players.",
        ],
      },
      {
        heading: "Nether Star (Star)",
        body: [
          "The tax currency used in certain server systems.",
          "● Crafted from 4 Star Fragments",
          "● Used in special shops and server mechanics",
        ],
      },
      {
        heading: "Free to Play Economy",
        body: [
          "TerraNova is completely free to play.",
          "All currency and items can be earned through gameplay without spending real money. However, players can choose to support server development through the website store.",
        ],
      },
      {
        heading: "Earning Currency",
        body: [
          "Players can earn Dragon Eggs, Embers, Star Fragments, and Nether Stars in several ways:",
          "● Voting for the server daily",
          "● Participating in Pinata Party",
          "● Finding loot in the wild",
          "● Exploring TerraNova",
          "● Participating in server events",
          "● Trading with other players",
          "● Using player shops",
        ],
      },
      {
        heading: "Daily Rewards",
        commands: ["/daily"],
        body: [
          "If you have earned a rank through voting or donating, you can use:",
          "This command gives server currency based on your rank tier.",
        ],
      },
      {
        heading: "Seasonal Event Rewards",
        body: ["Seasonal events sometimes reward Elixirs. When an elixir is consumed, it will increase the amount of currency you receive from the /daily command."],
      },
      {
        heading: "Getting Started Commands",
        body: ["Here are some helpful commands every new player should know."],
      },
      {
        heading: "Starting Your Survival Journey",
        commands: ["/wild", "/rtp"],
        body: ["/wild or /rtp Teleports you to a random location where you can begin building your base."],
      },
      {
        heading: "Home Commands",
        commands: ["/sethome (name)", "/home (name)", "/edithome", "/phome", "/delhome"],
        body: [
          "/sethome (name) Save your current location as a home.",
          "/home (name) Teleport to one of your saved homes.",
          "/edithome Edit, delete, or make one of your homes public.",
          "/phome Teleport to other players’ public homes.",
          "/delhome Delete a home you no longer want.",
        ],
      },
      {
        heading: "Teleporting With Friends",
        commands: ["/tpa (player)", "/tpahere (player)"],
        body: [
          "/tpa (player) Request to teleport to another player.",
          "/tpahere (player) Ask another player to teleport to your location.",
        ],
      },
      {
        heading: "Returning to Spawn",
        commands: ["/spawn"],
        body: ["/spawn Teleport back to TerraNova City at any time."],
      },
      {
        heading: "GreenCliff",
        commands: ["/warp GreenCliff", "/home"],
        body: [
          "Players with the Cliff Dweller rank or a Summer subscription can access the GreenCliff server.",
          "To travel to GreenCliff:",
          "If you already have a home set there, you can also use:",
        ],
      },
      {
        heading: "Chat System",
        commands: ["/chat greencliff"],
        body: [
          "When you join the server you are automatically placed in Global Chat, which includes players from both TerraNova and GreenCliff.",
          "If you are playing on GreenCliff and would prefer to only see that server’s chat, you can switch channels:",
        ],
      },
      {
        heading: "Warps",
        commands: ["/warp (warpname)"],
        body: [
          "You can teleport to important locations around the server using the warp system.",
          "Command:",
          "Warps exist across TerraNova and GreenCliff for important locations, shops, and features.",
          "(A full list of warps will be provided in the table below.)",
        ],
      },
      {
        heading: "Server Rules",
        commands: ["/rules"],
        body: [
          "To view the current server rules in game:",
          "Please make sure you read and follow the rules to help keep the community welcoming and fun for everyone.",
        ],
      },
      {
        heading: "Private Messaging",
        commands: ["/msg (player)", "/r"],
        body: [
          "/msg (player) – send a private message",
          "/r – reply to the most recent private message",
        ],
      },
      {
        heading: "Land Claiming",
        body: [
          "Sunny Horizons uses the Lands plugin for land protection.",
          "Players can claim land to protect their builds and control who can interact with their property.",
          "For detailed instructions on claiming land and managing permissions, please see the Land Claiming Guide page.",
        ],
      },
      {
        heading: "End of Getting Started Guide",
        body: ["✅ End of Getting Started Guide"],
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
    summary: "A quick guide to Sunny Horizons' worlds, dimensions, and unique destinations.",
    status: "Active",
    sections: [
      {
        heading: "Worlds & Dimensions",
        body: ["A quick guide to Sunny Horizons' worlds, dimensions, and unique destinations. Whether you're looking to explore the main world, visit a community-built realm, or take part in seasonal events, there's always somewhere new to discover."],
      },
      {
        heading: "Main Worlds",
        type: "group",
        body: [],
      },
      {
        heading: "TerraNova",
        body: [
          "TerraNova is the main world of Sunny Horizons and the home of Spawn City, serving as the central hub of the server.",
          "This is where you'll find the heart of the server, including shops, public areas, player activity, and the roads leading out into the wider world.",
          "TerraNova has its own Nether and End dimensions, allowing players to travel between all three dimensions as part of the main world.",
          "Dimensions:",
          "● Overworld — TerraNova",
          "● Nether — TerraNova Nether",
          "● End — TerraNova End",
        ],
      },
      {
        heading: "GreenCliff",
        commands: ["/warp Greencliff"],
        body: [
          "GreenCliff is a special world created by streamer Sun_Sun_Sunny and her community.",
          "Players with a Tier 1 subscription have access to GreenCliff, giving them a place to hang out, explore, and build alongside Summer and the community.",
          "GreenCliff has its own Nether realm, but does not have its own End dimension.",
          "How to get there: /warp Greencliff",
          "Dimensions:",
          "● Overworld — GreenCliff",
          "● Nether — GreenCliff Nether",
          "● End — Not available",
        ],
      },
      {
        heading: "Winter Wonderland",
        commands: ["/warp WinterWonderland"],
        body: [
          "Winter Wonderland is the home of Sunny Horizons' Christmas and holiday festivities.",
          "During the holiday season, this world comes alive with seasonal events, activities, decorations, and plenty of holiday-themed shops to explore.",
          "It's the perfect place to get into the holiday spirit and take part in the server's Christmas celebrations.",
          "How to get there: /warp WinterWonderland",
          "Dimensions:",
          "● Overworld — Winter Wonderland",
          "● Nether — Not available",
          "● End — Not available",
        ],
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
        heading: "Shops Overview",
        body: [
          "A guide to TerraNova shops, public boards, crates, and service locations.",
          "TerraNova is home to a variety of shops and services, from player-owned businesses to server-operated shops found throughout Spawn and beyond.",
          "Whether you're looking to sell your own goods, stock up on building supplies, or find something rare, there are plenty of places to explore.",
        ],
      },
      {
        heading: "Player Shops",
        commands: ["/warp Shops"],
        body: [
          "Players can create and operate their own shops anywhere in the world. Build your own storefront, set up your shopkeeper, choose your trades, and invite other players to come visit your business.",
          "The /warp Shops location is your starting point for setting up a player shop. Here you can purchase a Shopkeeper Spawn Egg for your own shopkeeper, as well as find information on how other players can visit your shop.",
        ],
      },
      {
        heading: "Making Your Shop Public",
        commands: ["/sethome <name>", "/edithome <name>", "/phome <name>"],
        body: [
          "One of the easiest ways to let other players find your shop is by making a home at your shop location public.",
          "1. Stand inside your shop and use /sethome <name> to create a home.",
          "2. Use /edithome <name> to edit that home.",
          "3. Change the home's Privacy setting to Public.",
          "4. Other players can then use /phome <name> to teleport directly to your shop.",
          "This allows players to discover and visit your shop without needing a warp or having to manually give them coordinates.",
        ],
      },
      {
        heading: "Player Shop Tutorial",
        body: [
          "Need help setting up your first shop? Check out our full video tutorial:",
          "How to Set Up a Player Shop",
        ],
      },
      {
        heading: "Server Shops",
        body: [
          "Server Shops are operated by the server and can be found throughout TerraNova Spawn and other worlds.",
          "These shopkeepers offer a variety of useful items, supplies, and services with set server trades.",
          "Unlike player shops, Server Shops are not owned or operated by individual players and are available as permanent locations for players to purchase the items they need.",
          "Below you'll find the different Server Shopkeeper categories, along with information about their locations and available trades.",
        ],
      },
      {
        heading: "Server Shop Categories",
        body: ["More shop categories and trade information will be added below."],
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
    summary: "Guild commands, Guild Storage, Guild Events, Guild Glory, and Guild Couriers.",
    status: "Active",
    sections: [
      {
        heading: "Guilds",
        body: [
          "Guilds are a way for players to unite under shared interests, common goals, and a little friendly competition.",
          "Whether you want to team up for PvP, share resources, build together, compete in Guild Events, or simply have a group to call home, there is a place for everyone in the Guild system.",
        ],
      },
      {
        heading: "Creating & Managing a Guild",
        commands: ["/guild", "/guild help"],
        body: [
          "Guilds are created and managed using the /guild command.",
          "Use /guild help in-game to view a list of available Guild commands.",
        ],
      },
      {
        heading: "Guild Commands",
        commands: [
          "/guild create <Name> <TAG>",
          "/guild tag <NewTAG>",
          "/guild upgrade",
          "/guild storage",
          "/guild chat",
          "/guild chat <message>",
          "/guild invite <player>",
          "/guild ally <TAG>",
          "/guild sever <TAG>",
          "/guild sethome",
          "/guild delhome",
          "/guild transfer <player>",
          "/guild promote <player>",
          "/guild demote <player>",
          "/guild kick <player>",
          "/guild disband",
          "/guild courier",
          "/guild courier delete",
          "/guild info <TAG>",
          "/guild accept",
          "/guild decline",
          "/guild ignore",
          "/guild leave",
        ],
        body: [
          "Command Description Permission / Cost",
          "/guild create <Name> <TAG> Creates a new Guild and Guild Tag. Tags can be up to 4 characters and appear as a prefix next to your name. 5 Dragon Eggs",
          "/guild tag <NewTAG> Changes your Guild Tag. Guild Master — 10 Dragon Eggs",
          "/guild upgrade Upgrades your Guild, increasing member capacity, alliance capacity, Guild Storage, and other Guild features. Elder+ — 64 Dragon Eggs",
          "/guild storage Opens the Guild's paged storage. Guild Members",
          "/guild chat Toggles Guild-only chat mode. Guild Members",
          "/guild chat <message> Sends a message to Guild members and allies. Guild Members",
          "/guild invite <player> Invites a player to join your Guild. Elder+",
          "/guild ally <TAG> Sends an alliance request to another Guild. Requests expire after 30 seconds. Elder+",
          "/guild sever <TAG> Ends an existing alliance with another Guild. Elder+",
          "/guild sethome Sets the Guild Home to your current location. Elder+",
          "/guild delhome Deletes the Guild Home. Elder+",
          "/guild transfer <player> Transfers Guild Master to another Guild member. Guild Master",
          "/guild promote <player> Promotes a Member to Elder. Guild Master",
          "/guild demote <player> Demotes an Elder to Member. Guild Master",
          "/guild kick <player> Removes a player from the Guild. Elder+",
          "/guild disband Permanently disbands the Guild. Guild Master",
          "/guild courier Spawns a Guild Courier. See Guild Glory",
          "/guild courier delete Removes your active Guild Courier. Guild Members",
          "/guild info <TAG> Displays information about a Guild. Everyone",
          "/guild accept Accepts your latest pending Guild invitation or alliance request. Everyone",
          "/guild decline Declines your latest pending Guild invitation or alliance request. Everyone",
          "/guild ignore Toggles automatic rejection of Guild invitations. Everyone",
          "/guild leave Leaves your current Guild. Guild Members",
        ],
      },
      {
        heading: "Guild Storage",
        commands: ["/guild storage"],
        body: [
          "Guild Storage provides shared storage for Guild members.",
          "Bedrock Warning: There have been known issues where Guild Masters using Bedrock Edition may experience Guild Storage deleting itself. Until this issue is resolved, Bedrock players are strongly advised not to use Guild Storage.",
        ],
      },
      {
        heading: "Guild Events",
        body: [
          "Guilds can compete in special events throughout TerraNova. These events put Guilds against one another for rewards, recognition, and Guild Glory.",
          "Currently, there are two Guild Events, with more planned for the future.",
          "Plunder and Prowl alternate between each other and take place at 7:00 PM PST.",
        ],
      },
      {
        heading: "Plunder",
        body: [
          "“The waters of TerraNova give freely to those willing to cast their nets. But what is caught belongs only to those strong enough to keep it.” — Book of Forgotten Memories",
          "Plunder is a Guild fishing competition where Guilds compete to catch the most fish while defending their haul from rival Guilds.",
        ],
      },
      {
        heading: "Plunder: How It Works",
        body: [
          "● Guilds compete by fishing anywhere in the waters of Spawn.",
          "● Players can attack members of opposing Guilds.",
          "● Killing an opposing player allows you to steal their fish.",
          "● The Guild with the most fish at the end of the event wins.",
          "● Rewards are given to the Guild Master, who may distribute them among Guild members.",
          "● Players who are not in a Guild can participate as Mercenaries, allowing them to fish and steal Plunder for themselves.",
        ],
      },
      {
        heading: "Rod Rules",
        body: [
          "● Willy's Rod is allowed.",
          "● All vanilla fishing rods are allowed.",
          "● Goo Lagoon Rods are no longer valid for Plunder.",
          "● Goo Lagoon Rods are reserved for the Largest Fish (Goo Lagoon) event.",
        ],
      },
      {
        heading: "Prowl",
        body: [
          "“Through his sacrifice, though unwilling, will grow a new world free of the old gods’ influence… But what this means, I’ll leave it up to you, Kintu.” — Book of Forgotten Memories",
          "Prowl is a Guild hunting competition where Guilds roam Spawn in search of animals to earn points for their Guild.",
        ],
      },
      {
        heading: "Prowl: How It Works",
        body: [
          "● Spawn remains a neutral area during the event.",
          "● Hunt animals throughout Spawn to increase your Guild's score.",
          "● Killing players does not affect your score.",
          "● The Guild with the most points at the end of the event wins.",
          "● Compete with your Guild, hunt for glory, and watch your surroundings.",
          "● And... who let the horse in here?",
        ],
      },
      {
        heading: "Rewards",
        body: [
          "1st Place",
          "● 1× Soul Key",
          "● 1× Legendary Key",
          "● 3× Epic Keys",
          "● 10× Dragon Eggs",
          "2nd Place",
          "● 2× Legendary Components",
          "● 3× Epic Keys",
          "● 8× Dragon Eggs",
          "3rd Place",
          "● 2× Epic Keys",
          "● 5× Dragon Eggs",
          "● 4× Nether Stars",
          "Participation",
          "● 3× Dragon Eggs",
        ],
      },
      {
        heading: "Guild Glory",
        body: [
          "Your Guild's renown carries whispers on the wind.",
          "As your Guild consistently competes and places among the best, its reputation grows. Guild Glory rewards Guilds that remain active and successful in Guild Events.",
          "Guilds earn Glory by placing in the Top 3 in Guild Events, including Plunder and Prowl.",
        ],
      },
      {
        heading: "Earning Glory",
        body: [
          "● Placing Top 3 in a Guild Event awards 1 Glory.",
          "● At 3 Glory, Guild Masters and Elders unlock access to Guild Couriers.",
          "● Failing to participate in 3 consecutive Guild Events causes Glory to begin decaying.",
          "● Glory decays at a rate of 1 Glory per day once decay begins.",
        ],
      },
      {
        heading: "Guild Couriers",
        commands: ["/guild courier", "/guild courier delete"],
        body: [
          "Guild Couriers are special Guild NPCs that offer unique trades and rewards.",
          "As your Guild's Glory increases, your Courier gains access to more coveted trades.",
          "Using a Guild Courier",
          "Use:",
          "/guild courier",
          "to spawn your Guild Courier.",
          "The default Guild Courier limit is 1, but this can be increased to a maximum of 3 through Guild progression.",
          "To remove an active Courier, use:",
          "/guild courier delete",
          "Build your Guild's Glory, unlock better trades, and keep your Guild active to maintain access to its Courier.",
        ],
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
