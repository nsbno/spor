import { defineRecipe } from "@chakra-ui/react";

import { badgeRecipie } from "./badge";

export const codeRecipie = defineRecipe({
  base: {
    fontFamily: "monospace",
    fontSize: ["mobile.xs", "desktop.xs"],
    borderRadius: "xs",
    paddingX: 1,
  },
  variants: {
    colorPalette: badgeRecipie.variants?.colorPalette ?? {},
  },
});
