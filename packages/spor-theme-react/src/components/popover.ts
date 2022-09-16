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
    [$popperBg.variable]: `colors.darkTeal`,
    backgroundColor: $popperBg.reference,
    [$arrowBg.variable]: $popperBg.reference,
    [$arrowShadowColor.variable]: `colors.blackAlpha.300`,
    color: "white",
    borderRadius: "sm",
    p: 1.5,
    zIndex: "inherit",
    maxWidth: "20em",
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
  insetEnd: 1,
  width: 2,
  height: 2,
  padding: 1,
};

const baseStyleArrow: SystemStyleObject = {
  backgroundColor: "transparent",
  boxShadow: "none",
  clipPath:
    "path('M 0 0 Q 2.4 6 0 12 Q 6 9.6 12 12 Q 9.6 6 12 0 Q 6 2.4 0 0 z')",
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  popper: baseStylePopper,
  content: baseStyleContent(props),
  header: baseStyleHeader,
  body: baseStyleBody,
  footer: baseStyleFooter,
  arrow: baseStyleArrow,
  closeButton: baseStyleCloseButton,
});

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  sm: {
    content: {
      px: 1.5,
      py: 1,
    },
  },
  lg: {
    content: {
      px: 3,
      py: 2,
    },
  },
};

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
};
