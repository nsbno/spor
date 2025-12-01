/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Recursive function that resolves the value of a given token
 */
export function simplifyTokens(object: Record<string, any>): any {
  for (const key in object) {
    if (!object[key] || typeof object[key] !== "object") {
      continue;
    }
    if ("value" in object[key] && !object[key].keepDetails) {
      object[key] = object[key].value;
      continue;
    }
    object[key] = simplifyTokens(object[key]);
  }
  return object;
}
