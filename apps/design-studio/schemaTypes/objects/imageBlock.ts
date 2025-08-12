import { FaRegImages } from "react-icons/fa";
import { defineField, defineType } from "sanity";

export const imageBlock = defineType({
  name: "imageBlock",
  title: "Image block",
  icon: FaRegImages,
  description: "A block of 1 to 6 images",
  type: "object",
  fields: [
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "extendedImage",
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).max(6),
    }),
    defineField({
      name: "caption",
      title: "Caption",
      description: "Optional caption for the image(s)",
      type: "string",
    }),
  ],
  preview: {
    select: {
      images: "images",
    },
    prepare({ images }) {
      const numImages = images.length || 0;
      return {
        title: `Image block : ${numImages} image${numImages > 1 ? "s" : ""}`,
        media: images[0],
      };
    },
  },
});
