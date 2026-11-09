// Hidden drafts.
//
// Anything with `hidden: true` (an item, or a whole item set) is left off the
// published site. It IS shown, with a "Hidden draft" badge, when:
//   - you run the site on your own PC with `npm run dev`, or
//   - the site is built with the setting VITE_SHOW_DRAFTS=true
//     (for example a Netlify preview that only Joseph and Bassor use).
// A normal `npm run build` (what Netlify publishes) never shows them.
export const showDrafts = import.meta.env.DEV || import.meta.env.VITE_SHOW_DRAFTS === "true";

export function isShown(entry) {
  return Boolean(entry) && (!entry.hidden || showDrafts);
}
