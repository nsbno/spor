/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require("path");
const glob = require("glob");

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  watchFolders: [
    path.resolve(__dirname, "..", ".."),
    ...getPaths("packages/spor-*"),
  ],
};

function getPaths(globPattern) {
  return glob.sync(globPattern, {
    cwd: path.resolve(__dirname, "../.."),
    absolute: true,
  });
}
