import {
  mode,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";

const baseStyle: SystemStyleObject = {
  border: 0,
  borderRadius: "xl",
  fontWeight: "bold",
  whiteSpace: "nowrap",
  transitionProperty: "common",
  transitionDuration: "normal",
  px: 3,
  _focus: {
    boxShadow: 0,
    outline: 0,
  },
  _disabled: {
    cursor: "not-allowed",
    boxShadow: "none",
    backgroundColor: "silver",
    color: "dimGrey",
  },
  _hover: {
    _disabled: {
      background: "silver",
    },
  },
};

const variantControl: SystemStyleFunction = ({ theme }) => ({
  backgroundColor: "darkTeal",
  color: "white",
  _focus: {
    boxShadow: `inset 0 0 0 4px ${theme.colors.darkTeal}, inset 0 0 0 6px currentColor`,
  },
  "&:focus:not(:focus-visible)": {
    boxShadow: "none",
  },
  _focusVisible: {
    boxShadow: `inset 0 0 0 4px ${theme.colors.darkTeal}, inset 0 0 0 6px currentColor`,
  },
  _hover: {
    backgroundColor: "night",
  },
  _active: {
    backgroundColor: "pine",
  },
});

const variantPrimary: SystemStyleFunction = ({ theme }) => ({
  backgroundColor: "primaryGreen",
  color: "white",
  _focus: {
    boxShadow: `inset 0 0 0 4px ${theme.colors.primaryGreen}, inset 0 0 0 4px ${theme.colors.primaryGreen}, inset 0 0 0 6px currentColor`,
  },
  "&:focus:not(:focus-visible)": {
    boxShadow: `none`,
  },
  _focusVisible: {
    boxShadow: `inset 0 0 0 4px ${theme.colors.primaryGreen}, inset 0 0 0 4px ${theme.colors.primaryGreen}, inset 0 0 0 6px currentColor`,
  },
  _hover: {
    backgroundColor: "pine",
  },
  _active: {
    backgroundColor: "azure",
  },
});

const variantSecondary: SystemStyleFunction = ({ theme }) => ({
  backgroundColor: "coralGreen",
  color: "darkTeal",
  _focus: {
    boxShadow: `inset 0 0 0 4px ${theme.colors.coralGreen}, inset 0 0 0 4px ${theme.colors.coralGreen}, inset 0 0 0 6px currentColor`,
  },
  ":focus:not(:focus-visible)": {
    boxShadow: "none",
  },
  _focusVisible: {
    boxShadow: `inset 0 0 0 4px ${theme.colors.coralGreen}, inset 0 0 0 4px ${theme.colors.coralGreen}, inset 0 0 0 6px currentColor`,
  },
  _hover: {
    backgroundColor: "blueGreen",
  },
  _active: {
    backgroundColor: "mint",
  },
});

const variantTertiary: SystemStyleFunction = ({ theme }) => ({
  backgroundColor: "mint",
  color: "darkGrey",
  fontWeight: "normal",
  _focus: {
    boxShadow: `inset 0 0 0 4px ${theme.colors.mint}, inset 0 0 0 4px ${theme.colors.mint}, inset 0 0 0 6px currentColor`,
  },
  ":focus:not(:focus-visible)": {
    boxShadow: "none",
  },
  _focusVisible: {
    boxShadow: `inset 0 0 0 4px ${theme.colors.mint}, inset 0 0 0 4px ${theme.colors.mint}, inset 0 0 0 6px currentColor`,
  },
  _hover: {
    backgroundColor: "seaMist",
  },
  _active: {
    backgroundColor: "lightGrey",
  },
});

const variantAdditional: SystemStyleFunction = ({ theme, colorMode }) => ({
  backgroundColor: "transparent",
  color: mode("darkGrey", "white")({ colorMode }),
  fontWeight: "normal",
  boxShadow: `inset 0 0 0 1px ${mode(
    theme.colors.blackAlpha[400],
    theme.colors.whiteAlpha[400]
  )({ colorMode })}`,
  _focus: {
    boxShadow: `inset 0 0 0 3px ${theme.colors.greenHaze}`,
  },
  ":focus:not(:focus-visible)": {
    boxShadow: `inset 0 0 0 1px ${mode(
      theme.colors.blackAlpha[400],
      theme.colors.whiteAlpha[400]
    )({ colorMode })}`,
  },
  _focusVisible: {
    boxShadow: `inset 0 0 0 3px ${theme.colors.greenHaze}`,
  },
  _hover: {
    boxShadow: `inset 0 0 0 2px currentColor`,
  },
  _active: {
    boxShadow: `inset 0 0 0 1px ${mode(
      theme.colors.blackAlpha[400],
      theme.colors.whiteAlpha[300]
    )({ colorMode })}`,
    backgroundColor: mode("mint", theme.colors.whiteAlpha[300])({ colorMode }),
  },
});

const variantGhost: SystemStyleFunction = ({ theme }) => ({
  backgroundColor: "transparent",
  color: "darkGrey",
  fontWeight: "normal",
  _focus: {
    outline: "none",
    boxShadow: `inset 0 0 0 1px ${theme.colors.greenHaze}`,
  },
  ":focus:not(:focus-visible)": {
    boxShadow: "none",
  },
  _focusVisible: {
    boxShadow: `inset 0 0 0 1px ${theme.colors.greenHaze}`,
  },
  _hover: {
    backgroundColor: "seaMist",
    _disabled: {
      color: "dimGrey",
    },
  },
  _active: {
    backgroundColor: "mint",
  },
});

const variants = {
  control: variantControl,
  primary: variantPrimary,
  secondary: variantSecondary,
  tertiary: variantTertiary,
  additional: variantAdditional,
  ghost: variantGhost,
};

const sizes: Record<string, SystemStyleObject> = {
  lg: {
    height: 8,
    minWidth: 8,
    fontSize: "18px",
  },
  md: {
    height: 7,
    minWidth: 7,
    fontSize: "18px",
  },
  sm: {
    height: 6,
    minWidth: 6,
    fontSize: "16px",
  },
  xs: {
    height: 5,
    minWidth: 5,
    fontSize: "16px",
    px: 2,
  },
};

const defaultProps = {
  variant: "primary",
  size: "md",
};

export default {
  baseStyle,
  variants,
  sizes,
  defaultProps,
};
