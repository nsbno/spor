import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";

const baseStyleOverlay: SystemStyleObject = {
  bg: "palette.blackAlpha.600",
  zIndex: "modal",
};

const baseStyleDialogContainer: SystemStyleFunction = (props) => {
  const { isCentered, scrollBehavior } = props;

  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: isCentered ? "center" : "flex-start",
    overflow: scrollBehavior === "inside" ? "hidden" : "auto",
  };
};

const baseStyleDialog: SystemStyleFunction = (props) => {
  const { scrollBehavior } = props;

  return {
    borderRadius: "md",
    background: "alias.white",
    color: "inherit",
    my: "3.75rem",
    zIndex: "modal",
    maxH: scrollBehavior === "inside" ? "calc(100% - 7.5rem)" : undefined,
    boxShadow: "md",
  };
};

const baseStyleHeader: SystemStyleFunction = (props) => ({
  px: 5,
  pt: 6,
  pb: 2,
  fontWeight: "bold",
  fontFamily: "body",
});

const baseStyleCloseButton: SystemStyleObject = {
  position: "absolute",
  top: 3,
  insetEnd: 3,
};

const baseStyleBody: SystemStyleFunction = (props) => {
  const { scrollBehavior } = props;
  return {
    px: 5,
    pb: 6,
    flex: 1,
    overflow: scrollBehavior === "inside" ? "auto" : undefined,
  };
};

const baseStyleFooter: SystemStyleObject = {
  px: 3,
  pb: 3,
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  overlay: baseStyleOverlay,
  dialogContainer: baseStyleDialogContainer(props),
  dialog: baseStyleDialog(props),
  header: baseStyleHeader(props),
  closeButton: baseStyleCloseButton,
  body: baseStyleBody(props),
  footer: baseStyleFooter,
});

/**
 * Since the `maxWidth` prop references theme.sizes internally,
 * we can leverage that to size our modals.
 */
function getSize(value: string): PartsStyleObject<typeof parts> {
  if (value === "full") {
    return {
      dialog: {
        maxW: "100vw",
        minH: "100vh",
        "@supports(min-height: -webkit-fill-available)": {
          minH: "-webkit-fill-available",
        },
        my: 0,
      },
    };
  }
  return {
    dialog: { maxW: value },
  };
}

const sizes = {
  xs: getSize("xs"),
  sm: getSize("sm"),
  md: getSize("md"),
  lg: getSize("lg"),
  xl: getSize("xl"),
  "2xl": getSize("2xl"),
  "3xl": getSize("3xl"),
  "4xl": getSize("4xl"),
  "5xl": getSize("5xl"),
  "6xl": getSize("6xl"),
  full: getSize("full"),
};

const defaultProps = {
  size: "md",
};

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
  defaultProps,
};
