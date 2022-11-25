import React from "react";
import { Box, BoxProps } from "@vygruppen/spor-layout-react";
import { As, forwardRef, useMultiStyleConfig } from "@chakra-ui/react";

export type AlertProps = BoxProps & {
  children: React.ReactNode;
  variant?: "warning" | "info" | "success" | "error" | "allTransport";
  title: React.ReactNode;
  leftIcon: React.ReactNode;
  rightIcon: React.ReactNode;
};
export const Alert = forwardRef<AlertProps, As<any>>(
  (
    { children, variant, title, leftIcon, rightIcon, ...props }: AlertProps,
    ref
  ) => {
    const style = useMultiStyleConfig("Alert", { variant });
    return (
      <Box {...props} ref={ref} __css={style.container}>
        <Box __css={style.iconContainer}>{leftIcon}</Box>
        <Box __css={style.textContainer}>
          {title && (
            <Box as="span" __css={style.title}>
              {title}
            </Box>
          )}
        </Box>
        {children && <Box as="span">{children}</Box>}
        <Box ml={11}>{rightIcon}</Box>
      </Box>
    );
  }
);
