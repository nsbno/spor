import { defineSlotRecipe } from "@chakra-ui/react";
import { useColorModeValue } from "../..";

export const fieldSlotRecipe = defineSlotRecipe({
  slots: ["root", "label", "requiredIndicator", "helperText", "errorText"],
  className: "spor-field",
  base: {
    root: {
      width: "100%",
      position: "relative",
      transitionProperty: "common",
      transitionDuration: "fast",
    },
    label: {
      fontSize: "mobile.sm",
      marginEnd: 3,
      marginBottom: 2,
      transitionProperty: "common",
      transitionDuration: "normal",
      opacity: 1,
      _disabled: {
        opacity: 0.4,
      },
    },
    requiredIndicator: {
      marginStart: 1,
      color: useColorModeValue("brightRed", "lightRed"),
    },
    helperText: {
      marginTop: 2,
      color: useColorModeValue("dimGrey", "whiteAlpha.600"),
      lineHeight: "normal",
      fontSize: "sm",
    },
    errorText: {
      borderRadius: "xs",
      backgroundColor: "lightRed",
      color: "darkGrey",
      paddingX: 1.5,
      paddingY: 1,
      textStyle: "xs",
      width: "fit-content",
      position: "absolute",
      top: -0.5,
      left: 3,
      zIndex: "dropdown",
      maxWidth: "50ch",
    },
  },
});

export default fieldSlotRecipe;
