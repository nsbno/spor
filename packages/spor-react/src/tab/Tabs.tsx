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

/**
 * ```tsx
 * <Tabs defaultValue="coming" fitted>
 *  <TabsList>
 *    <TabsTrigger value="coming">
 *      Kommende
 *    </TabsTrigger>
 *    <TabsTrigger value="completed">
 *      Fullført
 *    </TabsTrigger>
 *    <TabsTrigger value="cancelled">
 *      Avbestilt
 *    </TabsTrigger>
 *  </TabsList>
 *  <TabsContent value="coming">
 *    <Heading>Kommende</heading>
 *    <Text>Kommende billeter</Text>
 *  </TabsContent>
 *  <TabsContent value="completed">
 *    <Heading>Fullført</heading>
 *    <Text>Fullført billeter</Text>
 *  </TabsContent>
 *  <TabsContent value="cancelled">
 *    <Heading>Avbestilt</heading>
 *    <Text>Avbestilte billeter</Text>
 *  </TabsContent>
 * </Tabs>
 * ```
 */

export type TabsProps = Exclude<
  ChakraTabsRootProps,
  "colorPalette" | "orientation"
> &
  PropsWithChildren<TabsVariantProps> & {
    /** Defaults to `core` */
    variant?: "core" | "accent";
    /** Defaults to `sm` */
    size?: "xs" | "sm" | "md" | "lg";
    /** Defaults to `false` */
    fitted?: boolean;
    /** Defaults to `start` */
    justify?: "start" | "center" | "end";
  };
export const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const { variant = "core", size = "sm" } = props;
  return <ChakraTabs.Root {...props} ref={ref} variant={variant} size={size} />;
});

export const TabsList = ChakraTabs.List;
export const TabsTrigger = ChakraTabs.Trigger;
export const TabsIndicator = ChakraTabs.Indicator;
export const TabsContent = ChakraTabs.Content;
