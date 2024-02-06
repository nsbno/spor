import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { anatomy, cssVar, mode } from "@chakra-ui/theme-tools";
import { colors, zIndices } from "../foundations";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisibleStyles } from "../utils/focus-util";

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
      backgroundColor: mode("white", "night")(props),
      boxShadow: getBoxShadowString({
        borderColor: mode("blackAlpha.400", "whiteAlpha.400")(props),
      }),
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
      backgroundColor: mode("white", "night")(props),
      boxShadow: getBoxShadowString({
        borderColor: mode("darkGrey", "white")(props),
        borderWidth: 1,
      }),
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

      _hover: {
        boxShadow: "none",
        backgroundColor: mode("seaMist", "pine")(props),
      },
      _active: {
        backgroundColor: mode("mint", "whiteAlpha.200")(props),
      },
      ...focusVisibleStyles(props),
      _invalid: {
        boxShadow: getBoxShadowString({
          borderColor: "brightRed",
          borderWidth: 2,
        }),
      },
    },
    arrow: {
      [$arrowBackground.variable]: mode("white", colors.night)(props),
    },
    calendarPopover: {
      backgroundColor: mode("white", "night")(props),
      color: mode("darkGrey", "white")(props),
      boxShadow: getBoxShadowString({
        borderWidth: 2,
        borderColor: mode("blackAlpha.200", "whiteAlpha.200")(props),
        baseShadow: "md",
      }),
    },
    weekdays: {
      color: mode("darkGrey", "white")(props),
    },
    weekend: {
      color: mode("darkTeal", "seaMist")(props),
    },
    dateCell: {
      backgroundColor: mode("white", "night")(props),
      color: mode("darkGrey", "white")(props),
      borderRadius: "50%",
      position: "relative",
      transition: ".1s ease-in-out",
      userSelect: "none",
      width: [6, 7],
      height: [6, 7],
      transitionProperty: "common",
      transitionSpeed: "fast",

      _hover: {
        backgroundColor: mode("seaMist", "pine")(props),
      },
      _focusVisible: {
        outlineColor: "greenHaze",
        outlineWidth: 2,
        outlineStyle: "solid",
      },
      _active: {
        backgroundColor: "seaMist",
        boxShadow: "none",
        color: mode("darkGrey", "white")(props),
      },
      _disabled: {
        color: "osloGrey",
        boxShadow: "none",
        pointerEvents: "none",
      },
      _selected: {
        backgroundColor: mode("darkTeal", "pine")(props),
        color: "white",
        _active: {
          backgroundColor: "seaMist",
          boxShadow: "none",
          color: "darkGrey",
        },
      },
      "&[data-today]": {
        boxShadow: getBoxShadowString({
          borderWidth: 1,
          borderColor: mode("blackAlpha.400", "whiteAlpha.400")(props),
        }),
      },
      "&[data-unavailable]": {
        pointerEvents: "none",
        color: "osloGrey",
      },
    },
  }),
  variants: {
    base: (props) => ({
      wrapper: {
        boxShadow: getBoxShadowString({
          borderColor: mode("blackAlpha.400", "whiteAlpha.400")(props),
        }),
        _hover: {
          boxShadow: getBoxShadowString({
            borderColor: mode("darkGrey", "white")(props),
            borderWidth: 2,
          }),
        },
        _invalid: {
          boxShadow: getBoxShadowString({
            borderColor: "brightRed",
            borderWidth: 2,
          }),
        },
        _disabled: {
          boxShadow: getBoxShadowString({
            borderColor: mode("osloGrey", "whiteAlpha.400")(props),
            borderWidth: 1,
          }),
          _focus: {
            boxShadow: getBoxShadowString({
              borderColor: mode("osloGrey", "whiteAlpha.400")(props),
              borderWidth: 1,
            }),
          },
        },
      },
      calendar: {
        backgroundColor: mode("white", "night")(props),
        color: mode("darkGrey", "white")(props),
        boxShadow: getBoxShadowString({
          borderWidth: 2,
          borderColor: mode("blackAlpha.200", "whiteAlpha.200")(props),
        }),
      },
      dateCell: {
        color: mode("darkGrey", "white")(props),
        _hover: {
          backgroundColor: mode("seaMist", "pine")(props),
        },
        "&[data-today]": {
          boxShadow: getBoxShadowString({
            borderWidth: 1,
            borderColor: mode("blackAlpha.400", "whiteAlpha.400")(props),
          }),
        },
      },
    }),
    floating: (props) => ({
      wrapper: {
        boxShadow: getBoxShadowString({
          borderColor: mode("blackAlpha.400", "whiteAlpha.400")(props),
          baseShadow: "sm",
        }),
        _hover: {
          boxShadow: getBoxShadowString({
            borderColor: mode("darkGrey", "white")(props),
            borderWidth: 2,
            baseShadow: "sm",
          }),
        },
        _invalid: {
          boxShadow: getBoxShadowString({
            borderColor: "brightRed",
            borderWidth: 2,
            baseShadow: "sm",
          }),
        },
        _disabled: {
          boxShadow: getBoxShadowString({
            borderColor: mode("osloGrey", "whiteAlpha.400")(props),
            borderWidth: 1,
            baseShadow: "sm",
          }),
          _focus: {
            boxShadow: getBoxShadowString({
              borderColor: mode("osloGrey", "whiteAlpha.400")(props),
              borderWidth: 1,
              baseShadow: "sm",
            }),
          },
        },
      },
      calendar: {
        backgroundColor: mode("white", "night")(props),
        color: mode("darkGrey", "white")(props),
        boxShadow: getBoxShadowString({
          borderColor: mode("grey.200", "whiteAlpha.400")(props),
          baseShadow: "sm",
        }),
      },
      dateCell: {
        color: mode("darkGrey", "white")(props),
        _hover: {
          backgroundColor: mode("", "")(props),
        },
      },
    }),
    ghost: (props) => ({
      wrapper: {
        boxShadow: "none",
        _hover: {
          boxShadow: getBoxShadowString({
            borderColor: mode("darkGrey", "white")(props),
            borderWidth: 2,
          }),
        },
        _invalid: {
          boxShadow: getBoxShadowString({
            borderColor: "brightRed",
            borderWidth: 2,
          }),
        },
        _disabled: {
          boxShadow: getBoxShadowString({
            borderColor: mode("osloGrey", "whiteAlpha.400")(props),
            borderWidth: 1,
          }),
          _focus: {
            boxShadow: getBoxShadowString({
              borderColor: mode("osloGrey", "whiteAlpha.400")(props),
              borderWidth: 1,
            }),
          },
        },
      },
      calendar: {
        backgroundColor: mode("white", "night")(props),
        color: mode("darkGrey", "white")(props),
        boxShadow: "none",
      },
      dateCell: {
        color: mode("darkGrey", "white")(props),
        _hover: {
          backgroundColor: mode("seaMist", "pine")(props),
        },
        _selected: {
          backgroundColor: mode("transparent", "primaryGreen")(props),
          color: "darkGrey",
        },
      },
    }),
  },
});

export default config;
