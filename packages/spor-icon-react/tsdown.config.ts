import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["tmp/index.ts"],
  format: ["esm"],
  fixedExtension: false,
  // bin/generate.ts writes dist/types.d.ts and dist/metadata.json before bundling.
  clean: false,
  dts: false,
  deps: { neverBundle: ["@chakra-ui/react"] },
  // The JSDoc is already in dist/types.d.ts. Keeping it in the JS bundles adds ~50%.
  outputOptions: { comments: { jsdoc: false } },
});
