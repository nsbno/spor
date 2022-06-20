import { MdArticle } from "react-icons/md";
import {
  ArrayField,
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
  resourceLinks: ArrayField;
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
      name: "resourceLinks",
      title: "Resource links",
      description:
        "Add links to GitHub or Figma here (only GitHub and Figma is supported)",
      type: "array",
      of: [{ type: "url" }],
      validation: (Rule) =>
        Rule.custom((items) => {
          console.log(items);
          if (!items) {
            return true;
          }
          if (
            items.every(
              (text: string) =>
                text.includes("figma.com") || text.includes("github.com")
            )
          ) {
            return true;
          }
          return "Only GitHub and Figma links are supported";
        }),
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
