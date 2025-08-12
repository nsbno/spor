import { MdLink } from "react-icons/md";
import { defineField, defineType } from "sanity";
import { mediaAssetSource } from "sanity-plugin-media";

export const link = defineType({
  name: "link",
  type: "object",
  title: "Link",
  icon: MdLink,
  validation: (Rule) =>
    Rule.custom((value, context) => {
      if (value?.type === "internal") {
        return value.reference
          ? true
          : {
              message: "Internal Link cannot be empty",
              paths: [["reference"]],
            };
      }
      if (value?.type === "external") {
        return value.href
          ? true
          : {
              message: "URL field cannot be empty",
              paths: [["href"]],
            };
      }
      if (value?.type === "fileLink") {
        return value.fileLink
          ? true
          : {
              message: "File field cannot be empty",
              paths: [["fileLink"]],
            };
      }
      return true;
    }),
  fields: [
    defineField({
      name: "type",
      type: "string",
      title: "Type",
      options: {
        list: [
          { title: "External", value: "external" },
          { title: "Internal", value: "internal" },
          { title: "File", value: "fileLink" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "href",
      type: "url",
      title: "Url",
      hidden: ({ parent }) => !(parent?.type === "external"),
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "mailto", "tel"],
        }).custom((url, context) => {
          const type = (context.parent as any)?.type;
          if (type === "external" && !url) {
            return "You must specify a URL for external links";
          }
          return true;
        }),
    }),
    defineField({
      name: "anchor",
      type: "string",
      title: "Anchor (#hashtag)",
      description:
        "For when you want to link to a specific section of a page. Do not include the # character.",
      hidden: ({ parent }) => parent?.type !== "internal",
      validation: (Rule) =>
        Rule.custom((value) =>
          value?.startsWith("#") ? "Please omit the # character." : true,
        ),
    }),
    defineField({
      name: "reference",
      type: "reference",
      title: "Internal Link",
      hidden: ({ parent }) => parent?.type !== "internal",
      validation: (Rule) =>
        Rule.custom((reference, context) => {
          const type = (context.parent as any)?.type;
          if (type === "internal" && !reference) {
            return "You must choose a reference to an internal resource";
          }
          return true;
        }),
      to: [{ type: "page" }, { type: "article" }, { type: "enrichedFile" }],
    }),
    defineField({
      name: "fileLink",
      type: "file",
      title: "File Link",
      hidden: ({ parent }) => !(parent?.type === "fileLink"),
      validation: (Rule) =>
        Rule.custom((reference, context) => {
          const type = (context.parent as any)?.type;
          if (type === "file" && !reference) {
            return "You must choose a file to link to";
          }
          return true;
        }),
      options: {
        sources: [mediaAssetSource],
      },
    }),
  ],
});
