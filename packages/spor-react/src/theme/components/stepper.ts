import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { anatomy, mode } from "@chakra-ui/theme-tools";

const parts = anatomy("stepper").parts(
  "root",
  "container",
  "innerContainer",
  "backButton",
  "title",
  "stepCounter",
  "stepContainer",
  "stepButton",
  "stepNumber",
  "stepTitle",
  "closeButton",
);

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: ["space-between", "center"],
      minHeight: ["48px", "60px"],
      overflowX: "auto",
      width: "100%",
    },
    container: {
      paddingX: [2, 2, 0],
      maxWidth: "container.lg",
      marginX: "auto",
      width: "100%",
    },
    innerContainer: {
      overflow: "hidden",
      display: ["flex", "none"],
      alignItems: "center",
      justifyContent: "space-between",
    },
    backButton: {
      borderRadius: "xs",
      paddingX: 0,
      width: "auto",
      minWidth: "auto",
    },
    title: {
      overflow: "hidden",
      fontWeight: "bold",
      WebkitLineClamp: 2,
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      marginLeft: 2,
      textAlign: "right",
    },
    stepContainer: {
      display: "flex",
      alignItems: "center",
    },
    stepTitle: {
      textStyle: "sm",
      whiteSpace: "nowrap",
    },
  }),
  variants: {
    base: () => ({
      root: {
        backgroundColor: "transparent",
      },
    }),
    accent: (props) => ({
      root: {
        backgroundColor: mode("seaMist", "pine")(props),
      },
    }),
  },
  defaultProps: {
    variant: "base",
  },
});

export default config;
