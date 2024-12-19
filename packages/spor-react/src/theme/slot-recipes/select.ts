import { defineSlotRecipe } from "@chakra-ui/react";
import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { floatingBackground, floatingBorder } from "../utils/floating-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { surface } from "../utils/surface-utils";
import { ghostBackground, ghostText } from "../utils/ghost-utils";
import { outlineBorder } from "../utils/outline-utils";

export const selectSlotRecipe = defineSlotRecipe({
  slots: [
    "root",
    "trigger",
    "indicatorGroup",
    "indicator",
    "selectContent",
    "item",
    "control",
    "itemText",
    "itemGroup",
    "itemGroupLabel",
    "label",
    "valueText",
  ],
  className: "spor-select",
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
      position: "relative",
    },
    label: {
      /* For when input is filled */
      pos: "absolute",
      paddingX: 3,
      top: "0.9.rem",
      fontWeight: "normal",
      fontSize: ["mobile.sm", "desktop.sm"],
      color: "blue",
      pointerEvents: "none",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      transition: "position",
      zIndex: "docked",
      _peerActive: {
        /* For when input is not in focus */
        top: "0.9rem",
        color: "green",
        fontSize: ["mobile.sm", "desktop.sm"],
      },
      _peerFocusVisible: {
        /* For when input is in focus */
        fontSize: ["mobile.xs", "desktop.xs"],
        color: "hotpink",
        top: "0.5",
      },
      _disabled: {
        opacity: 0.4,
      },
    },
    trigger: {
      display: "flex",
      appearance: "none",
      width: "100%",
      height: 8,
      paddingY: 1.5,
      paddingX: 3,
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "mobile.md",
    },
    indicatorGroup: {
      display: "flex",
      alignItems: "center",
      gap: "1",
      position: "absolute",
      right: "0",
      top: "0",
      bottom: "0",
      paddingX: 2,
      pointerEvents: "none",
    },
    indicator: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: {
        base: "text",
        _disabled: "text.disabled",
        _invalid: "text.secondary",
      },
      _icon: {
        width: 3,
        height: 3,
      },
    },
    selectContent: {
      ...surface("default"),
      boxShadow: "sm",
      overflowY: "auto",
      maxHeight: "50vh",
      width: "100%",
      listStyle: "none",
      borderBottomRadius: "sm",
      _open: {
        animationStyle: "slide-fade-in",
        animationDuration: "fast",
      },
      _closed: {
        animationStyle: "slide-fade-out",
        animationDuration: "fastest",
      },
    },
    item: {
      paddingX: 2,
      paddingY: 1,
      marginY: 1,
      marginX: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 1,
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
      _icon: {
        width: 3,
        height: 3,
      },
    },
    control: {
      position: "relative",
      borderTopRadius: "sm",
      borderBottomRadius: "sm",
      _open: {
        borderBottomRadius: 0,
      },
      ...focusVisibleStyles(),
      ...baseBorder("default"),
      _hover: {
        ...baseBorder("hover"),
      },
      _active: {
        ...baseBackground("active"),
      },
      _invalid: {
        ...baseBorder("invalid"),
      },
      _disabled: {
        pointerEvents: "none",
        ...baseText("disabled"),
        ...baseBackground("disabled"),
      },
    },
    itemText: {
      flex: "1",
    },
    itemGroup: {
      _first: { mt: "0" },
    },
    itemGroupLabel: {
      py: "1",
      fontWeight: "medium",
    },
    valueText: {
      /* For when input is filled */
      pos: "absolute",
      paddingX: 3,
      top: "0.5",
      fontWeight: "normal",
      fontSize: ["mobile.xs", "desktop.xs"],
      color: "text",
      pointerEvents: "none",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      transition: "position",
      zIndex: "docked",
      _peerPlaceholderShown: {
        /* For when input is not in focus */
        top: "0.9rem",
        color: "text",
        fontSize: ["mobile.sm", "desktop.sm"],
      },
      _peerFocusVisible: {
        /* For when input is in focus */
        fontSize: ["mobile.xs", "desktop.xs"],
        color: "text",
        top: "0.5",
      },
      _disabled: {
        opacity: 0.4,
      },
    },
  },
  variants: {
    variant: {
      core: {
        control: {},
      },
      floating: {
        control: {
          ...floatingBackground("default"),
          ...floatingBorder("default"),
          _hover: {
            ...floatingBorder("hover"),
            ...floatingBackground("hover"),
          },
          _active: {
            ...floatingBorder("active"),
            ...floatingBackground("active"),
          },
        },
      },
    },
  },
});
