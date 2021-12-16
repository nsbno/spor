import tokens from "@vygruppen/spor-design-tokens";

export const colors = {
  alias: getValues(tokens.color.alias),
  palette: getScaledValues(tokens.color.palette),
  detail: getValues(tokens.color.detail),
  error: getValues(tokens.color.error),
  main: getValues(tokens.color.main),
  outline: getValues(tokens.color.outline),
  product: getValues(tokens.color.product),
  text: getValues(tokens.color.text),
};

/**
 * Turns `{ blue: { value: "#00f" } }` into `{ blue: "#00f" }`
 *
 * Could definitely be implemented with a reduce, but let's keep it simple for
 * readability's sake.
 *
 * There are also no types here for simplicity's sake,
 * because they are removed when added to the theme.
 */
function getValues(obj: any) {
  const newObj = {};
  for (let colorKey in obj) {
    newObj[colorKey] = obj[colorKey].value;
  }
  return newObj;
}

/**
 * Turns { blue: { '100': { value: "#00f" } } } into { blue: { 100: "#00f" } }
 *
 * Could definitely be implemented with a reduce and some flat map jazz, but
 * let's keep it simple for readability's sake.
 *
 * There are also no types here for simplicity's sake,
 * because they are removed when added to the theme.
 */
function getScaledValues(obj: any) {
  const newObj = {};
  for (let colorKey in obj) {
    for (let scaleKey in obj[colorKey]) {
      if (!newObj[colorKey]) {
        newObj[colorKey] = {};
      }
      newObj[colorKey][Number(scaleKey)] = obj[colorKey][scaleKey].value;
    }
  }
  return newObj;
}
