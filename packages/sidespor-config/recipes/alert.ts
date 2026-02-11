import { AlertProps } from "@vygruppen/spor-react";

import { defineCompounds } from "../define/compounds";
import { defineSlotRecipe } from "../define/slotRecipe";
import { Semantics } from "../theme/themeSemantics";

type Variant = AlertProps["variant"];
const variantToSemantic = (semantic: Semantics): Variant => {
  switch (semantic) {
    case "alarm": {
      return "error";
    }
    case "secondaryAlarm": {
      return "error-secondary";
    }
    case "warning": {
      return "important";
    }
    case "success": {
      return "success";
    }
    case "info": {
      return "info";
    }
    case "neutral": {
      return "neutral";
    }
    case "special":
    case "ghost": {
      return undefined;
    }
  }
};

export const alertRecipe = defineSlotRecipe({
  variants: { semantic: {} },
  compoundVariants: defineCompounds((theme, semantic) => ({
    variant: variantToSemantic(semantic),
    semantic: true,
    css: {
      root: {
        backgroundColor: theme.colorSemanticFill,
      },
    },
  })),
});
