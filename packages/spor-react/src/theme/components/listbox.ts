import { anatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { colors } from "../foundations";
import { ghostBackground } from "../utils/background-utils";

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
      // avoiding extra div by blending a transparent color into darkGrey for dark mode
      backgroundColor: mode(
        "white",
        `color-mix(in srgb, ${props.theme.colors.accent}, ${colors.white} 10%)`,
      )(props),
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
      outline: "none",
      _active: {
        ...ghostBackground("active", props),
      },
      _hover: {
        ...ghostBackground("hover", props),
      },
      _focus: {
        ...ghostBackground("selected", props),
        //...focusVisibleStyles(props)._focusVisible,
      },
      _selected: {
        ...ghostBackground("selected", props),
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
