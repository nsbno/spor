
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
  return `${name} ${modifier} ${size} Icon`.replaceAll(
    /(^|[^a-zA-Z0-9]+)([a-zA-Z0-9])/g,
    (_match, _separator, char: string) => char.toUpperCase(),
  );
}
