import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineTokens,
} from "@chakra-ui/react";
import * as foundations from "./foundations";
import tokens from "@vygruppen/spor-design-tokens";
import { drawerRecipe } from "./components/drawer";
import { buttonRecipe } from "./components/button";
import badgeRecipie from "./components/badge";
import { dialogRecipe } from "./components";

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

export const config = defineConfig({
  theme: {
    breakpoints: {
      ...foundations.breakpoints,
    },
    tokens: {
      ...tokensConfig,
    },
    semanticTokens: {
      colors: {
        ...(tokens.color.vyDigital as any),
      },
      fonts: {
        ...foundations.fonts,
      },
    },
    recipes: {
      button: buttonRecipe,
      badge: badgeRecipie,
    },
    slotRecipes: {
      drawer: drawerRecipe,
      dialog: dialogRecipe,
    },
  },
});

export const system = createSystem(config);
