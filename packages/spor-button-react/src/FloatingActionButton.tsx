import { Box, BoxProps, useMultiStyleConfig } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const MotionBox = motion(Box);

type FloatingActionButtonProps = BoxProps & {
  variant?: "green" | "light" | "dark";
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
export const FloatingActionButton = ({
  children,
  icon,
  variant,
  isTextVisible: externalIsTextVisible,
  placement = "bottom right",
  ...props
}: FloatingActionButtonProps) => {
  const [isTextVisible, setIsTextVisible] = React.useState(
    externalIsTextVisible !== undefined ? externalIsTextVisible : true
  );
  const scrollDirection = useScrollDirection();
  React.useEffect(() => {
    if (externalIsTextVisible !== undefined) {
      return;
    }
    const id = window.setTimeout(
      () => setIsTextVisible(scrollDirection !== "down"),
      1000
    );
    return () => window.clearTimeout(id);
  }, [scrollDirection, externalIsTextVisible]);

  React.useEffect(() => {
    setIsTextVisible(!!externalIsTextVisible);
  }, [externalIsTextVisible]);

  const style = useMultiStyleConfig("FloatingActionButton", {
    variant,
    isTextVisible,
    placement,
  });
  return (
    <MotionBox __css={style.container} as="button" {...props}>
      <Box __css={style.icon}>{icon}</Box>
      <MotionBox
        animate={isTextVisible ? "show" : "hide"}
        initial="show"
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
};

type ScrollDirection = "up" | "down" | null;
const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] =
    React.useState<ScrollDirection>(null);
  const lastScrollPosition = React.useRef(window.scrollY);
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
