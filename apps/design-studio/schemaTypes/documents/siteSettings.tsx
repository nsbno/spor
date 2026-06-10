import { MdSettings } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: MdSettings,
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
    }),
    defineField({
      name: "topMenu",
      title: "Top menu",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "section" }],
        },
      ],
      description: "Items to be displayed in the top menu",
    }),
    defineField({
      name: "footerItems",
      title: "Footer Items",
      type: "array",
      of: [
        {
          name: "footerItem",
          title: "Footer Item",
          type: "footerItem",
        },
      ],
      description: "Items to be displayed in the footer",
      deprecated: {
        reason: "Footer items must now be updated in the codebase.",
      },
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "socialImage",
      title: "Social image",
      type: "image",
    }),
  ],
});
