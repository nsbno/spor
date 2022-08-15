import { MdImportExport } from "react-icons/md";
import { ObjectField, StringField } from "../schemaTypes";

type Imports = {
  reactImport: StringField;
  reactNativeImport: StringField;
  elmImport: StringField;
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
      initialValue: 'import {   } from "@vygruppen/spor-react";',
    },
    {
      name: "reactNativeImport",
      title: "React Native import string",
      description: "The import string used in a React Native context",
      type: "text",
      initialValue: 'import {  } from "@vygruppen/spor-react-native";',
    },
    {
      name: "elmImport",
      title: "Elm import string",
      description: "The import string used in an Elm context",
      type: "text",
      initialValue: "import Spor. as  exposing ()",
    },
  ],
  preview: {
    prepare: () => ({ title: "Imports panel" }),
  },
};
