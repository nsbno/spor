import { LoaderFunction } from "@remix-run/node";
import { getIcon } from "~/utils/icons.server";

export const loader: LoaderFunction = async ({ params }) => {
  const { category, fileName } = params;
  const iconFile = await getIcon({
    category,
    fileName,
  });
  if (!iconFile) {
    return new Response(null, {
      status: 404,
    });
  }
  return new Response(iconFile, {
    headers: {
      "Content-Type": "application/svg",
      "Content-Length": iconFile.length.toString(),
      "Content-Disposition": `attachment; filename="${category}-${fileName}.svg"`,
    },
  });
};
