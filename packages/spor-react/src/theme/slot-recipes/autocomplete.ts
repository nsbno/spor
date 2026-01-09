import { defineSlotRecipe } from "@chakra-ui/react";

import { comboboxAnatomy } from "./anatomy";

export const comboboxSlotRecipe = defineSlotRecipe({
  className: "chakra-combobox",
  slots: comboboxAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "0",
      width: "full",
    },

    label: {
      fontWeight: "medium",
      userSelect: "none",
      textStyle: "sm",
      _disabled: {},
    },

    input: {
      transition: "border-radius",
      transitionDuration: "faster",
      _open: {
        borderBottomRadius: 0,
      },
    },

    clearTrigger: {
      right: ["0.5rem", "1rem"],
    },

    control: {
      pos: "relative",
    },

    trigger: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
    },

    indicatorGroup: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1",
      pos: "absolute",
      insetEnd: "0",
      top: "0",
      bottom: "0",
      px: "var(--combobox-input-padding-x)",
      _icon: {
        boxSize: "var(--combobox-indicator-size)",
      },
      "[data-disabled] &": {
        opacity: 0.5,
      },
    },

    content: {
      backgroundColor: "surface",
      boxShadow: "sm",
      overflowY: "auto",
      maxHeight: "50vh",
      width: "calc(100% + 2px)",
      listStyle: "none",
      borderBottomRadius: "md",
      zIndex: "popover",

      _open: {
        animationStyle: "slide-fade-in",
        animationDuration: "fast",
      },
      _closed: {
        animationStyle: "slide-fade-out",
        animationDuration: "0s",
      },
      "&[data-empty]:not(:has([data-scope=combobox][data-part=empty]))": {
        opacity: 0,
      },
    },

    item: {
      position: "relative",
      userSelect: "none",
      display: "flex",
      alignItems: "center",
      gap: "6px",
      px: "12px",
      py: "6px",
      mx: "1",
      my: "1",
      cursor: "pointer",
      justifyContent: "space-between",
      borderRadius: "sm",
      flex: "1",
      _highlighted: {
        bg: "ghost.surface.active",
      },
      _disabled: {
        pointerEvents: "none",
        opacity: "0.5",
      },

      _hover: {
        bg: "ghost.surface.hover",
      },

      _pressed: {
        bg: "ghost.surface.active",
      },

      _focus: {
        bg: "ghost.surface.active",
      },
    },

    empty: {
      px: "12px",
      py: "6px",
    },

    itemText: {
      flex: "1",
    },

    itemGroup: {
      pb: "var(--combobox-item-padding-y)",
      _last: {
        pb: "0",
      },
    },

    itemGroupLabel: {
      px: "3",
      py: "0.5",
      color: "floating.text",
      fontFeatureSettings: "liga off",
      fontSize: ["mobile.sm, desktop.sm"],
      fontWeight: "bold",
    },
  },
});
