import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { anatomy, mode } from "@chakra-ui/theme-tools";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { colors } from "../foundations";
import { focusVisible } from "../utils/focus-utils";

const parts = anatomy("choice-chip").parts("container", "icon", "label");

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {
      backgroundColor: mode("white", "transparent")(props),
      boxShadow: getBoxShadowString({ borderColor: "celadon" }),
      color: mode("darkTeal", "white")(props),
      display: "inline-flex",
      alignItems: "center",
      fontSize: "16px",
      px: 1,
      _checked: {
        color: "white",
        background: "pine",
        boxShadow: getBoxShadowString({ borderColor: "celadon" }),
      },
      "input:focus-visible + &": {
        boxShadow: `inset 0 0 0 2px ${mode(
          colors.greenHaze,
          colors.azure,
        )(props)}, inset 0 0 0 4px ${mode(
          colors.white,
          colors.darkGrey,
        )(props)}`,
      },
      "@media (hover:hover)": {
        _hover: {
          color: mode("darkTeal", "white")(props),
          boxShadow: getBoxShadowString({
            borderColor: "greenHaze",
            borderWidth: 2,
          }),
          background: mode("coralGreen", "whiteAlpha.200")(props),
          cursor: "pointer",
        },
      },
      _active: {
        backgroundColor: mode("mint", "whiteAlpha.300")(props),
        boxShadow: getBoxShadowString({
          borderColor: "pine",
        }),
      },
    },
    icon: {
      mr: props.hasLabel ? 1 : 0,
    },
  }),
  sizes: {
    sm: {
      container: {
        borderRadius: "15px",
        height: "30px",
        px: 1.5,
      },
    },
    md: {
      container: {
        borderRadius: "18px",
        height: "36px",
        px: 2,
      },
    },
    lg: {
      container: {
        borderRadius: "21px",
        height: "42px",
        px: 2,
      },
    },
    xl: {
      container: {
        borderRadius: "27px",
        height: "54px",
        px: 3,
      },
    },
  },
  defaultProps: {
    size: "md",
  },
});

export default config;
