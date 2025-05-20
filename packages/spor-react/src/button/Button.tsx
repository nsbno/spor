import {
  Box,
  Button as ChakraButton,
  type ButtonProps as ChakraButtonProps,
  Center,
  Flex,
  type RecipeVariantProps,
  Span,
} from "@chakra-ui/react";
import React, { cloneElement, forwardRef, PropsWithChildren } from "react";

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
    variant?: "primary" | "secondary" | "tertiary" | "ghost" | "floating";
    /* "lg" | "md" | "sm" | "xs". Defaults to md. */
    size?: "lg" | "md" | "sm" | "xs";
    /* Link to a downloadable resource. */
    download?: string;
    /* Use this to specify a path combined with as="a" */
    href?: string;
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

const ButtonContent = ({
  leftIcon,
  children,
  rightIcon,
}: PropsWithChildren<Pick<ButtonProps, "leftIcon" | "rightIcon">>) => (
  <>
    {leftIcon}
    {children}
    {rightIcon && <Span marginLeft="auto">{rightIcon}</Span>}
  </>
);

const LoadingContent = ({
  children,
  loadingText,
}: PropsWithChildren<Pick<ButtonProps, "size" | "loadingText">>) => (
  <>
    <Flex gap="1" visibility="hidden">
      {children}
    </Flex>
    <Center position="absolute" inset="1px 0">
      <ColorInlineLoader width="80%" marginX={2} marginY={2} />{" "}
      {loadingText && <Box>{loadingText}</Box>}
    </Center>
  </>
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      loading,
      disabled,
      loadingText,
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      type = "button",
      children,
      ...rest
    },
    ref,
  ) => {
    const { t } = useTranslation();

    const ariaLabel = loading
      ? String(loadingText ?? t(texts.loadingText))
      : (rest["aria-label"] as string);

    const renderContent = () => {
      const content = rest.asChild
        ? (children as React.ReactElement).props.children
        : children;

      if (loading)
        return (
          <LoadingContent size={size} loadingText={loadingText}>
            <ButtonContent leftIcon={leftIcon} rightIcon={rightIcon}>
              {content}
            </ButtonContent>
          </LoadingContent>
        );

      return (
        <ButtonContent leftIcon={leftIcon} rightIcon={rightIcon}>
          {content}
        </ButtonContent>
      );
    };

    return (
      <ChakraButton
        type={type}
        ref={ref}
        aria-label={ariaLabel}
        aria-busy={loading}
        disabled={disabled || loading}
        position="relative"
        variant={variant}
        size={size}
        {...rest}
      >
        {rest.asChild
          ? cloneElement(children as React.ReactElement, {
              children: renderContent(),
            })
          : renderContent()}
      </ChakraButton>
    );
  },
);

Button.displayName = "Button";

const texts = createTexts({
  loadingText: {
    nb: "Laster…",
    nn: "Lastar…",
    en: "Loading…",
    sv: "Laddar…",
  },
});
