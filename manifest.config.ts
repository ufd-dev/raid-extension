import { defineManifest } from "@crxjs/vite-plugin";
import packageJson from "./package.json";

const { version } = packageJson;

// Convert from Semver (example: 0.1.0-beta6)
const [major, minor, patch, label = "0"] = version
  // can only contain digits, dots, or dash
  .replace(/[^\d.-]+/g, "")
  // split into version parts
  .split(/[.-]/);

export default defineManifest(async (env) => {
  const isDev = env.mode === "development";
  return {
    manifest_version: 3,
    name: isDev ? "[DEV] UFD Raiding" : "UFD Raiding",
    // up to four numbers separated by dots
    version: `${major}.${minor}.${patch}.${label}`,
    // semver is OK in "version_name"
    version_name: version,
    host_permissions: isDev ? ["<all_urls>"] : undefined,
    icons: {
      "128": "public/icon128.png",
    },
    permissions: ["clipboardWrite", "sidePanel"],
    background: {
      service_worker: "src/background.ts",
    },
    side_panel: {
      default_path: "src/sidepanel.html",
    },
  };
});
