import {
  createSystem,
  defaultConfig,
  defineConfig,
  defineTokens,
} from "@chakra-ui/react";
import * as foundations from "./foundations";
import tokens from "@vygruppen/spor-design-tokens";

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
  },
});

export const system = createSystem(config);
