import * as React from "react";
import { MdStar } from "react-icons/md";
import { BlockField, ObjectField, StringField } from "../schemaTypes";

type TipsPanel = {
  title: StringField;
  content: BlockField;
};
export const tipsPanel: ObjectField<TipsPanel> = {
  name: "tipsPanel",
  title: "Tips panel",
  type: "object",
  icon: MdStar,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Tips og Triks",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      description: "Keep your tips short and to the point",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: (data) => ({ title: data.title }),
    component: (props: { value: { title: string } }) => {
      return (
        <div
          style={{
            backgroundColor: "var(--brand-secondary)",
            padding: 24,
            borderRadius: 18,
          }}
        >
          <div style={{ gap: 6, alignItems: "end" }}>
            <MdStar />
            <h2>{props.value.title}</h2>
          </div>
        </div>
      );
    },
  },
};
