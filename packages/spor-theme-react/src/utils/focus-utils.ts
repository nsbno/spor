import { SystemStyleObject } from "@chakra-ui/theme-tools";

type FocusArgs = {
  /** The styles applied for when the element is not focused */
  notFocus: SystemStyleObject;
  /** The styles applied for when the element is focused */
  focus: SystemStyleObject;
};
/**
 * A helper function for applying focus styles in such a way that they work with Safari – which doesn't support :focus-visible.
 */
export const focusVisible = ({ notFocus, focus }: FocusArgs) => ({
  _focus: focus,
  _focusVisible: focus,
  "&[data-focus]:not([data-focus-visible])": notFocus,
});
