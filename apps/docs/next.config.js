const fs = require("fs");
const path = require("path");

const withTM = require("next-transpile-modules")(
  getPackagesToTranspileOnTheFly()
);

module.exports = withTM({
  reactStrictMode: true,
});

function getPackagesToTranspileOnTheFly() {
  return fs
    .readdirSync(path.resolve(__dirname, "../../packages"))
    .filter((pkg) => pkg.startsWith("spor-"))
    .map((pkg) => `@vygruppen/${pkg}`);
}
