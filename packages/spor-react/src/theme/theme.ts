import { createSystem, defaultConfig } from "@chakra-ui/react";
import { theme as defaultTheme } from "@chakra-ui/theme";
import * as components from "./components";
import * as foundations from "./foundations";

export const system = createSystem(defaultConfig, {
  ...defaultTheme,
  ...foundations,
  components: {
    ...defaultTheme.components,
    ...components,
  },
})