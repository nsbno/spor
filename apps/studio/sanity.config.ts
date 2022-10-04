import { codeInput } from "@sanity/code-input";
import { visionTool } from "@sanity/vision";
import { createConfig } from "sanity";
import { deskTool } from "sanity/desk";
import VyLogo from "./components/VyLogo";
import { schemaTypes } from "./schemas";

export default createConfig({
  name: "default",
  title: "Spor",
  projectId: "tbpd14t4",
  dataset: "production",
  plugins: [deskTool(), visionTool(), codeInput()],
  logo: VyLogo,
  document: {
    productionUrl: async (prev, { document, getClient }) => {
      const client = getClient({ apiVersion: "2022-10-04" });
      const host = window.location.href.includes("localhost")
        ? "http://localhost:3000"
        : "https://spor.cloud.vy.no";

      if (document._type === "article") {
        const category = await client.fetch(
          `*[_id == $id] { "slug": slug.current }[0]`,
          { id: (document.category as any)._ref }
        );

        const params = new URLSearchParams();
        params.set("preview", import.meta.env.SANITY_STUDIO_PREVIEW_SECRET);

        return `${host}/${category.slug}/${
          (document.slug as any).current
        }?${params}`;
      }
      return prev;
    },
  },

  schema: {
    types: schemaTypes,
  },
});
