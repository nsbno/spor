import { LoaderFunction } from "@remix-run/node";
import { getIconsZipFile } from "~/utils/icons.server";

export const loader: LoaderFunction = async () => {
  const zipFile = await getIconsZipFile();
  return new Response(zipFile, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Length": zipFile.length.toString(),
      "Content-Disposition": 'attachment; filename="spor-icons.zip"',
    },
  });
};
