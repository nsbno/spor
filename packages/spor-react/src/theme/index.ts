import { theme as defaultTheme } from "@chakra-ui/theme";
import * as components from "./components";
import * as foundations from "./foundations";

export enum Brand {
  VyDigital = "VyDigital",
  VyUtvikling = "VyUtvikling",
}

export const theme = {
  ...defaultTheme,
  ...foundations,
  components: {
    ...defaultTheme.components,
    ...components,
  },
};

export const brandTheme = {
  [Brand.VyDigital]: {},
  [Brand.VyUtvikling]: {
    colors: {
      accent: {
        surface: {
          default: {
            light: foundations.colors.seaMist,
            dark: foundations.colors.darkGrey,
          },
        },
      },
    },
  },
};

export { fontFaces } from "./font-faces";
