import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { anatomy, cssVar, mode } from "@chakra-ui/theme-tools";
import { colors, zIndices } from "../foundations";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisible } from "../utils/focus-utils";

const parts = anatomy("datepicker").parts(
  "wrapper",
  "calendarTriggerButton",
  "arrow",
  "calendar",
  "weekDays",
  "dateCell",
  "inputLabel",
  "dateTimeSegment"
);

const $arrowBackground = cssVar("popper-arrow-bg");

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: ({colorMode, isPlaceholder, isEditable, index }) => ({
    wrapper: {
      backgroundColor: mode("white", "night")({ colorMode }),
      boxShadow: getBoxShadowString({
        borderColor: mode(colors.blackAlpha["400"], colors.whiteAlpha["400"])({colorMode}),
      }),
      transitionProperty: "box-shadow",
      transitionDuration: "fast",
      display: "flex",
      flex: 1,
      paddingY: 0.5,
      alignItems: "center",
      _hover: {
        boxShadow: getBoxShadowString({
          borderColor: mode("darkGrey", "white")({colorMode}),
          borderWidth: 2,
        }),
        zIndex: zIndices.docked,
      },
      _focusWithin: {
        boxShadow: getBoxShadowString({
          borderColor: mode("greenHaze", "azure")({colorMode}),
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
        pointerEvents: "none",
        boxShadow: getBoxShadowString({
          borderColor: mode("osloGrey", colors.whiteAlpha["400"])({colorMode}),
          borderWidth: 1,
        }),
        _focus: {
          boxShadow: getBoxShadowString({
            borderColor: mode("osloGrey", colors.whiteAlpha["400"])({colorMode}),
            borderWidth: 1,
          }),
        },
      },
    },
    inputLabel: {
      fontSize: "mobile.xs",
      color: mode("osloGrey", "white")({colorMode}),
      margin: 0,
    },
    dateTimeSegment: {
      color: mode(
        isPlaceholder ? "dimGrey" : isEditable ? "darkGrey" : "osloGrey", 
        isPlaceholder ? colors.whiteAlpha["400"] : "white"
      )({colorMode}),
    },
    calendarTriggerButton: {
      backgroundColor: mode("white", "night")({ colorMode }),
      boxShadow: `${getBoxShadowString({
        borderColor: mode(colors.blackAlpha["400"], colors.whiteAlpha["400"])({colorMode}),
      })}, inset 1px 0 0 1px ${mode("white", colors.night)({colorMode})}`, // to make the shadow colors not multiply
      width: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRightRadius: "sm",
      transitionProperty: "box-shadow, background-color",
      transitionSpeed: "fast",
      position: "relative",
      left: "-1px", // To make the box-shadows overlap

      _hover: {
        boxShadow: `${getBoxShadowString({
          borderColor: mode("darkGrey", "white")({colorMode}),
          borderWidth: 2,
        })}, inset 2px 0 0 2px ${mode("white", colors.night)({colorMode})}`,
      },
      _active: {
        backgroundColor: mode("mint", "azure")({colorMode}),
      },
      ...focusVisible({
        focus: {
          outline: "none",
          boxShadow: getBoxShadowString({
            borderColor: mode("greenHaze", "azure")({colorMode}),
            borderWidth: 2,
          }),
        },
        notFocus: {
          boxShadow: getBoxShadowString({
            borderColor: mode("darkGrey", "white")({colorMode}),
            borderWidth: 1,
          }),
        },
      }),
      _invalid: {
        boxShadow: getBoxShadowString({
          borderColor: "brightRed",
          borderWidth: 2,
        }),
      },
    },
    arrow: {
      [$arrowBackground.variable]: mode("white", colors.night)({ colorMode })
    },
    calendar: {
      backgroundColor: mode("white", "night")({ colorMode }),
      color: mode("darkGrey", "white")({ colorMode })
    },
    weekDays: {
      color: index < 5 ? mode("darkGrey", "white")({colorMode}) : mode("greenHaze", "azure")({colorMode})
    },
    dateCell: {
      backgroundColor: mode("white", "night")({colorMode}),
      color: mode("darkGrey", "white")({colorMode}),
      borderRadius: "50%",
      position: "relative",
      transition: ".1s ease-in-out",
      userSelect: "none",
      width: [6, 7],
      height: [6, 7],
      transitionProperty: "common",
      transitionSpeed: "fast",

      _hover: {
        backgroundColor: mode("seaMist", "pine")({colorMode}),
      },
      ...focusVisible({
        focus: {
          outline: "none",
          boxShadow: getBoxShadowString({
            borderWidth: 2,
            borderColor: mode("greenHaze", "azure")({colorMode}),
          }),
        },
        notFocus: {
          boxShadow: "none",
          _hover: {
            boxShadow: getBoxShadowString({
              borderWidth: 2,
              borderColor: "osloGrey",
            }),
          },
          _active: {
            color: mode("darkGrey", "white")({colorMode}),
          },
        },
      }),
      _active: {
        backgroundColor: "seaMist",
        boxShadow: "none",
        color: mode("darkGrey", "white")({colorMode}),
      },
      _disabled: {
        color: "osloGrey",
        boxShadow: "none",
        pointerEvents: "none",
      },
      _selected: {
        backgroundColor: mode("darkTeal", "pine")({colorMode}),
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
          borderColor: mode("osloGrey", "dimGrey")({colorMode}),
        }),
      },
      "&[data-unavailable]": {
        pointerEvents: "none",
        color: "osloGrey",
      },
    },
  }),
  variants: {
    simple: {
      wrapper: {
        borderRadius: "sm",
      },
    },
    "with-trigger": {
      wrapper: {
        borderLeftRadius: "sm",
      },
    },
  },
});

export default config;
