/* eslint-disable spor/use-semantic-tokens */
import {
  defineConfig,
  defineRecipe,
  mergeConfigs,
} from "@vygruppen/spor-react";

import { SystemConfig } from "./types";

export const sidesporConfig = defineConfig({
  theme: {
    recipes: {
      button: defineRecipe({
        base: {
          textDecoration: "underline",
          borderRadius: "none",
        },

        variants: {
          variant: {
            "weird-blue": {
              bg: "blue",
              color: "white",
            },
            pink: {
              bg: "pink",
            },
          },
        },
      }),
    },
  },
});

export const extendSidespor = (systemConfig: SystemConfig): SystemConfig => {
  return mergeConfigs(systemConfig, sidesporConfig);
};
