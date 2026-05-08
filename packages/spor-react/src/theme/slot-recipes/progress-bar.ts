import { defineSlotRecipe } from "@chakra-ui/react";

import { progressBarAnotomy } from "./anatomy";

export const progressBarRecipe = defineSlotRecipe({
  slots: progressBarAnotomy.keys(),
  base: {
    container: {
      minWidth: "100px",
    },
    background: {
      display: "flex",
      backgroundColor: "surface.accent.hover",
      borderRadius: "sm",
      boxPack: "start",
      justifyContent: "flex-start",
      marginX: "auto",
    },

    disabledBackground: {
      backgroundColor: "icon.disabled",
      borderRadius: "sm",
    },
    progress: {
      backgroundColor: "surface.brand.active",
      borderRadius: "sm",
      maxWidth: "100%",
      transition: "width .2s ease-out",
    },

    description: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      marginTop: 2,
      marginInline: "auto",
      fontWeight: "bold",
    },
  },
});
