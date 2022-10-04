import { MdSettings } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: MdSettings,
  readOnly: true,
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
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
