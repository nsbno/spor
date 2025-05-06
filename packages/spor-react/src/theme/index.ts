import {
  createSystem,
  defaultBaseConfig,
  defineConfig,
} from "@chakra-ui/react";

import { Brand } from "./brand";
import { recipes } from "./recipes";
import { semanticTokens } from "./semantic-tokens";
import { slotRecipes } from "./slot-recipes";
import { tokens } from "./tokens";
import { animationStyles } from "./tokens/animation-styles";
import { breakpoints } from "./tokens/breakpoints";
import { config } from "./tokens/config";
import { globalCss } from "./tokens/global-css";
import { keyframes } from "./tokens/keyframes";
import { textStyles } from "./tokens/text-styles";

export { createSystem, defineConfig } from "@chakra-ui/react";

const generateTheme = (brand: Brand) => {
  return defineConfig({
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
};

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
