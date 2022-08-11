import { shadows } from "../foundations/shadows";

export const cardElevations = {
  defaults: {},
  sm: {
    elevation: shadows.elevation.sm,
    shadowColor: "black",
    shadowOffset: shadows.offset.sm,
    shadowRadius: shadows.radius.sm,
    shadowOpacity: shadows.opacity.sm,
  },
  md: {
    elevation: shadows.elevation.md,
    shadowColor: "black",
    shadowOffset: shadows.offset.md,
    shadowRadius: shadows.radius.md,
    shadowOpacity: shadows.opacity.md,
  },
  lg: {
    elevation: shadows.elevation.lg,
    shadowColor: "black",
    shadowOffset: shadows.offset.lg,
    shadowRadius: shadows.radius.lg,
    shadowOpacity: shadows.opacity.lg,
  },
  none: {
    elevation: 0,
    shadowColor: "black",
    shadowOffset: shadows.offset.none,
    shadowRadius: shadows.radius.none,
  },
};

export const cardColorSchemes = {
  defaults: {
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "white",
  },
  white: {
    backgroundColor: "white",
    borderColor: "silver",
  },
  grey: {
    backgroundColor: "grey.100",
    borderColor: "steel",
  },
  blue: {
    backgroundColor: "blue.100",
    borderColor: "blue.200",
  },
  green: {
    backgroundColor: "green.100",
    borderColor: "green.300",
  },
  teal: {
    backgroundColor: "teal.100",
    borderColor: "teal.200",
  },
  yellow: {
    backgroundColor: "yellow.100",
    borderColor: "yellow.300",
  },
  orange: {
    backgroundColor: "orange.100",
    borderColor: "orange.200",
  },
  disabled: {
    backgroundColor: "platinum",
    borderColor: "silver",
  },
};

export const cardOnPressColorSchemes = {
  defaults: {},
  white: {
    backgroundColor: "green.50",
    borderColor: "silver",
  },
  grey: {
    backgroundColor: "white",
    borderColor: "steel",
  },
  blue: {
    opacity: 0.7,
  },
  green: {
    opacity: 0.7,
  },
  teal: {
    opacity: 0.7,
  },
  yellow: {
    opacity: 0.7,
  },
  orange: {
    opacity: 0.7,
  },
  disabled: {
    opacity: 0.7,
  },
};

export const cardSelectedColorSchemes = {
  defaults: {},
  white: {
    backgroundColor: "green.50",
    borderColor: "greenHaze",
    borderWidth: 2,
  },
  grey: {
    backgroundColor: "green.50",
    borderColor: "green.500",
  },
  blue: {
    backgroundColor: "green.50",
    borderColor: "green.500",
  },
  green: {},
  teal: {},
  yellow: {},
  orange: {},
  disabled: {},
};

export const cardSizes = {
  lg: {
    borderRadius: "md",
  },
  sm: {
    borderRadius: "md",
  },
};
