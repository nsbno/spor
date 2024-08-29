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
        outlineColor: "cloudy"
      },
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
      accordion: {
        outlineColor: "coralGreen"
      },
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
      accordion: {
        outlineColor: "primrose"
      },
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
      accordion: {
        outlineColor: "burntYellow"
      },
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
      accordion: {
        outlineColor: "salmon"
      },
      container: {
        _hover: {
          outlineColor: "apricot",
        },
        _active: {
          backgroundColor: "pink",
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
