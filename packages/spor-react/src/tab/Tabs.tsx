import {
  Tabs as ChakraTabs,
  TabsProps as ChakraTabsProps,
  forwardRef,
} from "@chakra-ui/react";
import * as React from "react";

export type TabsProps = Exclude<
  ChakraTabsProps,
  "colorScheme" | "variant" | "orientation" | "size"
> & {
  colorScheme: "dark" | "default" | "accent" | "grey";
  /** Defaults to `md` */
  size?: "sm" | "md" | "lg" | "xl";
  /** Defaults to `round` */
  variant?: "square" | "round";
};
export const Tabs = forwardRef<TabsProps, "div">((props, ref) => {
  return <ChakraTabs {...props} ref={ref} />;
});
