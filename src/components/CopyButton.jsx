import { useState } from "react";

export default function CopyButton({ value, label = "Copy", compact = false }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    if (!value) {
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button className={`copy-button ${compact ? "compact" : ""}`} type="button" onClick={handleCopy}>
      {copied ? "Copied" : label}
    </button>
  );
}

