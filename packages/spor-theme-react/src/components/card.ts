import type {
  SystemStyleInterpolation,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { colors, shadows } from "../foundations";

const baseStyle: SystemStyleObject = {
  border: "none",
  borderRadius: "md",
  overflow: "hidden",
  transitionProperty: "common",
  transitionDuration: "fast",

  "button&, a&": {
    _focus: {
      boxShadow: `0 0 0 2px ${colors.greenHaze}`,
      outline: "none",
    },
    ":focus:not(:focus-visible)": {
      boxShadow: "none",
    },
    _focusVisible: {
      boxShadow: `0 0 0 2px ${colors.greenHaze}`,
    },

    _disabled: {
      backgroundColor: "silver",
      boxShadow: `0 0 0 1px ${colors.silver}`,
      color: "osloGrey",
      pointerEvents: "none",
    },
  },
};

type Variant = "elevated" | "filled" | "outlined";
const variants: Record<Variant, SystemStyleInterpolation> = {
  elevated: {
    backgroundColor: "white",
    boxShadow: `${shadows.md}, 0 0 0 1px ${colors.silver}`,

    "button&, a&": {
      _hover: {
        boxShadow: `${shadows.lg}, 0 0 0 1px ${colors.steel}`,
        borderColor: "steel",
      },
      _active: {
        backgroundColor: "mint",
        boxShadow: "lg",
      },
    },
  },
  filled: ({ colorScheme }) => ({
    ...getColorSchemeProps(colorScheme),

    "button&, a&": {
      _hover: {
        ...getColorSchemeHoverProps(colorScheme),
      },
      _focus: {
        ...getColorSchemeFocusProps(colorScheme),
      },
      _focusVisible: {
        ...getColorSchemeFocusProps(colorScheme),
      },
      _active: {
        ...getColorSchemeActiveProps(colorScheme),
      },
    },
  }),
  outlined: {
    border: "1px solid",
    borderColor: "osloGrey",

    "button&, a&": {
      _hover: {
        borderColor: "darkGrey",
      },
      _active: {
        backgroundColor: "mint",
        borderColor: "osloGrey",
      },
    },
  },
};

function getColorSchemeProps(colorScheme: string) {
  switch (colorScheme) {
    case "blue":
      return {
        backgroundColor: "lightBlue",
        boxShadow: `0 0 0 1px ${colors.cloudy}`,
      };
    case "green":
      return {
        backgroundColor: "mint",
        boxShadow: `0 0 0 1px ${colors.coralGreen}`,
      };
    case "grey":
    default:
      return {
        backgroundColor: "platinum",
        boxShadow: `0 0 0 1px ${colors.silver}`,
      };
  }
}

function getColorSchemeHoverProps(colorScheme: string) {
  switch (colorScheme) {
    case "blue":
      return {
        backgroundColor: "cloudy",
        boxShadow: `0 0 0 1px ${colors.cloudy}`,
      };
    case "green":
      return {
        backgroundColor: "seaMist",
        boxShadow: `0 0 0 1px ${colors.seaMist}`,
      };
    case "grey":
    default:
      return {
        backgroundColor: "silver",
        boxShadow: `0 0 0 1px ${colors.silver}`,
      };
  }
}

function getColorSchemeFocusProps(colorScheme: string) {
  switch (colorScheme) {
    case "blue":
      return {
        backgroundColor: "lightBlue",
      };
    case "green":
      return {
        backgroundColor: "seaMist",
      };
    case "grey":
    default:
      return {
        backgroundColor: "platinum",
      };
  }
}

function getColorSchemeActiveProps(colorScheme: string) {
  switch (colorScheme) {
    case "blue":
      return {
        backgroundColor: "icyBlue",
        boxShadow: `0 0 0 1px ${colors.cloudy}`,
      };
    case "green":
      return {
        backgroundColor: "mint",
        boxShadow: `0 0 0 1px ${colors.seaMist}`,
      };
    case "grey":
    default:
      return {
        backgroundColor: "lightGrey",
        boxShadow: `0 0 0 1px ${colors.silver}`,
      };
  }
}

export default {
  baseStyle,
  variants,
};
