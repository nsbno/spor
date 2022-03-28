import { MdArticle } from "react-icons/md";
import {
  BlockField,
  Document,
  Field,
  ImageField,
  SlugField,
  StringField,
} from "../schemaTypes";

export type Article = {
  title: StringField;
  category: Field;
  slug: SlugField;
  mainImage: ImageField;
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
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Main image",
      description:
        "Used whenever an image is required, like listing components, or as a social media image",
      type: "image",
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
      media: "mainImage",
    },
  },
};
