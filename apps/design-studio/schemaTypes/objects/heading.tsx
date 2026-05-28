import { MdTitle } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const menuHeading = defineType({
  name: "heading",
  title: "Heading",
  type: "object",
  description: "A short text used as a heading/title.",
  icon: MdTitle,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "headingLevel",
      title: "Heading level",
      type: "string",
      options: {
        list: [
          { title: "H1", value: "h1" },
          { title: "H2", value: "h2" },
          { title: "H3", value: "h3" },
          { title: "H4", value: "h4" },
          { title: "H5", value: "h5" },
          { title: "H6", value: "h6" },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title ?? "Untitled heading",
        subtitle: "Heading",
      };
    },
  },
});
