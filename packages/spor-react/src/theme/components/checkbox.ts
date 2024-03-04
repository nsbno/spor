import { checkboxAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { focusVisibleStyles } from "../utils/focus-util";
import { mode } from "@chakra-ui/theme-tools";
import { baseBackground } from "../utils/background-utils";
import { baseText } from "../utils/text-utils";

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {
      _hover: {
        "input:enabled:not([aria-invalid]) + .chakra-checkbox__control": {
          ...baseBackground("hover", props),
          borderColor: mode("darkGrey", "white")(props),
        },
        "input:enabled[aria-invalid] + .chakra-checkbox__control": {
          backgroundColor: mode("white", "inherit")(props),
          borderColor: "brightRed",
        },
        "input:enabled:checked:not([aria-invalid]) + .chakra-checkbox__control":
          {
            backgroundColor: mode("darkTeal", "blueGreen")(props),
            borderColor: mode("darkTeal", "blueGreen")(props),
          },
        "input:enabled:checked[aria-invalid] + .chakra-checkbox__control": {
          backgroundColor: "brightRed",
          borderColor: "brightRed",
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
      borderColor: mode("blackAlpha.400", "whiteAlpha.400")(props),
      borderRadius: "xs",
      color: mode("white", "darkTeal")(props),
      ...baseBackground("default", props),

      _checked: {
        ...baseBackground("selected", props),
        borderColor: mode("pine", "coralGreen")(props),
        ...baseText("default", props),
        color: mode("white", "darkTeal")(props),

        ...focusVisibleStyles(props),

        _disabled: {
          ...baseBackground("disabled", props),
          borderColor: mode("blackAlpha.200", "whiteAlpha.200")(props),
          color: mode("blackAlpha.200", "whiteAlpha.200")(props),
        },

        _invalid: {
          backgroundColor: "brightRed",
          borderColor: "brightRed",
        },
      },

      _disabled: {
        ...baseBackground("disabled", props),
        borderColor: mode("blackAlpha.200", "whiteAlpha.200")(props),
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
