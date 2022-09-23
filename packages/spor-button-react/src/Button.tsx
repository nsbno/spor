import {
  As,
  Box,
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  Center,
  forwardRef,
} from "@chakra-ui/react";
import { useTranslation } from "@vygruppen/spor-i18n-react";
import { ColorInlineLoader } from "@vygruppen/spor-loader-react";
import React from "react";

export type ButtonProps = Exclude<
  ChakraButtonProps,
  "colorScheme" | "loadingText" | "size" | "variant"
> & {
  /** The size of the button. Try not to use the xs size a lot */
  size?: "xs" | "sm" | "md" | "lg";
  /** The different variants of a button */
  variant?:
    | "control"
    | "primary"
    | "secondary"
    | "tertiary"
    | "additional"
    | "ghost";
};
/**
 * Buttons are used to trigger actions.
 *
 * There are several button variants. You can specify which one you want with the `variant` prop. The available variants are:
 *
 * - `control`: This button is used for ticket controls only.
 * - `primary`: This is our main button. It's used for the main actions in a view, like a call to action. There should only be a single primary button in each view.
 * - `secondary`: Used for secondary actions in a view, and when you need to make several actions available at the same time.
 * - `tertiary`: Used for non-essential actions, as well as in combination with the primary button.
 * - `additional`: Used for additional choices, like a less important tertiary action.
 * - `ghost`: Used inside other interactive elements, like date pickers and input fields.
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
export const Button = forwardRef<ButtonProps, As<any>>(
  (
    {
      size = "md",
      variant = "primary",
      children,
      isLoading,
      isDisabled,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    const ariaLabel = useCorrectAriaLabel(props);

    return (
      <ChakraButton
        size={size}
        variant={variant}
        {...props}
        ref={ref}
        aria-label={ariaLabel}
        aria-busy={isLoading}
        isDisabled={isDisabled || isLoading}
        leftIcon={
          isLoading && leftIcon ? (
            <Box visibility={isLoading ? "hidden" : "visible"}>{leftIcon}</Box>
          ) : (
            leftIcon
          )
        }
        rightIcon={
          isLoading && rightIcon ? (
            <Box visibility={isLoading ? "hidden" : "visible"}>{rightIcon}</Box>
          ) : (
            rightIcon
          )
        }
        position="relative"
      >
        {isLoading && (
          <Center
            position="absolute"
            right="0"
            paddingBottom={1}
            left="0"
            paddingTop={2}
          >
            <ColorInlineLoader
              maxWidth={sizeToWidthMap[size] || "4rem"}
              width="100%"
              mx={2}
            />
          </Center>
        )}
        <Box visibility={isLoading ? "hidden" : "visible"}>{children}</Box>
      </ChakraButton>
    );
  }
);

const sizeToWidthMap: Record<string, string> = {
  xs: "4rem",
  sm: "4rem",
  md: "5rem",
  lg: "6rem",
};

function useCorrectAriaLabel(props: ButtonProps) {
  const { t } = useTranslation();
  if (props.isLoading) {
    return props.loadingText ?? t(texts.loadingText);
  }
  return props["aria-label"];
}

const texts = {
  loadingText: {
    nb: "Laster…",
    en: "Loading…",
    sv: "Laddar…",
  },
};
