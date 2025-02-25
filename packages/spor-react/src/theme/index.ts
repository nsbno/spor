import {
  createSystem,
  defaultBaseConfig,
  defineConfig,
} from "@chakra-ui/react";
import { animationStyles } from "./tokens/animation-styles";
import { breakpoints } from "./tokens/breakpoints";
import { globalCss } from "./tokens/global-css";
import { keyframes } from "./tokens/keyframes";
import { recipes } from "./recipes";
import { semanticTokens } from "./semantic-tokens";
import { slotRecipes } from "./slot-recipes";
import { textStyles } from "./tokens/text-styles";
import { tokens } from "./tokens";
import { Brand } from "./brand";
import { config } from "./tokens/config";

const generateTheme = (brand: Brand) =>
  defineConfig({
    ...config,
    globalCss,
    theme: {
      breakpoints,
      keyframes,
      tokens,
      semanticTokens: semanticTokens[brand],
      recipes,
      slotRecipes,
      textStyles,
      animationStyles,
    },
  });

export const themes = {
  [Brand.VyDigital]: createSystem(
    defaultBaseConfig,
    generateTheme(Brand.VyDigital),
  ),
  [Brand.CargoNet]: createSystem(
    defaultBaseConfig,
    generateTheme(Brand.CargoNet),
  ),
  [Brand.VyUtvikling]: createSystem(
    defaultBaseConfig,
    generateTheme(Brand.VyUtvikling),
  ),
};

export const system = themes[Brand.VyDigital];
