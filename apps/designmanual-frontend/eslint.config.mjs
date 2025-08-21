import config from "@vygruppen/eslint-config";

/** @type {import("eslint").Linter.Config} */
export default [
  ...config,
  {
    ignores: ["./build/*", "**/root.ts", "**/route.ts", "**/+routes.ts"],
  },
];
