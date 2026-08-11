export default function FeatureCard({ feature }) {
  return (
    <article className="feature-card">
      <span>{feature.kicker}</span>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </article>
  );
}

