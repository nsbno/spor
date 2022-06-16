import { color } from "@chakra-ui/react";
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

type Variant = "elevated" | "colored" | "boxes";
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
      ":focus:not(:focus-visible)": {
        boxShadow: `${size === "lg" ? shadows.md : shadows.sm}, 0 0 0 1px ${
          colors.alias.silver
        }`,
      },
    },
  }),
  colored: ({ colorScheme }) => ({
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
  boxes: {
    border: "1px solid",
    borderColor: "alias.osloGrey",
  },
};

function getColorSchemeProps(colorScheme: string) {
  const backgroundColor =
    colors.palette[colorScheme]?.[200] || "alias.platinum";
  const boxShadowColor =
    colors.palette[colorScheme]?.[400] || colors.alias.silver;
  return {
    backgroundColor,
    boxShadow: `0 0 0 1px ${boxShadowColor}`,
  };
}

function getColorSchemeHoverProps(colorScheme: string) {
  const backgroundColor =
    colors.palette[colorScheme]?.[200] || "alias.silver";
  const boxShadowColor =
    colors.palette[colorScheme]?.[100] || colors.alias.silver;
  return {
    backgroundColor,
    boxShadowColor: `0 0 0 1px ${boxShadowColor}`,
  };
}

/* function getColorSchemeHoverProps(colorScheme: string) {
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
} */

function getColorSchemeFocusProps(colorScheme: string) {
  const backgroundColor =
    colors.palette[colorScheme]?.[100] || "alias.platinum";
  return {
    backgroundColor,
  };
}

/* function getColorSchemeFocusProps(colorScheme: string) {
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
} */

function getColorSchemeActiveProps(colorScheme: string) {
  const backgroundColor =
    colors.palette[colorScheme]?.[50] || "alias.lightGrey";
  const boxShadowColor =
    colors.palette[colorScheme]?.[100] || colors.alias.silver;
  return {
    backgroundColor,
    boxShadowColor: `0 0 0 1px ${boxShadowColor}`,
  };
}
/* function getColorSchemeActiveProps(colorScheme: string) {
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
} */

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
