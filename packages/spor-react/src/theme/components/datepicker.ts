import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { anatomy, cssVar, mode } from "@chakra-ui/theme-tools";
import { zIndices } from "../foundations";
import {
  baseBackground,
  brandBackground,
  ghostBackground,
} from "../utils/background-utils";
import { baseBorder, floatingBorder } from "../utils/border-utils";
import { focusVisibleStyles } from "../utils/focus-utils";
import { accentText, baseText, brandText } from "../utils/text-utils";

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
      [$arrowBackground.variable]: mode(
        "surface.default.light",
        "surface.default.dark",
      )(props),
    },
    calendarPopover: {
      ...baseBackground("default", props),
      ...baseText("default", props),
      ...baseBorder("default", props),
      boxShadow: "md",
    },
    weekdays: {
      ...baseText("default", props),
    },
    weekend: {
      ...accentText("default", props),
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
