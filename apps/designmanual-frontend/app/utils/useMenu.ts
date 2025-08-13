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

export const useMenu = (slug: string = "identitet") => {
  const filter = slug;

  console.log("useMenu", filter);

  const { initialSanityData } = useMatchesData<{
    initialSanityData: {
      menus: Menu[];
    };
  }>("root");

  console.log("initialSanityData", initialSanityData.menus);

  return initialSanityData.menus.find((menu) => menu.relatedTo.slug === filter);
};
