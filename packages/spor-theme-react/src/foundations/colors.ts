import tokens from "@vygruppen/spor-design-tokens";

type Token = { value: string };

type FlattenValue<T> = T extends { value: string }
  ? string
  : { [K in keyof T]: FlattenValue<T[K]> };
type TransformColorTokens<T> = {
  [K in keyof T]: FlattenValue<T[K]>;
};

type FinalColors = TransformColorTokens<typeof tokens.color>;

export const colors: FinalColors = Object.entries(tokens.color).reduce(
  (allColors, [colorName, tokenOrScale]) => {
    if ("value" in tokenOrScale) {
      return { ...allColors, [colorName]: tokenOrScale.value };
    } else {
      const scale = Object.entries(tokenOrScale).reduce(
        (acc, [scaleNumber, scaleToken]) => ({
          ...acc,
          [scaleNumber]: (scaleToken as Token).value,
        }),
        {} as Record<number, string>
      );
      return { ...allColors, [colorName]: scale };
    }
  },
  {} as FinalColors
);
