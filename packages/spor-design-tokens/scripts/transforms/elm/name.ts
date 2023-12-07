import { Transform, Named } from "style-dictionary";

/**
 * Generates a name based whatever comes after the category and type,
 * Also do some extra stuff in order to avoid invalid Elm syntax.
 */
export const elmNameTransformer: Named<Transform> = {
  name: "name/elm",
  type: "name",
  transformer: (token) => {
    const parts = token.path.slice(2).map(unSnake);

    const rawName = camelCase(parts);

    return avoidSyntaxErrors(rawName);
  },
};

function unSnake(input: string): string {
  return camelCase(input.split("-"));
}

function camelCase(input: Array<string>): string {
  if (input.length === 1) {
    return input[0];
  }

  const first = input[0];
  const rest = input.slice(1);

  return first + rest.map((s) => s[0].toUpperCase() + s.slice(1)).join("");
}

function avoidSyntaxErrors(input: string): string {
  // reserved keyword
  if (input === "type") {
    return "type_";
  }

  // name starts with digit
  if (/^\d+$/.test(input[0])) {
    return "i" + input;
  }

  return input;
}
