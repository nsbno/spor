import { shadows } from "../foundations/shadows";

type GetBoxShadowStringArgs = {
  baseShadow?: keyof typeof shadows;
  borderColor?: string;
  borderWidth?: number;
};
/**
 * A utility for creating box shadow strings
 */
export const getBoxShadowString = ({
  baseShadow,
  borderColor,
  borderWidth = 1,
}: GetBoxShadowStringArgs) => {
  const allShadows: string[] = [];

  if (borderColor) {
    allShadows.push(`inset 0 0 0 ${borderWidth}px ${borderColor}`);
  }
  if (baseShadow) {
    allShadows.push(shadows[baseShadow]);
  }
  return allShadows.join(", ");
};
