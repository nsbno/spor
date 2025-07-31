import { MdWeb } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const seoFields = defineType({
  name: "seoFields",
  title: "SEO Fields",
  icon: MdWeb,
  description:
    "SEO (search engine optimization) is used so that search engines such as Google have an easier job of selecting relevant data when your page comes up in a search. This data is not displayed on the page, but in search results.",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "SEO title",
      type: "string",
      validation: (Rule) => [
        Rule.max(59).warning(
          "The SEO title should be less than 59 characters for better SEO performance.",
        ),
        Rule.min(42).warning(
          "The SEO title should be at least 42 characters for better SEO performance.",
        ),
        Rule.required(),
      ],
    }),
    defineField({
      name: "description",
      title: "SEO description",
      type: "text",
      validation: (Rule) => [
        Rule.max(300).warning(
          "The SEO description should be less than 300 characters for better SEO performance.",
        ),
        Rule.min(150).warning(
          "The SEO title should be at least 150 characters for better SEO performance.",
        ),
        Rule.required(),
      ],
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      description:
        "Keywords are used to help search engines understand what your page is about.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      validation: (Rule) =>
        Rule.min(3).warning(
          "Include at least three keywords for better SEO performance.",
        ),
    }),
    defineField({
      name: "image",
      title: "SEO image",
      description: "Image used for SEO and social media purposes",
      type: "image",
      validation: (Rule) => [
        Rule.custom((image, context) => {
          if (
            context.document?._type === "article" ||
            context.document?._type === "destination" ||
            context.document?._type === "journey"
          ) {
            return image ? true : "SEO image is required for this document";
          }
          return true;
        }),
        Rule.warning("Add an image to enhance social media and SEO previews."),
      ],
    }),
    defineField({
      name: "status",
      title: "Exclude page from search engines and internal search",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "priority",
      title: "SEO priority",
      type: "number",
      description:
        "The priority of the page for SEO. The higher the number, the more important the page is for SEO.",
      options: {
        list: [
          { title: "Low", value: 0.25 },
          { title: "Medium", value: 0.5 },
          { title: "High", value: 0.75 },
          { title: "Very High", value: 1 },
        ],
      },
      initialValue: 0.5,
      validation: (Rule) =>
        Rule.min(0)
          .max(1)
          .warning(
            "The SEO priority should be between 0 and 1 for better SEO performance.",
          ),
    }),
  ],
});
