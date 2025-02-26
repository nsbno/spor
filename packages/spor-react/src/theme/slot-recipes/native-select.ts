import { coreBackground, coreBorder, coreText } from "../utils/core-utils";
import { floatingBorder } from "../utils/floating-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { inputVariant } from "../utils/input-utils";
import { defineSlotRecipe } from "@chakra-ui/react";
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
      _focusVisible: {
        ...focusVisibleStyles()._focusVisible,
      },
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
  variants: {
    variant: {
      core: {
        field: {
          ...inputVariant("base"),
          _disabled: {
            ...coreBackground("disabled"),
            ...coreBorder("disabled"),
            pointerEvents: "none",
          },
          _invalid: {
            ...coreBorder("invalid"),
            _active: {
              ...coreBorder("invalid"),
            },
            _focus: {
              ...coreBorder("invalid"),
            },
            _hover: {
              ...coreBorder("hover"),
            },
          },
          _hover: {
            ...coreBorder("hover"),
            outlineStyle: "solid",
            outlineWidth: "2px",
            outlineColor: "#2b2b2c",
          },
        },
      },
      floating: {
        field: {
          ...inputVariant("floating"),
          _hover: {
            ...floatingBorder("hover"),
            _active: {
              ...floatingBorder("active"),
            },
          },
          _disabled: {
            ...coreBackground("disabled"),
            ...coreBorder("disabled"),
            pointerEvents: "none",
          },
          _invalid: {
            ...coreBorder("invalid"),
            _active: {
              ...coreBorder("invalid"),
            },
            _focus: {
              ...coreBorder("invalid"),
            },
            _hover: {
              ...coreBorder("hover"),
            },
          },
        },
      },
    },
  },
});
