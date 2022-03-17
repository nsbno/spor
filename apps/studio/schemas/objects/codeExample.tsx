import { MdCode } from "react-icons/md";
import { ObjectField } from "../schemaTypes";

export const codeExample: ObjectField = {
  icon: MdCode,
  name: "codeExample",
  title: "Code Example",
  type: "object",
  fields: [
    {
      name: "layout",
      title: "Layout",
      type: "string",
      options: {
        list: ["simple", "preview-only", "code-only", "advanced"],
      },
      initialValue: "simple",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "reactCode",
      title: "React Code Example",
      type: "code",
      options: {
        language: "react",
        languageAlternatives: [{ title: "React", value: "react" }],
      },
      validation: (Rule) => Rule.required(),
    },
    // TODO: Add support for other targets, like React Native and Elm
  ],
  preview: {
    select: {
      layout: "layout",
    },
    prepare({ layout }) {
      return {
        title: `Code example (${layout})`,
      };
    },
  },
};
