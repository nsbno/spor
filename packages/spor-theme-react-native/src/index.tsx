import { createTheme } from "@shopify/restyle";
import * as components from "./components";
import * as foundations from "./foundations";

export const theme = createTheme({
  ...foundations,
  ...components,
});

export type Theme = typeof theme;
