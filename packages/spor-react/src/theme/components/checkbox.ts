import { checkboxAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { baseBackground, baseText } from "../utils/base-utils";
import { brandBackground, brandText } from "../utils/brand-utils";
import { focusVisibleStyles } from "../utils/focus-utils";

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {
      _hover: {
        "input:enabled:not([aria-invalid]) + .chakra-checkbox__control": {
          ...baseBackground("hover", props),
          borderColor: brandBackground("hover", props).backgroundColor,
        },
        "input:enabled[aria-invalid] + .chakra-checkbox__control": {
          backgroundColor: mode("white", "inherit")(props),
          borderColor: mode("outline.error.light", "outline.error.dark"),
        },
        "input:enabled:checked:not([aria-invalid]) + .chakra-checkbox__control":
          {
            ...brandBackground("hover", props),
            borderColor: brandBackground("hover", props).backgroundColor,
          },
        "input:enabled:checked[aria-invalid] + .chakra-checkbox__control": {
          borderColor: mode("outline.error.light", "outline.error.dark"),
          backgroundColor: mode("outline.error.light", "outline.error.dark"),
        },
      },
    },
    icon: {
      fontSize: "1em",
      transitionProperty: "transform",
      transitionDuration: "normal",
      strokeWidth: "1.5px !important", // Required to make the default icon look correct
    },
    control: {
      width: 4,
      height: 4,
      transitionProperty: "background, border-color",
      transitionDuration: "normal",
      border: "2px solid",
      borderColor: mode(
        "base.outline.default.light",
        "base.outline.default.dark",
      )(props),
      borderRadius: "xs",
      ...baseBackground("default", props),
      ...focusVisibleStyles(props),

      _checked: {
        ...brandText("default", props),
        ...brandBackground("default", props),
        borderColor: brandBackground("default", props).backgroundColor,

        _disabled: {
          ...baseBackground("disabled", props),
          ...baseText("disabled", props),
          borderColor: "currentColor",
        },

        _invalid: {
          backgroundColor: "brightRed",
          borderColor: "brightRed",
        },
      },

      _disabled: {
        ...baseBackground("disabled", props),
        borderColor: baseText("disabled", props).color,
      },
      _invalid: {
        ...baseBackground("default", props),
        borderColor: "brightRed",
      },
    },
    label: {
      userSelect: "none",
      _disabled: { opacity: 0.4 },
    },
  }),
});

export default config;
