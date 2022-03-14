import { PartsStyleFunction } from "@chakra-ui/theme-tools";
import { anatomy } from "@chakra-ui/theme-tools";
import { colors } from "../foundations";

const parts = anatomy("fab").parts("root", "container", "icon", "text");

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  
  container: {
    backgroundColor: getContainerBackgroundColor(props.colorScheme),
    mx: "auto",
    display: "inline-flex",
    alignItems: "center",
    overflowX: "auto",
    padding: 2,
    cursor: "pointer",
    borderRadius: "xl",
    boxShadow: "md",
    transitionDuration: "fast",
    _disabled: getDesabledStyles(props.colorScheme),
    _focus: 
    getFocusStyles(props.colorScheme, props.theme),
    _hover: getHoverStyles(props.colorScheme),
    _active: getActiveStyles(props.colorScheme),
  },
  icon: {
    mr: 1,
    color: getIconColor(props.colorScheme),
  },
  text: {
    display: "flex",
    flex:"none",
    alignItems:"center",
    fontWeight: "bold",
    textStyle: "sm",
    color: getTextStyles(props.colorScheme),
  },
});

const getDesabledStyles = (colorScheme: string) => {
  switch (colorScheme) {
    case "dark":
      return "palette.whiteAlpha.400";
    case "light":
    case "green":
    default:
      return "alias.mint";
  }
}

const getActiveStyles = (colorScheme: string) => {
  switch (colorScheme) {
    case "dark":
      return { backgroundColor: "alias.pine" };
    case "light":
      return { backgroundColor: "alias.minst" };
    case "green":
    default:
      return { color: "alias.lightGrey", backgroundColor: "transparent" };
  }
}

const getHoverStyles = (colorScheme: string) => {
  switch (colorScheme) {
    case "dark":
      return {
       backgroundColor: "alias.night" 
      };
    case "light":
    case "green":
    default:
      return {
         backgroundColor: "alias.seaMist" 
      };
  }
}

const getFocusStyles = (colorScheme: string, theme:any) => {
  switch (colorScheme) {
    case "dark":
      return {
        outline: "none",
        boxShadow: `inset 0 0 0 2px ${theme.colors.alias.white}`,
      };
    case "light":
    case "green":
    default:
      return {
        outline: "none",
        boxShadow: `inset 0 0 0 2px ${theme.colors.alias.greenHaze}`,
      };
  }
}

const getIconColor = (colorScheme: string) => {
  switch (colorScheme) {
    case "light":
      return "alias.darkGrey";
    case "dark":
      return "alias.white";
    case "green":
    default:
      return "alias.darkGrey";
  }
}

const getContainerBackgroundColor = (colorScheme: string) => {
  switch (colorScheme) {
    case "light":
      return "alias.white";
    case "dark":
      return "alias.darkTeal";
    case "green":
    default:
      return "alias.mint";
  }
};

const getTextStyles = (colorScheme: string) => {
  switch (colorScheme) {
    case "light":
      return "alias.darkGrey";
    case "dark":
      return "alias.white";
    case "green":
    default:
      return "alias.darkTeal";
  }
};

const defaultProps = {
  colorScheme: "dark",
};

export default {
  baseStyle,
  defaultProps,
};
