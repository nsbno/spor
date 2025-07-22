import { GrTextWrap } from "react-icons/gr";
import { defineField, defineType } from "sanity";

export const imageAndTextList = defineType({
  name: "imageAndTextList",
  title: "Image and text",
  description: "A list of image and text blocks",
  icon: GrTextWrap,
  type: "object",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      description: "Optional heading",
      title: "Block heading",
      validation: (Rule) =>
        Rule.custom((value, { parent }) => {
          if (!(parent as any)?.description?.length) {
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
      description: "Optional icon to display with the heading of the block",
      type: "icon",
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "Optional general description for the block",
      type: "text",
    }),
    defineField({
      name: "items",
      type: "array",
      of: [{ type: "imageAndText" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "layout",
      title: "Choose preferred layout",
      initialValue: "image-then-text",
      type: "string",
      options: {
        list: [
          { value: "image-then-text", title: "Image, then text" },
          { value: "text-then-image", title: "Text, then image" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      hidden: ({ parent }) => !(parent?.items?.length == 1),
    }),
    defineField({
      name: "direction",
      title: "Choose preferred direction",
      initialValue: "horizontal",
      type: "string",
      options: {
        list: [
          {
            value: "horizontal",
            title: "Horizontal",
          },
          {
            value: "vertical",
            title: "Vertical",
          },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      hidden: ({ parent }) => !(parent?.items?.length == 1),
    }),
  ],
  preview: {
    select: {
      title: "heading",
      items: "items",
      media: "items[0].image.asset",
    },
    prepare: ({ title, items, media }) => ({
      title: `${
        title?.length
          ? "Image and text: " + title
          : "Image and text: " +
            items?.length +
            " item" +
            (items.length == 1 ? "" : "s")
      }`,
      media: media,
    }),
  },
});
