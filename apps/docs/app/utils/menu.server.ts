import { getClient } from "./sanity/client";

export type MenuItem = {
  _type: "menuItem" | "divider";
  title: string;
  tags: string[];
  url: string;
  subItems?: MenuItem[];
};
export type Menu = {
  slug: string;
  menuItems: MenuItem[];
};
export const getMenus = async () =>
  getClient().fetch<MenuItem[]>(
    `*[_type == "menu"] { 
      "slug": slug.current,
      "menuItems": menuItems[]{
        _type,
        title,
        "url": select(
          defined(internalLink) => 
            "/" + internalLink->category->slug.current + 
            "/" + internalLink->slug.current, 
          defined(externalLink) => externalLink
        ),
        subItems[]{
          title,
          tags,
          "url": select(
            defined(internalLink) => 
              "/" + internalLink->category->slug.current + 
              "/" + internalLink->slug.current, 
            defined(externalLink) => externalLink
          ),
        }
      } 
    }`
  );
