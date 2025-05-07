import { brandBackground } from "./brand-utils";
import { surface } from "./surface-utils";
import { State, Subset } from "./types";

type coreBackgroundState = Subset<
  State,
  "default" | "active" | "selected" | "hover" | "disabled"
>;
export function coreBackground(state: coreBackgroundState) {
  switch (state) {
    case "active": {
      return brandBackground("active");
    }
    case "selected": {
      return brandBackground("default");
    }

    case "disabled": {
      return surface("disabled");
    }

    default: {
      return { backgroundColor: "transparent" };
    }
  }
}

type BorderState = Subset<
  State,
  "hover" | "focus" | "active" | "disabled" | "selected" | "invalid" | "default"
>;

export function coreBorder(state: BorderState) {
  switch (state) {
    case "hover": {
      return {
        outline: "2px solid",
        outlineColor: "core.outline",
      };
    }

    case "disabled": {
      return {
        outline: "1px solid",
        outlineColor: "outline.disabled",
      };
    }
    case "active": {
      return {
        outline: "1px solid",
        outlineColor: "core.outline",
      };
    }
    case "invalid": {
      return {
        outline: "2px solid",
        outlineColor: "outline.error",
      };
    }
    default: {
      return {
        outline: "1px solid",
        outlineColor: "core.outline",
      };
    }
  }
}

type coreTextState = Subset<
  State,
  "default" | "selected" | "disabled" | "highlight" | "active"
>;
export function coreText(state: coreTextState) {
  switch (state) {
    case "selected": {
      return {
        color: "brand.text",
      };
    }
    case "active": {
      return {
        color: "brand.text",
      };
    }
    case "highlight": {
      return {
        color: "text.highlight",
      };
    }
    case "disabled": {
      return {
        color: "text.disabled",
      };
    }
    default: {
      return {
        color: "core.text",
      };
    }
  }
}
