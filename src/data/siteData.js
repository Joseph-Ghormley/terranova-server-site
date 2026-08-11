export const links = {
  serverIp: "sunnyhorizons.mc.gg",
  javaIp: "sunnyhorizons.mc.gg",
  bedrockIp: "sunnyhorizons.mc.gg",
  bedrockPort: "1475",
  version: "[Add Supported Version Here]",
  discord: "https://discord.gg/DJP5u28m9k",
  discordMembers: "Discord Community",
  store: "https://sunnyhorizonsmc-store.tebex.io",
  vote: "/vote",
  wiki: "/wiki",
  rules: "/rules",
  roadmap: "/events",
  join: "/how-to-join",
  features: "/wiki",
  support: "/how-to-join",
};

export const voteLinks = [
  {
    title: "Minecraft Servers",
    url: "https://minecraftservers.org/vote/666592",
    text: "Vote on MinecraftServers.org.",
  },
  {
    title: "Planet Minecraft",
    url: "https://planetminecraft.com/server/terra-nova-6414706/vote/",
    text: "Vote on Planet Minecraft.",
  },
  {
    title: "Minecraft MP",
    url: "https://minecraft-mp.com/server/336495/vote/",
    text: "Vote on Minecraft MP.",
  },
];

export const navItems = [
  { label: "Home", id: "home" },
  { label: "Join", id: "join" },
  { label: "Wiki", id: "wiki" },
  { label: "Features", id: "features" },
  { label: "Roadmap", id: "roadmap" },
  { label: "Rules", id: "rules" },
  { label: "Staff", id: "staff" },
  { label: "Support", id: "support" },
];

export const actionCards = [
  {
    title: "Join Server",
    text: "Get Java and Bedrock connection details.",
    href: links.join,
    cta: "How to Join",
  },
  {
    title: "Wiki",
    text: "Find player guides for commands and server systems.",
    href: links.wiki,
    cta: "Open Wiki",
  },
  {
    title: "Features",
    text: "Preview worlds, claims, economy, rewards, and custom content.",
    href: links.features,
    cta: "View Features",
  },
  {
    title: "Rules",
    text: "Review community standards before playing.",
    href: links.rules,
    cta: "View Rules",
  },
  {
    title: "Roadmap",
    text: "See planned and upcoming server work.",
    href: links.roadmap,
    cta: "See Roadmap",
  },
];

export const quickInfo = [
  { label: "Server Type", value: "Survival / Adventure / Community" },
  { label: "Server Software", value: "Paper" },
  { label: "Java", value: "sunnyhorizons.mc.gg" },
  { label: "Bedrock", value: "sunnyhorizons.mc.gg : 1475" },
  { label: "Wiki", value: "Guides Hub" },
  { label: "Discord", value: "Available" },
];

export const homeFeaturePreview = [
  {
    title: "World Travel",
    text: "Explore organized worlds and portals.",
    href: links.features,
  },
  {
    title: "Claims",
    text: "Protect your land and builds.",
    href: links.features,
  },
  {
    title: "Economy",
    text: "Trade, shop, vote, and earn rewards.",
    href: links.features,
  },
  {
    title: "Custom Content",
    text: "Discover custom items and future server additions.",
    href: links.features,
  },
];

export const roadmapPreview = [
  { title: "Wiki Guides", status: "In Progress" },
  { title: "Plugin Audit", status: "In Progress" },
  { title: "Woodcutter Plugin", status: "Planned" },
  { title: "Custom Blocks", status: "Planned Research" },
];

export const guides = [
  { title: "Getting Started", text: "First steps after joining, including spawn basics and where to ask for help." },
  { title: "Rules", text: "Community expectations, PvP boundaries, claims, chat, and staff decisions." },
  { title: "Commands", text: "Common player commands for homes, teleporting, mail, economy, and support." },
  { title: "Claims / Lands", text: "How to protect land, trust players, and avoid building conflicts." },
  { title: "Homes / Teleporting", text: "How to set homes, return to important locations, and use travel commands." },
  { title: "Portals / Worlds", text: "How world travel works and what to expect when moving between areas." },
  { title: "Economy / Shops", text: "How to trade, use shops, understand prices, and avoid scams." },
  { title: "Voting", text: "Where to vote and how voting rewards are claimed." },
  { title: "Crates", text: "How crate keys work and where rewards can be opened." },
  { title: "Custom Items", text: "How to identify, use, and report issues with custom items." },
  { title: "Fishing", text: "Fishing-specific rewards, catches, and related progression notes." },
  { title: "Mailbox", text: "How to send, receive, and manage player mail." },
  { title: "Sitting / Furniture", text: "How cosmetic sitting and furniture interactions work." },
  { title: "FAQ", text: "Fast answers for common new-player questions." },
];

export const featureGroups = [
  {
    title: "Worlds and Portals",
    text: "TerraNova uses world and portal systems to organize travel, dimensions, inventories, and future adventure areas.",
    systems: ["Multiverse", "Advanced-Portals", "Multiverse Inventories", "Multiverse Nether Portals", "Multiverse Portals"],
  },
  {
    title: "Claims and Protection",
    text: "Players can protect land while staff can investigate issues, manage protected regions, and keep communities stable.",
    systems: ["Lands", "WorldGuard", "WorldGuard ExtraFlags", "CoreProtect"],
  },
  {
    title: "Economy and Rewards",
    text: "Shops, rewards, crates, voting, and player progression help survival play feel active without replacing creativity.",
    systems: ["Vault", "Shopkeepers", "ExcellentCrates", "VotingPlugin", "LootChest", "PinataParty", "Tebex"],
  },
  {
    title: "Custom Items and Content",
    text: "Custom items and unique content are being reviewed and organized so future additions can be documented clearly.",
    systems: ["CustomItems", "JosephsCustomItems", "CustomUniverse", "ExcellentItems", "ItemEdit", "AdvancedItems"],
  },
  {
    title: "Presentation and NPCs",
    text: "NPCs, holograms, image frames, and display systems can make spawn, guides, and updates easier to understand.",
    systems: ["Citizens", "DecentHolograms", "ImageFrame", "TAB-Bridge"],
  },
  {
    title: "Compatibility",
    text: "Version and platform compatibility are under review so public instructions stay accurate before release.",
    systems: ["ViaVersion", "ViaBackwards", "Floodgate"],
  },
];

export const roadmap = [
  {
    phase: "Foundation",
    items: [
      ["Finish wiki", "In Progress"],
      ["Organize Notion/Trello task system", "Planned"],
      ["Complete plugin audit", "In Progress"],
    ],
  },
  {
    phase: "Server Improvements",
    items: [
      ["Improve player guides", "Planned"],
      ["Document portals and worlds", "Planned"],
      ["Document claims and economy", "Planned"],
      ["Improve spawn information", "Planned"],
    ],
  },
  {
    phase: "Custom Plugins",
    items: [
      ["Woodcutter Plugin", "Planned"],
      ["Hammock Plugin", "Planned"],
    ],
  },
  {
    phase: "Custom Content",
    items: [
      ["Custom blocks", "Planned Research"],
      ["Custom item expansion", "In Progress"],
      ["Blockbench custom mobs", "Under Review"],
      ["Possible MythicMobs review", "Under Review"],
    ],
  },
  {
    phase: "Testing and Release",
    items: [
      ["Playtesting", "Planned"],
      ["Bug tracking", "Planned"],
      ["Balance review", "Planned"],
      ["Player feedback", "Planned"],
      ["Version changelogs", "Planned"],
    ],
  },
];

export const rules = [
  {
    title: "Be Respectful",
    text: "No harassment, hate speech, bullying, or offensive language. Treat everyone with kindness.",
  },
  {
    title: "Be Ethical",
    text: "No scamming, overcharging, or taking advantage of others.",
  },
  {
    title: "Use Common Sense",
    text: "If it feels wrong, it probably is.",
  },
  {
    title: "No Hacking/Cheats",
    text: "No hacked clients, x-ray, or unfair mods. Optifine, minimaps, and cosmetics are allowed.",
  },
  {
    title: "No Spamming or Advertising",
    text: "Keep chat clear and free of spam. Do not advertise other servers.",
  },
  {
    title: "Keep Chat Clean",
    text: "No swearing, NSFW, or inappropriate content.",
  },
  {
    title: "No Griefing or Stealing",
    text: "Respect other players' builds, items, and work.",
  },
  {
    title: "Respect Claims and Boundaries",
    text: "Always ask before building near others.",
  },
  {
    title: "PvP Rules",
    text: "PvP only in designated zones or if both players agree.",
  },
  {
    title: "Spawn Slums",
    text: "This area is always PvP-enabled. Enter at your own risk!",
  },
  {
    title: "No Exploits or Glitches",
    text: "Do not abuse bugs, dupes, or unintended game mechanics.",
  },
  {
    title: "No Alt Abuse",
    text: "Do not use multiple accounts to gain unfair advantages.",
  },
  {
    title: "Respect Staff Decisions",
    text: "Do not argue with or impersonate staff. If you have concerns, open a ticket.",
  },
  {
    title: "Discord Rules Apply In-Game",
    text: "Keep the same level of respect and behavior across both platforms.",
  },
  {
    title: "Have Fun!",
    text: "This is a community. Let's keep it positive and enjoyable for everyone.",
  },
];

export const staff = [
  { name: "Name", role: "Owner", handle: "@discord-handle", responsibilities: "Vision, server direction, final decisions" },
  { name: "Name", role: "Admin", handle: "@discord-handle", responsibilities: "Operations, moderation, player support" },
  { name: "Name", role: "Developer", handle: "@discord-handle", responsibilities: "Plugin setup, custom systems, testing" },
  { name: "Name", role: "Builder", handle: "@discord-handle", responsibilities: "Spawn, portals, world presentation" },
  { name: "Name", role: "Moderator", handle: "@discord-handle", responsibilities: "Community safety, reports, chat support" },
  { name: "Name", role: "Wiki Editor", handle: "@discord-handle", responsibilities: "Guides, changelogs, documentation" },
  { name: "Name", role: "Tester", handle: "@discord-handle", responsibilities: "Playtesting, bug reports, feedback" },
];
