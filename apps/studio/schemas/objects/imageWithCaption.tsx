import { MdOutlineImage } from "react-icons/md";
import { BlockField, Field, ObjectField } from "../schemaTypes";

type ImageWithCaption = {
  image: Field<"image">;
  alt: string;
  caption: BlockField;
};
export const imageWithCaption: ObjectField<ImageWithCaption> = {
  name: "imageWithCaption",
  title: "Image with caption",
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
      name: "caption",
      title: "Caption text",
      type: "array",
      of: [{ type: "block", styles: [{ title: "Text", value: "normal" }] }],
    },
  ],
  preview: {
    select: {
      blocks: "blocks",
    },
    prepare(value) {
      const block = (value.blocks || []).find(
        (block: any) => block._type === "block"
      );
      return {
        title: block
          ? block.children
              .filter((child: any) => child._type === "span")
              .map((span: any) => span.text)
              .join("")
          : "No title",
      };
    },
  },
};
