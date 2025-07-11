import { defineSlotRecipe } from "@chakra-ui/react";

import { inputRecipe } from "../recipes/input";
import { NativeSelectAnatomy } from "./anatomy";

export const nativeSelectSlotRecipe = defineSlotRecipe({
  slots: NativeSelectAnatomy.keys(),
  className: "spor-nativeSelect",
  base: {
    root: {
      width: "100%",
      height: "fit-content",
      position: "relative",
    },
    field: {
      ...inputRecipe.base,
    },
    icon: {
      width: 5,
      height: 5,
      right: " 0.5rem",
      strokeLinecap: "round",
      position: "absolute",
      display: "inline-flex",
      boxAlign: "center",
      alignItems: "center",
      boxPack: "center",
      justifyContent: "center",
      pointerEvents: "none",
      top: "50%",
      transform: "translateY(-50%)",
      insetEnd: "0.5rem",
      color: "currentColor",
      fontSize: "sm",
      _disabled: {
        color: "text.disabled",
      },
    },
  },
  variants: {
    variant: {
      core: {
        field: {
          ...inputRecipe.variants?.variant.core,
        },
      },
      floating: {
        field: {
          ...inputRecipe.variants?.variant.floating,
        },
      },
    },
  },
});
