import { MdOutlineLink } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const buttonLink = defineType({
  name: "buttonLink",
  title: "Button link",
  type: "object",
  icon: MdOutlineLink,
  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "variant",
      title: "Button variant",
      type: "string",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
          { title: "Tertiary", value: "tertiary" },
          { title: "Additional", value: "additional" },
          { title: "Control", value: "control" },
        ],
      },
      initialValue: "primary",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "size",
      title: "Button size",
      type: "string",
      options: {
        list: [
          { title: "Extra small", value: "xs" },
          { title: "Small", value: "sm" },
          { title: "Medium", value: "md" },
          { title: "Large", value: "lg" },
        ],
      },
      initialValue: "md",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "text",
      subtitle: "variant",
    },
  },
});
