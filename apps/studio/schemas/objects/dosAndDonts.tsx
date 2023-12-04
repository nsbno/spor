import { Card } from "@sanity/ui";
import { MdCheck } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const divider = defineType({
  name: "dosAndDonts",
  title: "Do's and donts",
  type: "object",
  description: "Shows a list of do's and don'ts",
  icon: MdCheck,
  components: {
    preview: () => <Card>Do&apos;s and don&apos;ts</Card>,
  },
  fields: [
    defineField({
      name: "examples",
      type: "array",
      of: [{ type: "object", name: "example" }],
    }),
  ],
  preview: {},
});
