import { MdGridView } from "react-icons/md";
import { ObjectField } from "../schemaTypes";

export const grid: ObjectField = {
  name: "grid",
  title: "Grid",
  type: "object",
  description: "Place content in a grid",
  icon: MdGridView,
  fields: [
    {
      name: "maxNumberOfColumns",
      title: "Max number of columns",
      type: "number",
    },
    {
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
            {
              type: "array",
              name: "content",
              title: "Content",
              of: [
                { type: "block" },
                { type: "imageWithCaption" },
                { type: "buttonLink" },
              ],
            },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare: () => ({
      title: "Grid view",
    }),
  },
};
