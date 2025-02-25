import { coreText } from "../utils/core-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { inputBaseStyle, inputVariant } from "../utils/input-utils";
import { defineSlotRecipe } from "@chakra-ui/react";

export const nativeSelectSlotRecipe = defineSlotRecipe({
  slots: ["root", "field", "indicator", "icon", "label"],
  className: "spor-native-select",
  base: {
    root: {
      width: "100%",
      height: "fit-content",
      position: "relative",
      /*   position: "relative",
      height: "fit-content",
      transitionProperty: "common",
      transitionDuration: "fast",
      boxSizing: "border-box",
      overflowWrap: "break-word",
      backgroundColor: "red", */
    },
    field: {
      paddingInlineEnd: 3,
      paddingInlineStart: 3,
      appearance: "none",
      width: "100%",
      height: 8,
      outlineStyle: "solid",
      outlineWidth: 1,
      border: "0px",
      borderRadius: "sm",
      transitionProperty: "common",
      transitionDuration: "fast",
      fontSize: "sm",
      paddingTop: "1rem",
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
        ...coreText("disabled"),
      },
    },
    label: {
      fontSize: "xs",
      top: "0.2rem",
      left: 3,
      zIndex: 2,
      position: "absolute",
      marginTop: 2,
      marginBottom: 2,
      transformOrigin: "left top",
      transform: "scale(0.825) translateY(-10px)",
      paddingInline: 0,
    },
  },
  /*  variants: {
    variant: {
      core: {
        field: {
          ...inputVariant("base"),
          backgroundColor: "red",
        },
      },
      floating: {
        field: {
          ...inputVariant("floating"),
          backgroundColor: "blue",
        },
      },
    },
  },
  defaultVariants: {
    variant: "core",
  }, */
});
