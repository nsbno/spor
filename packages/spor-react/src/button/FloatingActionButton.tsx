"use client";

import {
  Box,
  BoxProps,
  RecipeVariantProps,
  Text,
  useSlotRecipe,
} from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren } from "react";

import { floatingActionButtonSlotRecipe } from "../theme/slot-recipes/floating-action-button";

type FloatingActionButtonVariantProps = RecipeVariantProps<
  typeof floatingActionButtonSlotRecipe
>;

type FloatingActionButtonProps = BoxProps &
  PropsWithChildren<FloatingActionButtonVariantProps> & {
    variant?: "accent" | "core" | "brand";
    placement?: "bottom right" | "bottom left" | "top right" | "top left";
    icon: React.ReactNode;
    children: React.ReactNode;
    isTextVisible?: boolean;
  };

/**
 * Creates a floating action button.
 *
 * By default it will be placed at the bottom right of the screen. You can override this with specifying the `placement` prop.
 *
 * ```tsx
 * <FloatingActionButton
 *  variant="accent"
 *  icon={<TicketControlFill30Icon />}
 *  placement="bottom right"
 * />
 */
export const FloatingActionButton = forwardRef<
  HTMLButtonElement,
  FloatingActionButtonProps
>(
  (
    {
      children,
      icon,
      variant,
      isTextVisible: externalIsTextVisible,
      placement = "bottom right",
      ...props
    },
    ref,
  ) => {
    const scrollDirection = useScrollDirection();

    // Use derived value instead of setState in effect
    const isTextVisible =
      externalIsTextVisible === undefined
        ? scrollDirection !== "down"
        : !!externalIsTextVisible;

    const recipe = useSlotRecipe({ key: "floatingActionButton" });
    const style = recipe({
      variant,
      placement,
    });

    return (
      <Box
        css={style.root}
        as="button"
        aria-label={typeof children === "string" ? children : undefined}
        ref={ref}
        {...props}
        aria-expanded={isTextVisible}
      >
        <Box css={style.icon}>{icon}</Box>
        {isTextVisible && (
          <Text data-state="open" css={style.text}>
            {children}
          </Text>
        )}
      </Box>
    );
  },
);
FloatingActionButton.displayName = "FloatingActionButton";

type ScrollDirection = "up" | "down" | null;
const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] =
    React.useState<ScrollDirection>(null);
  const lastScrollPosition = React.useRef(
    globalThis.window === undefined ? 0 : window.scrollY,
  );
  React.useEffect(() => {
    const onScroll = () => {
      const delta = window.scrollY - lastScrollPosition.current;
      if (delta === 0) {
        return;
      }

      lastScrollPosition.current = window.scrollY;
      setScrollDirection(delta > 0 ? "down" : "up");
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [scrollDirection]);
  return scrollDirection;
};
