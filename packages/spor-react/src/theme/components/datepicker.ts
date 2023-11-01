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
  "weekdays",
  "weekend",
  "dateCell",
  "inputLabel",
  "dateTimeSegment"
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
      display: "flex",
      flex: 1,
      paddingY: 0.5,
      alignItems: "center",
      _hover: {
        boxShadow: getBoxShadowString({
          borderColor: mode("darkGrey", "white")(props),
          borderWidth: 2,
        }),
        zIndex: zIndices.docked,
      },
      _focusWithin: {
        boxShadow: getBoxShadowString({
          borderColor: mode("greenHaze", "azure")(props),
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
    inputLabel: {
      fontSize: "mobile.xs",
      color: mode("darkGrey", "white")(props),
      margin: 0,
      cursor: "text",
    },
    dateTimeSegment: {
      color: mode(
        "darkGrey",
        props.isPlaceholder ? "whiteAlpha.400" : "white"
      )(props),
    },
    calendarTriggerButton: {
      backgroundColor: mode("white", "night")(props),
      boxShadow: `${getBoxShadowString({
        borderColor: mode("blackAlpha.400", "whiteAlpha.400")(props),
      })}, inset 1px 0 0 1px ${mode("white", colors.night)(props)}`, // to make the shadow colors not multiply
      width: 8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderLeftRadius: "sm",
      transitionProperty: "box-shadow, background-color",
      transitionSpeed: "fast",
      position: "relative",
      right: "-1px", // To make the box-shadows overlap

      _hover: {
        boxShadow: `${getBoxShadowString({
          borderColor: mode("darkGrey", "white")(props),
          borderWidth: 2,
        })}, inset 2px 0 0 2px ${mode("white", colors.night)(props)}`,
      },
      _active: {
        backgroundColor: mode("mint", "azure")(props),
      },
      ...focusVisible({
        focus: {
          outline: "none",
          boxShadow: getBoxShadowString({
            borderColor: mode("greenHaze", "azure")(props),
            borderWidth: 2,
          }),
        },
        notFocus: {
          boxShadow: getBoxShadowString({
            borderColor: mode("darkGrey", "white")(props),
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
      [$arrowBackground.variable]: mode("white", colors.night)(props),
    },    
    calendar: {
      backgroundColor: mode("white", "night")(props),
      color: mode("darkGrey", "white")(props),
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
      ...focusVisible({
        focus: {
          outline: "none",
          boxShadow: getBoxShadowString({
            borderWidth: 2,
            borderColor: mode("greenHaze", "azure")(props),
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
            color: mode("darkGrey", "white")(props),
          },
        },
      }),
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
          borderColor: mode("osloGrey", "dimGrey")(props),
        }),
        _focus: {
          outline: "none",
          boxShadow: getBoxShadowString({
            borderWidth: 2,
            borderColor: mode("greenHaze", "azure")(props),
          }),
        },
      },
      "&[data-unavailable]": {
        pointerEvents: "none",
        color: "osloGrey",
      },
    },
  }),
  variants: {
    base: (props) => ({
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
      calendarTriggerButton: {
        boxShadow: ``,
        paddingTop: 1,
        paddingBottom: 1,
        borderRadius: "sm",
        right: "9px",
  
        _hover: {
        boxShadow: "",
         backgroundColor: mode("seaMist", "pine")(props),
        },
        _active: {
          backgroundColor: mode("mint", "whiteAlpha.200")(props),
        },
        ...focusVisible({
          focus: {
            outline: "none",
            boxShadow: getBoxShadowString({
              borderColor: mode("greenHaze", "azure")(props),
              borderWidth: 2,
            }),
          },
          notFocus: {
            boxShadow: getBoxShadowString({
              borderColor: mode("darkGrey", "white")(props),
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
      wrapper: {
        borderRadius: "sm",
      },
    }),
    floating: (props) => ({
        calendar: {
          backgroundColor: mode("white", "night")(props),
          color: mode("darkGrey", "white")(props),
        },
      dateCell: {
        color: mode("darkGrey", "white")(props),
        _hover: {
          backgroundColor: mode("", "")(props),
        },
      },
      calendarTriggerButton: {
        boxShadow: ``,
        paddingTop: 1,
        paddingBottom: 1,
        borderRadius: "sm",
        right: "9px",
  
        _hover: {
        boxShadow: "",
         backgroundColor: mode("seaMist", "pine")(props),
        },
        _active: {
          backgroundColor: mode("mint", "whiteAlpha.200")(props),
        },
        ...focusVisible({
          focus: {
            outline: "none",
            boxShadow: getBoxShadowString({
              borderColor: mode("greenHaze", "azure")(props),
              borderWidth: 2,
            }),
          },
          notFocus: {
            boxShadow: getBoxShadowString({
              borderColor: mode("darkGrey", "white")(props),
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
      wrapper: {
        borderRadius: "sm",
      },
    }),
    ghost: (props) => ({
      calendar: {
        backgroundColor: mode("white", "night")(props),
        color: mode("darkGrey", "white")(props),
        boxShadow: getBoxShadowString({
          borderWidth: 2,
          borderColor: mode("", "")(props),
        }),
      },
      dateCell: {
        color: mode("darkGrey", "white")(props),
        _hover: {
          backgroundColor: mode("seaMist", "pine")(props),
        },
        _selected: {
          backgroundColor: mode("", "primaryGreen")(props),
          color: "darkGrey"
        },
      },
      calendarTriggerButton: {
        boxShadow: ``,
        paddingTop: 1,
        paddingBottom: 1,
        borderRadius: "sm",
        right: "9px",
  
        _hover: {
        boxShadow: "",
         backgroundColor: mode("seaMist", "pine")(props),
        },
        _active: {
          backgroundColor: mode("mint", "whiteAlpha.200")(props),
        },
        ...focusVisible({
          focus: {
            outline: "none",
            boxShadow: getBoxShadowString({
              borderColor: mode("greenHaze", "azure")(props),
              borderWidth: 2,
            }),
          },
          notFocus: {
            boxShadow: getBoxShadowString({
              borderColor: mode("darkGrey", "white")(props),
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
      wrapper: {
        borderRadius: "sm",
      },
    }),
    simple: {
      wrapper: {
        borderRadius: "sm",
      },
    },
    "with-trigger": {
      wrapper: {
        borderRightRadius: "sm",
      },
    },
  },
});

export default config;
