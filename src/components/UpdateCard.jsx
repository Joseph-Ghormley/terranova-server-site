import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";

export default function UpdateCard({ update }) {
  return (
    <article className="update-card">
      <div className="card-topline">
        <span>{update.date}</span>
        <StatusBadge status={update.status} />
      </div>
      <h3>{update.title}</h3>
      <p>{update.summary}</p>
      <Link className="learn-more" to={`/events/${update.slug}`}>Read More</Link>
    </article>
  );
}
