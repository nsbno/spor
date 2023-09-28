import { breadcrumbAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/styled-system";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { mode } from "@chakra-ui/theme-tools";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleLink = defineStyle((props) => ({
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: "none",
  textStyle: "xs",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    paddingX: 0.5,
    borderRadius: "xs",
    _hover: {
      backgroundColor: mode("seaMist", "red")(props),
    },
    _focusVisible: {
      boxShadow: getBoxShadowString({
        borderColor: "greenHaze",
        borderWidth: 2,
      }),
    },
    _active: {
      backgroundColor: "mint",
    },
  },
}));

const baseStyle = definePartsStyle({
  link: baseStyleLink,
  list: {
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
});

export default defineMultiStyleConfig({
  baseStyle,
});
