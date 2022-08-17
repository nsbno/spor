const path = require("path");

// TODO: This file should be removed once Sanity Studio v3 drops

const packagesToFix = [
  "../../node_modules/@react-aria",
  "../../node_modules/@react-stately",
  "../../node_modules/@internationalized/number",
  "../../node_modules/@internationalized/date",
  "../../node_modules/@internationalized/message",
  "../../node_modules/@internationalized/string",
  "../../node_modules/@vygruppen/spor-react",
  "../../node_modules/@vygruppen/spor-theme-react",
  "../../node_modules/@vygruppen/spor-logo-react",
  "../../node_modules/@vygruppen/spor-input-react",
  "../../node_modules/@vygruppen/spor-i18n-react",
  "../../node_modules/@vygruppen/spor-button-react",
  "../../node_modules/@vygruppen/spor-layout-react",
  "../../node_modules/@vygruppen/spor-typography-react",
  "../../node_modules/@vygruppen/spor-icon-react",
  "../../node_modules/@vygruppen/spor-image-react",
  "../../node_modules/@vygruppen/spor-card-react",
  "../../node_modules/@vygruppen/spor-modal-react",
  "../../node_modules/@vygruppen/spor-table-react",
  "../../node_modules/@vygruppen/spor-accordion-react",
  "../../node_modules/@vygruppen/spor-design-tokens",
  "../../node_modules/@vygruppen/spor-link-react",
  "../../node_modules/@vygruppen/spor-stepper-react",
  "../../node_modules/@vygruppen/spor-popover-react",
  "../../node_modules/@vygruppen/spor-tab-react",
  "../../node_modules/@vygruppen/spor-provider-react",
  "../../node_modules/@vygruppen/spor-loader-react",
  "../../node_modules/@vygruppen/spor-loader",
  "../../node_modules/@vygruppen/spor-datepicker-react",
];

function hasBabelOptions(rule) {
  if (Array.isArray(rule)) {
    return rule.some(hasBabelOptions);
  }

  if (rule.rules) {
    return hasBabelOptions(rule.rules);
  }

  if (rule.oneOf) {
    return hasBabelOptions(rule.oneOf);
  }

  if (rule.use) {
    return hasBabelOptions(rule.use);
  }

  if (
    typeof rule?.loader === "string" &&
    rule.loader.includes("babel-loader")
  ) {
    return Boolean(rule.options);
  }

  return false;
}

function applyBabelLoaderFix(rules = []) {
  return rules.map((rule) => {
    if (!hasBabelOptions(rule)) {
      return rule;
    }

    const packages = packagesToFix.map((i) => path.resolve(__dirname, i));

    return {
      ...rule,
      exclude: {
        and: [{ not: packages }, rule?.exclude].filter(Boolean),
      },
    };
  });
}

module.exports = (baseConfig) => ({
  ...baseConfig,
  module: {
    ...baseConfig.module,
    rules: applyBabelLoaderFix(baseConfig?.module?.rules),
  },
});
