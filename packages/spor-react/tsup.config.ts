import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx", "src/icons/index.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  treeshake: true,
  sourcemap: true,
  esbuildOptions(options) {
    // Ensure JSON files are treated as JSON modules
    options.loader = {
      ...options.loader,
      ".json": "json",
    };
    options.target = "esnext";
    options.platform = "node";
  },
});
