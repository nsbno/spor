type Surface = "default" | "secondary" | "tertiary" | "disabled";
export const surface = (surface: Surface) => {
  switch (surface) {
    case "default":
      return {
        backgroundColor: "surface.default",
      };
    case "secondary":
      return {
        backgroundColor: "surface.secondary",
      };
    case "tertiary":
      return {
        backgroundColor: "surface.tertiary",
      };
    case "disabled":
      return {
        backgroundColor: "surface.disabled",
      };
  }
};
