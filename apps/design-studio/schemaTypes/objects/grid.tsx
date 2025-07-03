import { MdGridView } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const grid = defineType({
  name: "grid",
  title: "Grid",
  type: "object",
  description: "Place content in a grid",
  icon: MdGridView,
  fields: [
    defineField({
      name: "maxNumberOfColumns",
      title: "Max number of columns",
      type: "number",
    }),
    defineField({
      name: "content",
      title: "Content",
      description: "Each piece of content will be placed in its own grid cell",
      type: "array",
      of: [
        {
          name: "gridCell",
          title: "Grid cell",
          type: "object",
          fields: [
            defineField({
              type: "string",
              name: "verticalAlignment",
              title: "Vertical alignment",
              description:
                "How should the content be aligned vertically within the grid cell?",
              options: {
                list: [
                  { title: "Top", value: "top" },
                  { title: "Center", value: "center" },
                  { title: "Bottom", value: "bottom" },
                ],
              },
              initialValue: "top",
            }),
            defineField({
              type: "content",
              name: "content",
              title: "Content",
            }),
          ],
          preview: {
            select: {
              blocks: "content",
            },
            prepare(value) {
              const block = (value.blocks || []).find(
                (block: any) => block._type === "block",
              );
              return {
                title: block
                  ? block.children
                      .filter((child: any) => child._type === "span")
                      .map((span: any) => span.text)
                      .join("")
                  : "No title",
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Grid view",
    }),
  },
});
