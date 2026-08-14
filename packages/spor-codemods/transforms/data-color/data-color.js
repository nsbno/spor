//This codemode is used to update from using colorPalette to data-color

const badgeDataColorMap = {
  grey: "neutral",
  blue: "info",
  green: "success",
  orange: "caution",
  red: "critical",
  yellow: "notice",
  cream: "warning",
};

const staticCardDataColorMap = {
  white: "neutral",
  grey: "",
  blue: "info",
  green: "success",
  orange: "caution",
  red: "critical",
  darkYellow: "notice",
  yellow: "warning",
};

const alertDataColorMap = {
  important: "warning",
  orange: "error-secondary",
  error: "critical",
  alt: "notice",
};

export default function transform(file, api) {
  if (file.path.includes("transform") || file.path.includes("codemod")) {
    return file.source;
  }
  const index = api.jscodeshift;
  const root = index(file.source);

  root
    // eslint-disable-next-line unicorn/no-array-callback-reference, unicorn/no-array-method-this-argument
    .find(index.JSXOpeningElement, {
      name: { name: "Badge" },
    })
    // eslint-disable-next-line unicorn/no-array-for-each
    .forEach((path) => {
      // eslint-disable-next-line unicorn/no-array-for-each
      path.node.attributes.forEach((attribute) => {
        if (
          attribute.type === "JSXAttribute" &&
          attribute.name &&
          attribute.name.name === "colorPalette"
        ) {
          attribute.name = index.jsxIdentifier("data-color");

          const value = attribute.value;

          // Handle variant="value"
          if (
            value &&
            value.type === "Literal" &&
            Object.hasOwn(badgeDataColorMap, value.value)
          ) {
            const oldValue = value.value;
            value.value = badgeDataColorMap[oldValue];
            console.log(
              "Replacing Badge colorPalette value",
              oldValue,
              "with",
              value.value,
            );
          }

          // Handle variant={"value"}
          if (value && value.type === "JSXExpressionContainer") {
            const expr = value.expression;
            if (expr && Object.hasOwn(badgeDataColorMap, expr.value)) {
              const oldValue = expr.value;
              expr.value = badgeDataColorMap[oldValue];
              console.log(
                "Replacing Badge colorPalette value",
                oldValue,
                "with",
                expr.value,
              );
            }
          }
        }
      });
    });

  root
    // eslint-disable-next-line unicorn/no-array-callback-reference, unicorn/no-array-method-this-argument
    .find(index.JSXOpeningElement, {
      name: { name: "Alert" },
    })
    // eslint-disable-next-line unicorn/no-array-for-each
    .forEach((path) => {
      // eslint-disable-next-line unicorn/no-array-for-each
      path.node.attributes.forEach((attribute) => {
        if (
          attribute.type === "JSXAttribute" &&
          attribute.name &&
          attribute.name.name === "variant"
        ) {
          attribute.name = index.jsxIdentifier("data-color");

          const value = attribute.value;

          // Handle variant="value"
          if (
            value &&
            value.type === "Literal" &&
            Object.hasOwn(alertDataColorMap, value.value)
          ) {
            const oldValue = value.value;
            value.value = alertDataColorMap[oldValue];
            console.log(
              "Replacing Alert variant value",
              oldValue,
              "with",
              value.value,
            );
          }

          // Handle variant={"value"}
          if (value && value.type === "JSXExpressionContainer") {
            const expr = value.expression;
            if (expr && Object.hasOwn(alertDataColorMap, expr.value)) {
              const oldValue = expr.value;
              expr.value = alertDataColorMap[oldValue];
              console.log(
                "Replacing Alert variant value",
                oldValue,
                "with",
                expr.value,
              );
            }
          }
        }
      });
    });
  root
    // eslint-disable-next-line unicorn/no-array-callback-reference, unicorn/no-array-method-this-argument
    .find(index.JSXOpeningElement, {
      name: { name: "StaticCard" },
    })
    // eslint-disable-next-line unicorn/no-array-for-each
    .forEach((path) => {
      // eslint-disable-next-line unicorn/no-array-for-each
      path.node.attributes.forEach((attribute) => {
        if (
          attribute.type === "JSXAttribute" &&
          attribute.name &&
          attribute.name.name === "colorPalette"
        ) {
          attribute.name = index.jsxIdentifier("data-color");

          const value = attribute.value;

          // Handle variant="value"
          if (
            value &&
            value.type === "Literal" &&
            Object.hasOwn(staticCardDataColorMap, value.value)
          ) {
            const oldValue = value.value;
            value.value = staticCardDataColorMap[oldValue];
            console.log(
              "Replacing StaticCard colorPalette value",
              oldValue,
              "with",
              value.value,
            );
          }

          // Handle variant={"value"}
          if (value && value.type === "JSXExpressionContainer") {
            const expr = value.expression;
            if (expr && Object.hasOwn(staticCardDataColorMap, expr.value)) {
              const oldValue = expr.value;
              expr.value = staticCardDataColorMap[oldValue];
              console.log(
                "Replacing StaticCard colorPalette value",
                oldValue,
                "with",
                expr.value,
              );
            }
          }
        }
      });
    });

  return root.toSource();
}
