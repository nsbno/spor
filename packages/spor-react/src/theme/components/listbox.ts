import { anatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const parts = anatomy("ListBox").parts(
  "container",
  "item",
  "label",
  "description"
);

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {
      background: mode("white", "darkGrey")(props),
      boxShadow: "sm",
      overflowY: "auto",
      maxHeight: "50vh",
      width: "100%",
      listStyle: "none",
    },
    item: {
      paddingX: 3,
      paddingY: 2,
      color: mode("darkGrey", "white")(props),
      _hover: {
        background: mode("mint", "darkTeal")(props),
        outline: "none",
      },
      _focus: {
        outline: "none",
        background: mode("mint", "darkTeal")(props),
      },
      _selected: {
        background: mode("pine", "pine")(props),
        color: mode("white", "white")(props),
      },
    },
    label: {},
    description: {
      fontSize: ["mobile.xs", "desktop.xs"],
      color: "dimGrey",
      "[aria-selected='true'] &": {
        color: "lightGrey",
      },
    },
  }),
});

export default config;
