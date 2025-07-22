import { GiCard2Clubs } from "react-icons/gi";
import { defineField, defineType } from "sanity";

export const card = defineType({
  name: "card",
  title: "Card",
  type: "object",
  icon: GiCard2Clubs,
  fields: [
    defineField({
      name: "title",
      title: "Card heading",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Body text",
      type: "string",
    }),
    defineField({
      name: "link",
      title: "Linked content",
      type: "link",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "icon",
      description: "Optional icon or illustration to display in the card",
      validation: (Rule) =>
        Rule.custom((field, context: any) => {
          if (field && context.parent.illustration) {
            return "Both icon and illustration can't be selected";
          }
          return true;
        }),
    }),
    defineField({
      name: "illustration",
      type: "image",
      title: "Illustration",
      description: "Optional icon or illustration to display in the card",
      validation: (Rule) =>
        Rule.custom((field, context: any) => {
          if (field && context.parent.icon) {
            return "Both icon and illustration can't be selected";
          }
          return true;
        }),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "illustration",
    },
    prepare: ({ title, media }) => ({
      title: `${"Card " + (title || "")}`,
      media: media,
    }),
  },
});
