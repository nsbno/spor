import { defineSlotRecipe } from "@chakra-ui/react";

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
        outline: "2px solid",
        outlineColor: "outline.focus",
      },
      "&[data-active]": {
        outline: "2px solid",
        outlineColor: "outline.focus",
        "&:hover": {
          outlineColor: "outline.focus",
        },
      },
    },
    inputLabel: {
      fontSize: ["mobile.xs", "desktop.xs"],
      margin: 0,
      cursor: "text",
    },
    dateTimeSegment: {
      _focus: {
        backgroundColor: "surface.ghost.active",
        color: "text",
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
      _hover: {
        backgroundColor: "surface.ghost.hover",
      },
      _active: {
        backgroundColor: "surface.ghost.active",
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
      color: "text.core",
      outline: "1px solid",
      outlineColor: "outline.floating",
      boxShadow: "md",
      backgroundColor: "surface.floating",
      minHeight: "min-content",
    },
    rangeCalendarPopover: {
      width: "43rem",
      maxWidth: "100vw",
    },
    weekdays: {
      color: "text.core",
      fontWeight: "bold",
    },
    weekend: {
      color: "text.accent",
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
          backgroundColor: "surface.brand",
        },
      },
    },
    dateCell: {
      color: "text.core",
      borderRadius: "xl",
      position: "relative",
      transition: ".1s ease-in-out",
      userSelect: "none",
      width: [6, 7],
      height: [6, 7],
      transitionProperty: "common",

      _hover: {
        backgroundColor: "surface.ghost.hover",
      },
      _active: {
        backgroundColor: "surface.ghost.active",
      },
      _disabled: {
        backgroundColor: "surface.disabled",
        color: "text.disabled",
        pointerEvents: "none",
      },
      _selected: {
        backgroundColor: "surface.brand",
        color: "text.brand",
        _active: {
          backgroundColor: "surface.brand.active",
          color: "text.brand",
        },
      },
      "&[data-today]": {
        outline: "1px solid",
        outlineColor: "outline.core",
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
          outlineColor: "outline.core",

          _hover: {
            outline: "2px solid",

            outlineColor: "outline.core.hover",
            _active: {
              backgroundColor: "surface.ghost.active",
              outline: "1px solid",
              outlineColor: "outline.core",
            },

            "&[data-active]": {
              outline: "2px solid",
              outlineColor: "outline.focus",
              _hover: {
                outlineColor: "outline.focus",
              },
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
          bg: "surface.floating",
          outline: "1px solid",
          outlineColor: "outline.floating",
          boxShadow: "sm",

          _hover: {
            outline: "1px solid",
            outlineColor: "outline.floating.hover",
            _active: {
              backgroundColor: "surface.ghost.active",
              outline: "1px solid",
              outlineColor: "outline.core",
            },

            "&[data-active]": {
              outline: "2px solid",
              outlineColor: "outline.focus",
              _hover: {
                outlineColor: "outline.focus",
              },
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
            outlineColor: "outline.core.hover",
            _active: {
              backgroundColor: "surface.ghost.active",
              outline: "1px solid",
              outlineColor: "outline.core",
            },

            "&[data-active]": {
              outline: "2px solid",
              outlineColor: "outline.focus",
              _hover: {
                outlineColor: "outline.focus",
              },
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
