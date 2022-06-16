import tokens from "@vygruppen/spor-design-tokens/react-native";

const { px, ...spacings } = tokens.size.spacing;
const spacingSizes = Object.entries({ ...spacings }).reduce(
  (acc, [key, token]) => {
    return { ...acc, [key]: token.value.number };
  },
  {} as {
    [key in keyof typeof spacings]: number;
  }
);
const spacingSteps = {
  0: 0,
  0.5: 3,
  1: 6,
  1.5: 9,
  2: 12,
  3: 18,
  4: 24,
  5: 30,
  6: 36,
  7: 42,
  8: 54,
  9: 72,
  10: 90,
  11: 120,
  12: 180,
};

export const spacing = {
  ...spacingSizes,
  ...spacingSteps,
};
