import { colors, ColorsType } from "../foundations/colors";
import { shadows } from "../foundations/shadows";

type GetBoxShadowStringArgs = {
  baseShadow?: keyof typeof shadows;
  borderColor?: keyof typeof colors | string;
  borderWidth?: number;
  isInset?: boolean;
};
/**
 * A utility for creating box shadow strings
 */
export const getBoxShadowString = (
  args: GetBoxShadowStringArgs | GetBoxShadowStringArgs[],
): string => {
  if (Array.isArray(args)) {
    return args.map((arg) => getBoxShadowString(arg)).join(", ");
  }

  const { baseShadow, borderColor, borderWidth = 1, isInset = true } = args;
  const allShadows: string[] = [];

  if (borderColor) {
    let color = borderColor;
    if (borderColor in colors) {
      color = colors[borderColor as keyof typeof colors] as string;
    } else {
      const [subgroup, value] = borderColor.split(".");
      const subgroupValue = (colors[subgroup as keyof ColorsType] as any)?.[
        value
      ];
      if (subgroupValue) {
        color = subgroupValue;
      }
    }
    allShadows.push(
      `${isInset ? "inset " : ""}0 0 0 ${borderWidth}px ${color}`,
    );
  }
  if (baseShadow) {
    allShadows.push(shadows[baseShadow]);
  }
  return allShadows.join(", ");
};
