import { reactRouter } from "@react-router/dev/vite";
import babel from "@rolldown/plugin-babel";
import { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: { tsconfigPaths: true },
  server: {
    port: 3008,
    open: true,
  },
  plugins: [reactRouter(), babel({ presets: [reactCompilerPreset()] })],
});
