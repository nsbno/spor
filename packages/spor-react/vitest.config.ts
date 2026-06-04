import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // Allows using 'describe', 'test', and 'expect' without importing them
    environment: "jsdom", // Simulates browser APIs (essential for UI/DOM testing)
    setupFiles: "./setupTests.ts", // Global test helpers or mocks
    include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    coverage: {
      provider: "v8", // Native code coverage provider
      reporter: ["text", "json", "html"],
    },
    typecheck: {
      enabled: true,
    },
  },
});
