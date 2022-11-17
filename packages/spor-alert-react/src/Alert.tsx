import React from "react";
import { Box, BoxProps } from "@vygruppen/spor-layout-react";
import {
  AccordionIcon,
  As,
  chakra,
  forwardRef,
  InputLeftElement,
  useMultiStyleConfig,
  useStyleConfig,
} from "@chakra-ui/react";

export type AlertProps = BoxProps & {
  children: React.ReactNode;
  variant?: "warning" | "info" | "success" | "error" | "allTransport";
  title: React.ReactNode;
  leftIcon: React.ReactNode;
  rightIcon: React.ReactNode;
};
export const Alert = forwardRef<AlertProps, As<any>>(
  ({ children, variant, title, leftIcon, rightIcon, ...props }: AlertProps) => {
    const style = useMultiStyleConfig("Alert", { variant });
    return (
      <Box {...props} __css={style.container}>
        <Box mr={4}>{leftIcon}</Box>
        <Box __css={style.textContainer}>
          {title && (
            <Box as="span" __css={style.title}>
              {title}
            </Box>
          )}
        </Box>
        {children}
      </Box>
    );
  }
);
