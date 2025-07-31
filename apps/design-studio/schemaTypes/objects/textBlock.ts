import { MdShortText } from "react-icons/md";
import { defineField, defineType } from "sanity";
import { portableTextToText } from "../utils/portableTextToText";

export const textBlock = defineType({
  name: "textBlock",
  title: "Text block",
  icon: MdShortText,
  description: "A simple block of text",
  type: "object",
  fields: [
    defineField({
      name: "content",
      title: "Body text",
      type: "array",
      of: [
        { type: "linkButton" },
        {
          type: "block",
          marks: {
            annotations: [
              {
                type: "object",
                title: "Linkable content",
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
      ],
    }),
  ],
  preview: {
    select: {
      content: "content",
    },
    prepare: ({ content }) => ({
      title: portableTextToText(content),
      subtitle: "Text block",
    }),
  },
});
