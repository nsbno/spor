import { MdArticle } from "react-icons/md";
import {
  BlockField,
  Document,
  Field,
  SlugField,
  StringField,
} from "../schemaTypes";

export type Article = {
  title: StringField;
  category: Field;
  slug: SlugField;
  content: BlockField;
};
export const article: Document<Article> = {
  name: "article",
  title: "Article",
  type: "document",
  icon: MdArticle,
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
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "content",
      title: "Content",
      type: "content",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category.title",
    },
  },
};
