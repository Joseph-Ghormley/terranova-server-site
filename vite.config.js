import { defineConfig } from "vite";
import { serverName } from "./src/data/siteData.js";

// Fills %SERVER_NAME% in index.html (the browser tab title and the search
// description) from the one name setting in src/data/siteData.js.
const serverNameInHtml = {
  name: "server-name-in-html",
  transformIndexHtml: (html) => html.replaceAll("%SERVER_NAME%", serverName),
};

export default defineConfig({
  plugins: [serverNameInHtml],
});
