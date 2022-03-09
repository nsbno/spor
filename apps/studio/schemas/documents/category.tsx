import { MdCategory } from "react-icons/md";
import { Document, SlugField, StringField } from "../schemaTypes";

export type Category = {
  title: StringField;
  slug: SlugField;
};
export const category: Document<Category> = {
  name: "category",
  title: "Category",
  type: "document",
  icon: MdCategory,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
  ],
};
