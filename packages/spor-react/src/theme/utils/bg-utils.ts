type Bg = "default" | "secondary" | "tertiary";
export const bg = (bg: Bg) => {
  switch (bg) {
    case "default":
      return {
        backgroundColor: "bg.default",
      };
    case "secondary":
      return {
        backgroundColor: "bg.secondary",
      };
    case "tertiary":
      return {
        backgroundColor: "bg.tertiary",
      };
  }
};
