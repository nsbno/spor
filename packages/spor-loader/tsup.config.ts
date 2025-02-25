import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  dts: true,
  treeshake: true,
  format: ["esm", "cjs"],
  clean: true,
  sourcemap: true,
});
