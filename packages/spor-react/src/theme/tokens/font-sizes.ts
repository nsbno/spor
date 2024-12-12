import { defineTokens } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";

export const fontSizes = defineTokens.fontSizes({
  "2xs": { value: tokens.size.font.xs.mobile },
  xs: { value: tokens.size.font.sm.mobile },
  sm: { value: tokens.size.font.md.mobile },
  md: { value: tokens.size.font.lg.mobile },
  lg: { value: tokens.size.font.xl.mobile },
  xl: { value: tokens.size.font.xxl.mobile },
  "2xl": { value: tokens.size.font.xl.desktop },
  "3xl": { value: tokens.size.font.xxl.desktop },

  mobile: {
    xs: { value: tokens.size.font.xs.mobile },
    sm: { value: tokens.size.font.sm.mobile },
    md: { value: tokens.size.font.md.mobile },
    lg: { value: tokens.size.font.lg.mobile },
    xl: { value: tokens.size.font.xl.mobile },
    xxl: { value: tokens.size.font.xxl.mobile },
  },
  desktop: {
    xs: { value: tokens.size.font.xs.desktop },
    sm: { value: tokens.size.font.sm.desktop },
    md: { value: tokens.size.font.md.desktop },
    lg: { value: tokens.size.font.lg.desktop },
    xl: { value: tokens.size.font.xl.desktop },
    xxl: { value: tokens.size.font.xxl.desktop },
  },
});
