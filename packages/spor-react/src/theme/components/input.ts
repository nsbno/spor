import { inputBaseStyle, inputVariant } from "../utils/input-utils";
import { defineSlotRecipe } from "@chakra-ui/react";

export const inputSlotRecipe = defineSlotRecipe({
  slots: ["group", "addon", "field", "element"],
  base: {
    ...inputBaseStyle(),
  },
  variants: {
    variant: {
      base: {
        field: {
          ...inputVariant("base"),
        },
      },
      floating: {
        field: {
          ...inputVariant("floating"),
        },
      },
    },
  },
  defaultVariants: {
    variant: "base",
  },
});

export default inputSlotRecipe;
