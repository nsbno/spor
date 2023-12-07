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
  future: {},
};
