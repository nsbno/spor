import { mode } from "@chakra-ui/theme-tools";

type Surface = "default" | "secondary" | "tertiary" | "disabled";
export const surface = (surface: Surface, props: any) => {
  switch (surface) {
    case "default":
      return {
        backgroundColor: mode(
          "surface.default.light",
          "surface.default.dark",
        )(props),
      };
    case "secondary":
      return {
        backgroundColor: mode(
          "surface.secondary.light",
          "surface.secondary.dark",
        )(props),
      };
    case "tertiary":
      return {
        backgroundColor: mode(
          "surface.tertiary.light",
          "surface.tertiary.dark",
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
