import { MdOndemandVideo } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const videoBlock = defineType({
  name: "videoBlock",
  title: "Video block",
  icon: MdOndemandVideo,
  type: "object",
  fields: [
    defineField({
      name: "video",
      title: "Video",
      type: "mux.video",
    }),
    defineField({
      name: "caption",
      title: "Caption",
      description: "Optional caption for the video",
      type: "string",
    }),
  ],
  preview: {
    select: {
      caption: "caption",
    },
    prepare({ caption }) {
      return {
        title: caption || "Video block",
      };
    },
  },
});
