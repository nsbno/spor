import { PartsStyleFunction, PartsStyleObject, SystemStyleFunction, SystemStyleObject } from "@chakra-ui/theme-tools";
import { colors } from "../foundations";

const choiceChipAnatomy = {
  __type: "ChoiceChip",
  keys: ["container", "label", "icon"],
};

const containerStyle: SystemStyleFunction =(props)=> ({
  backgroundColor: "alias.white",
  boxShadow: `0 0 0 1px ${colors.alias.celadon}`,
  color: "alias.darkTeal",
  display: "inline-flex",
  alignItems: "center",
  fontSize: "16px",
  px: props.hasLabel ? 1 : 1,
  _focus: {
    boxShadow: `0 0 0 2px ${colors.alias.greenHaze}`,
  },
  _hover: {
    boxShadow: `0 0 0 2px ${colors.alias.greenHaze}`,
  },
  _checked: {
    background: "alias.seaMist",
  },
});

const iconStyle: SystemStyleFunction = (props) => ({
  mr: props.hasLabel ? 1 : 0,
});

const labelStyle: SystemStyleObject = {};

const baseStyle: PartsStyleFunction <typeof choiceChipAnatomy> =  props => ({
  container: containerStyle(props),
  icon: iconStyle(props),
  label: labelStyle,
})

const sizes: Record<string, PartsStyleObject<typeof choiceChipAnatomy>> = {
  sm: {
    container: {
      borderRadius: "15px",
      height: "30px",
    },
  },
  md: {
    container: {
      borderRadius: "18px",
      height: "36px",
    },
  },
  lg: {
    container: {
      borderRadius: "21px",
      height: "42px",
      
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
