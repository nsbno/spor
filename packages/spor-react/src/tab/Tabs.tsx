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
  colorScheme: 
  /** @deprecated dark is deprecated please use accent*/
  | "dark"
  /** @deprecated light is deprecated please use default*/
  | "light"
  /** @deprecated green is deprecated please use accent*/
  | "green"   
  /** @deprecated grey is deprecated please use default*/
  | "grey"
  | "default" 
  | "accent" ;
  /** Defaults to `md` */
  size?: "sm" | "md" | "lg" | "xl";
  /** Defaults to `round` */
  variant?: "square" | "round";
};
export const Tabs = forwardRef<TabsProps, "div">((props, ref) => {
  return <ChakraTabs {...props} ref={ref} />;
});
