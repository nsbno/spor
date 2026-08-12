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

const excludeFromDataColor = ["checkbox", "radio-group"] as const;

// Override Chakra's own CSS variables for each data-color value.
// Because these variables are set on `:where(:root, :host)` (specificity 0,0,0)
// by the theme, setting them on `[data-color='X']` (specificity 0,1,0) wins and
// cascades to all descendants. Recipes can then use plain token paths like
// "surface.neutral", "surface.neutral.hover", "text.neutral", "outline.neutral" and they'll automatically
// resolve to the correct semantic color.
const dataColorStyles = Object.fromEntries(
  semanticColors.map((color) => [
    `[data-color='${color}'] ${excludeFromDataColor.map((role) => `:not([data-scope='${role}'])`).join("")}&`,
    {
      // Surface colors
      "--spor-colors-surface-brand": `var(--spor-colors-surface-${color})`,
      "--spor-colors-surface-brand-hover": `var(--spor-colors-surface-${color}-hover)`,
      "--spor-colors-surface-brand-active": `var(--spor-colors-surface-${color}-active)`,

      "--spor-colors-surface-accent": `var(--spor-colors-surface-${color})`,
      "--spor-colors-surface-accent-hover": `var(--spor-colors-surface-${color}-hover)`,
      "--spor-colors-surface-accent-active": `var(--spor-colors-surface-${color}-active)`,

      "--spor-colors-surface-core": `var(--spor-colors-surface-${color})`,
      "--spor-colors-surface-core-hover": `var(--spor-colors-surface-${color}-hover)`,
      "--spor-colors-surface-core-active": `var(--spor-colors-surface-${color}-active)`,

      "--spor-colors-surface-ghost-hover": `var(--spor-colors-surface-${color}-hover)`,
      "--spor-colors-surface-ghost-active": `var(--spor-colors-surface-${color}-active)`,

      "--spor-colors-surface-floating-hover": `var(--spor-colors-surface-${color}-hover)`,
      "--spor-colors-surface-floating-active": `var(--spor-colors-surface-${color}-active)`,

      "--spor-colors-surface-neutral": `var(--spor-colors-surface-${color})`,
      "--spor-colors-surface-neutral-hover": `var(--spor-colors-surface-${color}-hover)`,
      "--spor-colors-surface-neutral-active": `var(--spor-colors-surface-${color}-active)`,

      // Outline colors
      "--spor-colors-outline-neutral": `var(--spor-colors-outline-${color})`,
      "--spor-colors-outline-neutral-hover": `var(--spor-colors-outline-${color}-hover)`,
      "--spor-colors-outline-core": `var(--spor-colors-outline-${color})`,
      "--spor-colors-outline-core-hover": `var(--spor-colors-outline-${color}-hover)`,
      "--spor-colors-outline-brand": `var(--spor-colors-outline-${color})`,
      "--spor-colors-outline-brand-hover": `var(--spor-colors-outline-${color}-hover)`,
      "--spor-colors-outline-accent": `var(--spor-colors-outline-${color})`,
      "--spor-colors-outline-accent-hover": `var(--spor-colors-outline-${color}-hover)`,
      "--spor-colors-outline-ghost": `var(--spor-colors-outline-${color})`,
      "--spor-colors-outline-ghost-hover": `var(--spor-colors-outline-${color}-hover)`,
      "--spor-colors-outline-floating": `var(--spor-colors-outline-${color})`,
      "--spor-colors-outline-floating-hover": `var(--spor-colors-outline-${color}-hover)`,

      // Text colors
      "--spor-colors-text": `var(--spor-colors-text-${color})`,
      "--spor-colors-text-neutral": `var(--spor-colors-text-${color})`,
      "--spor-colors-text-neutral-subtle": `var(--spor-colors-text-${color}-subtle)`,

      "--spor-colors-text-core": `var(--spor-colors-text-${color})`,
      "--spor-colors-text-brand": `var(--spor-colors-text-${color})`,
      "--spor-colors-text-accent": `var(--spor-colors-text-${color})`,
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
