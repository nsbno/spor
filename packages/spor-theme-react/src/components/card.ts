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
      boxShadow: `0 0 0 2px ${colors.alias.greenHaze}`,
      outline: "none",
    },
    ":focus:not(:focus-visible)": {
      boxShadow: "none",
    },
    _focusVisible: {
      boxShadow: `0 0 0 2px ${colors.alias.greenHaze}`,
    },

    _disabled: {
      backgroundColor: "alias.silver",
      boxShadow: `0 0 0 1px ${colors.alias.silver}`,
      color: "alias.osloGrey",
      pointerEvents: "none",
    },
  },
};

type Variant = "elevated" | "filled" | "outlined";
const variants: Record<Variant, SystemStyleInterpolation> = {
  elevated: ({ size }) => ({
    backgroundColor: "alias.white",
    boxShadow: `${size === "lg" ? shadows.md : shadows.sm}, 0 0 0 1px ${
      colors.alias.silver
    }`,

    "button&, a&": {
      _hover: {
        boxShadow: `${size === "lg" ? shadows.lg : shadows.md}, 0 0 0 1px ${
          colors.alias.steel
        }`,
        borderColor: "alias.steel",
      },
      _active: {
        backgroundColor: "alias.mint",
        boxShadow: "lg",
      },
    },
  }),
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
    borderColor: "alias.osloGrey",

    "button&, a&": {
      _hover: {
        borderColor: "alias.darkGrey",
      },
      _active: {
        backgroundColor: "alias.mint",
        borderColor: "alias.osloGrey",
      },
    },
  },
};

function getColorSchemeProps(colorScheme: string) {
  switch (colorScheme) {
    case "blue":
      return {
        backgroundColor: "alias.lightBlue",
        boxShadow: `0 0 0 1px ${colors.alias.cloudy}`,
      };
    case "green":
      return {
        backgroundColor: "alias.mint",
        boxShadow: `0 0 0 1px ${colors.alias.coralGreen}`,
      };
    case "grey":
    default:
      return {
        backgroundColor: "alias.platinum",
        boxShadow: `0 0 0 1px ${colors.alias.silver}`,
      };
  }
}

function getColorSchemeHoverProps(colorScheme: string) {
  switch (colorScheme) {
    case "blue":
      return {
        backgroundColor: "alias.cloudy",
        boxShadow: `0 0 0 1px ${colors.alias.cloudy}`,
      };
    case "green":
      return {
        backgroundColor: "alias.seaMist",
        boxShadow: `0 0 0 1px ${colors.alias.seaMist}`,
      };
    case "grey":
    default:
      return {
        backgroundColor: "alias.silver",
        boxShadow: `0 0 0 1px ${colors.alias.silver}`,
      };
  }
}

function getColorSchemeFocusProps(colorScheme: string) {
  switch (colorScheme) {
    case "blue":
      return {
        backgroundColor: "alias.lightBlue",
      };
    case "green":
      return {
        backgroundColor: "alias.seaMist",
      };
    case "grey":
    default:
      return {
        backgroundColor: "alias.platinum",
      };
  }
}

function getColorSchemeActiveProps(colorScheme: string) {
  switch (colorScheme) {
    case "blue":
      return {
        backgroundColor: "alias.icyBlue",
        boxShadow: `0 0 0 1px ${colors.alias.cloudy}`,
      };
    case "green":
      return {
        backgroundColor: "alias.mint",
        boxShadow: `0 0 0 1px ${colors.alias.seaMist}`,
      };
    case "grey":
    default:
      return {
        backgroundColor: "alias.lightGrey",
        boxShadow: `0 0 0 1px ${colors.alias.silver}`,
      };
  }
}

type Size = "sm" | "lg";

const sizes: Record<Size, SystemStyleInterpolation> = {
  lg: {
    borderRadius: "md",
  },
  sm: {
    borderRadius: "sm",
  },
};

export default {
  baseStyle,
  variants,
  sizes,
};
