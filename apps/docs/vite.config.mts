import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals({
  nativeFetch: true,
});

export default defineConfig({
  server: {
    port: 3000,
    fs: { cachedChecks: false },
  },
  plugins: [
    remix({
      future: {
        v3_singleFetch: true,
        v3_fetcherPersist: true,
        v3_lazyRouteDiscovery: true,
        v3_relativeSplatPath: true,
        v3_routeConfig: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
});