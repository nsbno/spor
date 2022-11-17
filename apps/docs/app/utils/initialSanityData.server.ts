import { getClient } from "./sanity/client";

type SiteSettings = {
  title: string;
  description: string;
  keywords: string[];
  socialImage: any;
};
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
export type InitialSanityData = {
  menus: Menu[];
  siteSettings: SiteSettings;
};
export const getInitialSanityData = async () => {
  return getClient().fetch<MenuItem[]>(
    `{
      "menus": *[_type == "menu"] { 
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
      },
      "siteSettings": *[_type == "siteSettings"][0] {
        title,
        description,
        keywords,
        socialImage
      }
    }`
  );
};
