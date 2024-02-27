import { anatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { getBoxShadowString } from "../utils/box-shadow-utils";

const parts = anatomy("alertExpandable").parts("container");
const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      paddingX: 3,
      paddingY: 2,
      fontSize: "inherit",
      _expanded: {
        borderBottomRadius: "none",
      },
    },
  },
  variants: {
    info: {
      container: {
        _hover: {
          boxShadow: getBoxShadowString({
            borderColor: "sky",
            borderWidth: 2,
          }),
        },
        _active: {
          backgroundColor: "icyBlue",
        },
      },
    },
    success: {
      container: {
        _hover: {
          boxShadow: getBoxShadowString({
            borderColor: "blueGreen",
            borderWidth: 2,
          }),
        },
        _active: {
          backgroundColor: "mint",
        },
      },
    },
    warning: {
      container: {
        _hover: {
          boxShadow: getBoxShadowString({
            borderColor: "sunshine",
            borderWidth: 2,
          }),
        },
        _active: {
          backgroundColor: "cornSilk",
        },
      },
    },
    "alt-transport": {
      container: {
        _hover: {
          boxShadow: getBoxShadowString({
            borderColor: "golden",
            borderWidth: 2,
          }),
        },
        _active: {
          backgroundColor: "sunshine",
        },
      },
    },
    error: {
      container: {
        _hover: {
          boxShadow: getBoxShadowString({
            borderColor: "apricot",
            borderWidth: 2,
          }),
        },
        _active: {
          backgroundColor: "pink",
        },
      },
    },
  },
  defaultProps: {
    variant: "info",
  },
});

export default config;
