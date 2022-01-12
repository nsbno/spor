import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";
import * as components from "./components";
import * as foundations from "./foundations";

export const theme = extendTheme({
  ...foundations,
  components: { ...chakraTheme, ...components },
});

export { fontFaces } from "./font-faces";
