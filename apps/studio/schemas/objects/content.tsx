import { SporBlockEditor } from "../../components/SporBlockEditor";
import { ArrayField } from "../schemaTypes";

export const content: ArrayField = {
  name: "content",
  title: "Content",
  type: "array",
  inputComponent: SporBlockEditor,
  of: [
    {
      type: "block",
      styles: [
        { title: "Text", value: "normal" },
        { title: "Large heading", value: "h2" },
        { title: "Medium heading", value: "h3" },
        { title: "Small heading", value: "h4" },
        { title: "Tiny heading", value: "h5" },
        { title: "Quote", value: "blockquote" },
      ],
    },
    { type: "buttonLink" },
    { type: "divider" },
    { type: "introduction" },
    { type: "imageWithCaption" },
    { type: "grid" },
    { type: "codeExample" },
    { type: "reference", to: [{ type: "component" }] },
    { type: "componentsSection" },
  ],
};
