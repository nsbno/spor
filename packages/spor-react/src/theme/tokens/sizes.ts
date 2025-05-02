import { defineTokens } from "@chakra-ui/react";
import tokens from "@vygruppen/spor-design-tokens";

import { spacing } from "./spacing";

export const largeSizes = defineTokens.sizes({
  "3xs": { value: "14rem" },
  "2xs": { value: "16rem" },
  xs: { value: "20rem" },
  sm: { value: "24rem" },
  md: { value: "28rem" },
  lg: { value: "32rem" },
  xl: { value: "36rem" },
  "2xl": { value: "42rem" },
  "3xl": { value: "48rem" },
  "4xl": { value: "56rem" },
  "5xl": { value: "64rem" },
  "6xl": { value: "72rem" },
  "7xl": { value: "80rem" },
  "8xl": { value: "90rem" },
});

const namedSizes = defineTokens.sizes({
  max: { value: "max-content" },
  min: { value: "min-content" },
  fit: { value: "fit-content" },
  prose: { value: "60ch" },
  full: { value: "100%" },
  dvh: { value: "100dvh" },
  svh: { value: "100svh" },
  lvh: { value: "100lvh" },
  dvw: { value: "100dvw" },
  svw: { value: "100svw" },
  lvw: { value: "100lvw" },
  vw: { value: "100vw" },
  vh: { value: "100vh" },
});

const container = defineTokens.sizes({
  base: { value: 0 },
  sm: { value: tokens.size.breakpoint.sm },
  md: { value: tokens.size.breakpoint.md },
  lg: { value: tokens.size.breakpoint.lg },
  xl: { value: tokens.size.breakpoint.xl },
});

export const sizes = {
  ...largeSizes,
  ...namedSizes,
  ...spacing,
  container,
};
