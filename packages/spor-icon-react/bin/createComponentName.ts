/** Uppercases the first letter of every word, then joins it into PascalCase. */
const toPascalCase = (input: string): string =>
  input
    .split(/[^\p{L}\p{N}]+/u)
    .filter(Boolean)
    .map((word) => {
      const [first, ...rest] = [...word];
      return first.toLocaleUpperCase("en") + rest.join("");
    })
    .join("");

export type ComponentNameMetadata = {
  name?: string;
  modifier?: string;
  size?: string;
};

export function createComponentName({
  name = "",
  modifier = "",
  size = "",
}: ComponentNameMetadata) {
  return toPascalCase(`${name} ${modifier} ${size} Icon`);
}
