import { defineSlotRecipe } from "@chakra-ui/react";
import { accentText } from "../utils/accent-utils";
import { coreBackground, coreBorder, coreText } from "../utils/core-utils";
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
        ...coreBackground("disabled"),
        ...coreBorder("disabled"),
        ...coreText("disabled"),
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
      borderRadius: "xl",
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
        ...coreBorder("invalid"),
      },
    },
    arrow: {
      ...surface("default"),
    },
    calendarPopover: {
      ...floatingBackground("default"),
      ...coreText("default"),
      ...floatingBorder("default"),
      boxShadow: "md",
    },
    weekdays: {
      ...coreText("default"),
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
      ...coreText("default"),
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
        ...coreBackground("disabled"),
        ...coreText("disabled"),
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
        ...coreBorder("default"),
      },
      "&[data-unavailable]": {
        pointerEvents: "none",
        ...coreBackground("disabled"),
        ...coreText("disabled"),
      },
    },
  },
  variants: {
    variant: {
      core: {
        wrapper: {
          outline: "1px solid",
          outlineColor: "core.outline",
          ...coreBackground("default"),

          _hover: {
            outline: "2px solid",

            outlineColor: "core.outline.hover",
          },
          _invalid: {
            ...coreBorder("invalid"),
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
            ...coreBorder("invalid"),
          },
        },
      },
      ghost: {
        wrapper: {
          _hover: {
            outline: "2px solid",
            outlineColor: "core.outline.hover",
          },
          _invalid: {
            ...coreBorder("invalid"),
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "core",
  },
});
