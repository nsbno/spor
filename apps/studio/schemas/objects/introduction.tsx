import { FiAlignCenter } from "react-icons/fi";
import { defineField, defineType } from "sanity";

export const introduction = defineType({
  name: "introduction",
  title: "Introduction",
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
