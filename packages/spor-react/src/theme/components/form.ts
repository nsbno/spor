import { formAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {
      width: "100%",
      position: "relative",
      transitionProperty: "common",
      transitionDuration: "fast",
    },
    requiredIndicator: {
      marginStart: 1,
      color: mode("brightRed", "lightRed")(props),
    },
    helperText: {
      marginTop: 2,
      color: mode("dimGrey", "whiteAlpha.600")(props),
      lineHeight: "normal",
      fontSize: "sm",
    },
  }),
});
export default config;
