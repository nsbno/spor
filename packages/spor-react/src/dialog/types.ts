import { Drawer as ChakraDrawer, RecipeVariantProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

import { drawerSlotRecipe } from "@/theme/slot-recipes/drawer";

export type DrawerVariantProps = RecipeVariantProps<typeof drawerSlotRecipe>;

export type DrawerContentProps = ChakraDrawer.ContentProps &
  PropsWithChildren<DrawerVariantProps> & {
    children: React.ReactNode;
    portalled?: boolean;
    portalRef?: React.RefObject<HTMLElement>;
  };

export type DrawerProps = Omit<
  ChakraDrawer.RootProps,
  "colorPalette" | "contained" | "unstyled"
> &
  ChakraDrawer.RootProps &
  PropsWithChildren<DrawerVariantProps> & {
    children: React.ReactNode;
  };

export type DrawerFullScreenHeaderProps = Omit<
  ChakraDrawer.HeaderProps,
  "title"
> & {
  backTrigger?: boolean;
  closeTrigger?: boolean;
};
