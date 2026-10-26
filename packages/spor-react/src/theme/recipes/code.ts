import { defineRecipe } from "@chakra-ui/react";

export const codeRecipie = defineRecipe({
  base: {
    fontFamily: "monospace",
    fontSize: ["mobile.xs", "desktop.xs"],
    borderRadius: "xs",
    paddingX: 1,
  },
});
