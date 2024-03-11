import { radioAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { focusVisibleStyles } from "../utils/focus-util";
import { mode } from "@chakra-ui/theme-tools";

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {
      _hover: {
        "input:enabled + .chakra-radio__control": {
          backgroundColor: "inherit",
          borderColor: mode("darkGrey", "white")(props),
        },
        "input:enabled:checked + .chakra-radio__control": {
          color: mode("darkTeal", "blueGreen")(props),
          borderColor: mode("darkTeal", "blueGreen")(props),
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
      borderColor: mode("blackAlpha.400", "whiteAlpha.400")(props),
      borderRadius: "50%",

      ...focusVisibleStyles(props),

      _disabled: {
        backgroundColor: mode("blackAlpha.100", "whiteAlpha.100")(props),
        borderColor: mode("blackAlpha.200", "whiteAlpha.200")(props),
        color: mode("blackAlpha.200", "whiteAlpha.300")(props),
      },
      _checked: {
        borderColor: mode("pine", "coralGreen")(props),
        color: mode("pine", "coralGreen")(props),
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
          backgroundColor: mode("blackAlpha.100", "whiteAlpha.100")(props),
          borderColor: mode("blackAlpha.200", "whiteAlpha.200")(props),
          color: mode("blackAlpha.200", "whiteAlpha.300")(props),
        },
      },
    },
  }),
});
export default config;
