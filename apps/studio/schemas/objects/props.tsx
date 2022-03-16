import { MdInput } from "react-icons/md";
import { ObjectField } from "../schemaTypes";

type Props = {
  name: string;
  type: string;
  typeOther?: string;
  isRequired: boolean;
  subtype?: Props;
  description?: string;
};
export const props: ObjectField<Props> = {
  name: "props",
  title: "Props",
  type: "object",
  icon: MdInput,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      title: "Type of prop",
      type: "string",
      options: {
        list: [
          { title: "string", value: "string" },
          { title: "string[]", value: "string[]" },
          { title: "number", value: "number" },
          { title: "number[]", value: "number[]" },
          { title: "boolean", value: "boolean" },
          { title: "boolean[]", value: "boolean[]" },
          { title: "object", value: "object" },
          { title: "object[]", value: "object[]" },
          { title: "Function", value: "function" },
          { title: "React.ReactNode", value: "React.ReactNode" },
          { title: "Other", value: "other" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "typeOther",
      title: "Other type",
      description:
        'A typical use case is a subset of strings - like "primary" | "secondary", or a function - like (id: string) => void',
      type: "string",
      hidden: ({ parent }) => parent?.type !== "other",
    },
    {
      name: "isRequired",
      title: "Is the prop required?",
      type: "boolean",
      initialValue: false,
      options: {
        layout: "switch",
      },
    },
    {
      name: "subtype",
      title: "Subtype",
      description:
        "Since the type is an object or array of objects, you can specify a subtype",
      type: "array",
      hidden: ({ parent }) => !["object", "object[]"].includes(parent?.type),
      of: [{ type: "props" }],
    },
    {
      name: "description",
      title: "Description",
      description:
        "Avoid reiterating on the obvious - just add extra context if needed",
      type: "text",
    },
  ],
};
