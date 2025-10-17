import { codeInput } from "@sanity/code-input";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
import { VyLogoProd } from "./components/VyLogoProd";
import { VyLogoTest } from "./components/VyLogoTest";
import { schemaTypes } from "./schemaTypes";
import { siteMenuStructure } from "./structure.js";

const projectId = "r4xpzxak";
export const API_VERSION = "2024-07-25";

const locationsResolver = {
  document: {
    actions: (prev: any[], { schemaType }: any) => {
      if (schemaType === "page") {
        return prev.concat((documentId: string) => [
          {
            label: "View on site",
            intent: "preview",
            params: { slug: `identitet/${documentId}` }, // Dynamic route param
          },
        ]);
      }
      return prev;
    },
  },
};

export default defineConfig([
  {
    name: "default",
    title: "Test",

    projectId: projectId,
    dataset: "test",
    basePath: "/test",

    plugins: [
      structureTool(siteMenuStructure),
      presentationTool({
        ...locationsResolver,
        previewUrl: "http://localhost:3008/identitet/", // Your local dev site URL
      }),
      visionTool(),
      codeInput(),
    ],

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
