import { SanityAsset } from "@sanity/image-url/lib/types/types";
import Archiver from "archiver";
import { PassThrough } from "stream";
import { getClient } from "~/utils/sanity/client";
import { urlBuilder } from "~/utils/sanity/utils";
import { slugify } from "~/utils/stringUtils";

type Illustration = {
  title: string;
  imageLightBackground: SanityAsset;
  imageDarkBackground: SanityAsset;
};

/**
 * Fetches all illustrations from Sanity and returns them as a zip file.
 */
export const loader = async () => {
  console.info("Fetching list of illustrations from Sanity");
  const allIllustrations = await getClient().fetch<Illustration[]>(
    `*[_type == "illustration"] { title, imageLightBackground, imageDarkBackground }`,
  );
  console.info(
    `Found ${allIllustrations.length} illustrations. Downloading them in parallel…`,
  );
  const zip = Archiver("zip");
  const stream = new PassThrough();

  zip.pipe(stream);

  const promises = allIllustrations
    .flatMap((illustration) => [
      {
        title: slugify(`${illustration.title} light`),
        url: urlBuilder.image(illustration.imageLightBackground).url(),
      },
      {
        title: slugify(`${illustration.title} dark`),
        url: urlBuilder.image(illustration.imageDarkBackground).url(),
      },
    ])
    .map(async (illustration) => {
      const response = await fetch(illustration.url);
      zip.append(await response.text(), { name: `${illustration.title}.svg` });
    });
  await Promise.all(promises);
  zip.finalize();

  const headers = new Headers();
  headers.set("Content-Type", "application/zip");
  headers.set("Content-Disposition", "attachment; filename=illustrations.zip");
  headers.set("Cache-Control", "max-age=60");
  return new Response(stream as any, {
    status: 200,
    headers,
  });
};
