import { MdOutlineLink } from "react-icons/md";
import { ObjectField } from "../schemaTypes";

type ButtonLink = {
  text: string;
  url: string;
  variant: "primary" | "secondary" | "tertiary" | "additional" | "control";
  size: "small" | "medium" | "large";
};
export const buttonLink: ObjectField<ButtonLink> = {
  name: "buttonLink",
  title: "Button link",
  type: "object",
  icon: MdOutlineLink,
  fields: [
    {
      name: "text",
      title: "Text",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "url",
      title: "URL",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "variant",
      title: "Button variant",
      type: "string",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
          { title: "Tertiary", value: "tertiary" },
          { title: "Additional", value: "additional" },
          { title: "Control", value: "control" },
        ],
      },
      initialValue: "primary",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "size",
      title: "Button size",
      type: "string",
      options: {
        list: [
          { title: "Extra small", value: "xs" },
          { title: "Small", value: "sm" },
          { title: "Medium", value: "md" },
          { title: "Large", value: "lg" },
        ],
      },
      initialValue: "md",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "text",
      subtitle: "variant",
    },
  },
};
