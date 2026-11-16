import { defineConfig } from "tsdown";

export default defineConfig(({ watch }) => ({
  entry: ["src/index.tsx", "src/icons/index.tsx"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: !watch, // avoid deleting ./dist when dev/watch starts
  outExtensions: ({ format }) =>
    format === "cjs"
      ? { js: ".cjs", dts: ".d.cts" }
      : { js: ".mjs", dts: ".d.ts" },
}));
