import { MdTableChart } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const richTable = defineType({
  name: "richTable",
  title: "Rich table",
  type: "object",
  icon: MdTableChart,
  description:
    "A table whose cells support rich text (bold, italic, links, lists) and images.",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "hasHeaderRow",
      title: "First row is a header",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "hasHeaderColumn",
      title: "First column is a header",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "rows",
      title: "Rows",
      type: "array",
      of: [{ type: "richTableRow" }],
      validation: (Rule) => Rule.min(1).error("A table needs at least one row"),
    }),
  ],
  preview: {
    select: {
      title: "title",
      rows: "rows",
    },
    prepare: ({ title, rows }) => {
      const rowCount = (rows || []).length;
      const colCount = (rows?.[0]?.cells || []).length;
      return {
        title: title || "Rich table",
        subtitle: `${rowCount} × ${colCount}`,
      };
    },
  },
});
