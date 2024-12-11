import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineTokens,
  SystemConfig,
  SystemContext,
} from "@chakra-ui/react";
import * as foundations from "./foundations";
import tokens from "@vygruppen/spor-design-tokens";
import { recipes, slotRecipes } from "./components";

export type ColorsType = typeof tokens.color.alias &
  typeof tokens.color.palette &
  typeof tokens.color.vyDigital & { linjetag: typeof tokens.color.linjetag };

const tokensConfig = defineTokens({
  colors: {
    ...(tokens.color.alias as any),
    ...(tokens.color.palette as any),
    ...(tokens.color.vyDigital as any),
    linjetag: tokens.color.linjetag,
  },
});

export const system: SystemConfig = defineConfig({
  theme: {
    breakpoints: {
      ...foundations.breakpoints,
    },
    tokens: {
      ...tokensConfig,
    },
    semanticTokens: {
      colors: {
        danger: {
          value: { base: "{colors.red}", _dark: "{colors.darkred}" },
        },
        success: {
          value: { base: "{colors.green}", _dark: "{colors.darkgreen}" },
        },
      },
      fonts: {
        ...foundations.fonts,
      },
    },
    recipes: { ...recipes },
    slotRecipes: {
      ...slotRecipes,
    },
  },
});

export default createSystem(system, defaultConfig);
