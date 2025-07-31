import { MdInsertDriveFile } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const enrichedFile = defineType({
  name: "enrichedFile",
  title: "Enriched file",
  icon: MdInsertDriveFile,
  description: "A file with some optional extra data",
  type: "document",
  fields: [
    defineField({
      name: "file",
      title: "File",
      type: "file",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Name",
      description: "Name of the file that will be displayed on the page",
      type: "string",
    }),
    defineField({
      name: "date",
      title: "Publication date",
      description: "The date the file was published",
      type: "date",
    }),
  ],
});
