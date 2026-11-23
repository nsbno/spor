type TokenNode = Record<string, unknown>;

const isObject = (value: unknown): value is TokenNode =>
  typeof value === "object" && value !== null;

/**
 * Replaces each token with its resolved value, without mutating the input.
 * Tokens marked `keepDetails` keep their authored properties, but not the metadata Style Dictionary adds.
 */
export function simplifyTokens(node: unknown): unknown {
  if (Array.isArray(node)) {
    return node.map((item) => simplifyTokens(item));
  }
  if (!isObject(node)) {
    return node;
  }
  if ("value" in node && !node.keepDetails) {
    return node.value;
  }

  const keys =
    "value" in node && isObject(node.original)
      ? Object.keys(node.original).filter((key) => key !== "keepDetails")
      : Object.keys(node);
  return Object.fromEntries(
    keys.map((key) => [key, simplifyTokens(node[key])]),
  );
}
