import { defineSlotRecipe } from "@chakra-ui/react";
import { coreBackground, coreBorder, coreText } from "../utils/core-utils";
import { brandBackground } from "../utils/brand-utils";
import { focusVisibleStyles } from "../utils/focus-utils";

export const radioSlotRecipe = defineSlotRecipe({
  slots: ["container", "label", "control"],
  className: "spor-radio",
  base: {
    container: {
      _hover: {
        backgroundColor: "inherit",
        borderColor: "text",
        color: brandBackground("hover").backgroundColor,
      },
    },
    label: {
      userSelect: "none",
      _disabled: { opacity: 0.4 },
    },
    control: {
      width: "1rem",
      height: "1rem",
      backgroundColor: "inherit",
      border: "2px solid",
      borderColor: coreBorder("default").outlineColor,
      borderRadius: "50%",
      ...focusVisibleStyles(),
      _disabled: {
        ...coreBackground("disabled"),
        ...coreBorder("disabled"),
        ...coreText("disabled"),
      },
      _checked: {
        color: "brand.surface.default",
        borderColor: "currentColor",
        _before: {
          content: `""`,
          display: "inline-block",
          position: "relative",
          width: "50%",
          height: "50%",
          borderRadius: "50%",
          background: "currentColor",
        },
        _disabled: {
          pointerEvents: "none",
          ...coreBackground("disabled"),
          ...coreBorder("disabled"),
          ...coreText("disabled"),
        },
      },
    },
  },
});
