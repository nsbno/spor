import { defineTokens } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";

export const fonts = defineTokens.fonts({
  body: { value: `${tokens.font.family.body}, arial, sans-serif` },
  heading: { value: `${tokens.font.family.heading}, arial, sans-serif` },
  mono: { value: `${tokens.font.family.monospace}, monospace` },
});
