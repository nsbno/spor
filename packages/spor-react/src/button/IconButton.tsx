import {
  IconButton as ChakraIconButton,
  type IconButtonProps as ChakraIconButtonProps,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { ButtonVariantProps, ColorSpinner } from "..";

export type IconButtonProps = Exclude<
  ChakraIconButtonProps,
  "variant" | "spinner" | "icon"
> &
  PropsWithChildren<ButtonVariantProps> & {
    /** The button variant.
     *
     */
    variant: "primary" | "secondary" | "tertiary" | "ghost" | "floating";
    spinner?: React.JSX.Element;
    icon?: React.JSX.Element;
    loading?: boolean;
  };

/**
 * An icon-only button.
 *
 * Remember to specify the `aria-label` prop for screen readers.
 *
 * There are several icon button variants. You can specify which one you want with the `variant` prop. The available variants are:
 *
 * - `primary`: This is our main button. It's used for the main actions in a view, like a call to action. There should only be a single primary button in each view.
 * - `secondary`: Used for secondary actions in a view, and when you need to make several actions available at the same time.
 * - `tertiary`: Used for additional choices, like a less important secondary action.
 * - `ghost`: Used inside other interactive elements, like date pickers and input fields.
 * - `floating`: Used for floating actions, like a menu button in a menu.
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
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const { icon, size = "sm", loading = false, ...rest } = props;
    return (
      <ChakraIconButton
        aria-label={props["aria-label"]}
        {...rest}
        size={size}
        ref={ref}
        position={loading ? "relative" : "static"}
      >
        {loading ? <ColorSpinner width="2em" height="2em" margin={1} /> : icon}
      </ChakraIconButton>
    );
  },
);
