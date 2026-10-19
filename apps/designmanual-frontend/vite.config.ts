import { reactRouter } from "@react-router/dev/vite";
import { defineConfig, type Plugin } from "vite";
import babel from "vite-plugin-babel";
import tsconfigPaths from "vite-tsconfig-paths";

const ReactCompilerConfig = {
  /* ... */
};

/**
 * spor-react is a prebuilt bundle (`tsup --watch`) that can't be hot-swapped,
 * so skip HMR and do one full reload instead. Wait for `index.mjs`: tsup writes
 * the other files first, and reloading earlier renders the old bundle.
 * Keep `handleHotUpdate`: the newer `hotUpdate` hook doesn't stop the HMR updates.
 */
const SPOR_REACT_DIST = "/packages/spor-react/dist/";
const SPOR_REACT_MAIN_BUNDLE = `${SPOR_REACT_DIST}index.mjs`;

const fullReloadOnSporReactBuild = (): Plugin => ({
  name: "full-reload-on-spor-react-build",
  enforce: "pre",
  handleHotUpdate({ file, server }) {
    if (!file.includes(SPOR_REACT_DIST)) return;
    if (file.endsWith(SPOR_REACT_MAIN_BUNDLE)) {
      for (const environment of Object.values(server.environments)) {
        environment.hot.send({ type: "full-reload", triggeredBy: file });
      }
    }
    return [];
  },
});

export default defineConfig({
  server: {
    port: 3008,
    open: true,
  },
  plugins: [
    fullReloadOnSporReactBuild(),
    reactRouter(),
    tsconfigPaths(),
    babel({
      filter: /\.[jt]sx?$/,
      babelConfig: {
        presets: ["@babel/preset-typescript"], // if you use TypeScript
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      },
    }),
  ],
});
