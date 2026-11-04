import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["tmp/*"],
  treeshake: true,
  format: ["esm"],
  // Pinned to keep published output unchanged; bump in a release.
  target: "es2020",
  external: ["app"],
});
