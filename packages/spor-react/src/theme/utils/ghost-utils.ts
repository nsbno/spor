import { State, Subset } from "./types";

type GhostBackgroundState = Subset<
  State,
  "default" | "hover" | "active" | "selected"
>;

/** 👻👻👻👻👻👻👻👻👻👻👻👻👻👻 */
export function ghostBackground(state: GhostBackgroundState) {
  switch (state) {
    case "hover": {
      return {
        backgroundColor: "ghost.surface.hover",
      };
    }
    case "active":
      return {
        backgroundColor: "ghost.surface.active",
      };
    case "selected": {
      return {
        backgroundColor: "ghost.surface.selected",
      };
    }
    case "default":
      return {
        backgroundColor: "transparent",
      };
  }
}

type GhostTextState = Subset<State, "default" | "selected">;

export function ghostText(state: GhostTextState) {
  switch (state) {
    case "selected":
      return {
        color: "ghost.text",
      };
    default:
      return {
        color: "ghost.text",
      };
  }
}
