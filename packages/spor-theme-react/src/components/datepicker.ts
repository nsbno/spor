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
    backgroundColor: "alias.white",
    boxShadow: getBoxShadowString({
      borderColor: theme.colors.alias.darkGrey,
    }),
    transitionProperty: "box-shadow",
    transitionDuration: "fast",
    display: "flex",
    flex: 1,
    px: 3,
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
    "&[data-unavailable]": {
      pointerEvents: "none",
      color: "alias.osloGrey",
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
