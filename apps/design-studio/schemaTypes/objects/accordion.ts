import { TfiLayoutAccordionMerged } from "react-icons/tfi";
import { defineField, defineType } from "sanity";

export const accordion = defineType({
  name: "accordion",
  title: "Accordion",
  type: "object",
  icon: TfiLayoutAccordionMerged,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Optional title shown above the accordion list",
      type: "string",
    }),
    defineField({
      name: "titleHeadingLevel",
      title: "Title heading level",
      type: "string",
      description: "The semantic heading level of the title",
      initialValue: "h2",
      options: {
        list: [
          { title: "H2", value: "h2" },
          { title: "H3", value: "h3" },
          { title: "H4", value: "h4" },
          { title: "H5", value: "h5" },
        ],
      },
      validation: (Rule) =>
        Rule.custom((value, { parent }) => {
          if (!(parent as any).title && !(parent as any).title?.length) {
            return true;
          }
          return Boolean(value) || "Title heading level is required";
        }),
    }),
    defineField({
      name: "accordionItemHeadingLevel",
      title: "Accordion item heading level",
      description: "Should always be one step lower than the heading level",
      type: "string",
      initialValue: "h3",
      options: {
        list: [
          { title: "H3", value: "h3" },
          { title: "H4", value: "h4" },
          { title: "H5", value: "h5" },
          { title: "H6", value: "h6" },
        ],
      },
      validation: (Rule) =>
        Rule.required().custom((value, { parent }) => {
          const titleHeadingLevel = Number(
            (parent as any)?.titleHeadingLevel?.substring(1) ?? 0,
          );
          if (!titleHeadingLevel) {
            return true;
          }
          const accordionItemHeadingLevel = Number(value?.substring(1) ?? 3);
          if (accordionItemHeadingLevel !== titleHeadingLevel + 1) {
            return "Accordion item heading level must be one step lower than the title heading level";
          }
          return true;
        }),
    }),
    defineField({
      name: "headingIcon",
      title: "Heading icon",
      description: "Optional icon to display with the heading",
      type: "icon",
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "Optional description shown above the accordion list",
      type: "text",
    }),
    defineField({
      name: "items",
      title: "Accordion items",
      type: "array",
      of: [{ type: "accordionItem" }],
      validation: (Rule) => Rule.min(1).required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      items: "items",
    },
    prepare: ({ title, items }) => ({
      title: `${
        title?.length
          ? "Accordion: " + title
          : "Accordion: " +
            items?.length +
            " item" +
            (items.length == 1 ? "" : "s")
      }`,
    }),
  },
});
