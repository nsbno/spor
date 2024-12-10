import { defineSlotRecipe } from "@chakra-ui/react";
import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { brandBackground } from "../utils/brand-utils";
import { focusVisibleStyles } from "../utils/focus-utils";

export const radioSlotRecipe = defineSlotRecipe({
  slots: ["container", "label", "control"],
  className: "spor-radio",
  base: {
    container: {
      _hover: {
        backgroundColor: "inherit",
        borderColor: "text.default.light",
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
      borderColor: baseBorder("default").outlineColor,
      borderRadius: "50%",
      ...focusVisibleStyles(),
      _disabled: {
        ...baseBackground("disabled"),
        ...baseBorder("disabled"),
        ...baseText("disabled"),
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
          ...baseBackground("disabled"),
          ...baseBorder("disabled"),
          ...baseText("disabled"),
        },
      },
    },
  },
});

export default radioSlotRecipe;
