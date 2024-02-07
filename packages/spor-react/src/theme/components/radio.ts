import { radioAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { focusVisibleStyles } from "../utils/focus-util";

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {
      _hover: {
        "input:enabled + .chakra-radio__control": {
          backgroundColor: "white",
          borderColor: "primaryGreen",
        },
        "input:enabled:checked + .chakra-radio__control": {
          color: "darkTeal",
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
      backgroundColor: "white",
      border: "2px solid",
      borderColor: "primaryGreen",
      borderRadius: "50%",

      ...focusVisibleStyles(props),

      _disabled: {
        backgroundColor: "lightGrey",
        borderColor: "steel",
      },
      _checked: {
        borderColor: "currentColor",
        color: "primaryGreen",
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
          backgroundColor: "lightGrey",
          borderColor: "steel",
        },
      },
    },
  }),
});
export default config;
