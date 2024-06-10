import { radioAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { brandBackground, brandText } from "../utils/brand-utils";
import { focusVisibleStyles } from "../utils/focus-utils";

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {
      _hover: {
        "input:enabled + .chakra-radio__control": {
          backgroundColor: "inherit",
          borderColor: mode("text.default.light", "text.default.dark")(props),
        },
        "input:enabled:checked + .chakra-radio__control": {
          color: brandBackground("hover", props).backgroundColor,
          borderColor: brandBackground("hover", props).backgroundColor,
        },
      },
    },
    label: {
      userSelect: "none",
      _disabled: { opacity: 0.4 },
    },
    control: {
      width: 4,
      height: 4,
      backgroundColor: "inherit",
      border: "2px solid",
      borderColor: baseBorder("default", props).outlineColor,
      borderRadius: "50%",

      ...focusVisibleStyles(props),

      _disabled: {
        ...baseBackground("disabled", props),
        ...baseBorder("disabled", props),
        ...baseText("disabled", props),
      },
      _checked: {
        color: mode(
          "brand.surface.default.light",
          "brand.surface.default.dark",
        )(props),
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
          ...baseBackground("disabled", props),
          ...baseBorder("disabled", props),
          ...baseText("disabled", props),
        },
      },
    },
  }),
});
export default config;
