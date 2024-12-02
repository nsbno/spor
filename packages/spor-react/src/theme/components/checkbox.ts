import { brandBackground } from "../utils/brand-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { defineSlotRecipe } from "@chakra-ui/react";

export const checkboxRecipe = defineSlotRecipe({
  slots: ["control", "label"],
  base: {
    control: {
      appearance: "none",
      display: "inline-flex",
      alignItems: "center",
      verticalAlign: "top",
      outline: "none",
      userSelect: "none",
      position: "relative",
      _disabled: {
        cursor: "not-allowed",
        opacity: 0.5,
      },
      _hover: {
        cursor: "pointer",
      },
      _focus: {
        ...focusVisibleStyles(),
      },
    },
    label: {
      marginLeft: 2,
    },
  },
  variants: {
    color: {
      primary: {
        control: {
          _checked: {
            ...brandBackground("default"),
          },
        },
      },
      secondary: {
        control: {
          _checked: {
            backgroundColor: "gray.300",
          },
        },
      },
    },
    size: {
      sm: {
        control: { width: "1rem", height: "1rem" },
        label: { fontSize: "xs" },
      },
      md: {
        control: { width: "1.5rem", height: "1.5rem" },
        label: { fontSize: "sm" },
      },
      lg: {
        control: { width: "2rem", height: "2rem" },
        label: { fontSize: "md" },
      },
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
  },
});