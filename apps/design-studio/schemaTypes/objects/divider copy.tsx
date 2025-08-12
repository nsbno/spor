import { MdRemove } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const divider = defineType({
  name: "divider",
  title: "Divider",
  icon: MdRemove,
  type: "object",
  description:
    "Use one of these whenever you want to add a divider to your content.",
  components: {
    preview: () => (
      <div
        style={{
          margin: "1em 0",
          height: "1px",
          width: "100%",
          backgroundColor: "currentcolor",
        }}
      />
    ),
  },
  fields: [
    defineField({
      name: "default",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {},
});
