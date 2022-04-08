import { MdSettings } from "react-icons/md";
import { ArrayField, Document, ImageField, StringField } from "../schemaTypes";

type SiteSettings = {
  title: StringField;
  description: StringField;
  keywords: ArrayField;
  socialImage: ImageField;
};
export const siteSettings: Document<SiteSettings> = {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: MdSettings,
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
    },
    {
      name: "description",
      title: "Site Description",
      type: "text",
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "socialImage",
      title: "Social image",
      type: "image",
    },
  ],
};
