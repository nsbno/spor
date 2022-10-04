import { MdBrush } from "react-icons/md";
import { defineField, defineType } from "sanity";
export const illustration = defineType({
  name: "illustration",
  title: "Illustration",
  type: "document",
  icon: MdBrush,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Illustration",
      description: "Upload the SVG version of your illustration",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      description:
        "Searchable words for this illustration (in Norwegian). The more the better!",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "descriptionNb",
      title: "Description (Norwegian Bokmål)",
      description:
        "Describe the illustration in Norwegian Bokmål, for screen readers",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "descriptionSv",
      title: "Description (Swedish)",
      description: "Describe the illustration in Swedish, for screen readers",
      type: "text",
    }),
    defineField({
      name: "descriptionEn",
      title: "Description (English)",
      description: "Describe the illustration in English, for screen readers",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
