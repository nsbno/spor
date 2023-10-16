import {
  Box,
  BoxProps,
  ComponentWithAs,
  forwardRef,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect } from "react";

const MotionBox = motion(Box);

type FloatingActionButtonProps = BoxProps & {
  variant?:
   /** @deprecated dark is deprecated please use accent*/ 
    "green" 
   /** @deprecated dark is deprecated please use accent*/
  | "light"
   /** @deprecated dark is deprecated please use accent*/ 
  | "dark"
  | "accent"
  | "base"
  | "brand"
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
 *  variant="green"
 *  icon={<TicketControlFill30Icon />}
 *  placement="bottom right"
 * />
 */
export const FloatingActionButton = forwardRef<
  FloatingActionButtonProps,
  ComponentWithAs<"a" | "button">
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
    ref
  ) => {
    const [isTextVisible, setIsTextVisible] = React.useState(
      externalIsTextVisible !== undefined ? externalIsTextVisible : false
    );
    const scrollDirection = useScrollDirection();
    useEffect(() => {
      if (externalIsTextVisible !== undefined) {
        return;
      }
      const id = window.setTimeout(
        () => setIsTextVisible(scrollDirection !== "down"),
        1000
      );
      return () => window.clearTimeout(id);
    }, [scrollDirection, externalIsTextVisible]);

    useEffect(() => {
      setIsTextVisible(!!externalIsTextVisible);
    }, [externalIsTextVisible]);

    const style = useMultiStyleConfig("FloatingActionButton", {
      variant,
      isTextVisible,
      placement,
    });
    return (
      <MotionBox
        __css={style.container}
        aria-label={children}
        ref={ref}
        {...props}
      >
        <Box __css={style.icon}>{icon}</Box>
        <MotionBox
          animate={isTextVisible ? "show" : "hide"}
          initial={externalIsTextVisible ? "show" : "hide"}
          variants={{
            show: {
              opacity: 1,
              width: "auto",
              visibility: "visible",
            },
            hide: {
              opacity: 0,
              width: 0,
              visibility: "hidden",
            },
          }}
          __css={style.text}
        >
          {children}
        </MotionBox>
      </MotionBox>
    );
  }
);

type ScrollDirection = "up" | "down" | null;
const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] =
    React.useState<ScrollDirection>(null);
  const lastScrollPosition = React.useRef(
    typeof window !== "undefined" ? window.scrollY : 0
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
