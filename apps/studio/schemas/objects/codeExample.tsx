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
    },
    {
      name: "reactCode",
      title: "React Code Example",
      type: "code",
      options: {
        language: "react",
        languageAlternatives: [{ title: "React", value: "react" }],
      },
    },
    {
      name: "reactNativeCode",
      title: "React Native Code Example",
      type: "code",
      options: {
        language: "react",
        languageAlternatives: [{ title: "React Native", value: "react" }],
      },
    },
    {
      name: "elmCode",
      title: "Elm Code Example",
      type: "code",
      options: {
        language: "elm",
        languageAlternatives: [{ title: "Elm", value: "elm" }],
      },
    },
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
