import { baseText } from "../utils/base-utils";
import { inputBaseStyle, inputVariant } from "../utils/input-utils";
import { defineSlotRecipe } from "@chakra-ui/react";

export const nativeSelectSlotRecipe = defineSlotRecipe({
  slots: ["root", "field", "indicator", "icon"],
  className: "spor-native-select",
  base: {
    root: {
      width: "100%",
      height: "fit-content",
      position: "relative",
      "& + label": {
        fontSize: ["mobile.sm", "desktop.sm"],
        top: "0.2rem",
        left: 3,
        zIndex: 2,
        position: "absolute",
        marginY: 2,
        transformOrigin: "top left",
        transform: [
          "scale(0.825) translateY(-12px)",
          "scale(0.825) translateY(-14px)",
        ],
      },
    },
    field: {
      ...inputBaseStyle().field,
      appearance: "none",
      paddingTop: "1rem",
    },
    icon: {
      width: 5,
      height: 5,
      insetEnd: "0.5rem",
      position: "relative",
      color: "currentColor",
      strokeLinecap: "round",
      fontSize: "sm",
      _disabled: {
        ...baseText("disabled"),
      },
    },
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

export default nativeSelectSlotRecipe;
