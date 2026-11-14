import { Link } from "react-router-dom";
import { fullName, links, serverName } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>{serverName}</strong>
        <p>Copyright {new Date().getFullYear()} {fullName}.</p>
      </div>
      <nav className="footer-links" aria-label="More pages">
        <Link to="/rules">Rules</Link>
        <Link to="/ranks">Ranks</Link>
        <Link to="/staff">Staff</Link>
        <Link to="/vote">Vote</Link>
        <a href={links.discord} target="_blank" rel="noopener noreferrer">Discord</a>
      </nav>
      <p className="disclaimer">
        {serverName} is an independent Minecraft server project and is not affiliated with Mojang or Microsoft.
      </p>
    </footer>
  );
}
