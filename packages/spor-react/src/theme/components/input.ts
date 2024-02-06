import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisibleStyles } from "../utils/focus-util";

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    field: {
      appearance: "none",
      width: "100%",
      outline: "none",
      border: 0,
      backgroundColor: mode("white", "darkGrey")(props),
      borderRadius: "sm",
      transitionProperty: "common",
      transitionDuration: "fast",
      position: "relative",
      paddingX: 3,
      height: "54px",
      fontSize: "mobile.md",

      boxShadow: getBoxShadowString({
        borderColor: mode("blackAlpha.400", "whiteAlpha.400")(props),
      }),
      _active: {
        backgroundColor: mode("mint", "whiteAlpha.100")(props),
        boxShadow: getBoxShadowString({
          borderColor: mode("blackAlpha.400", "whiteAlpha.400")(props),
        }),
      },
      _hover: {
        boxShadow: getBoxShadowString({
          borderColor: mode("darkGrey", "white")(props),
          borderWidth: 2,
        }),
      },
      ...focusVisibleStyles(props),

      _disabled: {
        backgroundColor: mode("blackAlpha.100", "whiteAlpha.100")(props),
        boxShadow: getBoxShadowString({
          borderColor: mode("blackAlpha.200", "whiteAlpha.200")(props),
        }),
        cursor: "not-allowed",
      },
      _invalid: {
        boxShadow: getBoxShadowString({
          borderColor: "brightRed",
          borderWidth: 2,
        }),
        _hover: {
          boxShadow: getBoxShadowString({
            borderColor: mode("darkGrey", "white")(props),
            borderWidth: 2,
          }),
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
        pt: "16px",
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
        color: mode("blackAlpha.400", "whiteAlpha.400")(props),
      },
    },
  }),
});

export default config;
