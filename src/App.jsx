import { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes, useParams, useSearchParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StatusBadge from "./components/StatusBadge";
import { Card } from "./components/Card";
import CopyButton from "./components/CopyButton";
import { links } from "./data/siteData";
import { homeNavigationCards } from "./data/homeContent";
import { updates } from "./data/updates";
import { wikiCategories } from "./data/wikiCategories";
import { wikiArticles } from "./data/wikiArticles";
import { commands } from "./data/commands";
import { videoGuides } from "./data/videoGuides";
import { items } from "./data/items";

function PageShell({ eyebrow, title, intro, children }) {
  return (
    <main className="page">
      <section className="page-header">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </section>
      {children}
    </main>
  );
}

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
      text: "Vote for Sunny Horizons and claim player rewards.",
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
        <p className="eyebrow">Sunny Horizons Network</p>
        <h1 id="portal-title">TerraNova</h1>
        <p className="portal-tagline">
          Stake your claim beneath a brighter sky, build your story, and find your way through Sunny Horizons.
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
            <p className="eyebrow">Explore TerraNova</p>
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
      title="Vote for Sunny Horizons"
      intro="Support the server on voting sites, then return in-game to claim the rewards tied to voting and Vote crates."
    >
      <div className="vote-page-grid">
        {voteLinks.map(([title, url]) => (
          <SmartLink className="vote-link-card" href={url} key={url}>
            <span>Vote Site</span>
            <strong>{title}</strong>
            <p>Vote for TerraNova / Sunny Horizons.</p>
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
      title="How to Join TerraNova"
      intro="Start your TerraNova adventure on Java or Bedrock Edition. Copy the details for your platform, then use the beginner commands once you arrive."
    >
      <div className="join-grid">
        <Card title="Java Edition" className="join-card">
          <span className="small-label">Server Address</span>
          <div className="copy-value-row">
            <code>{links.javaIp}</code>
            <CopyButton value={links.javaIp} label="Copy Address" />
          </div>
        </Card>
        <Card title="Bedrock Edition" className="join-card">
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
            ["Outdated Minecraft version", "Update Minecraft if your client cannot connect to the server version."],
            ["Microsoft account issues", "Sign out and back into your Microsoft account, then try again."],
            ["Incorrect DNS settings", "Console connection workarounds can depend on DNS settings. Use a confirmed guide before changing them."],
            ["Strict NAT", "A strict NAT can block multiplayer connections. Check your console network status."],
            ["Server temporarily offline", "If the server is offline, wait for an update from the TerraNova community."],
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
  const [searchParams] = useSearchParams();
  const requestedCategorySlug = searchParams.get("category");
  const requestedArticleSlug = searchParams.get("article");
  const initialCategory = categories.find((category) => category.slug === requestedCategorySlug) || categories[0];
  const [selectedCategorySlug, setSelectedCategorySlug] = useState(initialCategory.slug);
  const [selectedArticleSlug, setSelectedArticleSlug] = useState(requestedArticleSlug || initialCategory.featuredSlug);
  const selectedCategory =
    categories.find((category) => category.slug === selectedCategorySlug) || categories[0];
  const selectedCategoryArticles = wikiArticles.filter((article) => article.category === selectedCategory.title);
  const visibleCategoryArticles = selectedCategoryArticles.filter((article) => !article.hideInCategoryList);
  const selectedArticle =
    selectedCategoryArticles.find((article) => article.slug === selectedArticleSlug) ||
    selectedCategoryArticles[0] ||
    wikiArticles[0];

  function selectCategory(category) {
    setSelectedCategorySlug(category.slug);
    setSelectedArticleSlug(category.featuredSlug);
  }

  useEffect(() => {
    const requestedCategory = categories.find((category) => category.slug === requestedCategorySlug);

    if (requestedCategory) {
      setSelectedCategorySlug(requestedCategory.slug);
      setSelectedArticleSlug(requestedArticleSlug || requestedCategory.featuredSlug);
    }
  }, [categories, requestedArticleSlug, requestedCategorySlug]);

  return (
    <PageShell
      eyebrow="Knowledge Base"
      title="TerraNova Wiki"
      intro="Official player guides for Sunny Horizons. Pick a category from the left, then open the focused article you need."
    >
      <div className="wiki-layout">
        <aside className="wiki-sidebar">
          <label className="wiki-search">
            <span>Search Wiki</span>
            <input type="search" placeholder="Search join, warp, soul..." />
          </label>
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
                    onClick={() => setSelectedArticleSlug(article.slug)}
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
                  <p>This category is ready for future TerraNova documentation.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
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

function NotFoundPage() {
  return (
    <PageShell eyebrow="Missing Page" title="Guide Not Found" intro="That TerraNova page is not available yet.">
      <Link className="btn primary" to="/">Return Home</Link>
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
        <Route path="/warps" element={<Navigate to="/wiki?category=warps&article=warp-overview" replace />} />
        <Route path="/warps/:slug" element={<Navigate to="/wiki?category=warps&article=warp-overview" replace />} />
        <Route path="/items" element={<DirectoryPage eyebrow="Progression" title="Items" intro="Custom items and Soul system records will live here as details are verified." items={items} type="items" />} />
        <Route path="/items/:slug" element={<DetailPage collection={items} eyebrow="Item Guide" />} />
        <Route path="/events" element={<DirectoryPage eyebrow="News" title="Events and Updates" intro="Current events, seasonal content, updates, and archives for TerraNova." items={updates} type="events" />} />
        <Route path="/events/:slug" element={<DetailPage collection={updates} eyebrow="Event Update" />} />
        <Route path="/updates" element={<DirectoryPage eyebrow="News" title="Events and Updates" intro="Current events, seasonal content, updates, and archives for TerraNova." items={updates} type="events" />} />
        <Route path="/updates/:slug" element={<DetailPage collection={updates} eyebrow="Event Update" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}
