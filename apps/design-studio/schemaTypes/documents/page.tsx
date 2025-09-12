import { MdAutoStories } from "react-icons/md";
import { defineField, defineType } from "sanity";
import { API_VERSION } from "../../sanity.config";

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
      name: "section",
      title: "Section",
      type: "reference",
      to: [{ type: "section" }],
      validation: (Rule) => Rule.required(),
      group: "pageContent",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      hidden: true,
      options: {
        source: "title",
      },
      group: "pageContent",
    }),
    defineField({
      name: "path",
      title: "Path",
      type: "slug",
      options: {
        slugify: (input: string) => {
          return input.trim();
        },
        source: async (parent, context) => {
          const sectionID = (parent.section as any)?._ref;
          const sectionLabel = async () => {
            const { getClient } = context;
            const client = getClient({ apiVersion: API_VERSION });
            const sectionDoc = await client.fetch(`*[_id == $sectionID]`, {
              sectionID,
            });
            return sectionDoc?.[0].slug.current || "Unknown Section";
          };
          if (!sectionID) return "/";
          return `${await sectionLabel()}/${(parent.slug as { current: string }).current}`;
        },
      },
      description:
        "The full path to this page, click 'Generate' to update it when the title or section changes.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "articleHeader", title: "Lead paragraph" },
        { type: "textBlock", title: "Text block" },
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
