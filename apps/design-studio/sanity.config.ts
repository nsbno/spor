import { codeInput } from "@sanity/code-input";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { VyLogoProd } from "./components/VyLogoProd";
import { VyLogoTest } from "./components/VyLogoTest";
import { schemaTypes } from "./schemaTypes";
import { siteMenuStructure } from "./structure.js";

const projectId = "r4xpzxak";

export default defineConfig([
  {
    name: "default",
    title: "Test",

    projectId: projectId,
    dataset: "test",
    basePath: "/test",

    plugins: [structureTool(siteMenuStructure), visionTool(), codeInput()],

    studio: {
      components: {
        logo: VyLogoTest,
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

    plugins: [structureTool(siteMenuStructure), visionTool(), codeInput()],

    studio: {
      components: {
        logo: VyLogoProd,
      },
    },

    schema: {
      types: schemaTypes,
    },
  },
]);
