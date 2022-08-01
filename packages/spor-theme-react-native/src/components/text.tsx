import tokens from "@vygruppen/spor-design-tokens/react-native";

const removeQuotes = (str: string) => str.replace(/"/g, "");
const headingLineHeight = tokens.size["line-height"].heading.value.number;
const bodyLineHeight = tokens.size["line-height"].body.value.number;

export const textVariants = {
  defaults: {
    color: "darkGrey",
  },
  "2xl": {
    fontFamily: removeQuotes(tokens.font.style.xxl["font-family"].value),
    fontSize: tokens.font.style.xxl["font-size"].mobile.value.number,
    fontWeight: "normal",
    lineHeight:
      tokens.font.style.xxl["font-size"].mobile.value.number *
      headingLineHeight,
  },
  "xl-display": {
    fontFamily: removeQuotes(
      tokens.font.style["xl-display"]["font-family"].value
    ),
    fontSize: tokens.font.style["xl-display"]["font-size"].mobile.value.number,
    lineHeight:
      tokens.font.style["xl-display"]["font-size"].mobile.value.number *
      headingLineHeight,
    fontWeight: "normal",
  },
  "xl-sans": {
    fontFamily: removeQuotes(tokens.font.style["xl-sans"]["font-family"].value),
    fontSize: tokens.font.style["xl-sans"]["font-size"].mobile.value.number,
    lineHeight:
      tokens.font.style["xl-sans"]["font-size"].mobile.value.number *
      headingLineHeight,
  },
  lg: {
    fontFamily: removeQuotes(tokens.font.style.lg["font-family"].value),
    fontSize: tokens.font.style.lg["font-size"].mobile.value.number,
    lineHeight:
      tokens.font.style.lg["font-size"].mobile.value.number * bodyLineHeight,
  },
  md: {
    fontFamily: removeQuotes(tokens.font.style.md["font-family"].value),
    fontSize: tokens.font.style.md["font-size"].mobile.value.number,
    lineHeight:
      tokens.font.style.md["font-size"].mobile.value.number * bodyLineHeight,
  },
  sm: {
    fontFamily: removeQuotes(tokens.font.style.sm["font-family"].value),
    fontSize: tokens.font.style.sm["font-size"].mobile.value.number,
    lineHeight:
      tokens.font.style.sm["font-size"].mobile.value.number * bodyLineHeight,
  },
  xs: {
    fontFamily: removeQuotes(tokens.font.style.xs["font-family"].value),
    fontSize: tokens.font.style.xs["font-size"].mobile.value.number,
    lineHeight:
      tokens.font.style.xs["font-size"].mobile.value.number * bodyLineHeight,
  },
};
