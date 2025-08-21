import config from "@vygruppen/eslint-config";

/** @type {import("eslint").Linter.Config} */
export default [
  ...config,
  {
    ignores: ["./build/*", "+*"],
    rules: {
      "@typescript-eslint/no-namespace": "off", // Bør vøre på?
    },
  },
];
