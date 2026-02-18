import { defineRecipe } from "@vygruppen/spor-react";

import { defineCompounds } from "../define/compounds";
import { defineSemantics } from "../define/semantics";

export const buttonRecipe = defineRecipe({
  variants: { semantic: defineSemantics(() => ({})) }, // Necessary for compoundVariants
  compoundVariants: [
    ...defineCompounds((theme, semantic) => ({
      variant: "primary",
      semantic,
      size: ["xs", "sm", "md", "lg"],
      css: {
        "&&&": {
          backgroundColor: theme.colorSemantic,
          color: theme.colorSemanticTextTertiary,
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: theme.colorSemanticPulse,
          },
          "&:active": {
            backgroundColor: `${theme.colorSemantic} !important`,
          },
          "&:disabled": {
            outline: "none",
            opacity: 0.5,
          },
        },
      },
    })),
    ...defineCompounds((theme, semantic) => ({
      variant: "tertiary",
      semantic,
      size: ["xs", "sm", "md", "lg"],
      css: {
        "&&&": {
          backgroundColor: theme.colorSemanticFill,
          color: theme.colorSemanticTextMain,
          outlineColor: theme.colorSemantic,
          "&:hover": {
            backgroundColor: theme.colorSemanticFill,
            outlineColor: theme.colorSemantic,
          },
          "&:active": {
            backgroundColor: `${theme.colorSemanticFillPulse} !important`,
          },
          "&:disabled": {
            backgroundColor: theme.colorSemanticFillPulse,
            outline: "none",
            opacity: 0.5,
          },
        },
      },
    })),
  ],
});
