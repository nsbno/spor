import { MdArrowRightAlt } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const menuItem = defineType({
  name: "menuItem",
  title: "Menu Item",
  type: "object",
  icon: MdArrowRightAlt,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      description: "Tags are used to filter menu items",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "internalLink",
      title: "Internal link",
      description: "Link to other documents",
      type: "reference",
      to: [{ type: "article" }],
      hidden: (form) => form.parent.subItems?.length > 0,
      validation: (Rule) =>
        Rule.custom(
          () =>
            Boolean(Rule.valueOfField("externalLink")) ||
            "You must choose either an internal or external link, not both"
        ),
    }),
    defineField({
      name: "externalLink",
      title: "External link",
      description: "The URL to an external resource",
      type: "url",
      hidden: (form) => form.parent.subItems?.length > 0,
      validation: (Rule) =>
        Rule.custom(
          () =>
            Boolean(Rule.valueOfField("internalLink")) ||
            "You must choose either an internal or external link, not both"
        ),
    }),
    defineField({
      name: "subItems",
      title: "Sub items",
      type: "array",
      of: [{ type: "menuItem" }],
      hidden: (form) =>
        Boolean(form.parent.internalLink || form.parent.externalLink),
    }),
  ],
});
