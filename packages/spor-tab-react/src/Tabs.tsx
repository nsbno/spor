import {
  Tabs as ChakraTabs,
  TabsProps as ChakraTabsProps,
} from "@chakra-ui/react";
import * as React from "react";

export type TabsProps = Exclude<
  ChakraTabsProps,
  "colorScheme" | "variant" | "orientation" | "size"
> & {
  colorScheme: "dark" | "light" | "green" | "grey";
  /** Defaults to `md` */
  size?: "sm" | "md" | "lg" | "xl";
  /** Defaults to `round` */
  variant?: "square" | "round";
};
export const Tabs = (props: TabsProps) => {
  return <ChakraTabs {...props} />;
};
