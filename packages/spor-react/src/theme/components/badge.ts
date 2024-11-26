import { defineRecipe } from "@chakra-ui/react";

const badgeRecipie = defineRecipe({
  className: "spor-badge",
  base: {
    borderStyle: "solid",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: ["mobile.xs", "desktop.xs"],
    borderRadius: "xl",
    fontWeight: "bold",
    paddingLeft: [2, 3],
    paddingRight: [2, 3],
    minHeight: [4, 5],
  },
  variants: {
    variant: {
      solid: {
        borderWidth: 0,
      },
      outline: {
        borderWidth: 1,
      },
    },
    colorPalette: {
      yellow: {
        backgroundColor: "banana",
        color: "darkGrey",
        borderColor: "darkGrey",
      },
      "light-yellow": {
        backgroundColor: "blonde",
        color: "darkGrey",
        borderColor: "golden",
      },
      red: {
        backgroundColor: "lightRed",
        color: "darkGrey",
        borderColor: "brightRed",
      },
      "light-green": {
        backgroundColor: "seaMist",
        color: "darkTeal",
        borderColor: "darkTeal",
      },
      "dark-green": {
        backgroundColor: "celadon",
        color: "white",
        borderColor: "blueGreen",
      },
      orange: {
        backgroundColor: "champagne",
        color: "darkGrey",
        borderColor: "pumpkin",
      },
      "light-blue": {
        backgroundColor: "lightBlue",
        color: "darkBlue",
        borderColor: "ocean",
      },
      "dark-blue": {
        backgroundColor: "darkBlue",
        color: "white",
        borderColor: "sky",
      },
      grey: {
        backgroundColor: "platinum",
        color: "darkGrey",
        borderColor: "darkGrey",
      },
      white: {
        backgroundColor: "white",
        color: "darkGrey",
        borderColor: "silver",
      },
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});

export default badgeRecipie;
