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
  "label",
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
    borderLeftRadius: "0px",
    padding: "15px",
    ...elementStateStyles,
  },
  calendar: {
    borderRadius: "md",
    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.2)",
    height: "348px",
    width: "375px",
  },
  label: {
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
    height: "36px",
    width: "36px",
    ...elementStateStyles,
  },
};

const sizes: Record<string, PartsStyleInterpolation<typeof parts>> = {
  sm: {
    input: {
      height: "56px",
      minWidth: "172px",
    },
    calendarButton: {
      height: "56px",
    },
  },
  lg: {
    input: {
      height: "60px",
      minWidth: "180px",
    },
    calendarButton: {
      height: "60px",
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
