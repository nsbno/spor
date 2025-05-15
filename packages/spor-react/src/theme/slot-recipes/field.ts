import { defineSlotRecipe } from "@chakra-ui/react";

import { fieldAnatomy } from "./anatomy";

export const fieldSlotRecipe = defineSlotRecipe({
  className: "spor-field",
  slots: fieldAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      width: "100%",
      position: "relative",
      flexDirection: "column",
    },
    requiredIndicator: {
      marginStart: 1,
      color: "brightRed",
    },
    helperText: {
      marginTop: 2,
      color: "text.tertiary",
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
      bottom: -5,
      left: 3,
      zIndex: "dropdown",
      maxWidth: "50ch",
      _after: {
        content: "''",
        position: "absolute",
        marginTop: "-0.45em",
        left: "1em",
        width: 0,
        height: 0,
        transform: "rotate(45deg)",
        borderLeft: "0.5em solid transparent",
        borderRight: "0.5em solid transparent",
        borderBottom: "0.5em solid",
        borderColor: "lightRed",
      },
    },
  },
});
