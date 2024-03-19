import { mode } from "@chakra-ui/theme-tools";

type Bg = "default" | "secondary" | "tertiary";
export const bg = (bg: Bg, props: any) => {
  switch (bg) {
    case "default":
      return {
        backgroundColor: mode("bg.default.light", "bg.default.dark")(props),
      };
    case "secondary":
      return {
        backgroundColor: mode("bg.secondary.light", "bg.secondary.dark")(props),
      };
    case "tertiary":
      return {
        backgroundColor: mode("bg.tertiary.light", "bg.tertiary.dark")(props),
      };
  }
};
