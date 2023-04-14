import tokens from "@vygruppen/spor-design-tokens";

type Token = { value: { number: number } };
type Spacing = {
  0: Token;
  0.5: Token;
  1: Token;
  1.5: Token;
  2: Token;
  3: Token;
  4: Token;
  5: Token;
  6: Token;
  7: Token;
  8: Token;
  9: Token;
  10: Token;
  11: Token;
  12: Token;
};

const spacingOld = Object.entries(tokens.size.spacing).reduce(
  (tokens, [key, token]) => ({
    ...tokens,
    [Number(key)]: token,
  }),
  {} as Record<keyof Spacing, string>
);

const spaceOld = spacingOld;
export const spacing = {
  0: { value: 0 },
  0.5: { value: 2 },
  1: { value: 4 },
  1.5: { value: 6 },
  2: { value: 8 },
  3: { value: 12 },
  4: { value: 16 },
  5: { value: 20 },
  6: { value: 24 },
  7: { value: 28 },
  8: { value: 32 },
  9: { value: 36 },
  10: { value: 40 },
  11: { value: 44 },
  12: { value: 48 },
};
export const space = spacing;
