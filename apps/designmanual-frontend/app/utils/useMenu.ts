import { MenuItem } from "./initialSanityData.server";
import { useMatchesData } from "./useMatchesData";

type Menu = {
  slug: string;
  menuItems: MenuItem[];
  relatedTo: {
    _type: string;
    title: string;
    slug: string;
  };
};

export const useMenu = (slug: string = "side-menu-identitet") => {
  const filter = slug || "side-menu-identitet";

  const { initialSanityData } = useMatchesData<{
    initialSanityData: {
      menus: Menu[];
    };
  }>("root");

  const menu = initialSanityData.menus.find(
    (menu) => menu.slug === filter || menu.relatedTo.slug === filter,
  );
  if (!menu) {
    return null;
  }
  return menu;
};
