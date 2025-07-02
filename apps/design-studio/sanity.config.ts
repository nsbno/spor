import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import VyLogo from "./components/VyLogo";
import { schemaTypes } from "./schemaTypes";

const projectId = "r4xpzxak";

export default defineConfig([
  {
    name: "default",
    title: "Test",

    projectId: projectId,
    dataset: "test",
    basePath: "/test",

    plugins: [structureTool(), visionTool()],

    studio: {
      components: {
        logo: VyLogo,
      },
    },

    schema: {
      types: schemaTypes,
    },
  },
  {
    name: "production",
    title: "Production",

    projectId: projectId,
    dataset: "production",
    basePath: "/production",

    plugins: [structureTool(), visionTool()],

    studio: {
      components: {
        logo: VyLogo,
      },
    },

    schema: {
      types: schemaTypes,
    },
  },
]);
