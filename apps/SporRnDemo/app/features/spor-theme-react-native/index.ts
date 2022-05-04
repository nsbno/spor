import { createTheme } from "@shopify/restyle";
import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { spacing } from "./spacing";
import { textVariants } from "./textVariants";

export const theme = createTheme({
  colors,
  spacing,
  breakpoints,
  textVariants,
});

export type Theme = typeof theme;
