/**
 * Recursive function that resolves the value of a given token
 */
export function simplifyTokens(obj: Record<string, any>): any {
  for (const key in obj) {
    if (!obj[key] || typeof obj[key] !== "object") {
      continue;
    }
    if ("value" in obj[key] && !obj[key].keepDetails) {
      obj[key] = obj[key].value;
      continue;
    }
    obj[key] = simplifyTokens(obj[key]);
  }
  return obj;
}
