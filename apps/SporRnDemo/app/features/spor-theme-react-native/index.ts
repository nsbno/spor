import { createTheme } from "@shopify/restyle";
import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { spacing } from "./spacing";

export const theme = createTheme({
  colors,
  spacing,
  breakpoints,
});

export type Theme = typeof theme;
