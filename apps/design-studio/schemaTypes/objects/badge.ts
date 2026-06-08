import { CiShoppingTag } from "react-icons/ci";
import { defineField, defineType } from "sanity";

export const badge = defineType({
  name: "badge",
  title: "Badge",
  type: "object",
  icon: CiShoppingTag,
  fields: [
    defineField({
      name: "badgeType",
      title: "Type",
      type: "string",
      description: "The type of badge determines the color and style.",
      initialValue: "updated",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Updated", value: "updated" },
          { title: "Beta", value: "beta" },
          { title: "Deprecated", value: "deprecated" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      description:
        "Optional description to provide more context about why the badge is added to the article.",
    }),
  ],
  preview: {
    select: {
      badgeType: "badgeType",
    },
    prepare(value) {
      const badgeType = value.badgeType || "updated";
      const titleMap: Record<string, string> = {
        new: "New",
        updated: "Updated",
        beta: "Beta",
        deprecated: "Deprecated",
      };
      return {
        title: titleMap[badgeType] || badgeType,
      };
    },
  },
});
