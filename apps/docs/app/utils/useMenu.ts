import { Menu } from "./menu.server";
import { useMatchesData } from "./useMatchesData";

type RootData = {
  menus: Menu[];
};
export const useMenu = (slug: "top-menu" | "side-menu") => {
  const { menus } = useMatchesData<RootData>("root");
  return menus.find((menu) => menu.slug === slug);
};
