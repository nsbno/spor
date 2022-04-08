import { MdMenu } from "react-icons/md";
import { Document, Field, SlugField, StringField } from "../schemaTypes";

export type Menu = {
  title: StringField;
  slug: SlugField;
  menuItems: Field[];
};
export const menu: Document<Menu> = {
  name: "menu",
  title: "Menu",
  type: "document",
  icon: MdMenu,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
      },
    },
    {
      name: "menuItems",
      title: "Menu items",
      type: "array",
      of: [{ type: "menuItem" }, { type: "divider" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category.title",
      media: "mainImage",
    },
  },
};
