/** Takes a set of props and turns it into JSX style props */
export const toPropsString = (
  props: Record<string, string | boolean>,
  indentation: string = "  "
) => {
  return Object.entries(props)
    .filter(([, value]) => value !== false)
    .map(toPropString)
    .join(`\n${indentation}`);
};

const toPropString = ([key, value]: [string, string | boolean]) =>
  typeof value === "boolean" ? key : `${key}="${value}"`;
