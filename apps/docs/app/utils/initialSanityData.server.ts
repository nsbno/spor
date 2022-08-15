import { getClient } from "./sanity/client";
import { getUserPreferencesSession } from "./userPreferences.server";

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
export const getInitialSanityData = async (request: Request) => {
  const userPreferencesSession = await getUserPreferencesSession(request);
  const userPreferences = userPreferencesSession.getUserPreferences();
  const preferredTechnology =
    userPreferences.userType === "developer"
      ? userPreferences.technology
      : "figma";

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
          subItems[
            internalLink->category->slug.current != "komponenter" ||$preferredTechnology in internalLink->resourceLinks[].linkType
          ]{
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
    }`,
    { preferredTechnology }
  );
};
