import { ComponentMultiStyleConfig } from "@chakra-ui/react";
import { anatomy, PartsStyleInterpolation } from "@chakra-ui/theme-tools";
import { colors } from "../foundations";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisible } from "../utils/focus-utils";

const parts = anatomy("datepicker").parts(
  "inputLabel",
  "wrapper",
  "dateSegments",
  "dateInputParts",
  "calendarTriggerButton",
  "dateCell",

  // gamle
  "input",
  "calendarButton",
  "calendar",
  "monthLabel",
  "dayLabel",
  "weekendLabel",
  "button"
);

const baseStyle: PartsStyleInterpolation<typeof parts> = ({ theme }) => ({
  wrapper: {
    backgroundColor: "alias.white",
    borderLeftRadius: "sm",
    boxShadow: getBoxShadowString({
      borderColor: theme.colors.alias.darkGrey,
    }),
    transitionProperty: "box-shadow",
    transitionDuration: "fast",
    display: "flex",
    flex: 1,
    pl: 3,
    py: 1.5,
    _hover: {
      boxShadow: getBoxShadowString({
        borderColor: theme.colors.alias.darkGrey,
        borderWidth: 2,
      }),
    },
    _focusWithin: {
      boxShadow: getBoxShadowString({
        borderColor: theme.colors.alias.greenHaze,
        borderWidth: 2,
      }),
    },
    _error: {
      boxShadow: getBoxShadowString({
        borderColor: theme.colors.alias.brightRed,
        borderWidth: 2,
      }),
    },
    _disabled: {
      pointerEvents: "none",
      boxShadow: getBoxShadowString({
        borderColor: theme.colors.alias.osloGrey,
        borderWidth: 1,
      }),
      _focus: {
        boxShadow: getBoxShadowString({
          borderColor: theme.colors.alias.osloGrey,
          borderWidth: 1,
        }),
      },
    },
  },
  inputLabel: {
    fontSize: "mobile.xs",
    color: "alias.darkGrey",
    margin: 0,
  },
  dateSegments: {
    display: "flex",
  },
  calendarTriggerButton: {
    boxShadow: getBoxShadowString({
      borderColor: theme.colors.alias.darkGrey,
      borderWidth: 1,
    }),
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
      boxShadow: getBoxShadowString({
        borderColor: theme.colors.alias.darkGrey,
        borderWidth: 2,
      }),
    },
    _active: {
      backgroundColor: "alias.mint",
    },
    ...focusVisible({
      focus: {
        outline: "none",
        boxShadow: getBoxShadowString({
          borderColor: theme.colors.alias.greenHaze,
          borderWidth: 2,
        }),
      },
      notFocus: {
        boxShadow: getBoxShadowString({
          borderColor: theme.colors.alias.darkGrey,
          borderWidth: 1,
        }),
      },
    }),
    _error: {
      boxShadow: getBoxShadowString({
        borderColor: theme.colors.alias.brightRed,
        borderWidth: 2,
      }),
    },
  },
  dateCell: {
    backgroundColor: "alias.white",
    color: "alias.darkGrey",
    borderRadius: "50%",
    position: "relative",
    transition: ".1s ease-in-out",
    userSelect: "none",
    width: [6, 7],
    height: [6, 7],
    transitionProperty: "common",
    transitionSpeed: "fast",

    _hover: {
      boxShadow: getBoxShadowString({
        borderWidth: 2,
        borderColor: colors.alias.darkGrey,
      }),
    },
    ...focusVisible({
      focus: {
        outline: "none",
        boxShadow: getBoxShadowString({
          borderWidth: 2,
          borderColor: colors.alias.greenHaze,
        }),
      },
      notFocus: {
        boxShadow: "none",
        _hover: {
          boxShadow: getBoxShadowString({
            borderWidth: 2,
            borderColor: colors.alias.osloGrey,
          }),
        },
        _active: {
          color: "alias.darkGrey",
        },
      },
    }),
    _active: {
      backgroundColor: "alias.seaMist",
      boxShadow: "none",
      color: "alias.darkGrey",
    },
    _disabled: {
      color: "alias.osloGrey",
      boxShadow: "none",
      pointerEvents: "none",
    },
    _selected: {
      backgroundColor: "alias.darkTeal",
      color: "alias.white",
      _active: {
        backgroundColor: "alias.seaMist",
        boxShadow: "none",
        color: "alias.darkGrey",
      },
    },
    "&[data-today]": {
      boxShadow: getBoxShadowString({
        borderWidth: 1,
        borderColor: colors.alias.osloGrey,
      }),
    },
  },
  monthLabel: {
    color: "alias.darkGrey",
    textStyle: ["sm", "md"],
    fontWeight: "bold",
  },
  dayLabel: {
    textStyle: "sm",
    fontWeight: "bold",
    color: "alias.darkGrey",
    textAlign: "center",
  },
  weekendLabel: {
    textStyle: "sm",
    fontWeight: "bold",
    color: "alias.greenHaze",
    textAlign: "center",
  },

  // Old
  calendar: {
    backgroundColor: "alias.white",
    borderRadius: "md",
    boxShadow: "sm",
    position: "relative",
    zIndex: "popover",
    outline: 0,
  },
  button: {
    backgroundColor: "alias.white",
    color: "alias.darkGrey",
    borderRadius: "50%",
    borderStyle: "solid",
    position: "relative",
    transition: ".1s ease-in-out",
    userSelect: "none",
    width: [6, 7],
    height: [6, 7],
    transitionProperty: "common",
    transitionSpeed: "fast",

    // the edge of a selection
    "&[data-is-edge='true']": {
      backgroundColor: "alias.pine",
      color: "alias.white",
    },
    // when two days back to back are selected
    "&[data-is-edge='true'] + [data-is-edge='true']": {
      _before: {
        content: '""',
        display: "block",
        backgroundColor: "alias.mint",
        borderRightRadius: "lg",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: "-50%",
        right: 0,
        zIndex: "-1",
      },
    },
    // when you've selected one day, and hovering towards the next
    "&[data-is-in-range='true'][data-is-edge='false']": {
      backgroundColor: "alias.mint",

      _before: {
        content: '""',
        display: "block",
        backgroundColor: "alias.mint",
        borderRightRadius: "lg",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: "-50%",
        right: 0,
        zIndex: "-1",
      },
    },
    // the days between the selected days
    "&[data-is-edge='false'][data-is-selected='true']": {
      backgroundColor: "alias.mint",

      _before: {
        content: '""',
        display: "block",
        backgroundColor: "alias.mint",
        borderRightRadius: "lg",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: "-50%",
        right: "-100%",
        zIndex: "-1",
      },
    },

    _hover: {
      boxShadow: getBoxShadowString({
        borderWidth: 2,
        borderColor: colors.alias.osloGrey,
      }),
    },
    _focus: {
      boxShadow: getBoxShadowString({
        borderWidth: 2,
        borderColor: colors.alias.greenHaze,
      }),
    },
    "&:focus:not(:focus-visible)": {
      boxShadow: "none",
      _hover: {
        boxShadow: getBoxShadowString({
          borderWidth: 2,
          borderColor: colors.alias.osloGrey,
        }),
      },
      _active: {
        color: "alias.darkGrey",
      },
    },
    _focusVisible: {
      boxShadow: getBoxShadowString({
        borderWidth: 2,
        borderColor: colors.alias.greenHaze,
      }),
    },
    _active: {
      backgroundColor: "alias.mint",
    },
    _disabled: {
      color: "alias.osloGrey",
      boxShadow: "none",
      pointerEvents: "none",
    },
  },
});

const Datepicker: ComponentMultiStyleConfig = {
  parts: parts.keys,
  defaultProps: {
    size: "sm",
  },
  baseStyle: baseStyle,
};

export default Datepicker;
