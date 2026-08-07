//This codemode is used to update from using colorPalette to data-color

const dataColorMap = {
  neutral: "neutral",
  blue: "info",
  green: "success",
  orange: "caution",
  red: "critical",
  yellow: "caution",
  cream: "notice",
};

export default function transform(file, api) {
  if (file.path.includes("transform") || file.path.includes("codemod")) {
    return file.source;
  }
  const index = api.jscodeshift;
  const root = index(file.source);

  root
    // eslint-disable-next-line unicorn/no-array-callback-reference, unicorn/no-array-method-this-argument
    .find(index.JSXAttribute, {
      name: { name: "colorPalette" },
    })
    // eslint-disable-next-line unicorn/no-array-for-each
    .forEach((path) => {
      // Rename the prop from colorPalette to data-color
      path.node.name = index.jsxIdentifier("data-color");

      const value = path.node.value;

      // Handle colorPalette="value"
      if (
        value &&
        value.type === "Literal" &&
        Object.hasOwn(dataColorMap, value.value)
      ) {
        const oldValue = value.value;
        value.value = dataColorMap[oldValue];
        console.log(
          "Replacing colorPalette value",
          oldValue,
          "with",
          value.value,
        );
      }

      // Handle colorPalette={"value"}
      if (value && value.type === "JSXExpressionContainer") {
        const expr = value.expression;
        if (expr && Object.hasOwn(dataColorMap, expr.value)) {
          const oldValue = expr.value;
          expr.value = dataColorMap[oldValue];
          console.log(
            "Replacing colorPalette value",
            oldValue,
            "with",
            expr.value,
          );
        }
      }
    });

  return root.toSource();
}
