import { anatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const parts = anatomy("alertService").parts("container", "box", "notificationText", "serviceMessageContent");
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
        borderBottomRadius: "18px",
        borderTopRadius: "none"
    },
    notificationText: {
        color: "white",
        fontWeight: "400",
        fontSize: "16",
        pr: "6px"
    },
    serviceMessageContent: {
        paddingX: "0",
        paddingTop: "6px",
        paddingBottom: "12px",
        color: "white"
    }
  },
});

export default config;
