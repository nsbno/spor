import { MdCode } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const codeExample = defineType({
  icon: MdCode,
  name: "codeExample",
  title: "Interactive Code Block",
  description: "Great for showing example code with a live preview",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Short title that is used to describe the code example.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      description: "Description that is used to describe the code example.",
    }),
    defineField({
      name: "layout",
      title: "Layout",
      type: "string",
      options: {
        list: ["simple", "preview-only", "code-only", "advanced"],
      },
      initialValue: "simple",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "reactCode",
      title: "React Code Example",
      type: "code",
      options: {
        language: "react",
        languageAlternatives: [{ title: "React", value: "react" }],
      },
      validation: (Rule) => Rule.required(),
    }),
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
});
