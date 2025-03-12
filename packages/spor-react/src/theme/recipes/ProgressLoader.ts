import { defineRecipe } from "@chakra-ui/react";

export const progressLoaderRecipe = defineRecipe({
  base: {
    minWidth: "100px",

    "& path[id$='-track']": {
      stroke: { _light: "#B2DFD7", _dark: "#00957A" },
    },
    "& path[id$='-progress']": {
      stroke: { _light: "#00957A", _dark: "#B2DFD7" },
    },
  },
});
