import { reactRouter } from "@react-router/dev/vite";
import babel from "@rolldown/plugin-babel";
import { reactCompilerPreset } from "@vitejs/plugin-react";
import {
  defaultClientConditions,
  defaultServerConditions,
  defineConfig,
} from "vite";

// In dev, workspace packages that export this condition load from src, so edits show up
// through HMR without rebuilding them.
const sourceCondition = "@vygruppen/source";

export default defineConfig(({ command }) => {
  const development = command === "serve";
  return {
    resolve: {
      tsconfigPaths: true,
      ...(development && {
        conditions: [sourceCondition, ...defaultClientConditions],
      }),
    },
    ...(development && {
      ssr: {
        resolve: {
          conditions: [sourceCondition, ...defaultServerConditions],
        },
      },
    }),
    server: {
      port: 3008,
      open: true,
    },
    // The React Compiler adds this import; without it Vite finds it late and reloads the page.
    optimizeDeps: { include: ["react/compiler-runtime"] },
    plugins: [reactRouter(), babel({ presets: [reactCompilerPreset()] })],
  };
});
