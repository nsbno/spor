import { anatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { baseBackground } from "../utils/background-utils";
import { baseBorder } from "../utils/border-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { baseText } from "../utils/text-utils";

const parts = anatomy("NumericStepper").parts(
  "container",
  "button",
  "text",
  "input",
);

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    input: {
      fontSize: "sm",
      fontWeight: "bold",
      marginX: 1,
      paddingX: 1,
      borderRadius: "xs",
      textAlign: "center",
      transitionProperty: "common",
      transitionDuration: "fast",
      ...baseBackground("default", props),
      ...baseText("default", props),

      _disabled: {
        pointerEvents: "none",
        opacity: 0.5,
      },

      _hover: {
        ...baseBorder("default", props),
      },

      _active: {
        ...baseBackground("active", props),
      },

      ...focusVisibleStyles(props),
    },
    text: {
      fontSize: "sm",
      fontWeight: "bold",
      marginX: 1,
      paddingX: 1,
      textAlign: "center",
      width: "4ch",
      ...baseText("default", props),
    },
    button: {
      minWidth: "24px",
      minHeight: "24px",
    },
  }),
});

export default config;
