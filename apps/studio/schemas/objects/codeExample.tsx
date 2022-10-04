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
      name: "layout",
      title: "Layout",
      type: "string",
      options: {
        list: ["simple", "preview-only", "code-only", "advanced"],
      },
      initialValue: "simple",
    }),
    defineField({
      name: "reactCode",
      title: "React Code Example",
      type: "code",
      options: {
        language: "react",
        languageAlternatives: [{ title: "React", value: "react" }],
      },
    }),
    defineField({
      name: "reactNativeCode",
      title: "React Native Code Example",
      type: "code",
      options: {
        language: "react",
        languageAlternatives: [{ title: "React Native", value: "react" }],
      },
    }),
    defineField({
      name: "elmCode",
      title: "Elm Code Example",
      type: "code",
      options: {
        language: "elm",
        languageAlternatives: [{ title: "Elm", value: "elm" }],
      },
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
