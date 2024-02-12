import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { anatomy, mode } from "@chakra-ui/theme-tools";

const parts = anatomy("progress-indicator").parts(
  "root",
  "container",
  "progressDot",
);

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    root: {
      width: "100%",
    },
    container: {
      display: "flex",
      alignItems: "center",
      gap: 1,
      justifyContent: ["space-between", "center"],
    },
    progressDot: {
      height: 1,
      width: 1,
      "&[aria-current='step']": {
        circle: {
          fill: mode("pine", "coralGreen")(props),
        },
      },
      circle: {
        fill: mode("blackAlpha.200", "whiteAlpha.200")(props),
      },
    },
  }),
  defaultProps: {
    variant: "base",
  },
});

export default config;
