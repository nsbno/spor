import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx", "src/icons/index.tsx"],
  format: ["esm", "cjs"],
  dts: true,
  treeshake: true,
  sourcemap: true,
  splitting: false,
  clean: true,
  outDir: "dist",
  outExtension: ({ format }) => ({
    js: format === "esm" ? ".mjs" : ".cjs",
  }),
});
