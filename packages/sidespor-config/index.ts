import {
  defineConfig,
  mergeConfigs,
  SystemConfig,
} from "@vygruppen/spor-react";

import { alertRecipe } from "./recipes/alert";
import { badgeRecipe } from "./recipes/badge";
import { buttonRecipe } from "./recipes/button";
import { dialogRecipe } from "./recipes/dialog";
import { tableRecipe } from "./recipes/table";
import { semanticTokens } from "./theme/semanticTokens";

export const sidesporConfig = defineConfig({
  theme: {
    semanticTokens,
    recipes: {
      badge: badgeRecipe,
      button: buttonRecipe,
    },
    slotRecipes: {
      alert: alertRecipe,
      dialog: dialogRecipe,
      table: tableRecipe,
    },
  },
});

export const extendSidespor = (systemConfig: SystemConfig): SystemConfig => {
  return mergeConfigs(systemConfig, sidesporConfig);
};
