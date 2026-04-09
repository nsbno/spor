import { BsCodeSquare } from "react-icons/bs";
import { defineField, defineType } from "sanity";

export const colorCard = defineType({
  icon: BsCodeSquare,
  name: "colorCard",
  title: "Color Card",
  description:
    "Shows a preview of a color token, with poassibility to copy the color value.",
  type: "object",
  fields: [
    defineField({
      name: "variableName",
      title: "Spor color variable",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "valueName",
      title: "Color value",
      type: "string",
    }),
    defineField({
      name: "hexValue",
      title: "Hex value",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});
