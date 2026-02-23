import { defineRecipe } from "@vygruppen/spor-react";

import { defineSemantics } from "../define/semantics";

export const badgeRecipe = defineRecipe({
  variants: {
    semantic: defineSemantics((theme) => ({
      backgroundColor: theme.colorSemanticFill,
      color: theme.colorSemanticTextMain,
      borderColor: theme.colorSemanticOutline,
      borderWidth: "1px",
    })),
  },
});
