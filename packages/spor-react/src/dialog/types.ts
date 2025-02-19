import { drawerSlotRecipe } from "@/theme/slot-recipes/drawer";
import { RecipeVariantProps, Drawer as ChakraDrawer } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

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

export type DrawerFullScreenHeaderProps = ChakraDrawer.HeaderProps & {
  backTrigger?: boolean;
  title?: string;
};
