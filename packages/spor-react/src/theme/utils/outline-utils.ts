import { State, Subset } from "./types";

type OutlineBorderState = Subset<State, "default" | "error" | "focus">;
export function outlineBorder(state: OutlineBorderState) {
  switch (state) {
    case "error":
      return {
        outlineColor: "outline.error",
      };
    case "focus":
      return {
        outlineColor: "outline.focus",
      };
    default:
      return {
        outlineColor: "outline.default",
      };
  }
}
