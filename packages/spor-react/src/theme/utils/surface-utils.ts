import { mode } from "@chakra-ui/theme-tools";

type Surface = "default" | "secondary" | "disabled";
export const surface = (surface: Surface, props: any) => {
  switch (surface) {
    case "default":
      return {
        backgroundColor: mode("surface.base.light", "surface.base.dark")(props),
      };
    case "secondary":
      return {
        backgroundColor: mode(
          "surface.secondary.light",
          "surface.secondary.dark",
        )(props),
      };
    case "disabled":
      return {
        backgroundColor: mode(
          "surface.disabled.light",
          "surface.disabled.dark",
        )(props),
      };
  }
};
