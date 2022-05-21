import tokens from "@vygruppen/spor-design-tokens/react-native";

const colorAliases = Object.entries(tokens.color.alias).reduce(
  (acc, [key, token]) => {
    return { ...acc, [key]: token.value };
  },
  {} as { [key in keyof typeof tokens.color.alias]: string }
);

const colorPalette = Object.entries(tokens.color.palette).reduce(
  (acc, [key, tokenOrScale]) => {
    if ("original" in tokenOrScale) {
      return { ...acc, [key]: tokenOrScale.original.value };
    } else {
      const scaledValues = Object.entries(tokenOrScale).reduce(
        (acc, [scaleKey, scaleValue]) => ({
          ...acc,
          [`${key}.${scaleKey}`]: (scaleValue as any).original.value,
        }),
        {}
      );
      return { ...acc, ...scaledValues };
    }
  },
  {} as {
    // TODO: Make these types look better than this!
    [key in
      | `${
          | "grey"
          | "teal"
          | "green"
          | "blue"
          | "yellow"
          | "orange"}.${keyof typeof tokens.color.palette.grey}`
      | `red.${keyof typeof tokens.color.palette.red}`
      | `${
          | "blackAlpha"
          | "whiteAlpha"}.${keyof typeof tokens.color.palette.whiteAlpha}`]: string;
  }
);

/** All colors in the Spor design system */
export const colors = {
  ...colorAliases,
  ...colorPalette,
  transparent: "transparent",
};
