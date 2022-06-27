import { ComponentMultiStyleConfig } from "@chakra-ui/react";
import {
  anatomy,
  PartsStyleInterpolation,
  PartsStyleObject,
} from "@chakra-ui/theme-tools";

const parts = anatomy("datepicker").parts(
  "input",
  "calendarButton",
  "calendar",
  "monthLabel",
  "dayLabel",
  "weekendLabel",
  "button"
);

const elementStateStyles = {
  _hover: {
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "alias.osloGrey",
  },
  _focus: {
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "alias.greenHaze",
  },
  _active: {
    backgroundColor: "alias.mint",
  },
  _disabled: {
    color: "alias.osloGrey",
    border: "none",
  },
};

const baseStyle: PartsStyleObject<typeof parts> = {
  input: {
    ...elementStateStyles,
  },
  calendarButton: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "sm",
    borderLeftRadius: 0,
    padding: "1rem",
    ...elementStateStyles,
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
    ...elementStateStyles,
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

const variants: Record<string, PartsStyleInterpolation<typeof parts>> = {
  mobile: {
    input: {
      borderRightRadius: 0,
    },
  },
};

const Datepicker: ComponentMultiStyleConfig = {
  parts: parts.keys,
  defaultProps: {},
  baseStyle: baseStyle,
  sizes,
  variants,
};

export default Datepicker;
