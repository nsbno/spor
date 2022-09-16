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
  backgroundSize: "100% 1px",
  backgroundPosition: "0 100%",
  backgroundRepeat: "no-repeat",
  borderRadius: "none",
  pb: "2px",
  color: "inherit",
  display: "inline",
  position: "relative",

  "&:focus, &:focus-visible, &:active, &:hover": {
    backgroundImage: "none",
    backgroundSize: "100%",
    outline: "none",
    borderRadius: "xs",
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
  color: "pine",
  _focus: {
    color: "white",
    backgroundColor: "pine",
    boxShadow: `0 0 0 ${props.theme.spacing[0.5]} ${props.theme.colors.pine}`,
  },
  "&:focus:not(:focus-visible):not(:active)": {
    color: "pine",
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  _focusVisible: {
    color: "white",
    backgroundColor: "pine",
    boxShadow: `0 0 0 ${props.theme.spacing[0.5]} ${props.theme.colors.pine}`,
  },
  _hover: {
    backgroundColor: "coralGreen",
    color: "darkTeal",
    boxShadow: `0 0 0 ${props.theme.spacing[0.5]} ${props.theme.colors.coralGreen}`,
  },
  _active: {
    backgroundColor: "mint",
    boxShadow: `0 0 0 ${props.theme.spacing[0.5]} ${props.theme.colors.mint}`,
    color: "pine",
  },
});

const variantSecondary: SystemStyleFunction = (props) => ({
  color: "darkGrey",
  _focus: {
    color: "white",
    backgroundColor: "darkGrey",
    boxShadow: `0 0 0 ${props.theme.spacing[0.5]} ${props.theme.colors.darkGrey}`,
  },
  "&:focus:not(:focus-visible):not(:active)": {
    color: "darkGrey",
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  _focusVisible: {
    color: "white",
    backgroundColor: "darkGrey",
    boxShadow: `0 0 0 ${props.theme.spacing[0.5]} ${props.theme.colors.darkGrey}`,
  },
  _hover: {
    color: "darkGrey",
    backgroundColor: "blackAlpha.100",
    boxShadow: `0 0 0 ${props.theme.spacing[0.5]} ${props.theme.colors.blackAlpha[100]}`,
  },
  _active: {
    color: "darkTeal",
    backgroundColor: "mint",
    boxShadow: `0 0 0 ${props.theme.spacing[0.5]} ${props.theme.colors.mint}`,
  },
});

const variantTertiary: SystemStyleFunction = (props) => ({
  color: "white",
  _focus: {
    color: "pine",
    backgroundColor: "white",
    boxShadow: `0 0 0 ${props.theme.spacing[0.5]} ${props.theme.colors.white}`,
  },
  "&:focus:not(:focus-visible):not(:active)": {
    color: "white",
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  _focusVisible: {
    color: "pine",
    backgroundColor: "white",
    boxShadow: `0 0 0 ${props.theme.spacing[0.5]} ${props.theme.colors.white}`,
  },
  _hover: {
    color: "white",
    backgroundColor: "whiteAlpha.200",
    boxShadow: `0 0 0 ${props.theme.spacing[0.5]} ${props.theme.colors.whiteAlpha[200]}`,
  },
  _active: {
    color: "white",
    backgroundColor: "whiteAlpha.400",
    boxShadow: `0 0 0 ${props.theme.spacing[0.5]} ${props.theme.colors.whiteAlpha[400]}`,
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
