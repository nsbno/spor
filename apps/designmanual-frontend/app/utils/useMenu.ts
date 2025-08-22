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

export const useMenu = (slug: string, fallback: string | null) => {
  const getSectionLevel = slug.split("/")[0] || fallback;
  const { initialSanityData } = useMatchesData<{
    initialSanityData: {
      menus: Menu[];
    };
  }>("root");

  const menu = initialSanityData.menus.find(
    (menu) =>
      menu.slug === getSectionLevel || menu.relatedTo.slug === getSectionLevel,
  );
  if (!menu) {
    return null;
  }
  return menu;
};
