import { defineRecipe } from "@chakra-ui/react";

export const progressLoaderRecipe = defineRecipe({
  base: {
    minWidth: "100px",

    "& path[id$='-track']": {
      stroke: { _light: "coralGreen", _dark: "greenHaze" },
    },
    "& path[id$='-progress']": {
      stroke: { _light: "greenHaze", _dark: "coralGreen" },
    },
  },
});
