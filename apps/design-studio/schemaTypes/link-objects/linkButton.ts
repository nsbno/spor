import { MdSmartButton } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const linkButton = defineType({
  name: "linkButton",
  title: "Link button",
  type: "object",
  icon: MdSmartButton,
  fields: [
    defineField({
      name: "text",
      title: "Text",
      description: "Text shown on the button",
      type: "string",
      validation: (Rule) =>
        Rule.custom((text, context) => {
          return !text && context.document?._type !== "travelinspiration"
            ? "Text is required"
            : true;
        }),
    }),
    defineField({
      name: "link",
      title: "Linked content",
      type: "link",
    }),
    defineField({
      name: "icon",
      type: "icon",
      description: "An optional custom icon for the button",
    }),
  ],
  preview: {
    select: {
      title: "text",
    },
  },
});
