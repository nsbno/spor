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

const dataColorStyles = Object.fromEntries(
  semanticColors.map((color) => [
    `[data-color='${color}']`,
    {
      "--spor-color-surface": `var(--spor-colors-surface-${color})`,
      "--spor-color-surface-hover": `var(--spor-colors-surface-${color}-hover)`,
      "--spor-color-surface-active": `var(--spor-colors-surface-${color}-active)`,
      "--spor-color-outline": `var(--spor-colors-outline-${color})`,
      "--spor-color-outline-hover": `var(--spor-colors-outline-${color}-hover)`,
      "--spor-color-text": `var(--spor-colors-text-${color})`,
      "--spor-color-text-subtle": `var(--spor-colors-text-${color}-subtle)`,
    },
  ]),
);

export const globalCss = defineGlobalStyles({
  "html, body": {
    color: "text",
  },
  body: {
    "--spor-color-surface": "var(--spor-colors-surface)",
    "--spor-color-surface-hover": "var(--spor-colors-surface-ghost-hover)",
    "--spor-color-surface-active": "var(--spor-colors-surface-ghost-active)",
    "--spor-color-outline": "var(--spor-colors-outline)",
    "--spor-color-outline-hover": "var(--spor-colors-outline)",
    "--spor-color-text": "var(--spor-colors-text)",
    "--spor-color-text-subtle": "var(--spor-colors-text-subtle)",
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
