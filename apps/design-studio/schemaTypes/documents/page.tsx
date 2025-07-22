import { MdAutoStories } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon: MdAutoStories,
  groups: [
    {
      name: "pageContent",
      title: "Content",
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "pageContent",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortTitle",
      description:
        "Useful in smaller contexts like breadcrumbs. Required if the title is longer than 15 characters.",
      title: "Short title",
      type: "string",
      group: "pageContent",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      group: "pageContent",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "articleHeader", title: "Lead paragraph" },
        { type: "textBlocks", title: "Text blocks" },
        { type: "imageBlock", title: "Image block" },
        { type: "imageAndTextList", title: "Image and text" },
        { type: "imageCardList", title: "Image card list" },
        { type: "cards", title: "Cards" },
        { type: "nonClickableBoxList", title: "Boxes" },
        { type: "accordion", title: "Accordion" },
        { type: "fileList", title: "File list" },
        { type: "linkButton", title: "Link button" },
        { type: "divider", title: "Divider" },
      ],
      group: "pageContent",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seoFields",
      group: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
      shortTitle: "shortTitle",
    },
    prepare({ title, shortTitle }) {
      return {
        title: shortTitle ?? title,
      };
    },
  },
});
