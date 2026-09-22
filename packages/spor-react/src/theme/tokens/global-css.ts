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

export type SporSemantic = (typeof semanticColors)[number];

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
      // Surface colors
      "--spor-colors-surface": `var(--spor-colors-surface-${color})`,

      "--spor-colors-surface-brand": `var(--spor-colors-surface-${color}-highlight)`,
      "--spor-colors-surface-brand-hover": `var(--spor-colors-surface-${color}-highlight-hover)`,
      "--spor-colors-surface-brand-active": `var(--spor-colors-surface-${color}-highlight-active)`,

      "--spor-colors-surface-accent": `var(--spor-colors-surface-${color})`,
      "--spor-colors-surface-accent-hover": `var(--spor-colors-surface-${color}-hover)`,
      "--spor-colors-surface-accent-active": `var(--spor-colors-surface-${color}-active)`,

      "--spor-colors-surface-core-active": `var(--spor-colors-surface-${color}-active)`,

      "--spor-colors-surface-ghost-hover": `var(--spor-colors-surface-${color}-hover)`,
      "--spor-colors-surface-ghost-active": `var(--spor-colors-surface-${color}-active)`,

      "--spor-colors-surface-floating-active": `var(--spor-colors-surface-${color}-active)`,

      // Outline colors
      "--spor-colors-outline-core": `var(--spor-colors-outline-${color})`,
      "--spor-colors-outline-core-highlight": `var(--spor-colors-outline-${color}-highlight)`,
      "--spor-colors-outline-accent": `var(--spor-colors-outline-${color})`,
      "--spor-colors-outline-ghost": `var(--spor-colors-outline-${color})`,
      "--spor-colors-outline-ghost-highlight": `var(--spor-colors-outline-${color}-highlight)`,

      // Text colors
      "--spor-colors-text": `var(--spor-colors-text-${color})`,
      "--spor-colors-text-subtle": `var(--spor-colors-text-${color}-subtle)`,
      "--spor-colors-text-brand": `var(--spor-colors-text-${color}-inverted)`,
      "--spor-colors-text-accent": `var(--spor-colors-text-${color})`,
      "--spor-colors-text-core": `var(--spor-colors-text-${color})`,
      "--spor-colors-text-ghost": `var(--spor-colors-text-${color})`,
      "--spor-colors-text-floating": `var(--spor-colors-text-${color})`,
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
