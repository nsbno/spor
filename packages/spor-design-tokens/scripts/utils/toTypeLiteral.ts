const IDENTIFIER = /^[A-Za-z_$][\w$]*$/;

/** Renders a TypeScript type literal describing the shape of a JSON value */
export function toTypeLiteral(value: unknown, indent = ""): string {
  if (Array.isArray(value)) {
    return value.length > 0
      ? `${toTypeLiteral(value[0], indent)}[]`
      : "unknown[]";
  }
  if (value === null) {
    return "null";
  }
  if (typeof value !== "object") {
    return typeof value;
  }

  const inner = `${indent}  `;
  const properties = Object.entries(value).map(([key, child]) => {
    const name = IDENTIFIER.test(key) ? key : JSON.stringify(key);
    return `${inner}${name}: ${toTypeLiteral(child, inner)};`;
  });
  return `{\n${properties.join("\n")}\n${indent}}`;
}
