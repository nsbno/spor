import { TbColumns } from "react-icons/tb";
import { defineField, defineType } from "sanity";

export const textBlocks = defineType({
  name: "textBlocks",
  title: "Text blocks",
  icon: TbColumns,
  description: "A list of text blocks, rendered in columns where available",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "subheading",
      title: "Description",
      description: "A general description for the text blocks",
      type: "text",
    }),
    defineField({
      name: "headingIcon",
      title: "Heading icon",
      description: "Optional icon to display with the heading of the block",
      type: "icon",
    }),
    defineField({
      name: "items",
      type: "array",
      of: [{ type: "textBlock" }],
      validation: (Rule) => Rule.required().max(3),
    }),
  ],
  preview: {
    select: {
      title: "heading",
      items: "items",
    },
    prepare: ({ title, items }) => ({
      title: `${
        title?.length
          ? "Text blocks: " + title
          : "Text blocks: " +
            items?.length +
            " block" +
            (items.length == 1 ? "" : "s")
      }`,
    }),
  },
});
