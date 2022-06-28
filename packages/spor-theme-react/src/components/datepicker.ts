import { ComponentMultiStyleConfig } from "@chakra-ui/react";
import {
  anatomy,
  PartsStyleInterpolation,
  PartsStyleObject,
} from "@chakra-ui/theme-tools";
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
  },
  calendarButton: {
    borderRadius: "sm",
    borderLeftRadius: 0,
    padding: "1rem",
    boxShadow: getBoxShadowString({ borderColor: colors.alias.darkGrey }),
  },
  calendar: {
    backgroundColor: "alias.white",
    borderRadius: "md",
    boxShadow: "sm",
    position: "relative",
    zIndex: "popover",
  },
  monthLabel: {
    fontWeight: "bold",
    color: "alias.darkGrey",
  },
  dayLabel: {
    fontWeight: "bold",
    color: "alias.darkGrey",
  },
  weekendLabel: {
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

const sizes: Record<string, PartsStyleInterpolation<typeof parts>> = {
  sm: {
    input: {
      height: "3.5rem",
      minWidth: "11rem",
    },
    calendarButton: {
      height: "3.5rem",
    },
    monthLabel: {
      textStyle: "sm",
      lineHeight: 4,
    },
    dayLabel: {
      textStyle: "sm",
    },
    weekendLabel: {
      textStyle: "sm",
    },
    button: {
      height: 6,
      width: 6,
    },
  },
  lg: {
    input: {
      height: "3.75rem",
      minWidth: "11.25rem",
    },
    calendarButton: {
      height: "3.75rem",
    },
    monthLabel: {
      fontSize: "md",
      lineHeight: "2.25rem",
    },
    dayLabel: {
      textStyle: "sm",
    },
    weekendLabel: {
      textStyle: "sm",
    },
    button: {
      height: 7,
      width: 7,
    },
  },
};

const Datepicker: ComponentMultiStyleConfig = {
  parts: parts.keys,
  defaultProps: {
    size: "sm",
  },
  baseStyle: baseStyle,
  sizes,
};

export default Datepicker;
