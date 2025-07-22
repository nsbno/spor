import { PiParagraph } from "react-icons/pi";
import { defineField, defineType } from "sanity";
import { iconList } from "../utils/icons";

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
    defineField({
      name: "leadShortcuts",
      title: "Shortcuts",
      type: "object",
      fields: [
        defineField({
          name: "items",
          title: "Items",
          type: "array",
          validation: (Rule) => Rule.required().min(2).max(4),
          of: [
            defineField({
              name: "shortcut",
              title: "Shortcut",
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Title",
                  type: "string",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "link",
                  title: "Link",
                  type: "link",
                }),
                defineField({
                  name: "icon",
                  title: "Icon",
                  type: "string",
                  options: {
                    list: iconList,
                    layout: "dropdown",
                  },
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({
      title: `Lead paragraph`,
    }),
  },
});
