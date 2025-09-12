import { defineSlotRecipe } from "@chakra-ui/react";

import { toastAnatomy } from "./anatomy";

export const toastSlotRecipe = defineSlotRecipe({
  slots: toastAnatomy.keys(),
  className: "chakra-toast",
  base: {
    root: {
      width: "full",
      display: "flex",
      position: "relative",
      alignItems: "center",
      gap: "0.75rem",
      padding: "0.563rem 0.75rem",
      translate: "var(--x) var(--y)",
      opacity: "var(--opacity)",
      willChange: "translate, opacity, scale",

      borderRadius: "sm",
      transition:
        "translate 400ms, scale 400ms, opacity 400ms, height 400ms, box-shadow 200ms",
      transitionTimingFunction: "cubic-bezier(0.21, 1.02, 0.73, 1)",
      _closed: {
        transition: "translate 400ms, scale 400ms, opacity 200ms",
        transitionTimingFunction: "cubic-bezier(0.06, 0.71, 0.55, 1)",
      },
      boxShadow: "xl",

      color: "text",
      "&[data-type=success]": {
        backgroundColor: "alert.success.surface",
      },
      "&[data-type=error]": {
        backgroundColor: "alert.error.surface",
      },

      "&[data-type=info]": {
        backgroundColor: "alert.info.surface",
      },
    },

    title: {
      textStyle: "sm",
      marginEnd: "2",
    },
  },
});
