import { codeInput } from "@sanity/code-input";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import VyLogo from "./components/VyLogo";
import { structure } from "./desk/structure";
import { schemaTypes } from "./schemas";

const projectId = "tbpd14t4";

const documentConfig = {
  productionUrl: async (
    prev: string | undefined,
    { document, getClient }: { document: any; getClient: any },
  ) => {
    try {
      const configuredClient = getClient({ apiVersion: "2022-10-06" });
      const host = window.location.href?.includes("localhost")
        ? "http://localhost:3000"
        : "https://spor.vy.no";

      if (document._type === "article") {
        if (!document.category) {
          return host;
        }
        const category = await configuredClient.fetch(
          `*[_id == $id] { "slug": slug.current }[0]`,
          { id: document.category?._ref },
        );

        if (!category) {
          return host;
        }

        const params = new URLSearchParams();
        params.set("preview", import.meta.env.SANITY_STUDIO_PREVIEW_SECRET);

        return `${host}/${category.slug}/${document?.slug.current}?${params}`;
      }
    } catch (e) {
      console.error(e);
    }
    return prev;
  },
};

export default defineConfig([
  {
    name: "default",
    title: "Spor 2",
    subtitle: "New version based on Chakra 3.0",
    projectId: projectId,
    dataset: "production-v2",
    basePath: "/production-v2",
    plugins: [structureTool({ structure }), visionTool(), codeInput()],
    studio: {
      components: {
        logo: VyLogo,
      },
    },
    document: documentConfig,
    schema: {
      types: schemaTypes,
    },
  },
  {
    name: "sporV1",
    title: "Spor 1",
    subtitle: "First version based on Chakra 2.0",
    projectId: projectId,
    dataset: "production",
    basePath: "/production",
    plugins: [structureTool({ structure }), visionTool(), codeInput()],
    studio: {
      components: {
        logo: VyLogo,
      },
    },
    document: documentConfig,

    schema: {
      types: schemaTypes,
    },
  },
]);
