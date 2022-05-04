import tokens from "@vygruppen/spor-design-tokens/react-native";

const colorAliases = Object.entries(tokens.color.alias).reduce(
  (acc, [key, token]) => {
    return { ...acc, [key]: token.value };
  },
  {} as { [key in keyof typeof tokens.color.alias]: string }
);

const colorPalette: Record<string, string> = {};
for (const [key, tokenOrScale] of Object.entries(tokens.color.palette)) {
  if ("original" in tokenOrScale) {
    colorPalette[key] = tokenOrScale.original;
    continue;
  } else {
    for (const [scaleKey, scaleValue] of Object.entries(tokenOrScale)) {
      colorPalette[`${key}.${scaleKey}`] = (scaleValue as any).original.value;
    }
  }
}
/** All colors in the Spor design system */
export const colors = {
  ...colorAliases,
  ...colorPalette,
};
