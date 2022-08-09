import { CSSObject } from "@chakra-ui/react";

type FocusArgs = {
  /** The styles applied for when the element is not focused */
  notFocus: CSSObject;
  /** The styles applied for when the element is focused */
  focus: CSSObject;
};
/**
 * A helper function for applying focus styles in such a way that they work with Safari – which doesn't support :focus-visible.
 */
export const focusVisible = ({ notFocus, focus }: FocusArgs) => ({
  _focus: focus,
  _focusVisible: focus,
  "&:focus:not(:focus-visible)": notFocus,
});
