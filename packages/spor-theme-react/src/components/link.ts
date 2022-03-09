import type {
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";

const baseStyle: SystemStyleObject = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  outline: "none",
  borderRadius: "0",
  borderBottom: "1px solid",
  color: "inherit",
  display: "inline",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",

  "&:focus": {
    _after: {
      display: "none",
    },
  },
  "&:focus:not(:focus-visible)": {
    _after: {
      display: "block",
    },
  },
  "&:focus-visible": {
    _after: {
      display: "none",
    },
  },

  svg: {
    display: "inline-block",
    width: "1.25em",
    height: "1.25em",
  },
};

const variantPrimary: SystemStyleFunction = (props) => ({
  color: "alias.pine",
  _hover: {
    color: "alias.darkTeal",
  },
  _active: {
    color: "alias.primaryGreen",
  },
  "&:focus": {
    color: "alias.white",
    backgroundColor: "alias.pine",
    boxShadow: `0 0 0 ${props.theme.spacing[0.5]} ${props.theme.colors.alias.pine}`,
  },
  "&:focus:not(:focus-visible)": {
    color: "alias.pine",
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  "&:focus-visible": {
    color: "alias.white",
    backgroundColor: "alias.pine",
    boxShadow: `0 0 0 ${props.theme.spacing[0.5]} ${props.theme.colors.alias.pine}`,
  },
});

const variantSecondary: SystemStyleFunction = (props) => ({
  color: "alias.darkGrey",
  _hover: {
    color: "alias.darkTeal",
  },
  _active: {
    color: "alias.dimGrey",
  },
  "&:focus": {
    color: "alias.white",
    backgroundColor: "alias.darkGrey",
    boxShadow: `0 0 0 ${props.theme.spacing[0.5]} ${props.theme.colors.alias.darkGrey}`,
  },
  "&:focus:not(:focus-visible)": {
    color: "alias.darkGrey",
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  "&:focus-visible": {
    color: "alias.white",
    backgroundColor: "alias.darkGrey",
    boxShadow: `0 0 0 ${props.theme.spacing[0.5]} ${props.theme.colors.alias.darkGrey}`,
  },
});

const variantTertiary: SystemStyleFunction = (props) => ({
  color: "alias.white",
  _hover: {
    color: "alias.seaMist",
  },
  _active: {
    color: "alias.silver",
  },
  "&:focus": {
    color: "alias.pine",
    backgroundColor: "alias.white",
    boxShadow: `0 0 0 ${props.theme.spacing[0.5]} ${props.theme.colors.alias.white}`,
  },
  "&:focus:not(:focus-visible)": {
    color: "alias.white",
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  "&:focus-visible": {
    color: "alias.pine",
    backgroundColor: "alias.white",
    boxShadow: `0 0 0 ${props.theme.spacing[0.5]} ${props.theme.colors.alias.white}`,
  },
});

const variants = {
  primary: variantPrimary,
  secondary: variantSecondary,
  tertiary: variantTertiary,
};

export default {
  baseStyle,
  variants,
  defaultProps: {
    variant: "primary",
  },
};
