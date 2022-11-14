import { MdAddLink, MdArticle } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const article = defineType({
  name: "article",
  title: "Article",
  type: "document",
  icon: MdArticle,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      description:
        "Used whenever an image is required, like listing components, or as a social media image",
      type: "image",
    }),
    defineField({
      name: "resourceLinks",
      title: "Resource links",
      description:
        "Add links to GitHub or Figma here (only GitHub and Figma is supported)",
      type: "array",
      of: [
        {
          type: "object",
          name: "resourceLink",
          title: "Resource link",
          icon: MdAddLink,
          fields: [
            {
              name: "linkType",
              type: "string",
              title: "Link type",
              options: {
                list: [
                  { title: "Figma", value: "figma" },
                  { title: "React", value: "react" },
                  { title: "React Native", value: "react-native" },
                  { title: "Elm", value: "elm" },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "url",
              type: "url",
              title: "URL",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: "introduction",
      title: "Introduction",
      description: "A quick summary of what this page is about",
      type: "array",
      of: [{ type: "block", styles: [{ title: "Text", value: "normal" }] }],
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "content",
      // TODO: Hide this for components once everything is migrated
    }),
    defineField({
      name: "componentSections",
      title: "Sections",
      description: "This is the new way to document components.",
      hidden: (args) => {
        // TODO: This is a hack to hide this field when the article isn't a component
        // The UUID is the ID of the component category in Sanity.
        const COMPONENTS_CATEGORY_ID = "ab982447-e71f-4a1f-85ef-d6d6deacddfe";
        return (
          (args.document?.category as any)?._ref !== COMPONENTS_CATEGORY_ID
        );
      },
      type: "array",
      of: [
        {
          type: "object",
          name: "componentSection",
          title: "Component section",
          preview: {
            select: {
              title: "title",
              customTitle: "customTitle",
            },
            prepare: ({ title, customTitle }) => ({
              title:
                title === "other"
                  ? customTitle
                  : title
                      .split("-")
                      .map((s: string) => s[0]?.toUpperCase() + s.slice(1))
                      .join(" "),
            }),
          },
          fields: [
            {
              name: "title",
              type: "string",
              title: "Title",
              initialValue: "guidelines",
              options: {
                list: [
                  { value: "examples", title: "Examples" },
                  { value: "guidelines", title: "Guidelines" },
                  { value: "code", title: "Code" },
                  { value: "other", title: "Other" },
                ],
              },
            },
            {
              name: "customTitle",
              type: "string",
              title: "Please specify the title you want",
              hidden: ({ parent }) => {
                return parent?.title !== "other";
              },
            },
            {
              name: "content",
              type: "content",
              title: "Content",
              hidden: ({ parent }) => parent?.title === "code",
            },
            {
              name: "components",
              title: "Components",
              type: "array",
              of: [{ type: "reference", to: [{ type: "component" }] }],
              hidden: ({ parent }) => parent.title !== "code",
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category.title",
      media: "mainImage",
    },
  },
});
