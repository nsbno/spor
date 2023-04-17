import { theme as defaultTheme } from "@chakra-ui/theme";
import * as components from "./components";
import * as foundations from "./foundations";

export const theme = {
  ...defaultTheme,
  ...foundations,
  components: {
    ...defaultTheme.components,
    ...components,
  },
};

export { fontFaces } from "./font-faces";
