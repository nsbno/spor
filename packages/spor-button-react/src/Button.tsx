import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import React from "react";

type ButtonProps = Exclude<ChakraButtonProps, "colorScheme">;
/**
 * Buttons are used to trigger actions.
 *
 * There are several button variants. You can specify which one you want with the `variant` prop. The available variants are:
 *
 * - `control`: This button is used for ticket controls only.
 * - `primary`: This is our main button. It's used for the main actions in a view, like a call to action. There should only be a single primary button in each view.
 * - `secondary`: Used for secondary actions in a view, and when you need to make several actions available at the same time.
 * - `tertiary`: Used for non-essential actions, as well as in combination with the primary button.
 * - `additional`: Used for additional choices.
 *
 * ```tsx
 * <Button variant="primary" onClick={confirmOrder}>
 *   Buy trip
 * </Button>
 * ```
 *
 * There are also different sizes. You can specify which one you want with the `size` prop. The available sizes are "lg", "md", "sm" and "xs".
 *
 * ```tsx
 * <Button variant="tertiary" size="sm" onClick={cancelOrder}>
 *   Cancel trip
 * </Button>
 * ```
 */
export const Button = ({ width, ...props }: ButtonProps) => {
  return <ChakraButton {...props} />;
};
