import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["tmp/*"],
  treeshake: true,
  format: ["esm"],
  external: ["app"],
});
