import tokens from "@vygruppen/spor-design-tokens/react-native";

const removeQuotes = (str: string) => str.replace(/"/g, "");

export const textVariants = {
  "2xl": {
    fontFamily: removeQuotes(tokens.font.style.xxl["font-family"].value),
    fontSize: tokens.font.style.xxl["font-size"].mobile.value.number,
    fontWeight: "normal",
    color: "darkGrey",
  },
  "xl-display": {
    fontFamily: removeQuotes(
      tokens.font.style["xl-display"]["font-family"].value
    ),
    fontSize: tokens.font.style["xl-display"]["font-size"].mobile.value.number,
    fontWeight: "normal",
    color: "darkGrey",
  },
  "xl-sans": {
    fontFamily: removeQuotes(tokens.font.style["xl-sans"]["font-family"].value),
    fontSize: tokens.font.style["xl-sans"]["font-size"].mobile.value.number,
    color: "darkGrey",
  },
  lg: {
    fontFamily: removeQuotes(tokens.font.style.lg["font-family"].value),
    fontSize: tokens.font.style.lg["font-size"].mobile.value.number,
    color: "darkGrey",
  },
  md: {
    fontFamily: removeQuotes(tokens.font.style.md["font-family"].value),
    fontSize: tokens.font.style.md["font-size"].mobile.value.number,
    color: "darkGrey",
  },
  sm: {
    fontFamily: removeQuotes(tokens.font.style.sm["font-family"].value),
    fontSize: tokens.font.style.sm["font-size"].mobile.value.number,
    color: "darkGrey",
  },
  xs: {
    fontFamily: removeQuotes(tokens.font.style.xs["font-family"].value),
    fontSize: tokens.font.style.xs["font-size"].mobile.value.number,
    color: "darkGrey",
  },
};
