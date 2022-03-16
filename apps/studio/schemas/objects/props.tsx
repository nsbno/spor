import { MdInput } from "react-icons/md";
import { ObjectField } from "../schemaTypes";

type Props = {
  name: string;
  type: string;
  isOptional: boolean;
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
          "string",
          "string[]",
          "number",
          "number[]",
          "boolean",
          "boolean[]",
          "object",
          "object[]",
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "isOptional",
      title: "Is the prop optional?",
      type: "boolean",
      initialValue: "false",
      options: {
        layout: "switch",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subtype",
      title: "Subtype",
      description:
        "Since the type is an object or array, you can specify a subtype",
      type: "array",
      of: [{ type: "props" }],
    },
  ],
};
