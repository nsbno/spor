import {
  forwardRef,
  ModalHeader as ChakraModalHeader,
  ModalHeaderProps as ChakraModalHeaderProps,
} from "@chakra-ui/react";
import React from "react";

export type ModalHeaderProps = ChakraModalHeaderProps & {
  size?: "sm" | "lg";
};

/**
 * ModalHeader
 *
 * You can specify the size with either `size="sm"` or `size="lg"`.
 */
export const ModalHeader = forwardRef<ModalHeaderProps, "header">(
  ({ size, ...props }, ref) => {
    const styles = {
      fontSize:
        size === "lg"
          ? ["mobile.lg", "desktop.lg"]
          : ["mobile.md", "desktop.md"],
      textAlign:
        size === "lg"
          ? "center"
          : ("left" as ChakraModalHeaderProps["textAlign"]),
    };
    return <ChakraModalHeader {...props} ref={ref} {...styles} />;
  },
);
