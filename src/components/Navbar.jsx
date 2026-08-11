import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data/siteData";
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
      <Link className="brand" to="/" aria-label="TerraNova home">
        <span className="brand-mark image-mark">
          <img src={logoImage} alt="" />
        </span>
        <span>TerraNova</span>
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
        <NavLink to="/wiki">Wiki</NavLink>
        <NavLink to="/warps">Warps</NavLink>
        <NavLink to="/items">Items</NavLink>
        <NavLink to="/events">Events</NavLink>
      </nav>
    </header>
  );
}
