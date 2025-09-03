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
  // TODO: remove this hardcoded slug and make it dynamic and controlled by CMS
  const getSectionLevel = slug.split("/")[0] || "side-menu-identitet";
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
