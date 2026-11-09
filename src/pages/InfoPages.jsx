import { PageShell } from "../components/PageShell";
import { links, rules, serverName, staff } from "../data/siteData";

export function RulesPage() {
  return (
    <PageShell
      eyebrow="Community"
      title="Server Rules"
      intro={`Please read these before you play. They keep ${serverName} fair and friendly for everyone, in game and on Discord.`}
    >
      <ol className="rules-list">
        {rules.map((rule, index) => (
          <li className="rule-card" key={rule.title}>
            <span className="rule-number" aria-hidden="true">{index + 1}</span>
            <div>
              <h2>{rule.title}</h2>
              <p>{rule.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="rules-help">
        Questions about a rule, or need to report something? Open a ticket on our{" "}
        <a className="rich-link" href={links.discord} target="_blank" rel="noopener noreferrer">Discord</a>.
      </p>
    </PageShell>
  );
}

function StaffPicture({ member }) {
  if (member.picture) {
    return <img className="team-head team-picture" src={member.picture} alt="" width="64" height="64" loading="lazy" />;
  }
  if (member.minecraftName) {
    // The player's Minecraft head, from their Minecraft username.
    return (
      <img
        className="team-head"
        src={`https://mc-heads.net/avatar/${encodeURIComponent(member.minecraftName)}/64`}
        alt=""
        width="64"
        height="64"
        loading="lazy"
      />
    );
  }
  return <span className="team-head team-initial" aria-hidden="true">{member.name.charAt(0)}</span>;
}

export function StaffPage() {
  return (
    <PageShell
      eyebrow="Community"
      title="Staff"
      intro={`The team behind ${serverName}. Need help? Ask on Discord and a staff member will get back to you.`}
    >
      <div className="team-grid">
        {staff.map((member) => (
          <article className="card team-card" key={member.name}>
            <StaffPicture member={member} />
            <div>
              <span className="small-label">{member.role}</span>
              <h2>{member.name}</h2>
              {member.handle && <p className="team-handle">{member.handle}</p>}
              {member.responsibilities && <p>{member.responsibilities}</p>}
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
