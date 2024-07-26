import { anatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const parts = anatomy("alert").parts("container", "icon", "closeButton");

const helpers = createMultiStyleConfigHelpers(parts.keys);
const config = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      borderRadius: "sm",
      color: "darkGrey",
      paddingX: 3,
      paddingY: 2,
      display: "flex",
      position: "relative",
      textStyle: "sm",
    },
    icon: {
      marginRight: 1,
    },
    closeButton: {
      position: "absolute",
      top: 1,
      right: 1,
      color: "darkGrey",
    },
  },
  variants: {
    success: {
      container: {
        backgroundColor: "seaMist",
      },
    },
    info: {
      container: {
        backgroundColor: "lightBlue",
      },
    },
    warning: {
      container: {
        backgroundColor: "blonde",
      },
    },
    error: {
      container: {
        backgroundColor: "lightRed",
      },
    },
    "alt-transport": {
      container: {
        backgroundColor: "banana",
      },
    },
    service: {
      container: {
        backgroundColor: "darkTeal",
      },
    },
    
  },
  defaultProps: {
    variant: "info",
  },
});

export default config;
