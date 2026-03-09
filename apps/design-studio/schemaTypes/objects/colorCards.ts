import { GiCard2Clubs } from "react-icons/gi";
import { defineField, defineType } from "sanity";

export const colorCards = defineType({
  name: "colorCards",
  title: "Color Cards",
  description: "A card block with a list of color cards",
  type: "object",
  icon: GiCard2Clubs,
  fields: [
    defineField({
      type: "array",
      name: "items",
      of: [{ type: "colorCard" }],
      validation: (Rule) => Rule.min(1).required(),
    }),
  ],
  preview: {
    select: { items: "items" },
    prepare: ({ items }) => ({
      title: `${items.length + " color cards"}`,
    }),
  },
});
