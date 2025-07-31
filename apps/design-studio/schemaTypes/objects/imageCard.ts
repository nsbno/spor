import { MdImage } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const imageCard = defineType({
  name: "imageCard",
  title: "Image card",
  icon: MdImage,
  description: "A larger card with an image",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Image card heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Body text",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "extendedImage",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Linked content",
      type: "link",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image.asset",
    },
    prepare: ({ title, media }) => ({
      title: "Image card " + `${title || ""}`,
      media: media,
    }),
  },
});
