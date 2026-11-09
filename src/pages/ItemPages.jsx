import { Link, useParams } from "react-router-dom";
import { NotFoundPage, PageShell } from "../components/PageShell";
import McText, { parseMcText } from "../components/McText";
import RichText from "../components/RichText";
import { itemSets } from "../data/itemSets";
import { items } from "../data/items";
import { isShown } from "../data/visibility";

// A set is shown if it isn't hidden. An item is shown if neither it nor its set is hidden.
const shownSets = () => itemSets.filter(isShown);
const setOf = (item) => itemSets.find((set) => set.slug === item.set);
const itemsIn = (set) => items.filter((item) => item.set === set.slug && isShown(item));
const plainName = (item) => parseMcText(item.name, "#FFFFFF").map((p) => p.text).join("");

function DraftBadge({ entry }) {
  return entry.hidden ? <span className="status status-draft">Hidden draft</span> : null;
}

function ItemName({ item, className = "" }) {
  const upright = item.nameItalic === false ? " mc-upright" : "";
  return <McText className={className + upright} text={item.name} gradient={item.nameGradient} />;
}

function SetCard({ set }) {
  const count = itemsIn(set).length;
  return (
    <Link className="link-card item-set-card" to={`/items/${set.slug}`}>
      <span className="card-topline">
        <span>{set.season}</span>
        <DraftBadge entry={set} />
      </span>
      <span className="link-card-title">{set.name}</span>
      <span className="link-card-text">{set.description}</span>
      <span className="link-card-cta">
        {count === 1 ? "1 item" : `${count} items`}
      </span>
    </Link>
  );
}

export function ItemsIndexPage() {
  const sets = shownSets();
  const current = sets.filter((set) => !set.archived);
  const archived = sets.filter((set) => set.archived);

  return (
    <PageShell
      eyebrow="Progression"
      title="Items"
      intro="Every custom item on the server, grouped by set. Open a set to see each item's lore and what it really does."
    >
      {sets.length === 0 && (
        <div className="card item-empty">
          <h3>Item guides are on the way</h3>
          <p>We're writing a page for every custom item. Check back soon.</p>
        </div>
      )}

      {current.length > 0 && <div className="directory-grid">{current.map((set) => <SetCard set={set} key={set.slug} />)}</div>}

      {archived.length > 0 && (
        <section className="page-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Past Events</p>
              <h2>Archive</h2>
            </div>
            <p>Items from past holidays and events.</p>
          </div>
          <div className="directory-grid">{archived.map((set) => <SetCard set={set} key={set.slug} />)}</div>
        </section>
      )}
    </PageShell>
  );
}

export function ItemSetPage() {
  const { setSlug } = useParams();
  const set = itemSets.find((entry) => entry.slug === setSlug);
  if (!isShown(set)) return <NotFoundPage />;
  const setItems = itemsIn(set);
  // Items keep their order in items.js; a new heading starts whenever the group changes.
  const groups = [];
  for (const item of setItems) {
    const last = groups[groups.length - 1];
    if (last && last.name === (item.group || "")) last.items.push(item);
    else groups.push({ name: item.group || "", items: [item] });
  }

  return (
    <PageShell eyebrow={set.archived ? "Archive" : set.season} title={set.name} intro={set.description}>
      <nav className="item-breadcrumb" aria-label="Breadcrumb">
        <Link to="/items">Items</Link>
        <span aria-hidden="true">›</span>
        <span>{set.name}</span>
        <DraftBadge entry={set} />
      </nav>
      {set.notes && set.notes.length > 0 && (
        <ul className="card item-set-notes">
          {set.notes.map((note) => (
            <li key={note}><RichText text={note} /></li>
          ))}
        </ul>
      )}
      {groups.map((group) => (
      <section className="item-group" key={group.name || "items"}>
      {group.name && <h2 className="item-group-title">{group.name}</h2>}
      <div className="directory-grid">
        {group.items.map((item) => (
          <Link className="link-card item-card" to={`/items/${set.slug}/${item.slug}`} key={item.slug}>
            <span className="card-topline">
              <span>{item.base}</span>
              <DraftBadge entry={item} />
            </span>
            <span className="item-card-name">
              {item.picture && <img className="item-card-picture" src={item.picture} alt="" />}
              <ItemName item={item} />
            </span>
            <span className="link-card-text">{item.summary}</span>
            <span className="link-card-cta">View item</span>
          </Link>
        ))}
      </div>
      </section>
      ))}
    </PageShell>
  );
}

export function ItemPage() {
  const { setSlug, itemSlug } = useParams();
  const item = items.find((entry) => entry.set === setSlug && entry.slug === itemSlug);
  const set = item && setOf(item);
  if (!isShown(item) || !isShown(set)) return <NotFoundPage />;

  return (
    <PageShell eyebrow={set.name} title={plainName(item)} intro={item.summary}>
      <nav className="item-breadcrumb" aria-label="Breadcrumb">
        <Link to="/items">Items</Link>
        <span aria-hidden="true">›</span>
        <Link to={`/items/${set.slug}`}>{set.name}</Link>
        <span aria-hidden="true">›</span>
        <span>{plainName(item)}</span>
        <DraftBadge entry={item} />
      </nav>

      <div className="item-layout">
        <figure className="mc-tooltip" aria-label={`${plainName(item)} as it looks in game`}>
          {item.picture && <img className="mc-tooltip-picture" src={item.picture} alt="" />}
          <ItemName item={item} className="mc-tooltip-name" />
          {item.lore.map((line, i) =>
            line === "" ? (
              <span className="mc-tooltip-gap" key={i} />
            ) : (
              <McText key={i} text={line} baseColor="#AA00AA" className="mc-tooltip-line" />
            )
          )}
          <figcaption>As it looks in game{item.base ? ` · ${item.base}` : ""}</figcaption>
        </figure>

        <div className="item-details">
          <section className="card">
            <h3>What it does</h3>
            <ul className="item-points">
              {item.explanation.map((point) => (
                <li key={point}><RichText text={point} /></li>
              ))}
            </ul>
          </section>

          {item.howToGet && (
            <section className="card">
              <h3>How to get it</h3>
              <p><RichText text={item.howToGet} /></p>
            </section>
          )}
        </div>
      </div>
    </PageShell>
  );
}
