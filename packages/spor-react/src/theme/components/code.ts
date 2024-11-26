import { defineRecipe } from "@chakra-ui/react";
import { defineRecipe } from "@chakra-ui/react";
import Badge from "./badge";

const { variants } = Badge;
const { variants } = Badge;

export const codeRecipie = defineRecipe({
  base: {
    fontFamily: "monospace",
    fontSize: ["mobile.xs", "desktop.xs"],
    borderRadius: "xs",
    paddingX: 1,
  },
  variants,
});
