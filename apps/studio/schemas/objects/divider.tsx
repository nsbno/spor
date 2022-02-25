import { MdHorizontalRule } from "react-icons/md";
import { ObjectField } from "../schemaTypes";

export const divider: ObjectField = {
  name: "divider",
  title: "Divider",
  type: "object",
  description:
    "Use one of these whenever you want to add a divider to your content.",
  icon: MdHorizontalRule,
  fields: [
    {
      name: "default",
      type: "boolean",
      hidden: true,
      initialValue: true,
    },
  ],
};
