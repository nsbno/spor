import { brandBackground } from "./brand-utils";
import { State, Subset } from "./types";

type AccentBackgroundState = Subset<
  State,
  "default" | "hover" | "active" | "selected"
>;

export function accentBackground(state: AccentBackgroundState) {
  switch (state) {
    case "selected": {
      return brandBackground("default");
    }
    case "active": {
      return {
        backgroundColor: "accent.surface.active",
      };
    }
    case "hover": {
      return {
        backgroundColor: "accent.surface.hover",
      };
    }
    default: {
      return {
        backgroundColor: "accent.surface",
      };
    }
  }
}

type AccentTextState = Subset<State, "default" | "selected">;

export function accentText(state: AccentTextState) {
  switch (state) {
    case "selected": {
      return {
        color: "brand.text",
      };
    }
    default: {
      return {
        color: "accent.text",
      };
    }
  }
}
