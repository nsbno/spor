import { MdArrowRightAlt } from "react-icons/md";
import {
  ArrayField,
  ObjectField,
  ReferenceField,
  StringField,
  UrlField,
} from "../schemaTypes";

type MenuItem = {
  title: StringField;
  tags: ArrayField;
  internalLink: ReferenceField;
  externalLink: UrlField;
  subItems: ArrayField;
};
export const menuItem: ObjectField<MenuItem> = {
  name: "menuItem",
  title: "Menu Item",
  type: "object",
  icon: MdArrowRightAlt,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tags",
      title: "Tags",
      description: "Tags are used to filter menu items",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "internalLink",
      title: "Internal link",
      description: "Link to other documents",
      type: "reference",
      to: [{ type: "article" }],
      hidden: (form) => form.parent.subItems.length > 0,
      validation: (Rule) =>
        Rule.custom(
          () =>
            Boolean(Rule.valueOfField("externalLink")) ||
            "You must choose either an internal or external link, not both"
        ),
    },
    {
      name: "externalLink",
      title: "External link",
      description: "The URL to an external resource",
      type: "url",
      hidden: (form) => form.parent.subItems.length > 0,
      validation: (Rule) =>
        Rule.custom(
          () =>
            Boolean(Rule.valueOfField("internalLink")) ||
            "You must choose either an internal or external link, not both"
        ),
    },
    {
      name: "subItems",
      title: "Sub items",
      type: "array",
      of: [{ type: "menuItem" }],
      hidden: (form) =>
        Boolean(form.parent.internalLink || form.parent.externalLink),
    },
  ],
};
