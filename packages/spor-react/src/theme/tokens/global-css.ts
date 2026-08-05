import { defineGlobalStyles } from "@chakra-ui/react";

export const semanticColors = [
  "success",
  "info",
  "warning",
  "caution",
  "critical",
  "neutral",
  "notice",
  "service",
] as const;

export type SporColor = (typeof semanticColors)[number];

// Override Chakra's own CSS variables for each data-color value.
// Because these variables are set on `:where(:root, :host)` (specificity 0,0,0)
// by the theme, setting them on `[data-color='X']` (specificity 0,1,0) wins and
// cascades to all descendants. Recipes can then use plain token paths like
// "surface.neutral", "surface.neutral.hover", "text.neutral", "outline.neutral" and they'll automatically
// resolve to the correct semantic color.
const dataColorStyles = Object.fromEntries(
  semanticColors.map((color) => [
    `[data-color='${color}']`,
    {
      "--spor-colors-surface-neutral": `var(--spor-colors-surface-${color})`,
      "--spor-colors-surface-neutral-hover": `var(--spor-colors-surface-${color}-hover)`,
      "--spor-colors-surface-neutral-active": `var(--spor-colors-surface-${color}-active)`,
      "--spor-colors-outline-neutral": `var(--spor-colors-outline-${color})`,
      "--spor-colors-outline-neutral-hover": `var(--spor-colors-outline-${color}-hover)`,
      "--spor-colors-text-neutral": `var(--spor-colors-text-${color})`,
      "--spor-colors-text-neutral-subtle": `var(--spor-colors-text-${color}-subtle)`,
    },
  ]),
);

export const globalCss = defineGlobalStyles({
  "html, body": {
    color: "text",
  },
  svg: {
    display: "initial",
  },

  ":is(button, [role='button'], a, input, textarea, select, video, audio):focus-visible":
    {
      outlineWidth: "2px !important",
      outlineColor: "outline.focus !important",
      outlineStyle: "solid !important",
      outlineOffset: "1px !important",
    },

  ...dataColorStyles,
});
