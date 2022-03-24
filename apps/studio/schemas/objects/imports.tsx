import { MdImportExport } from "react-icons/md";
import { ObjectField, StringField } from "../schemaTypes";

type Imports = {
  reactImport: StringField;
};
export const imports: ObjectField<Imports> = {
  name: "imports",
  title: "Imports panel",
  type: "object",
  icon: MdImportExport,
  fields: [
    {
      name: "reactImport",
      title: "React import string",
      description: "The import string used in a React context",
      type: "text",
      initialValue: 'import {  } from "@vygruppen/spor-react";',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare: () => ({ title: "Imports panel" }),
  },
};
