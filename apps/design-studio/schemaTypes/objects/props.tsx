import { MdInput } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const props = defineType({
  name: "props",
  title: "Props",
  type: "object",
  icon: MdInput,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
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
    }),
    defineField({
      name: "typeOther",
      title: "Other type",
      description:
        'A typical use case is a subset of strings - like "primary" | "secondary", or a function - like (id: string) => void',
      type: "string",
      hidden: ({ parent }) => parent?.type !== "other",
    }),
    defineField({
      name: "isRequired",
      title: "Is the prop required?",
      type: "boolean",
      initialValue: false,
      options: {
        layout: "switch",
      },
    }),
    defineField({
      name: "subtype",
      title: "Subtype",
      description:
        "Since the type is an object or array of objects, you can specify a subtype",
      type: "array",
      hidden: ({ parent }) => !["object", "object[]"].includes(parent?.type),
      of: [{ type: "props" }],
    }),
    defineField({
      name: "description",
      title: "Description",
      description:
        "Avoid reiterating on the obvious - just add extra context if needed",
      type: "text",
    }),
  ],
});
