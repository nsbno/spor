import { defineTextStyles } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";

export const textStyles = defineTextStyles({
  // Heading variants
  "xxl-heading": {
    value: {
      fontSize: [
        tokens.font.style.xxl["font-size"].mobile,
        tokens.font.style.xxl["font-size"].desktop,
      ],
      fontFamily: tokens.font.style.xxl["font-family"],
      lineHeight: tokens.font.style.xxl["line-height"],
    },
  },
  "xl-display-heading": {
    value: {
      fontSize: [
        tokens.font.style["xl-display"]["font-size"].mobile,
        tokens.font.style["xl-display"]["font-size"].desktop,
      ],
      fontFamily: tokens.font.style["xl-display"]["font-family"],
      lineHeight: tokens.font.style["xl-display"]["line-height"],
    },
  },
  "xl-sans-heading": {
    value: {
      fontSize: [
        tokens.font.style["xl-sans"]["font-size"].mobile,
        tokens.font.style["xl-sans"]["font-size"].desktop,
      ],
      fontFamily: tokens.font.style["xl-sans"]["font-family"],
      fontWeight: tokens.font.style["xl-sans"]["font-weight"],
      lineHeight: tokens.font.style["xl-sans"]["line-height"],
    },
  },
  "lg-heading": {
    value: {
      fontSize: [
        tokens.font.style["lg-heading"]["font-size"].mobile,
        tokens.font.style["lg-heading"]["font-size"].desktop,
      ],
      fontFamily: tokens.font.style["lg-heading"]["font-family"],
      lineHeight: tokens.font.style["lg-heading"]["line-height"],
      fontWeight: tokens.font.style["lg-heading"]["font-weight"],
    },
  },
  "md-lg-heading": {
    value: {
      fontSize: [
        tokens.font.style["md-lg-heading"]["font-size"].mobile,
        tokens.font.style["md-lg-heading"]["font-size"].desktop,
      ],
      fontFamily: tokens.font.style["md-lg-heading"]["font-family"],
      lineHeight: tokens.font.style["md-lg-heading"]["line-height"],
      fontWeight: tokens.font.style["md-lg-heading"]["font-weight"],
    },
  },
  "md-heading": {
    value: {
      fontSize: [
        tokens.font.style["md-heading"]["font-size"].mobile,
        tokens.font.style["md-heading"]["font-size"].desktop,
      ],
      fontFamily: tokens.font.style["md-heading"]["font-family"],
      lineHeight: tokens.font.style["md-heading"]["line-height"],
      fontWeight: tokens.font.style["md-heading"]["font-weight"],
    },
  },
  "sm-heading": {
    value: {
      fontSize: [
        tokens.font.style["sm-heading"]["font-size"].mobile,
        tokens.font.style["sm-heading"]["font-size"].desktop,
      ],
      fontFamily: tokens.font.style["sm-heading"]["font-family"],
      lineHeight: tokens.font.style["sm-heading"]["line-height"],
      fontWeight: tokens.font.style["sm-heading"]["font-weight"],
      letterSpacing: tokens.font.style["sm-heading"]["letter-spacing"],
    },
  },
  "xs-heading": {
    value: {
      fontSize: [
        tokens.font.style["xs-heading"]["font-size"].mobile,
        tokens.font.style["xs-heading"]["font-size"].desktop,
      ],
      fontFamily: tokens.font.style["xs-heading"]["font-family"],
      lineHeight: tokens.font.style["xs-heading"]["line-height"],
      fontWeight: tokens.font.style["xs-heading"]["font-weight"],
      letterSpacing: tokens.font.style["xs-heading"]["letter-spacing"],
    },
  },
  "2xs-heading": {
    value: {
      fontSize: [
        tokens.font.style["2xs-heading"]["font-size"].mobile,
        tokens.font.style["2xs-heading"]["font-size"].desktop,
      ],
      fontFamily: tokens.font.style["2xs-heading"]["font-family"],
      lineHeight: tokens.font.style["2xs-heading"]["line-height"],
      fontWeight: tokens.font.style["2xs-heading"]["font-weight"],
      letterSpacing: tokens.font.style["2xs-heading"]["letter-spacing"],
    },
  },

  // Text variants
  lg: {
    value: {
      fontSize: [
        tokens.font.style.lg["font-size"].mobile,
        tokens.font.style.lg["font-size"].desktop,
      ],
      fontFamily: tokens.font.style.lg["font-family"],
      lineHeight: tokens.font.style.lg["line-height"],
    },
  },
  "md-lg": {
    value: {
      fontSize: [
        tokens.font.style["md-lg"]["font-size"].mobile,
        tokens.font.style["md-lg"]["font-size"].desktop,
      ],
      fontFamily: tokens.font.style["md-lg"]["font-family"],
      lineHeight: tokens.font.style["md-lg"]["line-height"],
    },
  },
  md: {
    value: {
      fontSize: [
        tokens.font.style.md["font-size"].mobile,
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
        tokens.font.style.sm["font-size"].desktop,
      ],
      fontFamily: tokens.font.style.sm["font-family"],
      lineHeight: tokens.font.style.sm["line-height"],
      letterSpacing: tokens.font.style["2xs"]["letter-spacing"],
    },
  },
  xs: {
    value: {
      fontSize: [
        tokens.font.style.xs["font-size"].mobile,
        tokens.font.style.xs["font-size"].desktop,
      ],
      fontFamily: tokens.font.style.xs["font-family"],
      lineHeight: tokens.font.style.xs["line-height"],
      letterSpacing: tokens.font.style["2xs"]["letter-spacing"],
    },
  },
  "2xs": {
    value: {
      fontSize: [
        tokens.font.style["2xs"]["font-size"].mobile,
        tokens.font.style["2xs"]["font-size"].desktop,
      ],
      fontFamily: tokens.font.style["2xs"]["font-family"],
      lineHeight: tokens.font.style["2xs"]["line-height"],
      letterSpacing: tokens.font.style["2xs"]["letter-spacing"],
    },
  },
});
