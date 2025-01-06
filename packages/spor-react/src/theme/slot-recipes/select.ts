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
    "itemDescription",
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
      position: "relative",
      ...focusVisibleStyles(),
    },
    label: {
      border: "0 !important",
      clip: "rect(1px, 1px, 1px, 1px) !important",
      clipPath: "inset(50%) !important",
      height: "1px !important",
      margin: "-1px !important",
      overflow: "hidden !important",
      padding: "0 !important",
      position: "absolute !important",
      width: "1px !important",
      whiteSpace: "nowrap !important",
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
      _focusVisible: {
        ...focusVisibleStyles()._focusVisible,
        borderRadius: "sm",
      },
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
      _open: {
        transform: "rotate(180deg)",
        color: "hotpink",
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
      marginTop: -1,
      _focusVisible: {
        ...focusVisibleStyles()._focusVisible,
        borderBottomRadius: "sm",
      },
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
        color: "green",
      },
      _highlighted: {
        ...focusVisibleStyles()._focusVisible,
      },
      _hover: {
        ...ghostBackground("hover"),
        outline: "none",
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
    valueText: {},
    itemDescription: {
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
        control: {
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
        selectContent: {
          ...floatingBorder("default"),
        },
      },
    },
  },
});
