import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { anatomy, cssVar, mode } from "@chakra-ui/theme-tools";
import { zIndices } from "../foundations";
import { accentText } from "../utils/accent-utils";
import { baseBackground, baseBorder, baseText } from "../utils/base-utils";
import { brandBackground, brandText } from "../utils/brand-utils";
import { floatingBorder, floatingBackground } from "../utils/floating-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { ghostBackground } from "../utils/ghost-utils";
import { surface } from "../utils/surface-utils";

const parts = anatomy("datepicker").parts(
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
);

const $arrowBackground = cssVar("popper-arrow-bg");

const helpers = createMultiStyleConfigHelpers(parts.keys);
const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    wrapper: {
      transitionProperty: "box-shadow",
      transitionDuration: "fast",
      borderRadius: "sm",
      display: "flex",
      flex: 1,
      paddingY: 0.5,
      alignItems: "center",
      _hover: {
        zIndex: zIndices.docked,
      },
      _disabled: {
        pointerEvents: "none",
        ...baseBackground("disabled", props),
      },
      _focusWithin: {
        ...focusVisibleStyles(props)._focusVisible,
      },
    },
    inputLabel: {
      fontSize: "mobile.xs",
      color: mode("darkGrey", "white")(props),
      margin: 0,
      cursor: "text",
    },
    dateTimeSegment: {
      color: mode(
        "darkGrey",
        props.isPlaceholder ? "whiteAlpha.400" : "white",
      )(props),
      _focus: {
        ...brandBackground("hover", props),
        color: "white",
      },
    },
    calendarTriggerButton: {
      width: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderLeftRadius: "sm",
      transitionProperty: "box-shadow, background-color",
      transitionSpeed: "fast",
      position: "relative",
      paddingTop: 1,
      paddingBottom: 1,
      borderRadius: "sm",
      right: "9px",

      ...focusVisibleStyles(props),
      _hover: {
        ...ghostBackground("hover", props),
      },
      _active: {
        ...ghostBackground("active", props),
      },
      _invalid: {
        ...baseBorder("invalid", props),
      },
    },
    arrow: {
      [$arrowBackground.variable]: surface("default", props).backgroundColor,
    },
    calendarPopover: {
      ...floatingBackground("default", props),
      ...baseText("default", props),
      ...floatingBorder("default", props),
      boxShadow: "md",
    },
    weekdays: {
      ...baseText("default", props),
    },
    weekend: {
      ...accentText("default", props),
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
          ...brandBackground("default", props),
        },
      },
    },
    dateCell: {
      ...ghostBackground("default", props),
      ...baseText("default", props),
      borderRadius: "50%",
      position: "relative",
      transition: ".1s ease-in-out",
      userSelect: "none",
      width: [6, 7],
      height: [6, 7],
      transitionProperty: "common",
      transitionSpeed: "fast",

      _hover: {
        ...ghostBackground("hover", props),
      },
      ...focusVisibleStyles(props),
      _active: {
        ...ghostBackground("active", props),
      },
      _disabled: {
        ...baseBackground("disabled", props),
        ...baseText("disabled", props),
        pointerEvents: "none",
      },
      _selected: {
        ...brandBackground("default", props),
        ...brandText("default", props),
        _active: {
          ...brandBackground("active", props),
          ...brandText("active", props),
        },
      },
      "&[data-today]": {
        ...baseBorder("default", props),
      },
      "&[data-unavailable]": {
        pointerEvents: "none",
        ...baseBackground("disabled", props),
        ...baseText("disabled", props),
      },
    },
  }),
  variants: {
    base: (props) => ({
      wrapper: {
        ...baseBorder("default", props),
        ...baseBackground("default", props),

        _hover: {
          ...baseBorder("hover", props),
        },
        _invalid: {
          ...baseBorder("invalid", props),
        },
        _disabled: {
          ...baseBorder("disabled", props),
        },
      },
    }),
    floating: (props) => ({
      wrapper: {
        ...floatingBackground("default", props),
        ...floatingBorder("default", props),
        boxShadow: "sm",

        _hover: {
          ...floatingBorder("hover", props),
        },
        _invalid: {
          ...baseBorder("invalid", props),
        },
        _disabled: {
          ...baseBorder("disabled", props),
        },
      },
    }),
    ghost: (props) => ({
      wrapper: {
        _hover: {
          ...baseBorder("hover", props),
        },
        _invalid: {
          ...baseBorder("invalid", props),
        },
      },
    }),
  },
});

export default config;
