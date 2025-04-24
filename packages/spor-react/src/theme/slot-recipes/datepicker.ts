import { defineSlotRecipe } from "@chakra-ui/react";
import { focusVisibleStyles } from "../utils/focus-utils";
import { datepickerAnatomy } from "./anatomy";

export const datePickerSlotRecipe = defineSlotRecipe({
  slots: datepickerAnatomy.keys(),
  className: "spor-datepicker",
  base: {
    wrapper: {
      transitionProperty: "box-shadow",
      transitionDuration: "fast",
      borderRadius: "sm",
      display: "flex",
      flex: 1,
      paddingY: 0.5,
      alignItems: "center",
      _hover: {
        zIndex: "docked",
      },
      _disabled: {
        pointerEvents: "none",
        backgroundColor: "surface.disabled",
        outline: "1px solid",
        outlineColor: "outline.disabled",
        color: "text.disabled",
      },
      _focusWithin: {
        ...focusVisibleStyles()._focusVisible,
      },
    },
    inputLabel: {
      fontSize: "mobile.xs",
      margin: 0,
      cursor: "text",
    },
    dateTimeSegment: {
      _focus: {
        backgroundColor: "ghost.surface.active",
        color: "text.default",
      },
    },
    box: {
      width: "100%",
    },

    calendarTriggerButton: {
      position: "relative",
      borderRadius: "xl",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transitionProperty: "box-shadow, background-color",
      right: "0.5rem",
      ...focusVisibleStyles(),
      _hover: {
        backgroundColor: "ghost.surface.hover",
      },
      _active: {
        backgroundColor: "ghost.surface.active",
      },
      _invalid: {
        outline: "2px solid",
        outlineColor: "outline.error",
      },
    },
    arrow: {
      backgroundColor: "surface",
    },
    calendarPopover: {
      color: "core.text",
      outline: "1px solid",
      outlineColor: "floating.outline",
      boxShadow: "md",
      backgroundColor: "floating.surface",
    },
    rangeCalendarPopover: {
      width: "43rem",
      maxWidth: "100vw",
    },
    weekdays: {
      color: "core.text",
      fontWeight: "bold",
    },
    weekend: {
      color: "accent.text",
      fontWeight: "bold",
    },
    cell: {
      '&[aria-selected="true"] + [aria-selected="true"] > button': {
        "&::before": {
          content: '""',
          display: "block",
          height: "100%",
          position: "absolute",
          left: "-50%",
          top: 0,
          bottom: 0,
          zIndex: -1,
          backgroundColor: "brand.surface",
        },
      },
    },
    dateCell: {
      color: "core.text",
      borderRadius: "xl",
      position: "relative",
      transition: ".1s ease-in-out",
      userSelect: "none",
      width: [6, 7],
      height: [6, 7],
      transitionProperty: "common",

      _hover: {
        backgroundColor: "ghost.surface.hover",
      },
      ...focusVisibleStyles(),
      _active: {
        backgroundColor: "ghost.surface.active",
      },
      _disabled: {
        backgroundColor: "surface.disabled",
        color: "text.disabled",
        pointerEvents: "none",
      },
      _selected: {
        backgroundColor: "brand.surface",
        color: "brand.text",
        _active: {
          backgroundColor: "brand.surface.active",
          color: "brand.text",
        },
      },
      "&[data-today]": {
        outline: "1px solid",
        outlineColor: "core.outline",
      },
      "&[data-unavailable]": {
        pointerEvents: "none",
        borderRadius: "xl",
        backgroundColor: "surface.disabled",
        color: "text.disabled",
      },
    },
  },
  variants: {
    variant: {
      core: {
        wrapper: {
          outline: "1px solid",
          outlineColor: "core.outline",
          backgroundColor: "core.surface",

          _hover: {
            outline: "2px solid",

            outlineColor: "core.outline.hover",
            _active: {
              backgroundColor: "ghost.surface.active",
              outline: "1px solid",
              outlineColor: "core.outline",
            },
          },
          _invalid: {
            outline: "2px solid",
            outlineColor: "outline.error",
          },
        },
      },
      floating: {
        wrapper: {
          backgroundColor: {
            _light: "bg",
            _dark: `color-mix(in srgb, white 10%, var(--spor-colors-bg))`,
          },
          outline: "1px solid",
          outlineColor: "floating.outline",
          boxShadow: "sm",

          _hover: {
            outline: "1px solid",
            outlineColor: "floating.outline.hover",
            _active: {
              backgroundColor: "ghost.surface.active",
              outline: "1px solid",
              outlineColor: "core.outline",
            },
          },
          _invalid: {
            outline: "2px solid",
            outlineColor: "outline.error",
          },
        },
      },
      ghost: {
        wrapper: {
          _hover: {
            outline: "2px solid",
            outlineColor: "core.outline.hover",
            _active: {
              backgroundColor: "ghost.surface.active",
              outline: "1px solid",
              outlineColor: "core.outline",
            },
          },
          _invalid: {
            outline: "2px solid",
            outlineColor: "outline.error",
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "core",
  },
});
