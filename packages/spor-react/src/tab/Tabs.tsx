"use client";
import {
  Tabs as ChakraTabs,
  TabsRootProps as ChakraTabsRootProps,
  RecipeVariantProps,
} from "@chakra-ui/react";
import * as React from "react";
import { forwardRef, PropsWithChildren } from "react";
import { tabsSlotRecipe } from "../theme/slot-recipes/tabs";

type TabsVariantProps = RecipeVariantProps<typeof tabsSlotRecipe>;

export type TabsProps = Exclude<
  ChakraTabsRootProps,
  "colorPalette" | "variant" | "orientation" | "size"
> &
  PropsWithChildren<TabsVariantProps> & {
    /** Defaults to `core` */
    variant?: "core" | "accent";
    /** Defaults to `sm` */
    size?: "xs" | "sm" | "md" | "lg";
  };
export const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const { variant = "core", size = "sm" } = props;
  return <ChakraTabs.Root {...props} ref={ref} variant={variant} size={size} />;
});

export const TabsList = ChakraTabs.List;
export const TabsTrigger = ChakraTabs.Trigger;
export const TabsIndicator = ChakraTabs.Indicator;
export const TabsContent = ChakraTabs.Content;
