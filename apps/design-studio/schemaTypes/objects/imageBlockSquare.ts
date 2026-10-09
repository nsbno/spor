import { FaRegImages } from "react-icons/fa";
import { defineField, defineType } from "sanity";
import { ImageBlockLayoutInput } from "./ImageBlockLayoutInput";

export const imageBlockSquare = defineType({
  name: "imageBlockSquare",
  title: "Image block square",
  icon: FaRegImages,
  description: "This module require minimum 2 and maximum 4 images",
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
      validation: (Rule) => Rule.required().min(2).max(4),
    }),
    defineField({
      name: "caption",
      title: "Caption",
      description: "Optional caption for the image(s)",
      type: "string",
    }),
    defineField({
      name: "layout",
      type: "string",
      title: "Layout",
      description: "Choose how the images should be arranged",
      components: {
        input: ImageBlockLayoutInput,
      },
      hidden: ({ parent }) => {
        const images = parent?.images;
        const imageCount = images?.length ?? 0;
        return imageCount < 2;
      },
    }),
  ],
  preview: {
    select: {
      images: "images",
    },
    prepare({ images }) {
      const numImages = images.length || 0;
      return {
        title: `Image block square : ${numImages} image${numImages > 1 ? "s" : ""}`,
        media: images[0],
      };
    },
  },
});
