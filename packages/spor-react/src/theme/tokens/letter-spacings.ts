import { defineTokens } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";

export const letterSpacings = defineTokens.letterSpacings({
  wide: { value: tokens.size["letter-spacing"]["wide"] },
  wider: { value: tokens.size["letter-spacing"]["wider"] },
  widest: { value: tokens.size["letter-spacing"]["widest"] },
});
