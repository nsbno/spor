import { IoIosImages } from "react-icons/io";
import { defineField, defineType } from "sanity";

export const imageCardList = defineType({
  name: "imageCardList",
  title: "Image card list",
  description: "A list of image cards",
  type: "object",
  icon: IoIosImages,
  fields: [
    defineField({
      name: "heading",
      title: "List heading",
      type: "string",
      validation: (Rule) =>
        Rule.custom((value, { parent }) => {
          if (!(parent as any).subheading?.length) {
            return true;
          }
          return (
            Boolean(value) || "Heading is required when you have a subheading"
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
      name: "subheading",
      title: "Description",
      description: "A general description of the image cards",
      type: "text",
    }),
    defineField({
      name: "items",
      type: "array",
      of: [{ type: "imageCard" }],
      validation: (Rule) => Rule.min(1).required(),
    }),
    defineField({
      name: "readMoreButton",
      title: "Read more button",
      type: "array",
      of: [{ type: "linkButton" }],
      description:
        "Optional button to display at the bottom of the end of the card list",
      validation: (Rule) => Rule.max(1),
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
          ? "Image card list: " + title
          : "Image card list: " +
            items?.length +
            " item" +
            (items.length == 1 ? "" : "s")
      }`,
      media: media,
    }),
  },
});
