import { defineConfig } from "tsdown";

export default defineConfig(({ watch }) => ({
  entry: ["src/index.tsx", "src/icons/index.tsx"],
  format: ["esm"],
  fixedExtension: false,
  dts: true,
  sourcemap: true,
  clean: !watch, // avoid deleting ./dist when dev/watch starts
}));
