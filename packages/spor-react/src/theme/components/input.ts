import { inputBaseStyle, inputVariant } from "../utils/input-utils";
import { defineRecipe } from "@chakra-ui/react";

const inputRecipe = defineRecipe({
  base: {
    ...inputBaseStyle(),
  },
  variants: {
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
});

export default inputRecipe;
