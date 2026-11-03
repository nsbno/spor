import config from "@vygruppen/oxlint-config";
import { defineConfig } from "oxlint";

export default defineConfig({
  extends: [config],
  ignorePatterns: ["build/**", ".react-router/**"],
});
