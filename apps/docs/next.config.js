const withTM = require("next-transpile-modules")(["@vygruppen/spor-react"]);

module.exports = withTM({
  reactStrictMode: true,
});
