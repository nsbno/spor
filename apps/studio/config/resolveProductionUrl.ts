import client from "part:@sanity/base/client";

const sanityClient = client.withConfig({ apiVersion: "2022-03-28" });

export const resolveProductionUrl = async (doc: any) => {
  const host = window.location.href.includes("localhost")
    ? "http://localhost:3000"
    : "https://spor.cloud.vy.no";

  const category = await sanityClient.fetch(
    `*[_id == $id] { "slug": slug.current }[0]`,
    { id: doc.category._ref }
  );

  return `${host}/${category.slug}/${doc.slug.current}?preview=${process.env.SANITY_STUDIO_PREVIEW_SECRET}`;
};
