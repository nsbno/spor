"use client";

import { Box, BoxProps, RecipeVariantProps, useRecipe } from "@chakra-ui/react";
import React, { forwardRef, PropsWithChildren, useEffect } from "react";
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
      as,
      children,
      icon,
      variant,
      isTextVisible: externalIsTextVisible,
      placement = "bottom right",
      ...props
    },
    ref,
  ) => {
    const [isTextVisible, setIsTextVisible] = React.useState(
      externalIsTextVisible !== undefined ? externalIsTextVisible : false,
    );
    const scrollDirection = useScrollDirection();
    useEffect(() => {
      if (externalIsTextVisible !== undefined) {
        return;
      }
      const id = window.setTimeout(
        () => setIsTextVisible(scrollDirection !== "down"),
        1000,
      );
      return () => window.clearTimeout(id);
    }, [scrollDirection, externalIsTextVisible]);

    useEffect(() => {
      setIsTextVisible(!!externalIsTextVisible);
    }, [externalIsTextVisible]);

    const recipe = useRecipe({ recipe: floatingActionButtonSlotRecipe });
    const style = recipe({
      variant,
      placement,
    });

    return (
      <Box
        css={style.container}
        aria-label={typeof children === "string" ? children : undefined}
        ref={ref}
        {...props}
      >
        <Box css={style._icon}>{icon}</Box>
        <Box>{children}</Box>
      </Box>
    );
  },
);

type ScrollDirection = "up" | "down" | null;
const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] =
    React.useState<ScrollDirection>(null);
  const lastScrollPosition = React.useRef(
    typeof window !== "undefined" ? window.scrollY : 0,
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
