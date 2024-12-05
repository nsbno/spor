import { defineSlotRecipe } from "@chakra-ui/react";
import { accentText } from "../utils/accent-utils";
import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { brandBackground, brandText } from "../utils/brand-utils";
import { floatingBorder, floatingBackground } from "../utils/floating-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { ghostBackground } from "../utils/ghost-utils";
import { surface } from "../utils/surface-utils";

export const datePickerSlotRecipe = defineSlotRecipe({
  slots: [
    "wrapper",
    "calendarTriggerButton",
    "arrow",
    "calendarPopover",
    "calendar",
    "weekdays",
    "weekend",
    "dateCell",
    "inputLabel",
    "dateTimeSegment",
    "cell",
  ],
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
        ...baseBackground("disabled"),
        ...baseBorder("disabled"),
        ...baseText("disabled"),
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
        ...brandBackground("hover"),
        color: "white",
      },
    },
    calendarTriggerButton: {
      width: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transitionProperty: "box-shadow, background-color",
      position: "relative",
      right: "9px",

      ...focusVisibleStyles(),
      _hover: {
        ...ghostBackground("hover"),
      },
      _active: {
        ...ghostBackground("active"),
      },
      _invalid: {
        ...baseBorder("invalid"),
      },
    },
    arrow: {
      ...surface("default"),
    },
    calendarPopover: {
      ...floatingBackground("default"),
      ...baseText("default"),
      ...floatingBorder("default"),
      boxShadow: "md",
    },
    weekdays: {
      ...baseText("default"),
    },
    weekend: {
      ...accentText("default"),
    },
    cell: {
      '&[aria-selected="true"] + [aria-selected="true"] > button': {
        "&::before": {
          content: '""',
          display: "block",
          width: "100%",
          height: "100%",
          position: "absolute",
          left: "-50%",
          top: 0,
          bottom: 0,
          zIndex: -1,
          ...brandBackground("default"),
        },
      },
    },
    dateCell: {
      ...ghostBackground("default"),
      ...baseText("default"),
      borderRadius: "50%",
      position: "relative",
      transition: ".1s ease-in-out",
      userSelect: "none",
      width: [6, 7],
      height: [6, 7],
      transitionProperty: "common",

      _hover: {
        ...ghostBackground("hover"),
      },
      ...focusVisibleStyles(),
      _active: {
        ...ghostBackground("active"),
      },
      _disabled: {
        ...baseBackground("disabled"),
        ...baseText("disabled"),
        pointerEvents: "none",
      },
      _selected: {
        ...brandBackground("default"),
        ...brandText("default"),
        _active: {
          ...brandBackground("active"),
          ...brandText("active"),
        },
      },
      "&[data-today]": {
        ...baseBorder("default"),
      },
      "&[data-unavailable]": {
        pointerEvents: "none",
        ...baseBackground("disabled"),
        ...baseText("disabled"),
      },
    },
  },
  variants: {
    variant: {
      base: {
        wrapper: {
          ...baseBorder("default"),
          ...baseBackground("default"),

          _hover: {
            ...baseBorder("hover"),
          },
          _invalid: {
            ...baseBorder("invalid"),
          },
        },
      },
      floating: {
        wrapper: {
          ...floatingBackground("default"),
          ...floatingBorder("default"),
          boxShadow: "sm",

          _hover: {
            ...floatingBorder("hover"),
          },
          _invalid: {
            ...baseBorder("invalid"),
          },
        },
      },
      ghost: {
        wrapper: {
          _hover: {
            ...baseBorder("hover"),
          },
          _invalid: {
            ...baseBorder("invalid"),
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "base",
  },
});
