import { GiCard2Clubs } from "react-icons/gi";
import { defineField, defineType } from "sanity";

export const cards = defineType({
  name: "cards",
  title: "Cards",
  description: "A card block with a list of cards",
  type: "object",
  icon: GiCard2Clubs,
  fields: [
    defineField({
      name: "titleOfBlock",
      title: "Heading of block",
      description: "Optional heading displayed over the cards",
      type: "string",
    }),
    defineField({
      name: "headingIcon",
      title: "Title icon",
      description: "Optional icon to display with the heading",
      type: "icon",
    }),
    defineField({
      name: "backgroundColor",
      title: "Background color",
      description: "Background color for the block",
      initialValue: "white",
      type: "string",
      options: {
        list: [
          { value: "white", title: "White" },
          { value: "green", title: "Brand Color" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    }),
    defineField({
      type: "array",
      name: "items",
      of: [{ type: "card" }],
      validation: (Rule) => Rule.min(1).required(),
    }),
  ],
  preview: {
    select: { title: "titleOfBlock", items: "items" },
    prepare: ({ title, items }) => ({
      title: `${
        title?.length
          ? "Cards : " + title
          : "Cards : " +
            items?.length +
            " card" +
            (items.length === 1 ? "" : "s")
      }`,
    }),
  },
});
