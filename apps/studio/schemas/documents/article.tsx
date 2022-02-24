import { BlockField, Document } from "../schemaTypes";

export type Article = {
  title: string;
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
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "introduction" }, { type: "block" }],
    },
  ],
};
