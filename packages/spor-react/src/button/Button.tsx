import {
  Box,
  Center,
  ButtonProps as ChakraButtonProps,
  Button as ChakraButton,
  Flex,
  AbsoluteCenter,
  Spinner,
  Span,
  useRecipe,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { createTexts, useTranslation } from "../i18n";
import { ColorInlineLoader } from "../loader";
import { buttonRecipe } from "./button.recipe";

type ButtonLoadingProps = {
  loading?: boolean;
  loadingText?: React.ReactNode;
};

export type ButtonProps = ChakraButtonProps & ButtonLoadingProps;
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

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const { loading, disabled, loadingText, variant, size, children, ...rest } =
      props;
    const recipe = useRecipe({ recipe: buttonRecipe });
    const styles = recipe({ variant, size });
    return (
      <ChakraButton
        disabled={loading || disabled}
        css={styles}
        ref={ref}
        {...rest}
      >
        {loading && !loadingText ? (
          <>
            <AbsoluteCenter display="inline-flex">
              <Spinner size="inherit" color="inherit" />
            </AbsoluteCenter>
            <Span opacity={0}>{children}</Span>
          </>
        ) : loading && loadingText ? (
          <>
            <Spinner size="inherit" color="inherit" />
            {loadingText}
          </>
        ) : (
          children
        )}
      </ChakraButton>
    );
  },
);
/* export const Button = forwardRef<ButtonProps, "button">((props, ref) => {
  const {
    as = "button",
    type = "button",
    fontWeight,
    size,
    children,
    isLoading,
    isDisabled,
    leftIcon,
    rightIcon,
    sx,
    ...rest
  } = props;
  const ariaLabel = useCorrectAriaLabel(props);
  const buttonGroup = useButtonGroup();
  const finalSize = (size ?? buttonGroup?.size ?? "md") as Required<
    ButtonProps["size"]
  >;
  const styles = useStyleConfig("Button", {
    ...buttonGroup,
    ...rest,
    size: finalSize,
    leftIcon,
    rightIcon,
  });

  // We want to explicitly allow to override the fontWeight prop
  if (fontWeight) {
    styles.fontWeight = fontWeight;
  }

  return (
    <Box
      {...rest}
      as={as}
      type={type}
      sx={{ ...styles, ...sx }}
      ref={ref}
      aria-label={ariaLabel}
      aria-busy={isLoading}
      disabled={isDisabled || isLoading}
      position="relative"
      fontFamily={"Vy Sans"}
    >
      {isLoading && (
        <Center position="absolute" right={0} left={0} top={1} bottom={0}>
          <ColorInlineLoader
            maxWidth={getLoaderWidth(finalSize)}
            width="80%"
            marginX={2}
            marginY={2}
          />
        </Center>
      )}
      <Flex
        gap={1}
        flex={1}
        alignItems="center"
        justifyContent={rightIcon ? "space-between" : "center"}
        visibility={isLoading ? "hidden" : "visible"}
        aria-hidden={isLoading}
      >
        <Flex gap={1} alignItems="center">
          {leftIcon}
          <Box
            visibility={isLoading ? "hidden" : "visible"}
            whiteSpace="normal"
            textAlign="center"
          >
            {children}
          </Box>
        </Flex>
        {rightIcon}
      </Flex>
    </Box>
  );
}); */

function getLoaderWidth(size: Required<ButtonProps["size"]>) {
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
