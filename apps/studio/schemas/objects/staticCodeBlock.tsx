import { BsCodeSquare } from "react-icons/bs";
import { ObjectField } from "../schemaTypes";

export const staticCodeBlock: ObjectField = {
  icon: BsCodeSquare,
  name: "staticCodeBlock",
  title: "Static Code Block",
  description:
    "Great for simple code snippets that doesn't vary based on the language selected",
  type: "object",
  fields: [
    {
      name: "code",
      title: "Code",
      type: "code",
      options: {
        languageAlternatives: [
          { title: "TypeScript / React", value: "tsx" },
          { title: "Elm", value: "elm" },
          { title: "Bash", value: "bash" },
        ],
      },
    },
    {
      name: "caption",
      title: "Caption",
      description: "A description or summary of the code",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "caption",
    },
  },
};
