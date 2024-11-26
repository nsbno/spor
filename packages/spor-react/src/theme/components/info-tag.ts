import { defineSlotRecipe } from "@chakra-ui/react";
import { anatomy, mode } from "@chakra-ui/theme-tools";
import travelTagStyles from "./travel-tag";
import { useColorModeValue } from "../../color-mode";
import { tokens } from "../..";

const parts = anatomy("info-tag").parts(
  "container",
  "iconContainer",
  "icon",
  "textContainer",
  "title",
  "description",
);

export const infoTagSlotRecipe = defineSlotRecipe({
  slots: [
    "container",
    "iconContainer",
    "icon",
    "textContainer",
    "title",
    "description",
    "walk",
  ],
  className: "spor-info-tag",
  base: {
    ...travelTagStyles.base,
    iconContainer: {
      ...travelTagStyles.base.iconContainer,
      padding: 1,
    },
    textContainer: {
      color: "text.default",
    },
  },
  variants: {
    size: {
      ...travelTagStyles.sizes,
      sm: {
        ...travelTagStyles.sizes!.sm,
        iconContainer: {
          borderRadius: "0.375rem",
        },
      },
      md: {
        ...travelTagStyles.sizes!.md,
        iconContainer: {
          borderRadius: "0.375rem",
        },
      },
      lg: {
        ...travelTagStyles.sizes!.lg,
        iconContainer: {
          borderRadius: "sm",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
