import tokens from "@vygruppen/spor-design-tokens";

export const textStyles = {
  "2xl": {
    fontSize: [
      tokens.font.style.xxl["font-size"].mobile.value,
      tokens.font.style.xxl["font-size"].desktop.value,
    ],
    fontFamily: tokens.font.style.xxl["font-family"].value,
    lineHeight: tokens.font.style.xxl["line-height"].value,
  },
  "xl-display": {
    fontSize: [
      tokens.font.style["xl-display"]["font-size"].mobile.value,
      tokens.font.style["xl-display"]["font-size"].desktop.value,
    ],
    fontFamily: tokens.font.style["xl-display"]["font-family"].value,
    lineHeight: tokens.font.style["xl-display"]["line-height"].value,
  },
  "xl-sans": {
    fontSize: [
      tokens.font.style["xl-sans"]["font-size"].mobile.value,
      tokens.font.style["xl-sans"]["font-size"].desktop.value,
    ],
    fontFamily: tokens.font.style["xl-sans"]["font-family"].value,
    lineHeight: tokens.font.style["xl-sans"]["line-height"].value,
  },
  lg: {
    fontSize: [
      tokens.font.style.lg["font-size"].mobile.value,
      tokens.font.style.lg["font-size"].desktop.value,
    ],
    fontFamily: tokens.font.style.lg["font-family"].value,
    lineHeight: tokens.font.style.lg["line-height"].value,
  },
  md: {
    fontSize: [
      tokens.font.style.md["font-size"].mobile.value,
      tokens.font.style.md["font-size"].desktop.value,
    ],
    fontFamily: tokens.font.style.md["font-family"].value,
    lineHeight: tokens.font.style.md["line-height"].value,
  },
  sm: {
    fontSize: [
      tokens.font.style.sm["font-size"].mobile.value,
      tokens.font.style.sm["font-size"].desktop.value,
    ],
    fontFamily: tokens.font.style.sm["font-family"].value,
    lineHeight: tokens.font.style.sm["line-height"].value,
  },
  xs: {
    fontSize: [
      tokens.font.style.xs["font-size"].mobile.value,
      tokens.font.style.xs["font-size"].desktop.value,
    ],
    fontFamily: tokens.font.style.xs["font-family"].value,
    lineHeight: tokens.font.style.xs["line-height"].value,
  },
};
