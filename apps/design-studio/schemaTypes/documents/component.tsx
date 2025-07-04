import { MdBackupTable } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const component = defineType({
  name: "component",
  title: "Component",
  type: "document",
  icon: MdBackupTable,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "props",
      description: "These are the props of the component",
      title: "Props",
      type: "array",
      of: [{ type: "props" }],
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "content",
    }),
  ],
});
