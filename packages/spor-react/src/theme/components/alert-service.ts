import { anatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const parts = anatomy("alertService").parts(
  "container",
  "box",
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
      borderBottomRadius: "18px",
      _hover: {
        outline: "2px solid",
        outlineColor: "blueGreen",
      },
      _active: {
        backgroundColor: "pine",
        outlineColor: "pine",
      },
    },
    box: {
      outline: "1px solid",
      outlineColor: "blueGreen",
      backgroundColor: "darkTeal",
      borderBottomRadius: "1.125rem",
      borderTopRadius: "none",
    },
    notificationText: {
      color: "white",
      fontWeight: "400",
      fontSize: "1rem",
      pr: "0.375rem",
    },
    serviceMessageContent: {
      paddingX: "0.75rem",
      paddingTop: "0.375rem",
      paddingBottom: "0.9375rem",
      color: "white",
    },
  },
});

export default config;
