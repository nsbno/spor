import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { colors } from "../foundations";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisible } from "../utils/focus-utils";

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    field: {
      appearance: "none",
      width: "100%",
      outline: "none",
      border: 0,
      backgroundColor: "white",
      borderRadius: "sm",
      transitionProperty: "common",
      transitionDuration: "fast",
      position: "relative",
      px: 3,
      height: "54px",
      fontSize: "18px",

      boxShadow: getBoxShadowString({ borderColor: colors.blackAlpha[400] }),
      _hover: {
        boxShadow: getBoxShadowString({
          borderColor: "darkGrey",
          borderWidth: 2,
        }),
      },
      ...focusVisible({
        focus: {
          boxShadow: getBoxShadowString({
            borderColor: "greenHaze",
            borderWidth: 2,
          }),
        },
        notFocus: {
          boxShadow: getBoxShadowString({ borderColor: "darkGrey" }),
        },
      }),
      _disabled: {
        boxShadow: getBoxShadowString({ borderColor: "platinum" }),
        _hover: { boxShadow: getBoxShadowString({ borderColor: "platinum" }) },
        _focus: { boxShadow: getBoxShadowString({ borderColor: "platinum" }) },
      },
      _invalid: {
        boxShadow: getBoxShadowString({
          borderColor: "brightRed",
          borderWidth: 2,
        }),
        _hover: {
          boxShadow: getBoxShadowString({
            borderColor: "darkGrey",
            borderWidth: 2,
          }),
        },
        ...focusVisible({
          focus: {
            boxShadow: getBoxShadowString({
              borderColor: "greenHaze",
              borderWidth: 2,
            }),
          },
          notFocus: {
            boxShadow: getBoxShadowString({
              borderColor: "brightRed",
              borderWidth: 2,
            }),
          },
        }),
      },
      " + label": {
        fontSize: ["mobile.sm", "desktop.sm"],
        top: "2px",
        left: props.paddingLeft || props.pl || 3,
        zIndex: 2,
        position: "absolute",
        my: 2,
        transition: ".1s ease-out",
        transformOrigin: "top left",
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
  }),
});

export default config;
