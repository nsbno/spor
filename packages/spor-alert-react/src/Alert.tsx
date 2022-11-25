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

/**
 * Alert communicate information of varying degrees of importance state that affects a system.
 * Renders a alert.
 * The most basic version looks like this:
 *
 * ```tsx
 * <Alert>
 *  Content
 * </Alert>
 * ````
 *
 * There are losts of varaint available: "warning" | "info" | "success" | "error" | "allTransport",depending on the type of message you use.
 *
 * ```tsx
 * <Alert variant="warning" title="Viktig melding" leftIcon={<WarningOutline18Icon/>}>
 *  Informasjon om alternativ transport for avganger som ikke går som normalt.
 * </Alert>
 * ```
 */

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
