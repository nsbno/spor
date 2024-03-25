import { theme as defaultTheme } from "@chakra-ui/theme";
import tokens from "@vygruppen/spor-design-tokens";
import * as components from "./components";
import * as foundations from "./foundations";

export enum Brand {
  VyDigital = "VyDigital",
  VyUtvikling = "VyUtvikling",
  CargoNet = "CargoNet",
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
      bg: {
        default: {
          dark: foundations.colors.darkGrey,
        },
      },
      surface: {
        default: {
          dark: foundations.colors.darkGrey,
        },
      },
    },
  },
  [Brand.CargoNet]: {
    colors: tokens.color.cargonet as any,
  },
};

export { fontFaces } from "./font-faces";
