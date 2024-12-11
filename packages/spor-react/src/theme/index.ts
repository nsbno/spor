import {
  createSystem,
  defaultBaseConfig,
  defineConfig,
  mergeConfigs,
} from "@chakra-ui/react";
import { animationStyles } from "./tokens/animation-styles";
import { breakpoints } from "./tokens/breakpoints";
import { globalCss } from "./global-css";
import { keyframes } from "./tokens/keyframes";
import { layerStyles } from "./tokens/layer-styles";
import { recipes } from "./recipes";
import { semanticTokens } from "./semantic-tokens";
import { slotRecipes } from "./slot-recipes";
import { textStyles } from "./tokens/text-styles";
import { tokens } from "./tokens";
import { config } from "./foundations";
import { brandTheme } from "./brand";

const themeConfig = defineConfig({
  ...config,
  ...brandTheme,
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
