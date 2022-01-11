import { useTheme } from "@chakra-ui/react";

type UseDefaultBoxShadowArgs = { isInvalid?: boolean; isDisabled?: boolean };
/**
 * Gets the box shadow colors for the input field
 */
export const useBoxShadowColors = ({
  isInvalid,
  isDisabled,
}: UseDefaultBoxShadowArgs) => {
  const theme = useTheme();
  if (isDisabled) {
    return {
      default: `inset 0 0 0 1px ${theme.colors.alias.platinum}`,
      hover: `inset 0 0 0 1px ${theme.colors.alias.platinum}`,
      focus: `inset 0 0 0 1px ${theme.colors.alias.platinum}`,
    };
  }
  if (isInvalid) {
    return {
      default: `inset 0 0 0 2px ${theme.colors.error.brightRed}`,
      hover: `inset 0 0 0 2px ${theme.colors.outline.darkGrey}`,
      focus: `inset 0 0 0 2px ${theme.colors.outline.greenHaze}`,
    };
  }
  return {
    default: `inset 0 0 0 1px ${theme.colors.outline.darkGrey}`,
    hover: `inset 0 0 0 2px ${theme.colors.outline.darkGrey}`,
    focus: `inset 0 0 0 2px ${theme.colors.outline.greenHaze}`,
  };
};
