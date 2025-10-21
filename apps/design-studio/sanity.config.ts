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

/* const locations = {
  page: defineLocations({
    select: { title: "title", slug: "path.current" },
    resolve: (doc) => ({
      locations: [{ title: doc?.title, href: `/${doc?.slug}` }],
    }),
  }),
};

const pathresolver = (prev, context) => {
  const { document } = context;

  // Map document types to frontend routes
  if (document?._type === "page") {
    const slug = document.path?.current;
    if (slug) {
      return `/${slug}`;
    }
  }
  // Fallback for unmapped types
  return prev || "/";
}; */

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
        previewUrl: {
          initial: "http://localhost:3008",
          origin: "http://localhost:3008",
          preview: "/",
          previewMode: {
            enable: "/api/preview-mode/enable",
            disable: "/api/preview-mode/disable",
          },
        },
        allowOrigins: ["http://localhost:*"],
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
