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
  if (baseShadow) {
    allShadows.push(shadows[baseShadow]);
  }
  if (borderColor) {
    allShadows.push(`0 0 0 ${borderWidth}px ${borderColor}`);
  }
  return allShadows.join(", ");
};
