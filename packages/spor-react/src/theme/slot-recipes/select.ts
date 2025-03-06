import { defineSlotRecipe } from "@chakra-ui/react";
import { coreBackground, coreBorder, coreText } from "../utils/core-utils";
import { floatingBackground, floatingBorder } from "../utils/floating-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { ghostBackground, ghostText } from "../utils/ghost-utils";
import { surface } from "../utils/surface-utils";
import { selectAnatomy } from "./anatomy";

export const selectSlotRecipe = defineSlotRecipe({
  slots: selectAnatomy.keys(),
  className: "spor-select",
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      cursor: "pointer",
      zIndex: "dropdown",
      ...focusVisibleStyles(),
      "& [data-focus]": {
        "& + label": {
          transform: ["scale(0.825) translateY(-10px)"],
        },
      },
      "& [data-state='open']": {
        "& + label": {
          transform: ["scale(0.825) translateY(-10px)"],
        },
      },
    },
    label: {
      fontSize: ["mobile.sm", "desktop.sm"],
      top: 0,
      left: 3,
      zIndex: 0,
      position: "absolute",
      marginY: 2,
      transitionProperty: "transform",
      transitionDuration: "fast",
      transformOrigin: "top left",
      transitionDelay: "fast",
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
      borderRadius: "sm",
      cursor: "pointer",
      _focusVisible: {
        ...focusVisibleStyles()._focusVisible,
      },
      _open: {
        "& + div": {
          transform: "rotate(180deg)",
        },
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
      paddingY: 2,
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
      _active: {
        backgroundColor: "transparent",
      },
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
          ...coreBorder("default"),
          _hover: {
            ...coreBorder("hover"),
          },
          _active: {
            ...coreBackground("active"),
          },
          _invalid: {
            ...coreBorder("invalid"),
          },
          _disabled: {
            pointerEvents: "none",
            ...coreText("disabled"),
            ...coreBackground("disabled"),
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
