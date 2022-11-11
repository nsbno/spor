import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { anatomy } from "@chakra-ui/theme-tools";
import { getBoxShadowString } from "../utils/box-shadow-utils";

const parts = anatomy("choice-chip").parts("container", "icon", "label");

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {
      backgroundColor: "white",
      boxShadow: getBoxShadowString({ borderColor: "celadon" }),
      color: "darkTeal",
      display: "inline-flex",
      alignItems: "center",
      fontSize: "16px",
      px: 1,
      _checked: {
        background: "blueGreen",
        boxShadow: getBoxShadowString({ borderColor: "celadon" }),
      },
      "input:focus-visible + &": {
        boxShadow: getBoxShadowString({
          borderColor: "greenHaze",
          borderWidth: 2,
        }),
      },
      "@media (hover:hover)": {
        _hover: {
          boxShadow: getBoxShadowString({
            borderColor: "greenHaze",
            borderWidth: 2,
          }),
          background: "mint",
          cursor: "pointer",
        },
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
