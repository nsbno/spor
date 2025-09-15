import { PortableTextBlock } from "@portabletext/react";

import { getClient } from "./sanity/client";

type SiteSettings = {
  title: string;
  description: string;
  keywords: string[];
  socialImage: unknown;
  topMenu: Section[];
  footerItems: FooterItem[];
};
export type Section = {
  _id: string;
  _type: string;
  default: boolean;
  slug: { current: string; _type: string };
  title: string;
  icon: string;
};
export type FooterItem = {
  _type: string;
  _key: string;
  title: string;
  description: PortableTextBlock[];
};
export type MenuItem = {
  _type: "menuItem" | "divider";
  title: string;
  tags: string[];
  url: string;
  link: string;
  subItems?: MenuItem[];
  relatedTo?: {
    _type: string;
    title: string;
    slug: { current: string };
  };
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
  return getClient().fetch<InitialSanityData>(
    `{
      "menus": *[_type == "menu"] { 
        "slug": slug.current,
        relatedTo->{
            _type,
            title,
            "slug": slug.current 
          },
        "menuItems": menuItems[]{
          _type,
          title,
          "link": select(
            defined(internalLink) => "/" + ^.relatedTo->slug.current + "/" + internalLink->slug.current, 
            defined(externalLink) => externalLink
          ),
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
                "/" + internalLink->section->slug.current + 
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
        socialImage,
        topMenu[]->{
          _id,
          _type,
          default,
          slug,
          title,
          icon
        },
        footerItems[]{
          _key,
          _type,
          description,
          title
        }
      }
    }`,
  );
};
