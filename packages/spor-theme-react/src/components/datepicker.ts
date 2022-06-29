import { ComponentMultiStyleConfig } from "@chakra-ui/react";
import { anatomy, PartsStyleObject } from "@chakra-ui/theme-tools";
import { colors } from "../foundations";
import { getBoxShadowString } from "../utils/box-shadow-utils";

const parts = anatomy("datepicker").parts(
  "input",
  "calendarButton",
  "calendar",
  "monthLabel",
  "dayLabel",
  "weekendLabel",
  "button"
);

const baseStyle: PartsStyleObject<typeof parts> = {
  input: {
    borderRadius: "sm",
    borderRightRadius: ["none", "sm"],
    height: "100%",
    minWidth: "11rem",
  },
  calendarButton: {
    borderRadius: "sm",
    borderLeftRadius: 0,
    padding: "1rem",
    boxShadow: getBoxShadowString({ borderColor: colors.alias.darkGrey }),
    height: "100%",
  },
  calendar: {
    backgroundColor: "alias.white",
    borderRadius: "md",
    boxShadow: "sm",
    position: "relative",
    zIndex: "popover",
    outline: 0,
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
};

const Datepicker: ComponentMultiStyleConfig = {
  parts: parts.keys,
  defaultProps: {
    size: "sm",
  },
  baseStyle: baseStyle,
};

export default Datepicker;
