import { defineConfig } from "tsup";

export default defineConfig(({ watch }) => ({
  entry: ["src/index.tsx", "src/icons/index.tsx"],
  format: ["esm", "cjs"],
  dts: true,
  treeshake: true,
  sourcemap: true,
  splitting: false,
  noExternal: [/^@vygruppen\/spor-design-tokens\/assets\/fonts\//],
  loader: { ".woff2": "dataurl" },
  clean: !watch, // avoid deleting ./dist when dev/watch starts
  outDir: "dist",
  outExtension: ({ format }) => ({
    js: format === "esm" ? ".mjs" : ".cjs",
  }),
}));
