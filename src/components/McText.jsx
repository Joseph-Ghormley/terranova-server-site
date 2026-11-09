// Shows text with Minecraft color codes, the way it looks in game.
//
// Codes can use & or §:
//   &0-&9, &a-&f  colors        &l bold   &o italic   &n underline
//   &m strikethrough  &k scrambled (shown as plain text)   &r reset
//   &#RRGGBB  any hex color (the Ethereal Drifter items use these)
// A color code clears bold/underline/etc. after it, like in game.

const COLORS = {
  0: "#000000", 1: "#0000AA", 2: "#00AA00", 3: "#00AAAA",
  4: "#AA0000", 5: "#AA00AA", 6: "#FFAA00", 7: "#AAAAAA",
  8: "#555555", 9: "#5555FF", a: "#55FF55", b: "#55FFFF",
  c: "#FF5555", d: "#FF55FF", e: "#FFFF55", f: "#FFFFFF",
};

// Minecraft draws a darker copy of each letter behind it (1/4 brightness).
function shadowOf(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return `rgb(${r >> 2}, ${g >> 2}, ${b >> 2})`;
}

export function parseMcText(text, baseColor) {
  const parts = [];
  let style = { color: baseColor };
  let buffer = "";
  const push = () => {
    if (buffer) parts.push({ text: buffer, ...style });
    buffer = "";
  };

  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if ((ch === "&" || ch === "§") && i + 1 < text.length) {
      const hex = text.slice(i + 1).match(/^#([0-9a-fA-F]{6})/);
      if (hex) {
        push();
        style = { color: `#${hex[1].toUpperCase()}` };
        i += 7;
        continue;
      }
      const code = text[i + 1].toLowerCase();
      if (COLORS[code]) {
        push();
        style = { color: COLORS[code] };
        i += 1;
        continue;
      }
      if ("lmnokr".includes(code)) {
        push();
        if (code === "r") style = { color: baseColor };
        else if (code === "l") style = { ...style, bold: true };
        else if (code === "m") style = { ...style, strike: true };
        else if (code === "n") style = { ...style, underline: true };
        else if (code === "o") style = { ...style, italic: true };
        i += 1;
        continue;
      }
    }
    buffer += ch;
  }
  push();
  return parts;
}

function blend(from, to, t) {
  const a = parseInt(from.slice(1), 16), b = parseInt(to.slice(1), 16);
  const mix = (shift) => Math.round(((a >> shift) & 255) * (1 - t) + ((b >> shift) & 255) * t);
  return `#${[16, 8, 0].map((s) => mix(s).toString(16).padStart(2, "0")).join("")}`;
}

// text: the line, with codes. baseColor: color before any code.
// gradient: optional [fromHex, toHex] that colors the letters smoothly instead.
export default function McText({ text = "", baseColor = "#FFFFFF", gradient, className = "" }) {
  if (gradient) {
    const plain = parseMcText(text, baseColor).map((p) => p.text).join("");
    const letters = [...plain];
    return (
      <span className={`mc-text ${className}`}>
        {letters.map((letter, i) => {
          const color = blend(gradient[0], gradient[1], letters.length > 1 ? i / (letters.length - 1) : 0);
          return (
            <span key={i} style={{ color, textShadow: `2px 2px 0 ${shadowOf(color)}` }}>
              {letter}
            </span>
          );
        })}
      </span>
    );
  }

  return (
    <span className={`mc-text ${className}`}>
      {parseMcText(text, baseColor).map((part, i) => (
        <span
          key={i}
          style={{
            color: part.color,
            textShadow: `2px 2px 0 ${shadowOf(part.color)}`,
            fontWeight: part.bold ? 900 : undefined,
            fontStyle: part.italic ? "italic" : undefined,
            textDecoration: [part.underline && "underline", part.strike && "line-through"].filter(Boolean).join(" ") || undefined,
          }}
        >
          {part.text}
        </span>
      ))}
    </span>
  );
}
