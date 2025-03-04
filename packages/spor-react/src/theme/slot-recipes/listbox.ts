import { defineSlotRecipe } from "@chakra-ui/react";
import { coreBorder } from "../utils/core-utils";
import { floatingBorder } from "../utils/floating-utils";
import { ghostBackground, ghostText } from "../utils/ghost-utils";
import { outlineBorder } from "../utils/outline-utils";
import { surface } from "../utils/surface-utils";
import { listBoxAnatomy } from "./anatomy";

export const listBoxSlotRecipe = defineSlotRecipe({
  slots: listBoxAnatomy.keys(),
  className: "spor-listbox",
  base: {
    root: {
      ...surface("default"),
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
      ...ghostText("default"),
      cursor: "pointer",
      outline: "none",
      _active: {
        ...ghostBackground("active"),
      },
      _focusVisible: {
        ...outlineBorder("focus"),
      },
      _hover: {
        ...ghostBackground("hover"),
      },
      _selected: {
        ...ghostBackground("active"),
      },
      _focus: {
        ...outlineBorder("focus"),
      },
    },
    label: {},
    description: {
      fontSize: ["mobile.xs", "desktop.xs"],
      ...ghostText("default"),
      "[aria-selected='true'] &": {
        ...ghostText("selected"),
      },
    },
  },
  variants: {
    variant: {
      core: {
        root: {
          ...coreBorder("default"),
        },
      },
      floating: {
        root: {
          ...floatingBorder("default"),
        },
      },
    },
  },
  defaultVariants: {
    variant: "core",
  },
});
