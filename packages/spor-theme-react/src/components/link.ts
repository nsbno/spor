import type {
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";

const baseStyle: SystemStyleObject = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  backgroundImage: "linear-gradient(currentColor, currentColor)",
  backgroundSize: "100% 2px",
  backgroundPosition: "0 100%",
  backgroundRepeat: "no-repeat",
  pb: "2px",
  color: "inherit",
  display: "inline",
  position: "relative",

  "&:focus": {
    outline: "none",
  },

  svg: {
    display: "inline-block",
    width: "1.125em",
    height: "1.125em",
    position: "relative",
    bottom: "-0.2em",
  },
};

const variantPrimary: SystemStyleFunction = (props) => ({
  color: "alias.pine",
  _hover: {
    backgroundColor: "alias.coralGreen",
    color: "alias.darkTeal",
    boxShadow: `0 0 0 ${props.theme.spacing[0.5]} ${props.theme.colors.alias.coralGreen}`,
  },
  _active: {
    backgroundColor: "alias.mint",
    boxShadow: `0 0 0 ${props.theme.spacing[0.5]} ${props.theme.colors.alias.mint}`,
    color: "alias.pine",
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
    color: "alias.darkGrey",
    backgroundColor: "palette.blackAlpha.100",
    boxShadow: `0 0 0 ${props.theme.spacing[0.5]} ${props.theme.colors.palette.blackAlpha[100]}`,
  },
  _active: {
    color: "alias.darkTeal",
    backgroundColor: "alias.mint",
    boxShadow: `0 0 0 ${props.theme.spacing[0.5]} ${props.theme.colors.alias.mint}`,
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
    color: "alias.white",
    backgroundColor: "palette.whiteAlpha.200",
    boxShadow: `0 0 0 ${props.theme.spacing[0.5]} ${props.theme.colors.palette.whiteAlpha[200]}`,
  },
  _active: {
    color: "alias.white",
    backgroundColor: "palette.whiteAlpha.400",
    boxShadow: `0 0 0 ${props.theme.spacing[0.5]} ${props.theme.colors.palette.whiteAlpha[400]}`,
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
