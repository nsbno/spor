import { defineTokens } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";

export const borders = defineTokens.borders({
  none: {
    value: "0",
  },
  sm: {
    value: `${tokens.size.stroke.sm} solid`,
  },
  "sm-dashed": {
    value: `${tokens.size.stroke.sm} dashed`,
  },
  md: {
    value: `${tokens.size.stroke.md} solid`,
  },
  "md-dashed": {
    value: `${tokens.size.stroke.md} dashed`,
  },
  lg: {
    value: `${tokens.size.stroke.lg} solid`,
  },
  "lg-dashed": {
    value: `${tokens.size.stroke.lg} dashed`,
  },
});
