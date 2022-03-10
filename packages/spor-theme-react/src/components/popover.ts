import { popoverAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { cssVar } from "@chakra-ui/theme-tools";

const $popperBg = cssVar("popper-bg");

const $arrowBg = cssVar("popper-arrow-bg");
const $arrowShadowColor = cssVar("popper-arrow-shadow-color");

const baseStylePopper: SystemStyleObject = {
  zIndex: "popover",
};

const baseStyleContent: SystemStyleFunction = () => {
  return {
    [$popperBg.variable]: `colors.alias.darkTeal`,
    bg: $popperBg.reference,
    [$arrowBg.variable]: $popperBg.reference,
    [$arrowShadowColor.variable]: `colors.palette.blackAlpha.300`,
    color: "alias.white",
    width: "xs",
    borderRadius: "xs",
    p: 1.5,
    zIndex: "inherit",
    _focus: {
      outline: 0,
      boxShadow: "outline",
    },
  };
};

const baseStyleHeader: SystemStyleObject = {};

const baseStyleBody: SystemStyleObject = {};

const baseStyleFooter: SystemStyleObject = {};

const baseStyleCloseButton: SystemStyleObject = {
  position: "absolute",
  borderRadius: "xs",
  top: 1,
  insetEnd: 2,
  padding: 1,
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  popper: baseStylePopper,
  content: baseStyleContent(props),
  header: baseStyleHeader,
  body: baseStyleBody,
  footer: baseStyleFooter,
  arrow: {},
  closeButton: baseStyleCloseButton,
});

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  sm: {
    content: {
      px: 1.5,
      py: 1,
      maxWidth: "126px",
    },
  },
  lg: {
    content: {
      px: 3,
      py: 2,
      maxWidth: "203px",
    },
  },
};

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
};
