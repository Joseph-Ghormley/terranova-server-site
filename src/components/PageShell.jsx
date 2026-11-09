import { Link } from "react-router-dom";
import { serverName } from "../data/siteData";

export function PageShell({ eyebrow, title, intro, children }) {
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

export function NotFoundPage() {
  return (
    <PageShell eyebrow="Missing Page" title="Guide Not Found" intro={`That ${serverName} page is not available yet.`}>
      <Link className="btn primary" to="/">Return Home</Link>
    </PageShell>
  );
}
