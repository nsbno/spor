import { FiAlignCenter } from "react-icons/fi";
import { defineField, defineType } from "sanity";

export const introduction = defineType({
  name: "introduction",
  title: "[Deprecated] Introduction",
  description: 'Use the "Introduction" field instead',
  type: "object",
  icon: FiAlignCenter,
  fields: [
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
