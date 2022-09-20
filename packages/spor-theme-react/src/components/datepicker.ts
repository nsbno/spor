import { ComponentMultiStyleConfig } from "@chakra-ui/react";
import { anatomy, PartsStyleInterpolation } from "@chakra-ui/theme-tools";
import { colors } from "../foundations";
import { getBoxShadowString } from "../utils/box-shadow-utils";
import { focusVisible } from "../utils/focus-utils";

const parts = anatomy("datepicker").parts(
  "wrapper",
  "calendarTriggerButton",
  "dateCell",
  "inputLabel"
);

const baseStyle: PartsStyleInterpolation<typeof parts> = ({ theme }) => ({
  wrapper: {
    backgroundColor: "white",
    boxShadow: getBoxShadowString({
      borderColor: theme.colors.darkGrey,
    }),
    transitionProperty: "box-shadow",
    transitionDuration: "fast",
    display: "flex",
    flex: 1,
    px: 3,
    py: 1.5,
    _hover: {
      boxShadow: getBoxShadowString({
        borderColor: theme.colors.darkGrey,
        borderWidth: 2,
      }),
    },
    _focusWithin: {
      boxShadow: getBoxShadowString({
        borderColor: theme.colors.greenHaze,
        borderWidth: 2,
      }),
    },
    _error: {
      boxShadow: getBoxShadowString({
        borderColor: theme.colors.brightRed,
        borderWidth: 2,
      }),
    },
    _disabled: {
      pointerEvents: "none",
      boxShadow: getBoxShadowString({
        borderColor: theme.colors.osloGrey,
        borderWidth: 1,
      }),
      _focus: {
        boxShadow: getBoxShadowString({
          borderColor: theme.colors.osloGrey,
          borderWidth: 1,
        }),
      },
    },
  },
  inputLabel: {
    fontSize: "mobile.xs",
    color: "darkGrey",
    margin: 0,
  },
  calendarTriggerButton: {
    boxShadow: getBoxShadowString({
      borderColor: theme.colors.darkGrey,
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
        borderColor: theme.colors.darkGrey,
        borderWidth: 2,
      }),
    },
    _active: {
      backgroundColor: "mint",
    },
    ...focusVisible({
      focus: {
        outline: "none",
        boxShadow: getBoxShadowString({
          borderColor: theme.colors.greenHaze,
          borderWidth: 2,
        }),
      },
      notFocus: {
        boxShadow: getBoxShadowString({
          borderColor: theme.colors.darkGrey,
          borderWidth: 1,
        }),
      },
    }),
    _error: {
      boxShadow: getBoxShadowString({
        borderColor: theme.colors.brightRed,
        borderWidth: 2,
      }),
    },
  },
  dateCell: {
    backgroundColor: "white",
    color: "darkGrey",
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
        borderColor: colors.darkGrey,
      }),
    },
    ...focusVisible({
      focus: {
        outline: "none",
        boxShadow: getBoxShadowString({
          borderWidth: 2,
          borderColor: colors.greenHaze,
        }),
      },
      notFocus: {
        boxShadow: "none",
        _hover: {
          boxShadow: getBoxShadowString({
            borderWidth: 2,
            borderColor: colors.osloGrey,
          }),
        },
        _active: {
          color: "darkGrey",
        },
      },
    }),
    _active: {
      backgroundColor: "seaMist",
      boxShadow: "none",
      color: "darkGrey",
    },
    _disabled: {
      color: "osloGrey",
      boxShadow: "none",
      pointerEvents: "none",
    },
    _selected: {
      backgroundColor: "darkTeal",
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
        borderColor: colors.osloGrey,
      }),
    },
    "&[data-unavailable]": {
      pointerEvents: "none",
      color: "osloGrey",
    },
  },
});

const variants: Record<
  "simple" | "with-trigger",
  PartsStyleInterpolation<typeof parts>
> = {
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
};

const Datepicker: ComponentMultiStyleConfig = {
  parts: parts.keys,
  baseStyle: baseStyle,
  variants,
};

export default Datepicker;
