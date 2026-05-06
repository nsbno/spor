import { defineField, defineType } from "sanity";

export const richTableRow = defineType({
  name: "richTableRow",
  title: "Row",
  type: "object",
  fields: [
    defineField({
      name: "cells",
      title: "Cells",
      type: "array",
      of: [{ type: "richTableCell" }],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: { cells: "cells" },
    prepare: ({ cells }) => ({
      title: `Row · ${(cells || []).length} cell${(cells || []).length === 1 ? "" : "s"}`,
    }),
  },
});
