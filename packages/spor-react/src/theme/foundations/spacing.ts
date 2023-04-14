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

export const spacing = Object.entries(tokens.size.spacing).reduce(
  (tokens, [key, token]) => ({
    ...tokens,
    [Number(key)]: token,
  }),
  {} as Record<keyof Spacing, string>
);

export const space = spacing;
