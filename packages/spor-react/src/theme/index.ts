import {
  createSystem,
  defaultBaseConfig,
  defineConfig,
} from "@chakra-ui/react";
import { animationStyles } from "./tokens/animation-styles";
import { breakpoints } from "./tokens/breakpoints";
import { globalCss } from "./tokens/global-css";
import { keyframes } from "./tokens/keyframes";
import { layerStyles } from "./tokens/layer-styles";
import { recipes } from "./recipes";
import { semanticTokens } from "./semantic-tokens";
import { slotRecipes } from "./slot-recipes";
import { textStyles } from "./tokens/text-styles";
import { tokens } from "./tokens";
import { config } from "./tokens/config";

export const themeConfig = defineConfig({
  ...config,
  globalCss,
  theme: {
    breakpoints,
    keyframes,
    tokens,
    semanticTokens,
    recipes,
    slotRecipes,
    textStyles,
    layerStyles,
    animationStyles,
  },
});

export const system = createSystem(defaultBaseConfig, themeConfig);
