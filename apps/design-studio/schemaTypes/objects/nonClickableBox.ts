import { GiCardboardBoxClosed } from "react-icons/gi";
import { defineField, defineType } from "sanity";

export const nonClickableBox = defineType({
  name: "nonClickableBox",
  title: "Box",
  icon: GiCardboardBoxClosed,
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Box heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Body text",
      type: "array",
      of: [
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
    defineField({
      name: "illustration",
      type: "image",
      title: "Illustration",
      description: "Optional icon or illustration to display in the card",
      validation: (Rule) =>
        Rule.custom((field, context: any) => {
          if (field && context.parent.icon) {
            return "Both icon and illustration can't be selected";
          }
          return true;
        }),
    }),
    defineField({
      name: "icon",
      type: "icon",
      description: "Optional icon or illustration to display in the card",
      validation: (Rule) =>
        Rule.custom((field, context: any) => {
          if (field && context.parent.illustration) {
            return "Both icon and illustration can't be selected";
          }
          return true;
        }),
    }),
    defineField({
      name: "links",
      title: "Link buttons",
      type: "array",
      of: [{ type: "linkButton" }],
    }),
    defineField({
      name: "color",
      title: "Box background color",
      type: "string",
      initialValue: "grey",
      options: {
        list: [
          { title: "Grey", value: "grey" },
          { title: "White", value: "white" },
          { title: "Green", value: "green" },
          { title: "Yellow", value: "yellow" },
          { title: "Orange", value: "orange" },
          { title: "Blue", value: "blue" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    }),
  ],

  preview: {
    select: {
      title: "title",
      media: "illustration",
    },
    prepare: ({ title, media }) => ({
      title: "Box :" + title,
      media: media,
    }),
  },
});
