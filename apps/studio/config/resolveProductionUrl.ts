export const resolveProductionUrl = (doc: any) => {
  const host = window.location.href.includes("localhost")
    ? "http://localhost:3000"
    : "https://spor.cloud.vy.no";

  return `${host}/${doc.category.slug?.current}/${doc.slug.current}?preview=${process.env.SANITY_PREVIEW_SECRET}`;
};
