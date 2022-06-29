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
    fontWeight: "bold",
    color: "alias.darkGrey",
    textStyle: ["sm", "md"],
  },
  dayLabel: {
    textStyle: "sm",
    fontWeight: "bold",
    color: "alias.darkGrey",
  },
  weekendLabel: {
    textStyle: "sm",
    fontWeight: "bold",
    color: "alias.greenHaze",
  },
  button: {
    backgroundColor: "alias.white",
    color: "alias.darkGrey",
    borderRadius: "50%",
    borderStyle: "solid",
    transition: ".1s ease-in-out",
    userSelect: "none",
    width: [6, 7],
    height: [6, 7],

    _selected: {
      backgroundColor: "alias.pine",
      color: "alias.white",
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
