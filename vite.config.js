import { defineConfig } from "vite";
import { crx } from "@crxjs/vite-plugin";

import manifest from "./manifest.config";

export default defineConfig(({ command }) => ({
  build: {
    emptyOutDir: true,
    outDir: command === "serve" ? "live-build" : "dist",
  },
  legacy: {
    skipWebSocketTokenCheck: true,
  },
  plugins: [crx({ manifest })],
}));
