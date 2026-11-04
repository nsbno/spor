import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  // Pinned to keep published output unchanged; bump in a release.
  target: "node16",
  dts: true,
  clean: true,
  sourcemap: true,
  splitting: false,
});
