import tokens from "@vygruppen/spor-design-tokens";

export const fontSizes = {
  "2xs": tokens.size.font.xs.mobile.value,
  xs: tokens.size.font.sm.mobile.value,
  sm: tokens.size.font.md.mobile.value,
  md: tokens.size.font.lg.mobile.value,
  lg: tokens.size.font.xl.mobile.value,
  xl: tokens.size.font.xxl.mobile.value,
  "2xl": tokens.size.font.xl.desktop.value,
  "3xl": tokens.size.font.xxl.desktop.value,

  mobile: {
    xs: tokens.size.font.xs.mobile.value,
    sm: tokens.size.font.sm.mobile.value,
    md: tokens.size.font.md.mobile.value,
    lg: tokens.size.font.lg.mobile.value,
    xl: tokens.size.font.xl.mobile.value,
    xxl: tokens.size.font.xxl.mobile.value,
  },
  desktop: {
    xs: tokens.size.font.xs.desktop.value,
    sm: tokens.size.font.sm.desktop.value,
    md: tokens.size.font.md.desktop.value,
    lg: tokens.size.font.lg.desktop.value,
    xl: tokens.size.font.xl.desktop.value,
    xxl: tokens.size.font.xxl.desktop.value,
  },
};
