import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  // Pinned to keep published output unchanged; bump in a release.
  target: "node16",
  dts: true,
  treeshake: true,
  clean: true,
  sourcemap: true,
  splitting: false,
  outDir: "dist",
  outExtension: ({ format }) => ({
    js: format === "esm" ? ".mjs" : ".cjs",
  }),
});
