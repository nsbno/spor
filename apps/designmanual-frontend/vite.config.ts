import { reactRouter } from "@react-router/dev/vite";
import { defineConfig, type Plugin } from "vite";
import babel from "vite-plugin-babel";
import tsconfigPaths from "vite-tsconfig-paths";

const ReactCompilerConfig = {
  /* ... */
};

/**
 * spor-react is consumed as a single prebuilt bundle (`tsup --watch`), so a
 * rebuild can't be hot-swapped: modules end up mixing React contexts from the
 * old and new bundle and the page briefly crashes before Vite falls back to a
 * full reload anyway. Skip HMR and do one clean reload instead.
 *
 * Only reload once the main bundle is rewritten. tsup writes the small icons
 * entry ~250 ms earlier; reloading on that makes SSR render the old bundle
 * while the browser loads the new one, so hydration fails and React re-renders
 * the document without its server-rendered Emotion styles (unstyled flash).
 *
 * Uses `handleHotUpdate` rather than `hotUpdate` because it filters the client
 * and SSR module lists in one go, before React Router's HMR plugins re-add
 * client updates from either side.
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
