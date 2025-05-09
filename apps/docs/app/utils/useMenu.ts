import { MenuItem } from "./initialSanityData.server";
import { useMatchesData } from "./useMatchesData";

type Menu = {
  slug: string;
  menuItems: MenuItem[];
};

export const useMenu = (slug: "top-menu" | "side-menu" | "footer-menu") => {
  const { initialSanityData } = useMatchesData<{
    initialSanityData: {
      menus: Menu[];
    };
  }>("root");

  return initialSanityData.menus.find((menu) => menu.slug === slug);
};
