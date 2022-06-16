import tokens from "@vygruppen/spor-design-tokens/react-native";

const elevation = {
  none: 0,
  sm: tokens.depth.shadow.sm.elevation,
  md: tokens.depth.shadow.md.elevation,
  lg: tokens.depth.shadow.lg.elevation,
};

const shadowOpacity = {
  none: 0,
  sm: tokens.depth.shadow.sm.opacity,
  md: tokens.depth.shadow.md.opacity,
  lg: tokens.depth.shadow.lg.opacity,
};

type Offset = { width: number; height: number };
const shadowOffset: Record<string, Offset> = {
  none: { width: 0, height: 0 },
  sm: tokens.depth.shadow.sm.offset,
  md: tokens.depth.shadow.md.offset,
  lg: tokens.depth.shadow.lg.offset,
};

const shadowRadius = {
  none: 0,
  sm: tokens.depth.shadow.sm.blur,
  md: tokens.depth.shadow.md.blur,
  lg: tokens.depth.shadow.lg.blur,
};

export const shadows = {
  elevation,
  opacity: shadowOpacity,
  offset: shadowOffset,
  radius: shadowRadius,
};
