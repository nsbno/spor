import { defineField, defineType } from "sanity";

export const richTableCell = defineType({
  name: "richTableCell",
  title: "Cell",
  type: "object",
  fields: [
    defineField({
      name: "content",
      title: "Cell content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Text", value: "normal" }],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
            ],
            annotations: [
              {
                type: "object",
                name: "link",
                title: "Link",
                fields: [
                  {
                    name: "link",
                    type: "link",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alternative text",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { content: "content" },
    prepare: ({ content }) => {
      const block = (content || []).find(
        (item: { _type?: string }) => item._type === "block",
      ) as { children?: Array<{ _type: string; text: string }> } | undefined;
      const text = block?.children
        ?.filter((child) => child._type === "span")
        .map((span) => span.text)
        .join("");
      return {
        title: text || "Cell",
        subtitle: "Cell",
      };
    },
  },
});
