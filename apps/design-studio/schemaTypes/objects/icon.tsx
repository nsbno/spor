import { defineType } from "sanity";
import { IconInputComponent } from "../../components/IconInputComponent";
import { iconList } from "../utils/icons";

export const Icon = defineType({
  name: "icon",
  title: "Icon",
  type: "string",
  options: {
    list: iconList,
    layout: "dropdown",
  },
  components: { input: IconInputComponent },
});
