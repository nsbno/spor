import { defineConfig } from "oxlint";

import config from "./index.mjs";

export default defineConfig({
  extends: [config],
  ignorePatterns: ["dist/**"],
});
