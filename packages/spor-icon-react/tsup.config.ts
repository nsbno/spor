import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["tmp/index.ts"],
  treeshake: true,
  format: ["esm", "cjs"],
  external: ["@chakra-ui/react"],
});
