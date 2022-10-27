import * as React from "react";
import { MdHorizontalRule } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const divider = defineType({
  name: "divider",
  title: "Divider",
  type: "object",
  description:
    "Use one of these whenever you want to add a divider to your content.",
  icon: MdHorizontalRule,
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
