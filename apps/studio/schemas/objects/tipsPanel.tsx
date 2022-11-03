import { MdStar } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const tipsPanel = defineType({
  name: "tipsPanel",
  title: "Tips panel",
  type: "object",
  icon: MdStar,
  components: {
    preview: (props: { value?: { title: string } }) => (
      <div
        style={{
          backgroundColor: "var(--brand-secondary)",
          padding: 24,
          borderRadius: 18,
        }}
      >
        <div style={{ gap: 6, alignItems: "end" }}>
          <MdStar />
          <h2>{props.value?.title}</h2>
        </div>
      </div>
    ),
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Tips og Triks",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      description: "Keep your tips short and to the point",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare: (data) => ({ title: data.title }),
  },
});
