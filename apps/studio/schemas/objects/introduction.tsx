import { FiAlignCenter } from "react-icons/fi";
import { BlockField, ObjectField } from "../schemaTypes";

type Introduction = {
  content: BlockField;
};
export const introduction: ObjectField<Introduction> = {
  name: "introduction",
  title: "Introduction",
  type: "object",
  icon: FiAlignCenter,
  fields: [
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
