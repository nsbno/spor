import { MdBackupTable } from "react-icons/md";
import {
  ArrayField,
  BlockField,
  Document,
  SlugField,
  StringField,
} from "../schemaTypes";

export type Component = {
  name: StringField;
  slug: SlugField;
  props: ArrayField;
  content: BlockField;
};
export const component: Document<Component> = {
  name: "component",
  title: "Component",
  type: "document",
  icon: MdBackupTable,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "props",
      description: "These are the props of the component",
      title: "Props",
      type: "array",
      of: [{ type: "props" }],
    },
    {
      name: "content",
      title: "Content",
      type: "content",
    },
  ],
};
