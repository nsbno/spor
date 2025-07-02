import { MdMenu } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const menu = defineType({
  name: "menu",
  title: "Menu",
  type: "document",
  icon: MdMenu,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "menuItems",
      title: "Menu items",
      type: "array",
      of: [{ type: "menuItem" }, { type: "divider" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category.title",
      media: "mainImage",
    },
  },
});
