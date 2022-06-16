import { As, forwardRef, useStyleConfig } from "@chakra-ui/react";
import { Box, BoxProps } from "@vygruppen/spor-layout-react";
import React from "react";

export type CardProps = Exclude<BoxProps, "size"> & {
  size?: "sm" | "lg";
} & (
    | {
        variant: "elevated" | "boxes";
        children: React.ReactNode;
      }
    | { variant: "colored"; colorScheme: "blue" | "green" | "grey"| "yellow" | "orange" }
  );
/**
 * Cards come in three different variants - `colored`, `boxes` and `elevated`.
 * If you specify the `filled` variant, you need to specify a `colorScheme` as well. The available color schemes are `blue`, `green` and `grey`.
 * 
```tsx
<Card variant="elevated">
  I'm an elevated card
</Card>
<Card variant="boxes">
  I'm an boxes card
</Card>
<Card variant="colored" colorScheme="blue">
  I'm a colored card
</Card>
```
 * You can also pass any style props you want, like padding or borderRadius.
 */
export const Card = forwardRef<CardProps, As<any>>(
  ({ variant, size = "lg", colorScheme = "grey", children, ...props }, ref) => {
    const styles = useStyleConfig("Card", {
      variant: variant as any,
      colorScheme,
      size,
    });
    return (
      <Box __css={styles} {...props} ref={ref}>
        {children}
      </Box>
    );
  }
);
