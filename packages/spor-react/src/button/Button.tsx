import {
  Box,
  Center,
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  forwardRef,
  useButtonGroup,
} from "@chakra-ui/react";
import React from "react";
import { createTexts, useTranslation } from "../i18n";
import { ColorInlineLoader } from "../loader";

export type ButtonProps = Exclude<
  ChakraButtonProps,
  "colorScheme" | "loadingText" | "size" | "variant"
> & {
  /**
   * The size of the button.
   *
   * Defaults to "md"
   * */
  size?: "xs" | "sm" | "md" | "lg";
  /** The different variants of a button
   *
   * Defaults to "primary"
   */
  variant?:
    | "control"
    | "primary"
    | "secondary"
    | "additional"
    | "ghost"
    | "floating";
};
/**
 * Buttons are used to trigger actions.
 *
 * There are several button variants. You can specify which one you want with the `variant` prop. The available variants are:
 *
 * - `control`: This button is used for ticket controls only.
 * - `primary`: This is our main button. It's used for the main actions in a view, like a call to action. There should only be a single primary button in each view.
 * - `secondary`: Used for secondary actions in a view, and when you need to make several actions available at the same time.
 * - `additional`: Used for additional choices, like a less important secondary action.
 * - `ghost`: Used inside other interactive elements, like date pickers and input fields.
 * - `floating`: Used for floating actions, like a menu button in a menu.
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
 * <Button variant="secondary" size="sm" onClick={cancelOrder}>
 *   Cancel trip
 * </Button>
 * ```
 *
 * @see https://spor.vy.no/komponenter/button
 */
export const Button = forwardRef<ButtonProps, "button">((props, ref) => {
  const {
    size,
    variant,
    children,
    isLoading,
    isDisabled,
    leftIcon,
    rightIcon,
  } = props;
  const ariaLabel = useCorrectAriaLabel(props);
  const buttonGroup = useButtonGroup();
  const finalVariant = (variant ??
    buttonGroup?.variant ??
    "primary") as Required<ButtonProps["variant"]>;
  const finalSize = (size ?? buttonGroup?.size ?? "md") as Required<
    ButtonProps["size"]
  >;

  return (
    <ChakraButton
      size={finalSize}
      variant={finalVariant}
      {...props}
      ref={ref}
      aria-label={ariaLabel}
      aria-busy={isLoading}
      isDisabled={isDisabled || isLoading}
      leftIcon={
        isLoading && leftIcon ? (
          <Box visibility={isLoading ? "hidden" : "visible"} aria-hidden="true">
            {leftIcon}
          </Box>
        ) : (
          leftIcon
        )
      }
      rightIcon={
        isLoading && rightIcon ? (
          <Box visibility={isLoading ? "hidden" : "visible"} aria-hidden="true">
            {rightIcon}
          </Box>
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
            maxWidth={getLoaderWidth(finalSize)}
            width="100%"
            marginX={2}
          />
        </Center>
      )}
      <Box
        visibility={isLoading ? "hidden" : "visible"}
        whiteSpace="normal"
        textAlign="left"
      >
        {children}
      </Box>
    </ChakraButton>
  );
});

function getLoaderWidth(size: any) {
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
  if (props.isLoading) {
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
