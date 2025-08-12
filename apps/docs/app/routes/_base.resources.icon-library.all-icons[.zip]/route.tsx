import { LoaderFunction } from "react-router";

import { getIconsZipFile } from "~/utils/icons.server";

export const loader: LoaderFunction = async () => {
  const zipFile = await getIconsZipFile();
  return new Response(zipFile, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Length": zipFile.length.toString(),
      "Content-Disposition": 'attachment; filename="all-icons.zip"',
    },
  });
};
