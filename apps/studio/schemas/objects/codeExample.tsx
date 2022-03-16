import { ObjectField } from "../schemaTypes";

export const codeExample: ObjectField = {
  name: "codeExample",
  title: "Code Example",
  type: "object",
  fields: [
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
};
