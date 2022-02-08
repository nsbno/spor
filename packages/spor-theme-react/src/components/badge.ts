import type {
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";

const baseStyle: SystemStyleObject = {
  px: 2,
  height: 4,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: ["mobile.xs", "desktop.xs"],
  borderRadius: "xl",
  fontWeight: "bold",
};

const variantSolid: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props;

  return {
    backgroundColor: c === "red" ? "palette.red.600" : `palette.${c}.500`,
    color: `alias.white`,
  };
};

const variantOutline: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props;

  return {
    backgroundColor: `palette.${c}.50`,
    color: `palette.${c}.600`,
    boxShadow: `inset 0 0 0 1px currentColor`,
  };
};

const variants = {
  solid: variantSolid,
  outline: variantOutline,
};

const defaultProps = {
  variant: "solid",
  colorScheme: "grey",
};

export default {
  baseStyle,
  variants,
  defaultProps,
};
