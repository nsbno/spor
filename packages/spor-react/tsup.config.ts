import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx", "src/icons/index.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  treeshake: true,
  sourcemap: true,
});
