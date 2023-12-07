import { MdOutlineImage } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const imageWithCaption = defineType({
  name: "imageWithCaption",
  title: "Image with caption",
  type: "object",
  icon: MdOutlineImage,
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Alternative text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "caption",
      title: "Caption text",
      type: "array",
      of: [{ type: "block", styles: [{ title: "Text", value: "normal" }] }],
    }),
    defineField({
      name: "alignment",
      title: "Preferred alignment",
      description:
        "This is only a suggestion, the image may be aligned differently depending on the context",
      type: "string",
      initialValue: "none",
      options: {
        list: [
          { title: "No preference", value: "none" },
          { title: "Left-aligned", value: "left" },
          { title: "Center-aligned", value: "center" },
          { title: "Right-aligned", value: "right" },
        ],
        layout: "radio",
      },
    }),
  ],
  preview: {
    select: {
      blocks: "blocks",
    },
    prepare(value) {
      const block = (value.blocks || []).find(
        (block: any) => block._type === "block",
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
});
