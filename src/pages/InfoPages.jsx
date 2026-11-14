import { PageShell } from "../components/PageShell";
import RichText from "../components/RichText";
import { ranks, ranksStoreUrl } from "../data/ranks";
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
              {member.responsibilities && <p>{member.responsibilities}</p>}
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}

export function RanksPage() {
  return (
    <PageShell
      eyebrow="Community"
      title="Ranks"
      intro={`Every ${serverName} rank is yours for life, and each one includes all the perks of the ranks below it.`}
    >
      <div className="card ranks-notes">
        <p>
          <strong>Ranks don't have to be bought.</strong> Opening the Vote crate has a small chance of giving you a rank-up.
          Everything on the store can also be earned in game.
        </p>
        <p>
          Ranks are bought on the{" "}
          <a className="rich-link" href={ranksStoreUrl} target="_blank" rel="noopener noreferrer">server store</a>,
          which handles checkout and gives you the rank in game. Kits include every lower rank's kit too.
        </p>
      </div>
      <div className="ranks-grid">
        {ranks.map((rank) => (
          <article className="card rank-card" key={rank.slug} id={rank.slug} style={{ "--rank-color": rank.color }}>
            <header className="rank-head">
              <h2
                style={
                  rank.gradient
                    ? { backgroundImage: `linear-gradient(90deg, ${rank.gradient[0]}, ${rank.gradient[1]})` }
                    : undefined
                }
                className={rank.gradient ? "rank-name gradient" : "rank-name"}
              >
                {rank.name}
              </h2>
              <span className="rank-price">{rank.price}</span>
            </header>
            {rank.storeName && <p className="rank-store-name">Called "{rank.storeName}" on the store.</p>}
            <dl className="rank-facts">
              <div><dt>Homes</dt><dd>{rank.homes}</dd></div>
              <div><dt>Daily rewards</dt><dd>{rank.daily}</dd></div>
              <div><dt>Kit</dt><dd>{rank.kit}</dd></div>
            </dl>
            <ul className="rank-perks">
              {rank.perks.map((perk) => (
                <li key={perk}><RichText text={perk} /></li>
              ))}
            </ul>
            <a className="btn primary rank-buy" href={ranksStoreUrl} target="_blank" rel="noopener noreferrer">
              Buy on the store
            </a>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
