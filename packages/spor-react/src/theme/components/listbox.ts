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
      borderBottomRadius: "sm",
    },
    item: {
      paddingX: 2,
      paddingY: 1,
      marginY: 1,
      marginX: 1,
      borderRadius: "sm",
      color: mode("darkGrey", "white")(props),
      cursor: "pointer",
      _hover: {
        backgroundColor: mode("seaMist", "darkTeal")(props),
        outline: "none",
      },
      _active: {
        backgroundColor: mode("mint", "darkTeal")(props),
        outline: "none",
      },
      _focus: {
        outline: "none",
        backgroundColor: mode("seaMist", "darkTeal")(props),
      },
      _selected: {
        backgroundColor: mode("pine", "pine")(props),
        color: mode("white", "white")(props),
      },
    },
    label: {},
    description: {
      fontSize: ["mobile.xs", "desktop.xs"],
      color: mode("dimGrey", "silver")(props),
      "[aria-selected='true'] &": {
        color: mode("lightGrey", "platinum")(props),
      },
    },
  }),
});

export default config;
