import type {
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
    outline: "none",
  },
  _disabled: {
    cursor: "not-allowed",
    boxShadow: "none",
    backgroundColor: "alias.silver",
    color: "alias.dimGrey",
  },
  _hover: {
    _disabled: {
      bg: "initial",
    },
  },
};

const variantControl: SystemStyleFunction = ({ theme }) => ({
  backgroundColor: "alias.darkTeal",
  color: "alias.white",
  _focusVisible: {
    boxShadow: `inset 0 0 0 6px ${theme.colors.alias.darkTeal}, inset 0 0 0 8px currentColor`,
  },
  _hover: {
    backgroundColor: "alias.night",
  },
  _active: {
    backgroundColor: "alias.pine",
  },
});
const variantPrimary: SystemStyleFunction = ({ theme }) => ({
  backgroundColor: "alias.primaryGreen",
  color: "alias.white",
  _focusVisible: {
    boxShadow: `inset 0 0 0 6px ${theme.colors.alias.primaryGreen}, inset 0 0 0 8px currentColor`,
  },
  _hover: {
    backgroundColor: "alias.pine",
  },
  _active: {
    backgroundColor: "alias.azure",
  },
});
const variantSecondary: SystemStyleFunction = ({ theme }) => ({
  backgroundColor: "alias.coralGreen",
  color: "alias.darkTeal",
  _focusVisible: {
    boxShadow: `inset 0 0 0 6px ${theme.colors.alias.coralGreen}, inset 0 0 0 8px currentColor`,
  },
  _hover: {
    backgroundColor: "alias.blueGreen",
  },
  _active: {
    backgroundColor: "alias.mint",
  },
});
const variantTertiary: SystemStyleFunction = ({ theme }) => ({
  backgroundColor: "alias.mint",
  color: "alias.darkGrey",
  fontWeight: "normal",
  _focusVisible: {
    boxShadow: `inset 0 0 0 6px ${theme.colors.alias.mint}, inset 0 0 0 8px currentColor`,
  },
  _hover: {
    backgroundColor: "alias.seaMist",
  },
  _active: {
    backgroundColor: "alias.lightGrey",
  },
});
const variantAdditional: SystemStyleFunction = ({ theme }) => ({
  backgroundColor: "alias.mint",
  color: "alias.darkGrey",
  fontWeight: "normal",
  _focusVisible: {
    boxShadow: `inset 0 0 0 6px ${theme.colors.alias.mint}, inset 0 0 0 8px currentColor`,
  },
  _hover: {
    backgroundColor: "alias.seaMist",
  },
  _active: {
    backgroundColor: "alias.lightGrey",
  },
});

const variants = {
  control: variantControl,
  primary: variantPrimary,
  secondary: variantSecondary,
  tertiary: variantTertiary,
  additional: variantAdditional,
};

const sizes: Record<string, SystemStyleObject> = {
  lg: {
    h: 8,
    minW: 8,
    fontSize: "18px",
  },
  md: {
    h: 7,
    minW: 7,
    fontSize: "18px",
  },
  sm: {
    h: 6,
    minW: 6,
    fontSize: "16px",
  },
  xs: {
    h: 5,
    minW: 5,
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
