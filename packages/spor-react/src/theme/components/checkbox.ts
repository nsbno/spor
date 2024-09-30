import { checkboxAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, css } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { brandBackground, brandText } from "../utils/brand-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { outlineBorder } from "../utils/outline-utils";

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {
      display: "flex",
      alignItems: "center",
    },
    control: {
      width: "22px",
      height: "22px",
      transitionProperty: "background, outline",
      transitionDuration: "normal",
      borderRadius: "xs",
      ...baseBackground("default", props),
      ...focusVisibleStyles(props),
      outline: "2px solid",
      outlineColor: baseBorder("default", props).outlineColor,
      _hover: {
        ...baseBorder("hover", props),
      },
      _focus: {
        outline: "4px solid",
        outlineStyle: "double",
        ...outlineBorder("focus", props),
        outlineOffset: "-1px",
      },
      _checked: {
        ...brandText("default", props),
        ...brandBackground("default", props),
        outlineColor: brandBackground("default", props).backgroundColor,
        _hover: {
          ...brandBackground("hover", props),
          outlineColor: brandBackground("hover", props).backgroundColor,
        },

        _disabled: {
          pointerEvents: "none",
          ...baseBackground("disabled", props),
          ...baseBorder("disabled", props),
          ...baseText("disabled", props),
        },

        _invalid: {
          backgroundColor: "brightRed",
          outlineColor: "brightRed",
        },
      },

      _disabled: {
        pointerEvents: "none",
        ...baseBackground("disabled", props),
        ...baseBorder("disabled", props),
        ...baseText("disabled", props),
      },
      _invalid: {
        ...baseBackground("default", props),
        outlineColor: "brightRed",
      },
    },
    label: {
      userSelect: "none",
      marginLeft: 1.5,
      _disabled: { opacity: 0.4 },
    },
  }),
});

export default config;
