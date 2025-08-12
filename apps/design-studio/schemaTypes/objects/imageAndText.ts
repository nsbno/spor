import { GrTextWrap } from "react-icons/gr";
import { defineField, defineType } from "sanity";

export const imageAndText = defineType({
  name: "imageAndText",
  title: "Image and Text",
  type: "object",
  icon: GrTextWrap,
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "extendedImage",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Body text",
      type: "array",
      of: [
        { type: "linkButton" },
        { type: "nonClickableBox" },
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
      media: "image.asset",
    },
    prepare: ({ media }) => ({
      title: "Image and Text",
      media: media,
    }),
  },
});
