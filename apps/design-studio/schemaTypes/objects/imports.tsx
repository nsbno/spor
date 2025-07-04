import { MdImportExport } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const imports = defineType({
  name: "imports",
  title: "Imports panel",
  type: "object",
  icon: MdImportExport,
  fields: [
    defineField({
      name: "reactImport",
      title: "React import string",
      description: "The import string used in a React context",
      type: "text",
      initialValue: 'import {   } from "@vygruppen/spor-react";',
    }),
  ],
  preview: {
    prepare: () => ({ title: "Imports panel" }),
  },
});
