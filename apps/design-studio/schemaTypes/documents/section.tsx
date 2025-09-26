import { MdOutlineFolderCopy } from "react-icons/md";
import { defineField, defineType } from "sanity";
import { IconInputComponent } from "../../components/IconInputComponent";

export const section = defineType({
  name: "section",
  title: "Section",
  type: "document",
  description: "A section represent the top level choice in the main menu",
  icon: MdOutlineFolderCopy,
  fields: [
    defineField({
      name: "default",
      title: "Default",
      description:
        "Is this the default section? If so, it will be selected by default when the user visits the site.",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "title",
      title: "Title",
      description:
        "The title of the section will be displayed in the main menu",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "icon",
      title: "Icon",
      description:
        "The icon will be displayed beside the label of the main menu",
      type: "string",
      components: { input: IconInputComponent },
    }),
    defineField({
      name: "reference",
      type: "reference",
      title: "Internal Link to a page",
      validation: (Rule) => Rule.required().error("You must select a page"),
      to: [{ type: "page" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
