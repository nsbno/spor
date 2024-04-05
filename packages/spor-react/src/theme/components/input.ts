import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { surface } from "../utils/surface-utils";

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    field: {
      appearance: "none",
      width: "100%",
      outline: "none",
      border: 0,
      borderRadius: "sm",
      transitionProperty: "common",
      transitionDuration: "fast",
      position: "relative",
      paddingX: 3,
      height: "54px",
      fontSize: "mobile.md",
      backgroundColor: "transparent",

      ...baseBorder("default", props),
      _hover: {
        ...baseBorder("hover", props),
      },
      _active: {
        ...baseBackground("active", props),
        ...baseBorder("default", props),
      },
      _focusVisible: {
        ...focusVisibleStyles(props)._focusVisible,
        outlineOffset: 0,
      },

      _disabled: {
        ...surface("disabled", props),
        ...baseBorder("disabled", props),
        pointerEvents: "none",
      },
      _invalid: {
        ...baseBorder("invalid", props),
        _hover: {
          ...baseBorder("hover", props),
        },
      },
      " + label": {
        fontSize: ["mobile.sm", "desktop.sm"],
        top: "2px",
        left: props.paddingLeft || props.pl || 3,
        zIndex: 2,
        position: "absolute",
        marginY: 2,
        transition: ".1s ease-out",
        transformOrigin: "top left",
        cursor: "text",
      },
      "&:not(:placeholder-shown)": {
        paddingTop: "16px",
        "& + label": {
          transform: "scale(0.825) translateY(-10px)",
        },
      },
    },
    element: {
      height: "100%",
    },
    group: {
      ":has(:disabled)": {
        ...baseText("disabled", props),
      },
    },
  }),
});

export default config;
