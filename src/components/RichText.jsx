import { Link } from "react-router-dom";

// Small formatting for plain-word explanations in the data files:
//   **words**          bold
//   [words](/a/page)   a link to another page on this site
//   [words](https://…) a link to another website (opens in a new tab)
const TOKEN = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;

export default function RichText({ text }) {
  const out = [];
  let last = 0;
  let match;
  TOKEN.lastIndex = 0;
  while ((match = TOKEN.exec(text)) !== null) {
    if (match.index > last) out.push(text.slice(last, match.index));
    if (match[1] !== undefined) {
      out.push(<strong key={match.index}>{match[1]}</strong>);
    } else if (match[3].startsWith("/")) {
      out.push(<Link className="rich-link" key={match.index} to={match[3]}>{match[2]}</Link>);
    } else {
      out.push(
        <a className="rich-link" key={match.index} href={match[3]} target="_blank" rel="noopener noreferrer">
          {match[2]}
        </a>
      );
    }
    last = TOKEN.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}
