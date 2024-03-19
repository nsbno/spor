import { anatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

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
      _hover: {
        outline: "2px solid",
      },
    },
  },
  variants: {
    info: {
      container: {
        _hover: {
          outlineColor: "sky",
        },
        _active: {
          backgroundColor: "icyBlue",
        },
      },
    },
    success: {
      container: {
        _hover: {
          outlineColor: "blueGreen",
        },
        _active: {
          backgroundColor: "mint",
        },
      },
    },
    warning: {
      container: {
        _hover: {
          outlineColor: "sunshine",
        },
        _active: {
          backgroundColor: "cornSilk",
        },
      },
    },
    "alt-transport": {
      container: {
        _hover: {
          outlineColor: "golden",
        },
        _active: {
          backgroundColor: "sunshine",
        },
      },
    },
    error: {
      container: {
        _hover: {
          outlineColor: "apricot",
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
