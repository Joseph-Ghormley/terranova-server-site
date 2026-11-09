export default function StatusBadge({ status }) {
  if (!status) {
    return null;
  }

  const key = status.toLowerCase().replaceAll(" ", "-");
  return <span className={`status status-${key}`}>{status}</span>;
}
