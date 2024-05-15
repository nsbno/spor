import { anatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { baseBorder } from "../utils/base-utils";
import { ghostBackground, ghostText } from "../utils/ghost-utils";
import { surface } from "../utils/surface-utils";

const parts = anatomy("ListBox").parts(
  "container",
  "item",
  "label",
  "description",
);

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    container: {
      ...surface("default", props),
      boxShadow: "sm",
      overflowY: "auto",
      maxHeight: "50vh",
      width: "100%",
      listStyle: "none",
      borderBottomRadius: "sm",
      ...baseBorder("default", props),
    },
    item: {
      paddingX: 2,
      paddingY: 1,
      marginY: 1,
      marginX: 1,
      borderRadius: "sm",
      ...ghostText("default", props),
      cursor: "pointer",
      outline: "none",
      _active: {
        ...ghostBackground("active", props),
      },
      _hover: {
        ...ghostBackground("hover", props),
      },
      _focus: {
        ...ghostBackground("selected", props),
      },
      _selected: {
        ...ghostBackground("active", props),
      },
    },
    label: {},
    description: {
      fontSize: ["mobile.xs", "desktop.xs"],
      ...ghostText("default", props),
      "[aria-selected='true'] &": {
        ...ghostText("selected", props),
      },
    },
  }),
});

export default config;
