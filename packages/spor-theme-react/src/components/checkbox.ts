import { checkboxAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      _hover: {
        "input:enabled:not([aria-invalid]) + .chakra-checkbox__control": {
          backgroundColor: "white",
          borderColor: "primaryGreen",
        },
        "input:enabled[aria-invalid] + .chakra-checkbox__control": {
          backgroundColor: "white",
          borderColor: "brightRed",
        },
        "input:enabled:checked:not([aria-invalid]) + .chakra-checkbox__control":
          {
            backgroundColor: "darkTeal",
            borderColor: "darkTeal",
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
      backgroundColor: "white",
      border: "2px solid",
      borderColor: "darkTeal",
      borderRadius: "xs",
      color: "white",

      _checked: {
        backgroundColor: "primaryGreen",
        borderColor: "primaryGreen",
        color: "white",

        _focus: {
          backgroundColor: "primaryGreen",
          borderColor: "azure",
        },

        _disabled: {
          backgroundColor: "lightGrey",
          borderColor: "steel",
          color: "steel",
        },

        _invalid: {
          backgroundColor: "brightRed",
          borderColor: "brightRed",
        },
      },

      _disabled: {
        backgroundColor: "lightGrey",
        borderColor: "steel",
      },

      _focus: {
        backgroundColor: "white",
        borderColor: "azure",
      },

      _invalid: {
        backgroundColor: "white",
        borderColor: "brightRed",
      },
    },
    label: {
      userSelect: "none",
      _disabled: { opacity: 0.4 },
    },
  },
});

export default config;
