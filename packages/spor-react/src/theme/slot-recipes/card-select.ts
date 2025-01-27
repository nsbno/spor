import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { floatingBackground, floatingBorder } from "../utils/floating-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { defineSlotRecipe } from "@chakra-ui/react";

export const cardSelectSlotRecipe = defineSlotRecipe({
  slots: ["trigger", "card"],
  className: "spor-card-select",
  base: {
    trigger: {
      appearance: "none",
      display: "flex",
      alignItems: "center",
      transitionProperty: "outline",
      transitionDuration: "fast",
      ...baseText("default"),
      ...focusVisibleStyles(),
    },
    card: {
      borderRadius: "sm",
      boxShadow: "md",
      padding: 3,
      ...baseText("default"),
      backgroundColor: `color-mix(in srgb, white 10%, var(--spor-colors-bg-default-dark))`,
    },
  },
  variants: {
    variant: {
      core: {
        trigger: {
          ...baseBorder("default"),
          _hover: {
            ...baseBorder("hover"),
          },
          _active: {
            ...baseBackground("active"),
            ...baseBorder("default"),
          },
          _expanded: {
            ...baseBackground("active"),
          },
        },
      },
      floating: {
        trigger: {
          boxShadow: "sm",
          ...floatingBackground("default"),
          ...floatingBorder("default"),
          transition: "all .1s ease-out",
          _hover: {
            ...floatingBackground("hover"),
            ...floatingBorder("hover"),
          },
          _active: {
            ...floatingBackground("active"),
            ...floatingBorder("active"),
          },
          _expanded: {
            ...floatingBackground("active"),
          },
        },
      },
    },
    size: {
      sm: {
        trigger: {
          paddingX: 1.5,
          paddingY: 1,
          minHeight: "1.25rem",
          fontSize: "xs",
          borderRadius: "sm",
        },
      },
      md: {
        trigger: {
          paddingX: 2,
          paddingY: 1.5,
          minHeight: "2.625rem",
          fontSize: "sm",
          borderRadius: "sm",
        },
      },
      lg: {
        trigger: {
          paddingX: 3,
          paddingY: 2,
          minHeight: "3.375rem",
          fontSize: "sm",
          borderRadius: "sm",
        },
      },
    },
  },
  defaultVariants: {
    variant: "core",
    size: "md",
  },
});
