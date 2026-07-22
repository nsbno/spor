import { PassThrough } from "node:stream";

import Archiver from "archiver";
import { LoaderFunctionArgs } from "react-router";

import { urlBuilder } from "~/utils/sanity/utils";
import { slugify } from "~/utils/stringUtils";

import { getIllustrationsQuery } from "../_base.$section.illustration-library/queries";

/**
 * Fetches a single illustration (both light and dark versions) from Sanity and returns them as a zip file.
 */
export const loader = async (arguments_: LoaderFunctionArgs) => {
  const illustrationId = arguments_.params.illustrationId;

  if (!illustrationId) {
    throw new Response("Illustration ID is required", { status: 400 });
  }

  console.info(`Fetching illustration ${illustrationId} from Sanity`);

  const { items: allIllustrations } = await getIllustrationsQuery(
    arguments_.request.url,
  );

  const illustration = allIllustrations.find(
    (item) => item._id === illustrationId,
  );

  if (!illustration) {
    throw new Response("Illustration not found", { status: 404 });
  }

  console.info(`Found illustration: ${illustration.title}`);

  const zip = Archiver("zip");
  const zipStream = new PassThrough();
  zip.pipe(zipStream);

  const lightRef =
    illustration.imageLightBackground?._ref ||
    illustration.imageLightBackground?.asset?._ref;
  const darkRef =
    illustration.imageDarkBackground?._ref ||
    illustration.imageDarkBackground?.asset?._ref;

  const baseFilename = slugify(illustration.title);

  if (lightRef && darkRef && lightRef === darkRef) {
    // Same image for light and dark, download only once
    const response = await fetch(
      urlBuilder.image(illustration.imageLightBackground).url(),
    );
    const svgContent = await response.text();
    zip.append(svgContent, { name: `${baseFilename}.svg` });
  } else {
    // Different images, download both
    const [lightResponse, darkResponse] = await Promise.all([
      fetch(urlBuilder.image(illustration.imageLightBackground).url()),
      fetch(urlBuilder.image(illustration.imageDarkBackground).url()),
    ]);

    const [lightSvg, darkSvg] = await Promise.all([
      lightResponse.text(),
      darkResponse.text(),
    ]);

    zip.append(lightSvg, { name: `${baseFilename}-light.svg` });
    zip.append(darkSvg, { name: `${baseFilename}-dark.svg` });
  }

  zip.finalize();

  const headers = new Headers();
  headers.set("Content-Type", "application/zip");
  headers.set(
    "Content-Disposition",
    `attachment; filename=${baseFilename}.zip`,
  );
  headers.set("Cache-Control", "max-age=3600");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return new Response(zipStream as any, {
    status: 200,
    headers,
  });
};
