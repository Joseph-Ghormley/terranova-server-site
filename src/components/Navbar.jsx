import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { links, serverName } from "../data/siteData";
import logoImage from "../assets/sunny-horizons-logo.jpg";

function PillIcon({ type }) {
  if (type === "check") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  // Warps is a section of the wiki, so the two menu links share one page.
  // Light up Warps only in the Warps section, and Wiki everywhere else in the wiki.
  const location = useLocation();
  const onWiki = location.pathname === "/wiki" || location.pathname.startsWith("/wiki/");
  const inWarps = onWiki && new URLSearchParams(location.search).get("category") === "warps";

  const copyIp = async () => {
    try {
      await navigator.clipboard.writeText(links.serverIp);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <header className="navbar">
      <Link className="brand" to="/" aria-label={`${serverName} home`}>
        <span className="brand-mark image-mark">
          <img src={logoImage} alt="" />
        </span>
        <span>{serverName}</span>
      </Link>
      <div className="header-pills" aria-label="Server quick actions">
        <button className={`header-pill ${copied ? "copied" : ""}`} type="button" onClick={copyIp}>
          <span className="pill-copy-icon"><PillIcon type={copied ? "check" : "copy"} /></span>
          <span>
            <small>Server IP</small>
            <strong>{links.serverIp}</strong>
            <em>{copied ? "Copied!" : "Click to copy"}</em>
          </span>
        </button>
        <a className="header-pill discord-pill" href={links.discord} target="_blank" rel="noopener noreferrer">
          <span>
            <small>Discord</small>
            <strong>{links.discordMembers}</strong>
            <em>Click to join</em>
          </span>
        </a>
      </div>
      <nav aria-label="Primary navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/how-to-join">Join</NavLink>
        <NavLink to="/wiki" className={() => (onWiki && !inWarps ? "active" : "")}>Wiki</NavLink>
        <NavLink to="/wiki?category=warps&article=warp-overview" className={() => (inWarps ? "active" : "")}>Warps</NavLink>
        <NavLink to="/items">Items</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/ranks">Ranks</NavLink>
        <NavLink to="/rules">Rules</NavLink>
      </nav>
    </header>
  );
}
