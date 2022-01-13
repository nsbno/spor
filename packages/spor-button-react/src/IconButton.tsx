import {
  IconButton as ChakraIconButton,
  IconButtonProps as ChakraIconButtonProps,
} from "@chakra-ui/react";

export type IconButtonProps = ChakraIconButtonProps;
/**
 * An icon-only button.
 *
 * Remember to specify the `aria-label` prop for screen readers.
 *
 * There are several icon button variants. You can specify which one you want with the `variant` prop. The available variants are:
 *
 * - `control`: This button is used for ticket controls only.
 * - `primary`: This is our main button. It's used for the main actions in a view, like a call to action. There should only be a single primary button in each view.
 * - `secondary`: Used for secondary actions in a view, and when you need to make several actions available at the same time.
 * - `tertiary`: Used for non-essential actions, as well as in combination with the primary button.
 * - `additional`: Used for additional choices, like a less important tertiary action.
 * - `ghost`: Used inside other interactive elements, like date pickers and input fields.
 *
 * ```tsx
 * <IconButton
 *   aria-label="Buy trip"
 *   icon={<ShoppingCartIcon />}
 *   variant="primary"
 *   onClick={confirmOrder}
 * />
 * ```
 *
 * There are also different sizes. You can specify which one you want with the `size` prop. The available sizes are "lg", "md", "sm" and "xs".
 *
 * ```tsx
 * <IconButton
 *   aria-label="Cancel trip"
 *   icon={<CancelIcon />}
 *   variant="ghost"
 *   size="sm"
 *   onClick={cancelOrder}
 * />
 * ```
 */
export const IconButton = (props: IconButtonProps) => (
  <ChakraIconButton {...props} />
);
