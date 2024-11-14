import { anatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const parts = anatomy("alertService").parts(
  "container",
  "outerBox",
  "notificationText",
  "serviceMessageContent",
);
const helpers = createMultiStyleConfigHelpers(parts.keys);
const config = helpers.defineMultiStyleConfig({
  baseStyle: {
    container: {
      paddingX: 0,
      paddingY: 2,
      fontSize: "inherit",
      transitionProperty: "outline, border-radius",
      transitionDuration: "fast",
      borderTopRadius: "none",
      borderBottomRadius: "md",
      _hover: {
        outline: "2px solid",
      },
    },
    outerBox: {
      outline: "1px solid",
      borderBottomRadius: "md",
      borderTopRadius: "none",
      width: "100%",
    },
    notificationText: {
      fontWeight: "400",
      fontSize: "1rem",
      pr: "0.375rem",
    },
    serviceMessageContent: {
      paddingX: "0.75rem",
      paddingTop: "0.375rem",
      paddingBottom: "0.9375rem",
    },
  },
  variants: {
    "global-deviation": {
      container: {
        _hover: {
          outlineColor: "primrose",
        },
        _active: {
          backgroundColor: "blonde",
          outlineColor: "primrose",
        },
        color: "darkGrey",
      },
      outerBox: {
        outlineColor: "primrose",
        backgroundColor: "blonde",
      },
      notificationText: {
        color: "darkGrey",
      },
      serviceMessageContent: {
        color: "darkGrey",
      },
    },
    service: {
      container: {
        _hover: {
          outlineColor: "blueGreen",
        },
        _active: {
          backgroundColor: "pine",
          outlineColor: "pine",
        },
        color: "white",
      },
      outerBox: {
        outlineColor: "blueGreen",
        backgroundColor: "darkTeal",
      },
      notificationText: {
        color: "white",
      },
      serviceMessageContent: {
        color: "white",
      },
    },
  },
});

export default config;
