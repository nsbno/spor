import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { anatomy, mode } from "@chakra-ui/theme-tools";

const parts = anatomy("stepper").parts(
  "root",
  "container",
  "innerContainer",
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
  baseStyle: {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: ["space-between", null, "center"],
      minHeight: ["48px", null, "60px"],
      overflowX: "auto",
      width: "100%",
    },
    container: {
      paddingX: [2, null, null, 0],
      maxWidth: "container.lg",
      marginX: "auto",
      width: "100%",
    },
    innerContainer: {
      overflow: "hidden",
      display: ["flex", null, "none"],
      alignItems: "center",
      justifyContent: "space-between",
      gap: 3,
    },
    title: {
      overflow: "hidden",
      fontWeight: "bold",
      WebkitLineClamp: 2,
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      textAlign: "center",
      maxWidth: "80%",
    },
    stepContainer: {
      display: "flex",
      alignItems: "center",
    },
    stepTitle: {
      textStyle: "sm",
      whiteSpace: "nowrap",
    },
  },
  variants: {
    base: () => ({
      root: {
        backgroundColor: "transparent",
      },
    }),
    accent: (props) => ({
      root: {
        backgroundColor: mode("seaMist", "pine")(props),
        color: mode("darkTeal", "seaMist")(props),
      },
      stepButton: {
        color:
          props.state === "disabled"
            ? mode("blackAlpha.400", "whiteAlpha.400")(props)
            : props.state === "completed"
              ? mode("darkTeal", "white")(props)
              : mode("white", "darkTeal")(props),
        _hover: {
          backgroundColor:
            props.state === "disabled"
              ? "transparent"
              : mode("coralGreen", "greenHaze")(props),
        },
      },
      backButton: {
        _hover: {
          backgroundColor: mode("coralGreen", "greenHaze")(props),
        },
      },
    }),
  },
  defaultProps: {
    variant: "base",
  },
});

export default config;
