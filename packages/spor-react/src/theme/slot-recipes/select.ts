import { defineSlotRecipe } from "@chakra-ui/react";
import { focusVisibleStyles } from "../utils/focus-utils";
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
      "& [data-state='open']": {
        "& + label": {
          transform: ["scale(0.825) translateY(-10px)"],
        },
      },
      "&:has(button span:not(:empty))": {
        "& label": {
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
      transitionDelay: "3ms",
      pointerEvents: "none",
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
      backgroundColor: "surface",
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
        zIndex: "tooltip",
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
      color: "ghost.text",
      cursor: "pointer",
      outline: "none",

      _active: {
        backgroundColor: "ghost.surface.active",
        color: "green",
      },
      _highlighted: {
        ...focusVisibleStyles()._focusVisible,
        _active: {
          color: "text",
        },
      },
      _hover: {
        backgroundColor: "ghost.surface.hover",
        outline: "2px solid core.outline",
        outlineOffset: "2px",
      },
      _selected: {
        backgroundColor: "ghost.surface.active",
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
      color: "ghost.text",
      "[aria-selected='true'] &": {
        color: "ghost.text",
      },
    },
  },
  variants: {
    variant: {
      core: {
        control: {
          outline: "1px solid",
          outlineColor: "core.outline",
          _hover: {
            outline: "2px solid",
            outlineColor: "core.outline",
          },
          _active: {
            backgroundColor: "brand.surface.active",
          },
          _invalid: {
            outline: "2px solid",
            outlineColor: "outline.error",
          },
          _disabled: {
            pointerEvents: "none",
            color: "text.disabled",
            backgroundColor: "surface.disabled",
          },
        },
      },
      floating: {
        control: {
          backgroundColor: {
            _light: "bg",
            _dark: `color-mix(in srgb, white 10%, var(--spor-colors-bg))`,
          },
          outline: "1px solid",
          outlineColor: "floating.outline",
          _hover: {
            outline: "1px solid",
            outlineColor: "floating.outline.hover",
            backgroundColor: {
              _light: "floating.surface.hover",
              _dark: `color-mix(in srgb, white 10%, var(--spor-colors-bg))`,
            },
          },
          _active: {
            outline: "1px solid",
            outlineColor: "floating.outline.active",
            backgroundColor: "floating.surface.active",
          },
        },
        selectContent: {
          outline: "1px solid",
          outlineColor: "floating.outline",
        },
      },
      rightSideSquare: {
        control: {
          outline: "1px solid",
          outlineColor: "core.outline",
        },
        trigger: {
          _focus: {
            borderRightRadius: "none",
          },
        },
      },
      leftSideSquare: {
        control: {
          outline: "1px solid",
          outlineColor: "core.outline",
        },
        trigger: {
          _focus: {
            borderLeftRadius: "none",
          },
        },
      },
    },
  },
});
