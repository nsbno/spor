import { codeInput } from "@sanity/code-input";
import { createConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

export default createConfig({
  name: "default",
  title: "spor",

  projectId: "tbpd14t4",
  dataset: "production",

  plugins: [deskTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
});
