import { defineConfig } from "vite";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json";

export default defineConfig({
  legacy: {
    skipWebSocketTokenCheck: true,
  },
  plugins: [crx({ manifest })],
});
