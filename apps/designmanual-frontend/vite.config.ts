import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";

const ReactCompilerConfig = {
  /* ... */
};

/**
 * In dev, resolve workspace packages (spor-react, spor-loader, sidespor-config)
 * to their source (see the `@vygruppen/source` condition in their
 * package.json) so edits get Fast Refresh instead of a rebuild and reload.
 * Builds keep using the published `dist`.
 */
const SOURCE_CONDITION = "@vygruppen/source";

export default defineConfig(({ command }) => {
  // `command` is "serve" for the dev server (`react-router dev`) and "build"
  // for production builds, so only the dev server reads package source.
  const workspaceSource =
    command === "serve" ? { conditions: [SOURCE_CONDITION] } : {};

  return {
    server: {
      port: 3008,
      open: true,
    },
    resolve: { tsconfigPaths: true, ...workspaceSource },
    ssr: { resolve: workspaceSource },
    plugins: [
      reactRouter(),
      babel({
        filter: /\.[jt]sx?$/,
        // Workspace packages ship without the React Compiler, so don't apply it here
        exclude: ["**/packages/**"],
        babelConfig: {
          presets: ["@babel/preset-typescript"], // if you use TypeScript
          plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
        },
      }),
    ],
  };
});
