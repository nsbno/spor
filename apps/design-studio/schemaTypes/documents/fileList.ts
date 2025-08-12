import { MdPlaylistAdd } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const fileList = defineType({
  name: "fileList",
  title: "File List",
  type: "document",
  icon: MdPlaylistAdd,
  fields: [
    defineField({
      name: "title",
      title: "Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      description: "Optional description of the list of files",
    }),
    defineField({
      name: "deleteFilesOlderThanOneYear",
      title: "Delete files older than one year",
      description:
        "If checked, files older than one year will be removed from the list, and if this was the only reference, the file will be deleted",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "files",
      title: "Files",
      type: "array",
      of: [{ type: "reference", to: [{ type: "enrichedFile" }] }],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
      description: "description",
      files: "files",
    },
  },
});
