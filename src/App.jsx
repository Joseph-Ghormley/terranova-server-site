import { useState } from "react";
import { Link, Navigate, Route, Routes, useParams, useSearchParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StatusBadge from "./components/StatusBadge";
import { Card } from "./components/Card";
import CopyButton from "./components/CopyButton";
import { NotFoundPage, PageShell } from "./components/PageShell";
import { ItemPage, ItemSetPage, ItemsIndexPage } from "./pages/ItemPages";
import { RulesPage, StaffPage } from "./pages/InfoPages";
import { fullName, links, networkName, serverName } from "./data/siteData";
import { homeNavigationCards } from "./data/homeContent";
import { updates } from "./data/updates";
import { wikiCategories } from "./data/wikiCategories";
import { wikiArticles } from "./data/wikiArticles";
import { commands } from "./data/commands";
import { videoGuides } from "./data/videoGuides";

function PortalIcon({ name }) {
  const paths = {
    discord: (
      <>
        <path d="M8 12h.01" />
        <path d="M16 12h.01" />
        <path d="M7.5 7.2c2.9-1.1 6.1-1.1 9 0" />
        <path d="M7 17c3.2 1.3 6.8 1.3 10 0" />
        <path d="M5.4 8.2C4.5 10 4 11.9 4 14c1.9 1.4 3.7 2.2 5.5 2.6l.8-1.5" />
        <path d="M18.6 8.2C19.5 10 20 11.9 20 14c-1.9 1.4-3.7 2.2-5.5 2.6l-.8-1.5" />
      </>
    ),
    store: (
      <>
        <path d="m2 7 1.5-4h17L22 7" />
        <path d="M4 7v13h16V7" />
        <path d="M9 20v-6h6v6" />
        <path d="M2 7h20" />
      </>
    ),
    vote: (
      <>
        <path d="m9 12 2 2 4-4" />
        <path d="M5 7h14" />
        <path d="M6 21h12" />
        <path d="M7 7V3h10v4" />
        <path d="M7 7l-2 8h14l-2-8" />
      </>
    ),
    wiki: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z" />
        <path d="M8 7h8" />
        <path d="M8 11h6" />
      </>
    ),
  };

  return (
    <svg className="portal-icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function SmartLink({ href, className, children, style }) {
  const isExternal = href.startsWith("https://");

  if (isExternal) {
    return (
      <a className={className} href={href} style={style} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={className} style={style} to={href}>
      {children}
    </Link>
  );
}

function HomePage() {
  const portalCards = [
    {
      id: "discord",
      label: "Discord",
      text: "Join the community, ask for help, and follow server updates.",
      href: links.discord,
      accent: "#9b8cff",
    },
    {
      id: "store",
      label: "Store",
      text: "Support the server and browse available perks.",
      href: links.store,
      accent: "#d7ad4b",
    },
    {
      id: "vote",
      label: "Vote",
      text: `Vote for ${networkName} and claim player rewards.`,
      href: "/vote",
      accent: "#75c987",
    },
    {
      id: "wiki",
      label: "Wiki",
      text: "Read beginner guides, commands, claims, warps, and systems.",
      href: "/wiki",
      accent: "#63b3d8",
    },
  ];

  return (
    <main className="home-portal expanded-home">
      <section className="portal-hero" aria-labelledby="portal-title">
        <p className="eyebrow">{networkName} Network</p>
        <h1 id="portal-title">{serverName}</h1>
        <p className="portal-tagline">
          Stake your claim beneath a brighter sky, build your story, and find your way through {networkName}.
        </p>
        <div className="portal-card-grid">
          {portalCards.map((card) => (
            <SmartLink
              className="portal-card"
              href={card.href}
              key={card.id}
              style={{ "--card-accent": card.accent }}
            >
              <PortalIcon name={card.id} />
              <strong>{card.label}</strong>
              <span>{card.text}</span>
            </SmartLink>
          ))}
        </div>
      </section>

      <section className="home-section compact-explore" aria-labelledby="explore-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Explore {serverName}</p>
            <h2 id="explore-title">Where Do You Want to Go?</h2>
          </div>
        </div>
        <div className="home-nav-card-grid">
          {homeNavigationCards.map((card) => (
            <Link className="home-nav-card" to={card.route} key={card.title}>
              <strong>{card.title}</strong>
              <span>{card.description}</span>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}

function VotePage() {
  const voteLinks = [
    ["Minecraft Servers", "https://minecraftservers.org/vote/666592"],
    ["Planet Minecraft", "https://planetminecraft.com/server/terra-nova-6414706/vote/"],
    ["Minecraft MP", "https://minecraft-mp.com/server/336495/vote/"],
  ];

  return (
    <PageShell
      eyebrow="Daily Rewards"
      title={`Vote for ${networkName}`}
      intro="Support the server on voting sites, then return in-game to claim the rewards tied to voting and Vote crates."
    >
      <div className="vote-page-grid">
        {voteLinks.map(([title, url]) => (
          <SmartLink className="vote-link-card" href={url} key={url}>
            <span>Vote Site</span>
            <strong>{title}</strong>
            <p>Vote for {fullName}.</p>
            <small>{url.replace("https://", "")}</small>
          </SmartLink>
        ))}
      </div>
    </PageShell>
  );
}

function HowToJoinPage() {
  const platformCards = videoGuides.map((guide) => (
    <Card className="video-guide-card" key={guide.slug}>
      <div className="card-topline">
        <span>{guide.platform}</span>
        <StatusBadge status={guide.status} />
      </div>
      <h3>{guide.title}</h3>
      <p>{guide.description}</p>
      <div className="video-placeholder">Video coming soon</div>
      <Link className="learn-more" to={`/how-to-join?platform=${guide.platform.toLowerCase()}`}>Read guide</Link>
    </Card>
  ));

  return (
    <PageShell
      eyebrow="Connection Guide"
      title={`How to Join ${serverName}`}
      intro={`Start your ${serverName} adventure on Java or Bedrock Edition. Copy the details for your platform, then use the beginner commands once you arrive.`}
    >
      <div className="join-grid">
        <Card title="Java Edition" className="join-card">
          <span className="small-label">Minecraft Version</span>
          <p className="join-version">{links.javaVersion}</p>
          <span className="small-label">Server Address</span>
          <div className="copy-value-row">
            <code>{links.javaIp}</code>
            <CopyButton value={links.javaIp} label="Copy Address" />
          </div>
        </Card>
        <Card title="Bedrock Edition" className="join-card">
          <span className="small-label">Minecraft Version</span>
          <p className="join-version">{links.bedrockVersion}</p>
          <span className="small-label">Server Address</span>
          <div className="copy-value-row">
            <code>{links.bedrockIp}</code>
            <CopyButton value={links.bedrockIp} label="Copy Address" />
          </div>
          <span className="small-label">Port</span>
          <div className="copy-value-row">
            <code>{links.bedrockPort}</code>
            <CopyButton value={links.bedrockPort} label="Copy Port" />
          </div>
        </Card>
      </div>

      <section className="page-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Console Guides</p>
            <h2>Choose Your Platform</h2>
          </div>
          <p>Videos are intentionally left blank until the final console walkthroughs are recorded.</p>
        </div>
        <div className="video-guide-grid">{platformCards}</div>
      </section>

      <section className="page-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">First Steps</p>
            <h2>Beginner Commands</h2>
          </div>
          <p>Use these after you have already joined the server.</p>
        </div>
        <CommandList commands={commands.filter((command) => command.group === "beginner")} />
      </section>

      <section className="page-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Connection Help</p>
            <h2>Troubleshooting</h2>
          </div>
        </div>
        <div className="troubleshooting-list">
          {[
            ["Server does not appear", "Check that the server address is typed exactly as sunnyhorizons.mc.gg."],
            ["Connection timed out", "Retry after a moment and check whether your network connection is stable."],
            ["Unable to connect", "Confirm you are using the correct platform details for Java or Bedrock."],
            ["Outdated Minecraft version", `Update Minecraft. Supported versions: Java ${links.javaVersion}, Bedrock ${links.bedrockVersion.toLowerCase()}.`],
            ["Microsoft account issues", "Sign out and back into your Microsoft account, then try again."],
            ["Incorrect DNS settings", "Console connection workarounds can depend on DNS settings. Use a confirmed guide before changing them."],
            ["Strict NAT", "A strict NAT can block multiplayer connections. Check your console network status."],
            ["Server temporarily offline", `If the server is offline, wait for an update from the ${serverName} community.`],
          ].map(([title, text]) => (
            <details className="wiki-accordion nested" key={title}>
              <summary>{title}</summary>
              <p className="wiki-summary">{text}</p>
            </details>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function CommandList({ commands }) {
  return (
    <div className="command-list">
      {commands.map((command) => (
        <div className="command-row" key={command.command}>
          <code>{command.command}</code>
          <span>{command.description}</span>
          <CopyButton value={command.command} label="Copy" compact />
          {command.warning && <p className="wiki-warning command-warning">{command.warning}</p>}
        </div>
      ))}
    </div>
  );
}

function WikiPage() {
  const categories = wikiCategories;
  // The open category and guide come from the page address (?category=...&article=...).
  // So the menu's Wiki link (/wiki) always opens the first category, the Warps link
  // always opens Warps, and Back and shared links open the same guide.
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory =
    categories.find((category) => category.slug === searchParams.get("category")) || categories[0];
  const selectedArticleSlug = searchParams.get("article") || selectedCategory.featuredSlug;
  const selectedCategoryArticles = wikiArticles.filter((article) => article.category === selectedCategory.title);
  const visibleCategoryArticles = selectedCategoryArticles.filter((article) => !article.hideInCategoryList);
  const selectedArticle =
    selectedCategoryArticles.find((article) => article.slug === selectedArticleSlug) ||
    selectedCategoryArticles[0] ||
    wikiArticles[0];
  const [query, setQuery] = useState("");
  const searchResults = searchWiki(query);

  function openArticle(category, articleSlug) {
    setSearchParams(articleSlug ? { category: category.slug, article: articleSlug } : { category: category.slug });
  }

  function openSearchResult(article) {
    const category = categories.find((entry) => entry.title === article.category) || selectedCategory;
    openArticle(category, article.slug);
    setQuery("");
  }

  function selectCategory(category) {
    openArticle(category);
  }

  return (
    <PageShell
      eyebrow="Knowledge Base"
      title={`${serverName} Wiki`}
      intro={`Official player guides for ${networkName}. Pick a category from the left, then open the focused article you need.`}
    >
      <div className="wiki-layout">
        <aside className="wiki-sidebar">
          <label className="wiki-search">
            <span>Search Wiki</span>
            <input
              type="search"
              placeholder="Search join, warp, soul..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          {query.trim() && (
            <div className="wiki-search-results" aria-live="polite">
              <div className="wiki-sidebar-heading">
                <strong>Search Results</strong>
                <small>{searchResults.length} found</small>
              </div>
              {searchResults.length === 0 && <p className="wiki-search-empty">No guides match that search.</p>}
              <nav aria-label="Wiki search results" className="wiki-category-list">
                {searchResults.map((article) => (
                  <button type="button" key={article.slug} onClick={() => openSearchResult(article)}>
                    <span>{article.title}</span>
                    <small>{article.category}</small>
                  </button>
                ))}
              </nav>
            </div>
          )}
          <div className="wiki-sidebar-heading">
            <strong>Guide Categories</strong>
            <small>{categories.length} shown</small>
          </div>
          <nav aria-label="Wiki categories" className="wiki-category-list">
            {categories.map((category) => (
              <button
                className={selectedCategory.slug === category.slug ? "active" : ""}
                type="button"
                key={category.slug}
                onClick={() => selectCategory(category)}
              >
                <span>{category.title}</span>
                <small>{category.description}</small>
              </button>
            ))}
          </nav>
        </aside>

        <section className="wiki-content">
          <div className="wiki-selected-guide">
            <div className="wiki-guide-header">
              <div>
                <p className="eyebrow">{selectedCategory.title}</p>
                <h2>{selectedArticle.title}</h2>
                <p>{selectedArticle.summary}</p>
              </div>
              <StatusBadge status={selectedArticle.status} />
            </div>
            <div className="wiki-section-body">
              <div className="article-card-list">
                {visibleCategoryArticles.map((article) => (
                  <button
                    className={selectedArticle.slug === article.slug ? "wiki-article-card active" : "wiki-article-card"}
                    type="button"
                    key={article.slug}
                    onClick={() => openArticle(selectedCategory, article.slug)}
                  >
                    <span>{article.category}</span>
                    <strong>{article.title}</strong>
                    <p>{article.summary}</p>
                  </button>
                ))}
              </div>

              <WikiArticleSections article={selectedArticle} className="wiki-inline-article" />

              {selectedCategoryArticles.length === 0 && (
                <div className="wiki-empty">
                  <h3>No guides added yet</h3>
                  <p>This category is ready for future {serverName} documentation.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}

// Every word in the search must appear somewhere in the guide.
function searchWiki(query) {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];
  return wikiArticles.filter((article) => {
    const text = [
      article.title,
      article.summary,
      article.category,
      ...(article.sections || []).flatMap((section) => [
        section.heading,
        ...(section.body || []),
        ...(section.commands || []),
        ...(section.table ? section.table.rows.flat() : []),
      ]),
    ]
      .join(" ")
      .toLowerCase();
    return words.every((word) => text.includes(word));
  });
}

function WikiArticleSections({ article, className }) {
  return (
    <article className={className}>
      {article.sections.map((section) => (
        <section className={section.type === "group" ? "wiki-article-section group" : "wiki-article-section"} key={section.heading}>
          <h3>{section.heading}</h3>
          {section.commands && (
            <div className="wiki-copy-command-list">
              {section.commands.map((command) => (
                <div className="wiki-copy-command" key={command}>
                  <code>{command}</code>
                  <CopyButton value={command} label="Copy" compact />
                </div>
              ))}
            </div>
          )}
          {section.table && (
            <div className="wiki-table-wrap">
              <table className="wiki-data-table">
                <thead>
                  <tr>
                    {section.table.columns.map((column) => (
                      <th key={column}>{column}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row, rowIndex) => (
                    <tr key={`${section.heading}-${rowIndex}`}>
                      {row.map((cell, cellIndex) => (
                        <td key={`${section.heading}-${rowIndex}-${cellIndex}`}>
                          {cellIndex === 0 && cell.startsWith("/") ? (
                            <span className="wiki-table-command">
                              <code>{cell}</code>
                              <CopyButton value={cell} label="Copy" compact />
                            </span>
                          ) : (
                            cell
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>
      ))}
    </article>
  );
}

function WikiArticlePage() {
  const { slug } = useParams();
  const article = wikiArticles.find((item) => item.slug === slug);

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <PageShell eyebrow={article.category} title={article.title} intro={article.summary}>
      <article className="wiki-selected-guide">
        <div className="wiki-guide-header">
          <div>
            <p className="eyebrow">{article.category}</p>
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
          </div>
          <StatusBadge status={article.status} />
        </div>
        <div className="wiki-section-body">
          <WikiArticleSections article={article} />
        </div>
      </article>
    </PageShell>
  );
}

function DirectoryPage({ eyebrow, title, intro, items: directoryItems, type }) {
  return (
    <PageShell eyebrow={eyebrow} title={title} intro={intro}>
      <div className="directory-grid">
        {directoryItems.map((item) => (
          <Link className="link-card" to={`/${type}/${item.slug}`} key={item.slug}>
            <span className="link-card-title">{item.title}</span>
            <span className="link-card-text">{item.description || item.summary}</span>
            <span className="link-card-cta">Read More</span>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}

function DetailPage({ collection, eyebrow }) {
  const { slug } = useParams();
  const item = collection.find((entry) => entry.slug === slug);

  if (!item) {
    return <NotFoundPage />;
  }

  return (
    <PageShell eyebrow={eyebrow} title={item.title} intro={item.description || item.summary}>
      <Card>
        <StatusBadge status={item.status} />
        <p>{item.body || item.description || item.summary}</p>
      </Card>
    </PageShell>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vote" element={<VotePage />} />
        <Route path="/wiki" element={<WikiPage />} />
        <Route path="/wiki/:slug" element={<WikiArticlePage />} />
        <Route path="/how-to-join" element={<HowToJoinPage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/warps" element={<Navigate to="/wiki?category=warps&article=warp-overview" replace />} />
        <Route path="/warps/:slug" element={<Navigate to="/wiki?category=warps&article=warp-overview" replace />} />
        <Route path="/items" element={<ItemsIndexPage />} />
        <Route path="/items/:setSlug" element={<ItemSetPage />} />
        <Route path="/items/:setSlug/:itemSlug" element={<ItemPage />} />
        <Route path="/events" element={<DirectoryPage eyebrow="News" title="Events and Updates" intro={`Current events, seasonal content, updates, and archives for ${serverName}.`} items={updates} type="events" />} />
        <Route path="/events/:slug" element={<DetailPage collection={updates} eyebrow="Event Update" />} />
        <Route path="/updates" element={<DirectoryPage eyebrow="News" title="Events and Updates" intro={`Current events, seasonal content, updates, and archives for ${serverName}.`} items={updates} type="events" />} />
        <Route path="/updates/:slug" element={<DetailPage collection={updates} eyebrow="Event Update" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}
