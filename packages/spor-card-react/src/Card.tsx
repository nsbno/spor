import { As, BoxProps, forwardRef, useStyleConfig } from "@chakra-ui/react";
import { Box } from "@vygruppen/spor-layout-react";
import React from "react";

type CardProps = BoxProps & {
  variant: "elevated" | "filled" | "outlined";
  children: React.ReactNode;
  /** Should only be used with variant="filled" */
  colorScheme?: "blue" | "green" | "grey";
};
export const Card = forwardRef<CardProps, As<any>>(
  ({ variant, colorScheme = "grey", children, ...props }, ref) => {
    const styles = useStyleConfig("Card", {
      variant: variant as any,
      colorScheme,
    });
    return (
      <Box __css={styles} {...props} ref={ref}>
        {children}
      </Box>
    );
  }
);
