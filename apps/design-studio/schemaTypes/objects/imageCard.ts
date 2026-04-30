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
      deprecated: {
        reason:
          "This field is deprecated and will be removed in a future release. Use the Content text instead.",
      },
      readOnly: true,
    }),
    defineField({
      name: "textContent",
      title: "Content text",
      type: "array",
      of: [{ type: "block" }],
      description:
        "Write text content of the card here. This field supports rich text formatting and will replace the deprecated Body text field.",
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
