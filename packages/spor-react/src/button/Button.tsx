import {
  Box,
  Center,
  type ButtonProps as ChakraButtonProps,
  Button as ChakraButton,
  Flex,
  type RecipeVariantProps,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";
import { createTexts, useTranslation } from "../i18n";
import { ColorInlineLoader } from "../loader";
import { buttonRecipe } from "../theme/recipes/button";

export type ButtonVariantProps = RecipeVariantProps<typeof buttonRecipe>;

export type ButtonProps = Exclude<
  ChakraButtonProps,
  "size" | "variant" | "colorPalette"
> &
  PropsWithChildren<ButtonVariantProps> & {
    /* Boolean value for loading state */
    loading?: boolean;
    /* You may display a different loading text */
    loadingText?: React.ReactNode;
    /* Display icon to the left */
    leftIcon?: React.ReactNode;
    /* Display icon to the right */
    rightIcon?: React.ReactNode;
    /* "primary" | "secondary" | "tertiary" | "ghost" | "floating". Defaults to primary. */
    variant: "primary" | "secondary" | "tertiary" | "ghost" | "floating";
    /* "lg" | "md" | "sm" | "xs". Defaults to md. */
    size?: "lg" | "md" | "sm" | "xs";
  };
/**
 * Buttons are used to trigger actions.
 *
 * There are several button variants. You can specify which one you want with the `variant` prop. The available variants are:
 *
 * - `primary`: This is our main button. It's used for the main actions in a view, like a call to action. There should only be a single primary button in each view.
 * - `secondary`: Used for secondary actions in a view, and when you need to make several actions available at the same time.
 * - `tertiary`: Used for additional choices, like a less important secondary action.
 * - `ghost`: Used inside other interactive elements, like date pickers and input fields.
 * - `floating`: Used for floating actions, like a menu button in a menu.
 *
 * ```tsx
 * <Button variant="primary" onClick={confirmOrder}>
 *  Buy trip
 * </Button>
 * ```
 *
 * There are also different sizes. You can specify which one you want with the `size` prop. The available sizes are "lg", "md", "sm" and "xs".
 *
 * ```tsx
 * <Button variant="secondary" size="sm" onClick={cancelOrder}>
 *   Cancel trip
 * </Button>
 * ```
 *
 * @see https://spor.vy.no/components/button
 */

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      loading,
      disabled,
      loadingText,
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      type = "button",
      children,
    } = props;
    const ariaLabel = useCorrectAriaLabel(props);
    return (
      <ChakraButton
        {...props}
        type={type}
        ref={ref}
        aria-label={ariaLabel}
        aria-busy={loading}
        disabled={disabled || loading}
        position="relative"
        variant={variant}
        size={size}
      >
        {loading && (
          <Center position="absolute" right={0} left={0} top={1} bottom={0}>
            <ColorInlineLoader
              maxWidth={getLoaderWidth(size)}
              width="80%"
              marginX={2}
              marginY={2}
            />
            {loadingText && <Box>{loadingText}</Box>}
          </Center>
        )}
        <Flex
          gap={1}
          flex={1}
          alignItems="center"
          justifyContent={rightIcon ? "space-between" : "center"}
          visibility={loading ? "hidden" : "visible"}
          aria-hidden={loading}
        >
          <Flex gap={1} alignItems="center">
            {leftIcon}
            <Box
              visibility={loading ? "hidden" : "visible"}
              whiteSpace="normal"
              textAlign="center"
            >
              {children}
            </Box>
          </Flex>
          {rightIcon}
        </Flex>
      </ChakraButton>
    );
  },
);

function getLoaderWidth(size: ButtonProps["size"]): string {
  switch (size) {
    case "xs":
      return "4rem";
    case "sm":
      return "4rem";
    case "md":
      return "5rem";
    case "lg":
    default:
      return "6rem";
  }
}

function useCorrectAriaLabel(props: ButtonProps): string {
  const { t } = useTranslation();
  if (props.loading) {
    return String(props.loadingText) ?? t(texts.loadingText);
  }
  return props["aria-label"] as string;
}

const texts = createTexts({
  loadingText: {
    nb: "Laster…",
    nn: "Lastar…",
    en: "Loading…",
    sv: "Laddar…",
  },
});
