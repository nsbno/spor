import { defineType } from "sanity";

export const extendedImage = defineType({
  name: "extendedImage",
  title: "Extended Image",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "isIllustration",
      title: "Illustration (No Alt Text Needed)",
      type: "boolean",
      description:
        "Check this if the image is an illustration, or decorative image, and does not need alt text.",
    },
    {
      name: "altText",
      title: "Alt text",
      type: "string",
      hidden: ({ parent }: { parent?: { isIllustration?: boolean } }) =>
        parent?.isIllustration === true,
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const isIllustration = (
            context?.parent as { isIllustration?: boolean }
          )?.isIllustration;
          if (!isIllustration && !value) {
            return "Alt text is required unless the image is marked as an illustration.";
          }
          return true;
        }),
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
    },
    {
      name: "credits",
      title: "Credits / attribution",
      type: "string",
      description:
        "If required, add the name of the photographer or other attribution here",
    },
  ],
});
