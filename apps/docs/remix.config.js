/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildPath: "build/index.js",
  serverModuleFormat: "cjs",
  ignoredRouteFiles: [".*"],
  watchPaths: ["../../packages/*/dist/index.mjs"],
  future: {
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
    v2_errorBoundary: true,
    v2_meta: true,
    v2_headers: true,
    v2_dev: true,
  },
};
