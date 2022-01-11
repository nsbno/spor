import { extendTheme } from "@chakra-ui/react";
import * as components from "./components";
import * as foundations from "./foundations";

export const theme = extendTheme({
  ...foundations,
  components,
});

export { fontFaces } from "./font-faces";
