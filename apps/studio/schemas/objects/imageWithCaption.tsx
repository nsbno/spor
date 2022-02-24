import { MdOutlineImage } from "react-icons/md";
import { BlockField, Field, ObjectField } from "../schemaTypes";

type ImageWithCaption = {
  image: Field<"image">;
  alt: string;
  content: BlockField;
};
export const imageWithCaption: ObjectField<ImageWithCaption> = {
  name: "imageWithCaption",
  title: "ImageWithCaption",
  type: "object",
  icon: MdOutlineImage,
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "alt",
      title: "Alternative text",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
