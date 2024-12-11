import { defineRecipe } from "@chakra-ui/react";
import { badgeRecipie } from "./badge";

const { variants } = badgeRecipie;

export const codeRecipie = defineRecipe({
  base: {
    fontFamily: "monospace",
    fontSize: ["mobile.xs", "desktop.xs"],
    borderRadius: "xs",
    paddingX: 1,
  },
  variants,
});
