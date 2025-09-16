import type { InitialSanityData } from "./initialSanityData.server";
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

export const useTopSearch = (
  slug:
    | "top-menu"
    | "side-menu"
    | "side-menu-spor"
    | "side-menu-identitet"
    | "side-menu-ressurser"
    | "footer-menu",
) => {
  const { initialSanityData } = useMatchesData<{
    initialSanityData: {
      menus: Menu[];
    };
  }>("root");

  const terms = initialSanityData.menus.find((menu) =>
    menu.slug.includes(slug),
  );
  return terms;
};

export const useMenu = (slug: string) => {
  const { initialSanityData } = useMatchesData<{
    initialSanityData: InitialSanityData;
  }>("root");

  const fallbackSection = initialSanityData.sections.find(
    (section) => section.default === true,
  );

  const getSectionLevel = slug.split("/")[0] || fallbackSection?.slug.current;

  const menu = initialSanityData.menus.find(
    (menu) =>
      menu.slug === getSectionLevel || menu.relatedTo.slug === getSectionLevel,
  );
  if (!menu) {
    return null;
  }
  return menu;
};
