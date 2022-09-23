import { MdBrush } from "react-icons/md";
import { ArrayField, Document, ImageField, StringField } from "../schemaTypes";

export type Illustration = {
  title: StringField;
  tags: ArrayField;
  image: ImageField;
};
export const illustration: Document<Illustration> = {
  name: "illustration",
  title: "Illustration",
  type: "document",
  icon: MdBrush,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tags",
      title: "Tags",
      description:
        "Searchable words for this illustration. The more the better!",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "image",
      title: "Illustration",
      description: "Upload the SVG version of your illustration",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
