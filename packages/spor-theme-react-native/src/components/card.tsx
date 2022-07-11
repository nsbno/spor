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
    borderColor: "blackAlpha.200",
  },
  grey: {
    backgroundColor: "grey.100",
    borderColor: "blackAlpha.300",
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
    backgroundColor: "silver",
    borderColor: "silver",
  },
};

export const cardOnPressColorSchemes = {
  white: {
    backgroundColor: "green.50",
    borderColor: "blackAlpha.100",
  },
  grey: {
    backgroundColor: "grey.50",
    borderColor: "blackAlpha.200",
  },
  blue: {
    backgroundColor: "blue.50",
    borderColor: "blue.100",
  },
  green: {
    backgroundColor: "green.50",
    borderColor: "green.200",
  },
  teal: {
    backgroundColor: "teal.50",
    borderColor: "teal.100",
  },
  yellow: {
    backgroundColor: "yellow.50",
    borderColor: "yellow.200",
  },
  orange: {
    backgroundColor: "orange.50",
    borderColor: "orange.100",
  },
  disabled: {
    backgroundColor: "silver",
    borderColor: "silver",
  },
};

export const cardSelectedColorSchemes = {
  white: {
    backgroundColor: "green.50",    
    borderColor: "green.500",
  },
  grey: {
    borderColor: "blackAlpha.600",
  },
  blue: {
    borderColor: "blue.400",
  },
  green: {
    borderColor: "green.500",
  },
  teal: {
    borderColor: "teal.400",
  },
  yellow: {
    borderColor: "yellow.500",
  },
  orange: {
    borderColor: "orange.400",
  },
};

export const cardStates = {
  clicked: {
    backgroundColor: "green.50",
  },
  selected: {
    backgroundColor: "teal.300",
  },
  disabled: {
    backgroundColor: "silver",
  },
};

export const cardSizes = {
  lg: {
    borderRadius: "md",
  },
  sm: {
    borderRadius: "md",
  },
};
