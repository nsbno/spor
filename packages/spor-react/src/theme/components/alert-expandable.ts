import { anatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const parts = anatomy("alertExpandable").parts("container", "accordion");
const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      paddingX: 3,
      paddingY: 2,
      fontSize: "inherit",
      transitionProperty: "outline, border-radius",
      transitionDuration: "fast",
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
      accordion: {
        outlineColor: "cloudy",
      },
      container: {
        _hover: {
          backgroundColor: "cloudy",
          outlineColor: "sky",
        },
        _active: {
          backgroundColor: "icyBlue",
        },
        _focus: {
          outlineColor: "greenHaze",
        },
      },
    },
    success: {
      accordion: {
        outlineColor: "coralGreen",
      },
      container: {
        _hover: {
          backgroundColor: "coralGreen",
          outlineColor: "blueGreen",
        },
        _active: {
          backgroundColor: "mint",
        },
        _focus: {
          outlineColor: "greenHaze",
        },
      },
    },
    warning: {
      accordion: {
        outlineColor: "primrose",
      },
      container: {
        _hover: {
          backgroundColor: "primrose",
          outlineColor: "banana",
        },
        _focus: {
          outlineColor: "greenHaze",
        },
        _active: {
          backgroundColor: "cornSilk",
        },
      },
    },
    "alt-transport": {
      accordion: {
        outlineColor: "burntYellow",
      },
      container: {
        _hover: {
          backgroundColor: "burntYellow",
          outlineColor: "golden",
        },
        _focus: {
          outlineColor: "greenHaze",
        },
        _active: {
          backgroundColor: "sunshine",
        },
      },
    },
    error: {
      accordion: {
        outlineColor: "salmon",
      },
      container: {
        _hover: {
          backgroundColor: "salmon",
          outlineColor: "apricot",
        },
        _active: {
          backgroundColor: "pink",
        },
        _focus: {
          outlineColor: "greenHaze",
        },
      },
    },
    service: {
      container: {
        _hover: {
          outlineColor: "blueGreen",
        },
        _active: {
          backgroundColor: "pine",
        },
      },
    },
  },
  defaultProps: {
    variant: "info",
  },
});

export default config;
