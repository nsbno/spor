import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // Allows using 'describe', 'test', and 'expect' without importing them
    environment: "jsdom",
    setupFiles: "./setupTests.ts", // Global test helpers or mocks
    typecheck: {
      enabled: true,
    },
  },
});
