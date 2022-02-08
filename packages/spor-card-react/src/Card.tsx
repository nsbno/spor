import { As, forwardRef, useStyleConfig } from "@chakra-ui/react";
import { Box, BoxProps } from "@vygruppen/spor-layout-react";
import React from "react";

export type CardProps = BoxProps &
  (
    | {
        variant: "elevated" | "outlined";
        children: React.ReactNode;
      }
    | { variant: "filled"; colorScheme: "blue" | "green" | "grey" }
  );
/**
 * Cards come in three different variants - `filled`, `outlined` and `elevated`.
 * If you specify the `filled` variant, you need to specify a `colorScheme` as well. The available color schemes are `blue`, `green` and `grey`.
 * 
```tsx
<Card variant="elevated">
  I'm an elevated card
</Card>
<Card variant="outlined">
  I'm an outlined card
</Card>
<Card variant="filled" colorScheme="blue">
  I'm a filled card
</Card>
```
 * You can also pass any style props you want, like padding or borderRadius.
 */
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
