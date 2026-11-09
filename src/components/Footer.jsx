import { fullName, serverName } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>{serverName}</strong>
        <p>Copyright {new Date().getFullYear()} {fullName}.</p>
      </div>
      <p className="disclaimer">
        {serverName} is an independent Minecraft server project and is not affiliated with Mojang or Microsoft.
      </p>
    </footer>
  );
}
