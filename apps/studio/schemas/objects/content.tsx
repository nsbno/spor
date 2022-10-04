import { defineType } from "sanity";
import { SporBlockEditor } from "../../components/SporBlockEditor";

export const content = defineType({
  name: "content",
  title: "Content",
  type: "array",
  components: { input: SporBlockEditor },
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
    { type: "imports" },
    { type: "imageWithCaption" },
    { type: "codeExample" },
    { type: "staticCodeBlock" },
    { type: "reference", to: [{ type: "component" }] },
    { type: "grid" },
    { type: "tipsPanel" },
  ],
});
