import { defineConfig } from "tsup";

export default defineConfig(({ watch }) => ({
  entry: ["src/index.tsx", "src/icons/index.tsx"],
  format: ["esm", "cjs"],
  dts: true,
  treeshake: true,
  sourcemap: true,
  splitting: false,
  clean: !watch, // avoid deleting ./dist when dev/watch starts
  outDir: "dist",
  outExtension: ({ format }) => ({
    js: format === "esm" ? ".mjs" : ".cjs",
  }),
}));
