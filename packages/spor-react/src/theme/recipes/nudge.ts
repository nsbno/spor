import { defineRecipe } from "@chakra-ui/react";

export const nudgeActionsRecipe = defineRecipe({
  base: {
    display: "flex",
    paddingTop: "1rem",
    alignItems: "center",
    gap: "0.5rem",
    justifyContent: "between",
    width: "100%",
  },
});
