import { MdArticle } from "react-icons/md";
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
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Text", value: "normal" },
            { title: "Large heading", value: "h2" },
            { title: "Medium heading", value: "h3" },
            { title: "Small heading", value: "h4" },
            { title: "Tiny heading", value: "h5" },
            { title: "Quote", value: "blockquote" },
          ],
        },
        { type: "divider" },
        { type: "introduction" },
        { type: "imageWithCaption" },
        { type: "grid" },
      ],
    },
  ],
};
