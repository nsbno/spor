import { codeInput } from "@sanity/code-input";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import {
  PresentationPluginOptions,
  defineLocations,
  presentationTool,
} from "sanity/presentation";
import { structureTool } from "sanity/structure";
import { VyLogoProd } from "./components/VyLogoProd";
import { VyLogoTest } from "./components/VyLogoTest";
import { schemaTypes } from "./schemaTypes";
import { siteMenuStructure } from "./structure.js";

const projectId = "r4xpzxak";
export const API_VERSION = "2024-07-25";

const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    // Add more locations for other post types
    page: defineLocations({
      select: {
        title: "title",
        slug: "path.current",
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Untitled",
            href: `/${doc?.slug}`,
          },
          { title: "Home", href: `/` },
        ],
      }),
    }),
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
        resolve,
        previewUrl: {
          initial: "http://localhost:3008/",
          origin: "http://localhost:3008/",
          preview: "/",
          previewMode: {
            enable: "/api/preview-mode/enable",
            disable: "/api/preview-mode/disable",
          },
        },
        allowOrigins: ["http://localhost:3008/*", "https://design.vy.no/*"],
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

    plugins: [
      structureTool(siteMenuStructure),
      presentationTool({
        resolve,
        previewUrl: {
          initial: "https://stage.design.vy.no/",
          origin: "https://stage.design.vy.no/",
          preview: "/",
          previewMode: {
            enable: "/api/preview-mode/enable",
            disable: "/api/preview-mode/disable",
          },
        },
        allowOrigins: [
          "https://stage.design.vy.no/*",
          "https://stage.design.vy.no/*",
        ],
      }),
      visionTool(),
      codeInput(),
    ],

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
