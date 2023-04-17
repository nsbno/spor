/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildPath: "build/index.js",
  devServerPort: 8002,
  ignoredRouteFiles: [".*"],
  watchPaths: ["../../packages/*/dist/index.mjs"],
  future: {
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
};
