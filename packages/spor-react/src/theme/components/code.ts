import { defineRecipe } from "@chakra-ui/react";
import Badge from "./badge";

const { variants } = Badge;

const codeRecipie = defineRecipe({
  base: {
    fontFamily: "monospace",
    fontSize: ["mobile.xs", "desktop.xs"],
    borderRadius: "xs",
    paddingX: 1,
  },
  variants,
});

export default codeRecipie;
