import { defineTextStyles } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";

export const textStyles = defineTextStyles({
  "2xl": {
    value: {
      fontSize: [
        tokens.font.style.xxl["font-size"].mobile,
        null,
        null,
        tokens.font.style.xxl["font-size"].desktop,
      ],
      fontFamily: tokens.font.style.xxl["font-family"],
      lineHeight: tokens.font.style.xxl["line-height"],
    },
  },
  "xl-display": {
    value: {
      fontSize: [
        tokens.font.style["xl-display"]["font-size"].mobile,
        null,
        null,
        tokens.font.style["xl-display"]["font-size"].desktop,
      ],
      fontFamily: tokens.font.style["xl-display"]["font-family"],
      lineHeight: tokens.font.style["xl-display"]["line-height"],
    },
  },
  "xl-sans": {
    value: {
      fontSize: [
        tokens.font.style["xl-sans"]["font-size"].mobile,
        null,
        null,
        tokens.font.style["xl-sans"]["font-size"].desktop,
      ],
      fontFamily: tokens.font.style["xl-sans"]["font-family"],
      lineHeight: tokens.font.style["xl-sans"]["line-height"],
    },
  },
  lg: {
    value: {
      fontSize: [
        tokens.font.style.lg["font-size"].mobile,
        null,
        null,
        tokens.font.style.lg["font-size"].desktop,
      ],
      fontFamily: tokens.font.style.lg["font-family"],
      lineHeight: tokens.font.style.lg["line-height"],
    },
  },
  md: {
    value: {
      fontSize: [
        tokens.font.style.md["font-size"].mobile,
        null,
        null,
        tokens.font.style.md["font-size"].desktop,
      ],
      fontFamily: tokens.font.style.md["font-family"],
      lineHeight: tokens.font.style.md["line-height"],
    },
  },
  sm: {
    value: {
      fontSize: [
        tokens.font.style.sm["font-size"].mobile,
        null,
        null,
        tokens.font.style.sm["font-size"].desktop,
      ],
      fontFamily: tokens.font.style.sm["font-family"],
      lineHeight: tokens.font.style.sm["line-height"],
    },
  },
  xs: {
    value: {
      fontSize: [
        tokens.font.style.xs["font-size"].mobile,
        null,
        null,
        tokens.font.style.xs["font-size"].desktop,
      ],
      fontFamily: tokens.font.style.xs["font-family"],
      lineHeight: tokens.font.style.xs["line-height"],
    },
  },
});
