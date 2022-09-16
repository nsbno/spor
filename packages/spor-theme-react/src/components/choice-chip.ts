import {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { colors } from "../foundations";

const choiceChipAnatomy = {
  __type: "ChoiceChip",
  keys: ["container", "label", "icon"],
};

const containerStyle: SystemStyleFunction = (props) => ({
  backgroundColor: "white",
  boxShadow: `0 0 0 1px ${colors.celadon}`,
  color: "darkTeal",
  display: "inline-flex",
  alignItems: "center",
  fontSize: "16px",
  px: 1,
  _checked: {
    background: "seaMist",
    boxShadow: `0 0 0 1px ${colors.celadon}`,
  },
  "input:focus-visible + &": {
    boxShadow: `0 0 0 2px ${colors.greenHaze}`,
  },
  "@media (hover:hover)": {
    _hover: {
      boxShadow: `0 0 0 2px ${colors.greenHaze}`,
      background: "mint",
      cursor: "pointer",
    },
  },
});

const iconStyle: SystemStyleFunction = (props) => ({
  mr: props.hasLabel ? 1 : 0,
});

const labelStyle: SystemStyleObject = {};

const baseStyle: PartsStyleFunction<typeof choiceChipAnatomy> = (props) => ({
  container: containerStyle(props),
  icon: iconStyle(props),
  label: labelStyle,
});

const sizes: Record<string, PartsStyleObject<typeof choiceChipAnatomy>> = {
  sm: {
    container: {
      borderRadius: "15px",
      height: "30px",
      px: 1.5,
    },
  },
  md: {
    container: {
      borderRadius: "18px",
      height: "36px",
      px: 2,
    },
  },
  lg: {
    container: {
      borderRadius: "21px",
      height: "42px",
      px: 2,
    },
  },
  xl: {
    container: {
      borderRadius: "27px",
      height: "54px",
      px: 3,
    },
  },
};

const defaultProps = {
  size: "md",
};

export default {
  parts: choiceChipAnatomy.keys,
  baseStyle,
  sizes,
  defaultProps,
};
