import jsonPlugin from "esbuild-plugin-json";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx", "src/icons/index.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  treeshake: true,
  sourcemap: true,
  esbuildPlugins: [jsonPlugin()],
});
