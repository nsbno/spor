import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["tmp/index.ts"],
  treeshake: true,
  format: ["esm", "cjs"],
  // Pinned to keep published output unchanged; bump in a release.
  target: "es2017",
  external: ["@chakra-ui/react"],
});
