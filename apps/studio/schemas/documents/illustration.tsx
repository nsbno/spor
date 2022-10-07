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
      name: "imageLightBackground",
      title: "Illustration (light background)",
      description:
        "Upload the version of your illustration meant for light backgrounds",
      type: "image",
      options: {
        accept: "image/svg+xml",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "imageDarkBackground",
      title: "Illustration (dark background)",
      description:
        "Upload the version of your illustration meant for dark backgrounds",
      type: "image",
      options: {
        accept: "image/svg+xml",
      },
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
      name: "description",
      title: "Description",
      description:
        "Describe the illustration in such a way that it's easy to understand what it could be used for.",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
