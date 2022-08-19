import { borderRadii } from "@vygruppen/spor-theme-react-native/src/foundations/borderRadii";
import { colors } from "@vygruppen/spor-theme-react-native/src/foundations/colors";
import { shadows } from "@vygruppen/spor-theme-react-native/src/foundations/shadows";
import { spacing } from "@vygruppen/spor-theme-react-native/src/foundations/spacing";

export const expandableVariant = {
  defaults: {
    borderRadius: "sm",
  },
  list: {},

  outline: {
    borderColor: "osloGrey",
    borderStyle: "solid",
    borderWidth: 1,
  },
  card: {
    backgroundColor: "white",
    elevation: shadows.elevation.md,
    shadowColor: "black",
    shadowOffset: shadows.offset.md,
    shadowRadius: shadows.radius.md,
    shadowOpacity: shadows.opacity.md,
  },
};
export function getExpandableVariantPressedState(
  variant: "card" | "outline" | "list"
) {
  return {
    ...expandableVariantPressed.defaults,
    ...expandableVariantPressed[variant],
  };
}
const expandableVariantPressed = {
  defaults: {
    backgroundColor: colors.mint,
    borderRadius: borderRadii.sm,
    padding: spacing[2],
  },
  list: {},

  outline: {
    borderColor: colors.darkGrey,
  },
  card: {
    elevation: shadows.elevation.sm,
    shadowColor: colors.black,
    shadowOffset: shadows.offset.sm,
    shadowRadius: shadows.radius.sm,
    shadowOpacity: shadows.opacity.sm,
  },
};

export const expandableSizes = {
  sm: {
    fontSize: 16,
  },
  md: {
    fontSize: 18,
  },
  lg: {
    fontSize: 18,
  },
};
