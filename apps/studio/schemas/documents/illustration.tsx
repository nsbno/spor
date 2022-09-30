import { MdBrush } from "react-icons/md";
import {
  ArrayField,
  Document,
  ImageField,
  StringField,
  TextField,
} from "../schemaTypes";

export type Illustration = {
  title: StringField;
  tags: ArrayField;
  image: ImageField;
  descriptionNb: TextField;
  descriptionSv: TextField;
  descriptionEn: TextField;
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
      name: "image",
      title: "Illustration",
      description: "Upload the SVG version of your illustration",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tags",
      title: "Tags",
      description:
        "Searchable words for this illustration (in Norwegian). The more the better!",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "descriptionNb",
      title: "Description (Norwegian Bokmål)",
      description:
        "Describe the illustration in Norwegian Bokmål, for screen readers",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "descriptionSv",
      title: "Description (Swedish)",
      description: "Describe the illustration in Swedish, for screen readers",
      type: "text",
    },
    {
      name: "descriptionEn",
      title: "Description (English)",
      description: "Describe the illustration in English, for screen readers",
      type: "text",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
