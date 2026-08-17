import { MdAutoStories } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const landingPage = defineType({
  name: "landingPage",
  title: "Landing Page",
  type: "document",
  icon: MdAutoStories,
  groups: [
    {
      name: "pageContent",
      title: "Content",
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    defineField({
      name: "section",
      title: "Section",
      type: "reference",
      to: [{ type: "section" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "introduction",
      description:
        "Useful in smaller contexts like breadcrumbs. Required if the title is longer than 15 characters.",
      title: "Introduction",
      type: "content",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "extendedImage",
    }),
    defineField({
      name: "promotedLinks",
      title: "Promotional links",
      description:
        "Optional links to be displayed as buttons below the introduction.",
      type: "array",
      of: [{ type: "linkButton" }],
    }),
    defineField({
      name: "cardLinks",
      title: "Card links",
      type: "array",
      of: [{ type: "imageCard" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      sectionTitle: "section.title",
    },
    prepare({ title, sectionTitle }) {
      return {
        title: sectionTitle ? `${sectionTitle} - ${title}` : title,
      };
    },
  },
});
