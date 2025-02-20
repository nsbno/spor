import { anatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";

const parts = anatomy("alertService").parts(
  "container",
  "outerBox",
  "notificationText",
  "serviceMessageContent",
);

const helpers = createMultiStyleConfigHelpers(parts.keys);
const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
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
        backgroundColor: mode(
          "alert.service.surface.hover.light",
          "alert.service.surface.hover.dark",
        )(props),
        outlineColor: mode(
          "alert.service.outline.hover.light",
          "alert.service.outline.hover.dark",
        )(props),
      },
      _focus: {
        outlineColor: mode("outline.focus.light", "outline.focus.dark")(props),
      },
      _active: {
        backgroundColor: mode(
          "alert.service.surface.active.light",
          "alert.service.surface.active.dark",
        )(props),
        outlineColor: mode(
          "alert.service.outline.default.light",
          "alert.service.outline.default.dark",
        )(props),
      },
      color: mode("text.inverted.light", "text.inverted.dark")(props),
    },
    outerBox: {
      outline: "1px solid",
      borderBottomRadius: "md",
      borderTopRadius: "none",
      width: "100%",
      outlineColor: mode(
        "alert.service.surface.default.light",
        "alert.service.surface.default.dark",
      )(props),
      backgroundColor: mode(
        "alert.service.surface.default.light",
        "alert.service.surface.default.dark",
      )(props),
    },
    notificationText: {
      fontWeight: "400",
      fontSize: "1rem",
      pr: "0.375rem",
      color: mode("text.inverted.light", "text.inverted.dark")(props),
    },
    serviceMessageContent: {
      paddingX: "0.75rem",
      paddingTop: "0.375rem",
      paddingBottom: "0.9375rem",
      color: mode("text.inverted.light", "text.inverted.dark")(props),
    },
  }),
});

export default config;
