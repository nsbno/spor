import { defineTokens } from "@chakra-ui/react";
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

export const spacing = defineTokens.spacing({
  0: tokens.size.spacing["0"],
  0.5: tokens.size.spacing["0.5"],
  1: tokens.size.spacing["1"],
  1.5: tokens.size.spacing["1.5"],
  2: tokens.size.spacing["2"],
  3: tokens.size.spacing["3"],
  4: tokens.size.spacing["4"],
  5: tokens.size.spacing["5"],
  6: tokens.size.spacing["6"],
  7: tokens.size.spacing["7"],
  8: tokens.size.spacing["8"],
  9: tokens.size.spacing["9"],
  10: tokens.size.spacing["10"],
  11: tokens.size.spacing["11"],
  12: tokens.size.spacing["12"],
});
