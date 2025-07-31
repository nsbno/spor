import { PiParagraph } from "react-icons/pi";
import { defineField, defineType } from "sanity";

export const articleHeader = defineType({
  name: "articleHeader",
  title: "Lead paragraph",
  icon: PiParagraph,
  description:
    "A title and heading section of a page. Should be at the top of every page.",
  type: "object",
  fields: [
    defineField({
      name: "subheading",
      title: "Text",
      description: "A short description of the page",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "illustration",
      title: "Illustration",
      description:
        "An optional illustration to accompany the text. Should be used sparingly.",
      type: "extendedImage",
    }),
  ],
  preview: {
    prepare: () => ({
      title: `Lead paragraph`,
    }),
  },
});
