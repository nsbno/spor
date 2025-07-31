import { MdArrowRightAlt } from "react-icons/md";
import { defineField, defineType } from "sanity";
import { iconList } from "../utils/icons";

export const accordionItem = defineType({
  name: "accordionItem",
  title: "Accordion item",
  type: "object",
  icon: MdArrowRightAlt,
  fields: [
    defineField({
      name: "title",
      title: "Accordion item header",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      description:
        "Optional icon, shown to the left of the accordion item header",
      type: "string",
      options: {
        list: iconList,
        layout: "dropdown",
      },
    }),
    defineField({
      name: "content",
      title: "Body text",
      type: "array",
      of: [
        { type: "linkButton" },
        {
          type: "block",
          marks: {
            annotations: [
              {
                type: "object",
                title: "Linkable content",
                fields: [
                  {
                    name: "link",
                    type: "link",
                  },
                ],
              },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: ({ title }) => ({
      title: "Accordion item: " + title,
    }),
  },
});
