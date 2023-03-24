import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { anatomy, mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

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
  "closeButton"
);

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    root: {
      backgroundColor: getRootBackgroundColor(props),
      display: "flex",
      alignItems: "center",
      justifyContent: ["space-between", "center"],
      minHeight: ["48px", "60px"],
      overflowX: "auto",
      width: "100%",
    },
    container: {
      px: [2, 2, 0],
      maxWidth: "container.lg",
      mx: "auto",
      width: "100%",
    },
    innerContainer: {
      overflow: "hidden",
      display: ["flex", "none"],
      alignItems: "center",
      justifyContent: "space-between",
      color: getColor(props),
    },
    backButton: {
      borderRadius: "xs",
      px: 0,
      width: "auto",
      minWidth: "auto",
    },
    title: {
      overflow: "hidden",
      fontWeight: "bold",
      WebkitLineClamp: 2,
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      ml: 2,
      textAlign: "right",
    },
    stepCounter: {
      whiteSpace: "nowrap",
      textDecoration: "underline",
    },
    stepContainer: {
      display: "flex",
      alignItems: "center",
    },
    stepButton: {
      color: "inherit",
      display: "flex",
      alignItems: "center",
      padding: 1,
      borderRadius: "xs",
    },
    stepNumber: {
      borderRadius: "round",
      border: "sm",
      borderColor: "currentColor",
      width: 4,
      height: 4,
      mr: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: ["mobile.xs", "desktop.xs"],
    },
    stepTitle: {
      textStyle: "sm",
      whiteSpace: "nowrap",
    },
  }),
  variants: {
    completed: (props) => ({
      stepContainer: {
        color: getColor(props),
      },
      stepButton: {
        _hover: getHoverStyles(props),
        _focus: getFocusStyles(props),
        "&:focus:not(:focus-visible)": {
          boxShadow: "none",
        },
        _focusVisible: getFocusStyles(props),
        _active: getActiveStyles(props),
      },
    }),
    active: (props) => ({
      stepContainer: {
        color: getColor(props),
      },
      stepButton: {
        pointerEvents: "none",
      },
      stepNumber: getStepNumberStyles(props),
      stepTitle: {
        fontWeight: "bold",
      },
    }),
    disabled: (props) => ({
      stepContainer: {
        color: getDisabledColor(props),
      },
      stepButton: {
        pointerEvents: "none",
      },
    }),
  },
  defaultProps: {
    colorScheme: "green",
  },
});

export default config;

const getRootBackgroundColor = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "light":
      return "white";
    case "dark":
      return "darkTeal";
    case "green":
    default:
      return "seaMist";
  }
};

const getColor = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "light":
      return mode("darkGrey", "white")(props);
    case "dark":
      return "white";
    case "green":
    default:
      return mode("darkTeal", "white")(props);
  }
};

const getStepNumberStyles = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "dark":
      return {
        backgroundColor: "white",
        color: "darkTeal",
      };
    case "light":
    case "green":
    default:
      return {
        backgroundColor: mode("darkTeal", "white")(props),
        color: mode("white", "darkTeal")(props),
      };
  }
};

const getDisabledColor = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "dark":
      return "whiteAlpha.400";
    case "green":
      return "dimGrey";
    case "light":
    default:
      return "osloGrey";
  }
};

const getHoverStyles = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "dark":
      return { backgroundColor: "pine" };
    case "green":
      return {
        backgroundColor: mode("coralGreen", "primaryGreen")(props),
      };
    case "light":
    default:
      return {
        backgroundColor: mode("seaMist", "primaryGreen")(props),
      };
  }
};

const getFocusStyles = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "dark":
      return {
        outline: "none",
        boxShadow: `inset 0 0 0 2px ${props.theme.colors.white}`,
      };
    case "light":
    case "green":
    default:
      return {
        outline: "none",
        boxShadow: `inset 0 0 0 2px ${props.theme.colors.greenHaze}`,
      };
  }
};

const getActiveStyles = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "light":
      return { backgroundColor: "mint" };
    case "dark":
      return { backgroundColor: "celadon" };
    case "green":
    default:
      return { color: "azure", backgroundColor: "transparent" };
  }
};
