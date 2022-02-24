import { BlockField, Document, SlugField } from "../schemaTypes";

export type Article = {
  title: string;
  slug: SlugField;
  content: BlockField;
};
export const article: Document<Article> = {
  name: "article",
  title: "Article",
  type: "document",
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
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "introduction" },
        { type: "divider" },
        { type: "block" },
        { type: "imageWithCaption" },
      ],
    },
  ],
};
