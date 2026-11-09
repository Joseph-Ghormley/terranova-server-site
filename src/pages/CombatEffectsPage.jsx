import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { PageShell } from "../components/PageShell";
import RichText from "../components/RichText";
import { combatEffects, combatEffectsNote } from "../data/combatEffects";

export default function CombatEffectsPage() {
  // Links like /items/combat-effects#bleed open straight at that effect.
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  return (
    <PageShell
      eyebrow="Items"
      title="Combat Effects"
      intro="Special effects that many custom weapons and armor share. When an item says it applies Bleed or Vulnerable, this is what it means."
    >
      <nav className="item-breadcrumb" aria-label="Breadcrumb">
        <Link to="/items">Items</Link>
        <span aria-hidden="true">›</span>
        <span>Combat Effects</span>
      </nav>
      <div className="effect-list">
        {combatEffects.map((effect) => (
          <section className="card effect-card" id={effect.slug} key={effect.slug}>
            <h2>{effect.name}</h2>
            <p><RichText text={effect.summary} /></p>
            <dl className="effect-facts">
              {effect.facts.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            {effect.notes.map((note) => <p key={note}><RichText text={note} /></p>)}
          </section>
        ))}
      </div>
      <p className="rules-help"><RichText text={combatEffectsNote} /></p>
    </PageShell>
  );
}
