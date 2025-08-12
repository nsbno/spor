import { LuBox } from "react-icons/lu";
import { defineField, defineType } from "sanity";

export const nonClickableBoxList = defineType({
  name: "nonClickableBoxList",
  title: "Boxes",
  icon: LuBox,
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Block heading",
      type: "string",
      validation: (Rule) =>
        Rule.custom((value, { parent }) => {
          if (!(parent as any).description?.length) {
            return true;
          }
          return (
            Boolean(value) || "Heading is required when you have a description"
          );
        }),
    }),
    defineField({
      name: "headingIcon",
      title: "Heading icon",
      description: "Optional icon to display with the heading",
      type: "icon",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      description: "Optional general description of the boxes",
    }),
    defineField({
      name: "backgroundColor",
      title: "Background color",
      description: "The background color for the block",
      initialValue: "white",
      type: "string",
      options: {
        list: [
          { value: "white", title: "White" },
          { value: "green", title: "Green" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    }),
    defineField({
      name: "boxes",
      title: "Boxes",
      type: "array",
      of: [{ type: "nonClickableBox" }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "readMoreButton",
      title: "Read more button",
      type: "array",
      of: [{ type: "linkButton" }],
      description: "Optional button to display at the bottom of the block",
      validation: (Rule) => Rule.max(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
      boxes: "boxes",
      media: "boxes[0].illustration",
    },
    prepare: ({ title, boxes, media }) => ({
      title: `${
        title?.length
          ? "Box block: " + title
          : "Box block: " +
            boxes?.length +
            " box" +
            (boxes.length === 1 ? "" : "es")
      }`,
      media: media,
    }),
  },
});
