import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["tmp/*"],
  format: ["esm"],
  fixedExtension: false,
  // bin/generate.ts writes dist/types.d.ts before bundling.
  clean: false,
  dts: false,
  // "app/spor" is resolved by the consuming React Native app.
  deps: { neverBundle: [/^app(\/|$)/] },
  // The JSDoc is already in dist/types.d.ts.
  outputOptions: { comments: { jsdoc: false } },
});
