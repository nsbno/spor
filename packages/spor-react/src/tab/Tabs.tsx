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
  /** Defaults to `base` */
  variant: "base" | "accent";
  /** Defaults to `sm` */
  size?: "xs" | "sm" | "md" | "lg";
};
export const Tabs = forwardRef<TabsProps, "div">((props, ref) => {
  return <ChakraTabs {...props} ref={ref} />;
});
